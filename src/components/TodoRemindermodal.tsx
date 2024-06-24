import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import useTodo from "../hooks/useTodo";
import { removeTodo } from "../statemanagment/slices/TodoSlice";
import Button from "./Button";

export default function TodoRemindermodal() {
  const { todoReminder, setTodoReminder } = useTodo();
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black z-[1000] bg-opacity-50 transition-opacity duration-300 ${
          todoReminder.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed hidden top-[35%] right-[45%] bg-white z-[1000] shadow transition-transform duration-300 ${
          todoReminder.isOpen
            ? "transform !block translate-y-1/4"
            : "transform -translate-y-full"
        }`}
      >
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              یادآوری تسک
            </h3>
          </div>
          <div className="p-4 flex flex-col w-full gap-2 ">
            {todoReminder.title}
          </div>
          <div className="flex gap-2 items-center p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Button
              mode="default"
              txt="باشه فهمیدم"
              onclick={() => {
                dispatch(removeTodo(todoReminder.id));
                setTodoReminder({ ...todoReminder, isOpen: false });
              }}
            />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
}
