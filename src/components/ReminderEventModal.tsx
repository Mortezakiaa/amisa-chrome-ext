/* eslint-disable react-hooks/exhaustive-deps */
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { EventReminder } from "../utils/EventReminder";
import { useDispatch, useSelector } from "react-redux";
import {
  EventSelector,
  remindEventLater,
  removeEvent,
} from "../statemanagment/slices/Event";
import { getCurrentTime } from "../utils/utils";
import { globalStateSelector } from "../statemanagment/slices/globalState";
import Button from "./Button";

export default function ReminderEventModal() {
  const [event, setEvent] = useState({
    isOpen: false,
    title: "",
    id: "",
  });
  const dispatch = useDispatch();
  const { items } = useSelector(EventSelector);
  const { DatePicker } = useSelector(globalStateSelector);
  const evt = new EventReminder(DatePicker, items);

  useEffect(() => {
    const now = getCurrentTime();
    const timeout = evt.todayEvents()?.map((i) => {
      const remindTime = +Math.abs(
        evt.timeDiffrenceInMillis(i.time, now, i.reminderTime)
      );
      return setTimeout(() => {
        setEvent({ isOpen: true, title: i.eventTitle, id: i.id });
      }, remindTime);
    });

    return () => {
      timeout.forEach((i) => clearTimeout(i));
    };
  }, [items]);

  return ReactDOM.createPortal(
    <>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black z-[1000] bg-opacity-50 transition-opacity duration-300 ${
          event.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed hidden top-[35%] right-[45%] bg-white z-[1000] shadow transition-transform duration-300 ${
          event.isOpen
            ? "transform !block translate-y-1/4"
            : "transform -translate-y-full"
        }`}
      >
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              یادآوری رویداد
            </h3>
          </div>
          <div className="p-4 flex flex-col w-full gap-2 ">{event.title}</div>
          <div className="flex gap-2 items-center p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Button
              mode="default"
              txt="باشه فهمیدم"
              onclick={() => {
                dispatch(removeEvent(event.id));
                setEvent({ ...event, isOpen: false });
              }}
            />
            <Button
              mode="other"
              txt="بعدا بگو"
              onclick={() => {
                dispatch(remindEventLater(event.id));
                setEvent({ ...event, isOpen: false });
              }}
            />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
}
