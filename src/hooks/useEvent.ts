import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  EventSelector,
  modalHandler,
  removeEvent,
  resetItem,
  setEditMode,
  updateEvent,
} from "../statemanagment/slices/Event";
import toast from "react-hot-toast";

export default function useEvent() {
  const dispatch = useDispatch();
  const { item, editOrDeleteMode } = useSelector(EventSelector);

  const eventHandler = () => {
    if (!item.eventTitle) return toast.error("رویداد نمی تواند خالی باشد");
    if (!editOrDeleteMode) {
      dispatch(addEvent(item));
      dispatch(modalHandler(false));
      dispatch(setEditMode(false));
      dispatch(resetItem());
    } else {
      dispatch(updateEvent());
      dispatch(resetItem());
      dispatch(modalHandler(false));
      dispatch(setEditMode(false));
    }
  };

  const deleteHandler = (id: string) => {
    dispatch(removeEvent(id));
    dispatch(modalHandler(false));
    dispatch(setEditMode(false));
    dispatch(resetItem());
  };

  return { item, eventHandler, deleteHandler };
}
