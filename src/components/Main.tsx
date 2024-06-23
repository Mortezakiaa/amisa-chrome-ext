import DateTimePicker from "./DateTimePicker";
import AutoCompleteSearch from "./AutoCompleteSearch";
import TodoList from "./TodoList";

export default function Main() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="h-screen bg-white rounded-lg col-span-12 xl:col-span-3 md:col-span-6">
        <TodoList />
      </div>
      <div className="h-screen xl:col-span-5 col-span-12 md:col-span-6">
        <AutoCompleteSearch />
      </div>
      <div className="flex flex-col h-screen xl:col-span-4 col-span-12 md:col-span-6">
        <DateTimePicker />
      </div>
    </div>
  );
}
