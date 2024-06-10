import CalenderFormatDropDown from "./CalenderFormatDropDown";
import DateTimePicker from "./DateTimePicker";

export default function Main() {
  return (
    <div className="flex">
      <div className="flex-grow bg-[#000] h-screen"></div>
      <div className="flex-grow bg-[#aaa] h-screen"></div>
      <div className="flex-grow flex flex-col bg-slate-400 h-screen">
        <CalenderFormatDropDown />
        <DateTimePicker />
      </div>
    </div>
  );
}
