import { useState } from "react";
import { TEvent } from "../Types/Types";
import { GuidGenerator } from "../utils/GuidGenerator";
import { useDispatch } from "react-redux";
import { addEvent } from "../statemanagment/slices/Event";

export default function useAddEvent() {
  const dispatch = useDispatch();
  const initialState: TEvent = {
    id: GuidGenerator(),
    date: "",
    time: "",
    eventTitle: "",
    reminderTime: "",
  };
  const [event, setEvent] = useState<TEvent>(initialState);
  const [showModal, setShowModal] = useState(true);

  const eventHandler = () => {
    dispatch(addEvent(event));
    setEvent(initialState);
  };

  return { event, setEvent, eventHandler, showModal, setShowModal };
}