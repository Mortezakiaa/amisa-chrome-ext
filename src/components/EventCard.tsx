import { useDispatch } from "react-redux";
import { TEvent } from "../Types/Types";
import {
  modalHandler,
  setEditMode,
  setEdit,
} from "../statemanagment/slices/Event";

export default function EventCard({
  eventTitle,
  id,
}: Pick<TEvent, "id" | "eventTitle">) {
  const dispatch = useDispatch();
  const showEvent = (id: string) => {
    dispatch(setEdit(id));
    dispatch(setEditMode(true));
    dispatch(modalHandler(true));
  };
  return (
    <div className="flex items-center gap-2 w-full p-1 text-xs text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800">
      <button
        onClick={() => {
          showEvent(id);
        }}
        className="self-start"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      </button>
      <span className="truncate">{eventTitle}</span>
    </div>
  );
}
