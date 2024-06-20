import Close from "../icons/Close";
import useEvent from "../hooks/useEvent";
import { useDispatch, useSelector } from "react-redux";
import {
  EventSelector,
  modalHandler,
  setEditMode,
  setEventReminderTime,
  setEventTitle,
} from "../statemanagment/slices/Event";
import Input from "./Input";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";

export default function AddEventModal() {
  const { item, eventHandler, deleteHandler } = useEvent();
  const dispatch = useDispatch();
  const { isOpenModal, editOrDeleteMode } = useSelector(EventSelector);
  return (
    <>
      <div
        className={`${
          isOpenModal ? "block" : "hidden"
        } overflow-y-auto overflow-x-hidden h-screen fixed flex top-0 right-0 left-0 justify-center items-center w-full md:inset-0 max-h-full bg-[rgba(0,0,0,0.4)]`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full z-51 ">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {editOrDeleteMode ? "ویرایش رویداد" : "اضافه کردن رویداد"}
                </h3>
                <button
                  onClick={() => {
                    dispatch(modalHandler(false));
                    dispatch(setEditMode(false));
                  }}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <Close />
                </button>
              </div>
              <div className="p-4 flex  w-full gap-2 justify-between ">
                <Input
                  value={item.eventTitle}
                  placeholder="نوشتن رویداد"
                  onchange={(e) => {
                    dispatch(setEventTitle(e.target.value));
                  }}
                />
                <form className="ml-4">
                  <label className="block  text-xs font-medium text-gray-900 dark:text-white">
                    یادآوری رویداد
                  </label>
                  <select
                    value={item.reminderTime}
                    onChange={(e) => {
                      dispatch(setEventReminderTime(e.target.value));
                    }}
                    className="p-1  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="0">در همان لحظه</option>
                    <option value="600000">10 دقیقه قبل</option>
                    <option value="1800000">30 دقیقه قبل</option>
                    <option value="3600000">1 ساعت قبل</option>
                    <option value="7200000">2 ساعت قبل</option>
                    <option value="86400000">1 روز قبل</option>
                    <option value="604800000">1 هفته قبل</option>
                    <option value="default">مقدار دلخواه</option>
                  </select>
                </form>
              </div>
              <div className="flex gap-2 items-center p-2 border-t border-gray-200 rounded-b dark:border-gray-600 ">
                <AddButton
                  onclick={eventHandler}
                  txt={editOrDeleteMode ? "ویرایش" : "اضافه کردن"}
                />
                {editOrDeleteMode ? (
                  <DeleteButton onclick={() => deleteHandler(item.id)} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
