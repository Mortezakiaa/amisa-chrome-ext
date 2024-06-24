import { Toaster } from "react-hot-toast";
import EventModal from "./EventModal";
import ReminderEventModal from "./ReminderEventModal";
import TodoRemindermodal from "./TodoRemindermodal";

export default function ModalProviders() {
  return (
    <>
      <EventModal />
      <Toaster />
      <ReminderEventModal />
      <TodoRemindermodal />
    </>
  );
}
