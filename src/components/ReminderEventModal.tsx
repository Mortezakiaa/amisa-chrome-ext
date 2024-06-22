import { useEffect, useState } from "react";
import { EventReminder } from "../utils/EventTimeReminder";
import { useSelector } from "react-redux";
import { EventSelector } from "../statemanagment/slices/Event";
import { getCurrentTime } from "../utils/utils";
import { globalStateSelector } from "../statemanagment/slices/globalState";

export default function ReminderEventModal() {
  const [event, setEvent] = useState({
    isOpen: false,
    title: "",
  });
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
        setEvent({ isOpen: true, title: i.eventTitle });
      }, remindTime);
    });

    return () => {
      timeout.forEach((i) => clearTimeout(i));
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black z-[1000] bg-opacity-50 transition-opacity duration-300 ${
          event.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed hidden top-1/3 right-1/3 bg-white z-[1000] shadow transition-transform duration-300 ${
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
            <button>باشه فهمیدم</button>
            <button>بعدا بگو</button>
          </div>
        </div>
      </div>
    </>
  );
}
