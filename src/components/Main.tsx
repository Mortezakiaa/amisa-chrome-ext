import DateTimePicker from "./DateTimePicker";
import AutoCompleteSearch from "./AutoCompleteSearch";
import TodoList from "./TodoList";
import C from "./C";

export default function Main() {
  return (
    <div className="grid h-screen grid-cols-12 gap-4 mt-2">
      <div className="h-screen bg-white rounded-lg col-span-12 xl:col-span-3 md:col-span-6">
        <TodoList />
      </div>
      <div className="h-screen xl:col-span-5 col-span-12 md:col-span-6">
        <AutoCompleteSearch />
      </div>
      <div className="flex flex-col gap-3 h-screen xl:col-span-4 col-span-12 md:col-span-6">
        <C />
        <DateTimePicker />
      </div>
    </div>
  );
}
