import CalenderFormatDropDown from "./CalenderFormatDropDown";
import DateTimePicker from "./DateTimePicker";
import TodoList from "./TodoList";

export default function Main() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="h-screen bg-white rounded-lg">
        <TodoList/>
      </div>
      <div className="bg-[#aaa] h-screen"></div>
      <div className="flex flex-col bg-slate-400 h-screen">
        <CalenderFormatDropDown />
        <DateTimePicker />
      </div>
    </div>
  );
}
