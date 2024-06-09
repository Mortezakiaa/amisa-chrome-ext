import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import ClosedDay from "../mockData/ClosedDaysOfYear.json";
import { ClosedDayOfYear } from "../Types/Types";

export default function DateTimePicker() {
  return (
    <Calendar
      mapDays={({ date }) => {
        console.log(date);
        
        const props = { className: "" };
        const isWeekend = date.weekDay.index === 6;
        ClosedDay?.forEach((i: ClosedDayOfYear) => {
          if (i.month == date.month.number) {
            if (i.day == date.day || isWeekend) {
              props.className = "rounded-full bg-red-600 text-white";
            }
          }
        });
        return props;
      }}
      weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
      disableMonthPicker
      disableYearPicker
      calendar={persian}
      locale={persian_fa}
    />
  );
}
