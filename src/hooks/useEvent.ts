import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  EventSelector,
  modalHandler,
  setOnEditMode,
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
      dispatch(setOnEditMode({ mode: false, item: {} }));
    }else{
      
    }
  };

  return { item, eventHandler };
}
