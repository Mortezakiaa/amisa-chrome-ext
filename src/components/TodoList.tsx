import TodoCard from "./TodoCard";
import useTodo from "../hooks/useTodo";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Tooltip from "../utils/Tooltip";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";

export default function TodoList() {
  const {
    handleAddTask,
    setTodo,
    todo,
    DeleteTodo,
    todos,
    handleEdit,
    setToEdit,
    handleStatus,
  } = useTodo();
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div className="flex flex-col gap-2 p-2">
        {todos?.map((i) => (
          <TodoCard
            changeStatus={handleStatus}
            todo={i}
            setToEdit={setToEdit}
            DeleteTodo={DeleteTodo}
            text={i.todo}
            id={i.id}
            editTodo={handleEdit}
          />
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
            <div className="w-full md:w-full flex gap-1 items-start">
              <button
                onClick={handleAddTask}
                className="bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold p-1 border border-gray-400 rounded shadow"
              >
                اضافه کردن
              </button>
              <DatePicker
                plugins={[weekends()]}
                value={todo.date}
                onChange={(e) => {
                  setTodo({ ...todo, date: e!.format() });
                }}
                mapDays={({ date }) => {
                  const tooltip = new Tooltip(date);
                  return tooltip.props;
                }}
                render={
                  <button className="bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold p-1 border border-gray-400 rounded shadow">
                    {todo.date != "" ? todo.date : "اضافه کردن تاریخ"}
                  </button>
                }
                weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
