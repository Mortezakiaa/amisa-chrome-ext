import DateTimePicker from "./DateTimePicker";
import TodoList from "./TodoList";

export default function Main() {
  return (
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-4">
      <div className="h-screen bg-white rounded-lg col-span-1">
        <TodoList/>
      </div>
      <div className="h-screen col-span-1"></div>
      <div className="flex flex-col h-screen col-span-1">
        <DateTimePicker />
      </div>
    </div>
  );
}
