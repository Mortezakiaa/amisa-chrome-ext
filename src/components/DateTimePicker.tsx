import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import arabic from "react-date-object/calendars/arabic";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import arabic_ar from "react-date-object/locales/arabic_ar";
import { Calendar, DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import ClosedDay from "../mockData/ClosedDaysOfYear.json";
import { ClosedDayOfYear } from "../Types/Types";
import { TDatePickerHandler } from "../Types/Types";

export default function DateTimePicker() {
  const hover = (e: React.MouseEvent<HTMLDivElement>) => {
    const ev = e.target as HTMLElement;
    const txt = ev.getAttribute("dataClosed") as string;
    const arDate = ev.getAttribute("ardate") as string;
    const enDate = ev.getAttribute("endate") as string;
    const coord = ev.getBoundingClientRect();
    const container = document.createElement('div')
    const container1 = document.createElement('div')
    const span = document.createElement("span");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    container.appendChild(span)
    container.appendChild(container1)
    container1.appendChild(span1)
    container1.appendChild(span2)
    span1.innerText = arDate
    span2.innerText = enDate
    container1.className = 'flex justify-between p-1 rounded-b-lg items-center gap-2 bg-[#cbd5e1] text-[#334155]'
    container.className =
      "fixed flex flex-col gap-1 p-1 bg-[#cbd5e1] text-[#334155] text-sm rounded-lg shadow-sm tooltip max-w-[160px] text-center";
    span.innerText = txt;
    document.body.appendChild(container);
    container.style.top = coord.top - container.offsetHeight - 10 + "px";
    container.style.left = coord.left - container.offsetWidth / 2 + 15 + "px";
    container.id = "dateTooltip";
  };
  const leave = () => {
    document.getElementById("dateTooltip")?.remove();
  };
  const addEvent = () => {};

  return (
    <>
      <Calendar
        mapDays={({ date }) => {
          const props: TDatePickerHandler = {
            arDate: "",
            enDate: "",
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
                const arDate = new DateObject({
                  calendar: arabic,
                  locale: arabic_ar,
                  date:date
                });
                const enDate = new DateObject({
                  calendar: gregorian,
                  locale: gregorian_en,
                  date:date
                });
                props.className = "highlight highlight-red Closed";
                props.dataClosed = i.name;
                props.arDate = arDate.format();
                props.enDate = enDate.format();
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
    </>
  );
}
