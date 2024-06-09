import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";

export default function DateTimePicker() {
  return (
    <>
      <Calendar
        mapDays={({ date }) => {
          const props = {};
          const isWeekend = date.weekDay.index === 6;
          if (isWeekend) props.className = "highlight highlight-red";
          return props;
        }}
        className="green"
        weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
        disableMonthPicker
        disableYearPicker
        calendar={persian}
        locale={persian_fa}
      />
    </>
  );
}
