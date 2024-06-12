import CalenderFormatDropDown from "./CalenderFormatDropDown";
import DateTimePicker from "./DateTimePicker";
import TodoList from "./TodoList";

export default function Main() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="h-screen bg-white rounded-lg col-span-1">
        <TodoList/>
      </div>
      <div className="h-screen col-span-2"></div>
      <div className="flex flex-col h-screen col-span-1">
        <CalenderFormatDropDown />
        <DateTimePicker />
      </div>
    </div>
  );
}
