import { useEffect, useState } from "react";
import { TEvent } from "../Types/Types";
import { GuidGenerator } from "../utils/GuidGenerator";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  EventSelector,
  modalHandler,
} from "../statemanagment/slices/Event";
import toast from "react-hot-toast";

export default function useEvent() {
  const dispatch = useDispatch();
  const initialState: TEvent = {
    id: GuidGenerator(),
    date: "",
    time: "",
    eventTitle: "",
    reminderTime: "atmoment",
  };
  const [event, setEvent] = useState<TEvent>(initialState);
  const {
    item: { date, time },
  } = useSelector(EventSelector);
  useEffect(() => {
    setEvent({ ...event, date, time });
  }, []);

  const eventHandler = () => {
    if (!event.eventTitle) return toast.error("رویداد نمی تواند خالی باشد");
    dispatch(addEvent(event));
    setEvent(initialState);
    dispatch(modalHandler(false));
  };

  return { event, setEvent, eventHandler };
}
