import TodoCard from "./TodoCard";
import useTodo from "../hooks/useTodo";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Tooltip from "../utils/Tooltip";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import Input from "../components/Input";
import Button from "./Button";

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
    <div className="flex flex-col justify-between h-screen w-full">
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
      <div className="flex items-center w-full justify-center shadow-lg border border-t p-2">
        <div className="flex flex-wrap">
          <h2 className=" text-gray-800 text-lg">اضافه کردن تسک جدید</h2>
          <div className="w-full md:w-full m-1">
            <Input
              value={todo.todo}
              onkeydown={(e) => {
                if (e.key === "Enter") {
                  handleAddTask();
                }
              }}
              onchange={(e) => {
                setTodo({ ...todo, todo: e.target.value });
              }}
              placeholder="نوشتن تسک جدید"
            />
          </div>
          <div className="w-full md:w-full flex gap-1 items-start">
            <Button mode="default" txt="اضافه کردن" onclick={handleAddTask} />
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
                (v, openCalendar) => (
                  <Button
                    mode="default"
                    onclick={openCalendar}
                    txt={todo.date != "" ? todo.date : "اضافه کردن تاریخ"}
                  />
                )
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
  );
}
