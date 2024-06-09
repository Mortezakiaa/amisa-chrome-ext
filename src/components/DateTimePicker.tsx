import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import ClosedDay from "../mockData/ClosedDaysOfYear.json";
import { ClosedDayOfYear } from "../Types/Types";
import { TDatePickerHandler } from "../Types/Types";

export default function DateTimePicker() {
  const hover = (e: React.MouseEvent<HTMLDivElement>) => {
    const ev = e.target as HTMLElement;
    const txt = ev.getAttribute("dataClosed") as string;
    const coord = ev.getBoundingClientRect();
    const el = document.createElement("span");
    el.className =
      "fixed px-3 py-2 transition-opacity duration-300 bg-gray-200 rounded-lg shadow-sm";
    el.style.top = coord.top - 50 + "px";
    el.style.left = coord.left - 50 + "px";
    el.innerHTML = txt;
    el.id = "dateTooltip";
    document.body.appendChild(el);
  };
  const leave = () => {
    document.getElementById("dateTooltip")?.remove();
  };
  const addEvent = () => {};

  return (
    <Calendar
      mapDays={({ date }) => {
        const props: TDatePickerHandler = {
          className: "",
          dataClosed: "",
          onClick: () => {},
          onMouseEnter: () => {},
          onMouseLeave: () => {},
        };
        const isWeekend = date.weekDay.index === 6;
        ClosedDay?.forEach((i: ClosedDayOfYear) => {
          if (i.month == date.month.number) {
            if (i.day == date.day) {
              props.className = "highlight highlight-red Closed";
              props.dataClosed = i.name;
              props.onMouseEnter = hover;
              props.onMouseLeave = leave;
              props.onClick = addEvent;
            }
          }
        });
        if (isWeekend) {
          props.className = "highlight highlight-red";
        }
        return props;
      }}
      weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
      calendar={persian}
      locale={persian_fa}
    />
  );
}
