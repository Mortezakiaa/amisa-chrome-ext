import { useState } from "react";
import TodoCard from "./TodoCard";
import { GuidGenerator } from "../utils/GuidGenerator";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, TodoSelector } from "../statemanagment/slices/TodoSlice";
import { TodoLists } from "../Types/Types";

export default function TodoList() {
  const { todos } = useSelector(TodoSelector);
  const [todo, setTodo] = useState<TodoLists>({
    id: GuidGenerator(),
    status: "Todo",
    todo: "",
    date: "",
    deleteMode:false,
    editMode:false
  });
  const dispatch = useDispatch();
  const handleAddTask = () => {
    dispatch(addTodo(todo));
    setTodo({ ...todo, date: "", todo: "", id: GuidGenerator() });
  };
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col gap-2 p-2">
        {todos?.map((i) =>(
            <TodoCard text={i.todo} id={i.id} />
        ))}
      </div>
      <div>
        <div className="flex items-center justify-center shadow-lg max-w-lg border border-t p-2">
          <div className="flex flex-wrap">
            <h2 className=" text-gray-800 text-lg">اضافه کردن تسک جدید</h2>
            <div className="w-full md:w-full m-1">
              <input
                name="todo"
                value={todo.todo}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTask();
                  }
                }}
                onChange={(e) => {
                  setTodo({ ...todo, todo: e.target.value });
                }}
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                placeholder="نوشتن تسک جدید"
              />
            </div>
            <div className="w-full md:w-full flex items-start">
              <button
                onClick={handleAddTask}
                className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-semibold p-1 border border-gray-400 rounded shadow"
              >
                اضافه کردن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
