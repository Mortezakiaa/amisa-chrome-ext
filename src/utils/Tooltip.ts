import { DateObject } from "react-multi-date-picker";
import { ClosedDayOfYear, TDatePickerHandler, TTooltip } from "../Types/Types";
import gregorian from "react-date-object/calendars/gregorian";
import arabic from "react-date-object/calendars/arabic";
import gregorian_en from "react-date-object/locales/gregorian_en";
import arabic_ar from "react-date-object/locales/arabic_ar";
import ClosedDay from "../mockData/ClosedDaysOfYear.json";

export default class Tooltip implements TTooltip {
  #props: TDatePickerHandler = {} as TDatePickerHandler;
  get props() {
    return this.#props;
  }
  #date: DateObject = {} as DateObject;

  constructor(date: DateObject) {
    const clrName = date.calendar.name;
    switch (clrName) {
      case "persian": {
        this.#date = date;
        this.setClosedDays(ClosedDay);
        break;
      }
      case "arabic": {
        this.#date = date;
        break;
      }
      case "gregorian": {
        this.#date = date;
        break;
      }
    }
  }

  private createTooltipAndShow = (e: React.MouseEvent<HTMLDivElement>) => {
    const ev = e.target as HTMLElement;
    const txt = ev.getAttribute("dataClosed") as string;
    const arDate = ev.getAttribute("ardate") as string;
    const enDate = ev.getAttribute("endate") as string;
    const coord = ev.getBoundingClientRect();
    const container = document.createElement("div");
    const container1 = document.createElement("div");
    const span = document.createElement("span");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    container.appendChild(span);
    container.appendChild(container1);
    container1.appendChild(span1);
    container1.appendChild(span2);
    span1.innerText = arDate;
    span2.innerText = enDate;
    container1.className =
      "flex justify-between p-1 rounded-b-lg items-center gap-2 bg-[#cbd5e1] text-[#334155]";
    container.className =
      "fixed flex z-[100000] flex-col gap-1 p-1 bg-[#cbd5e1] text-[#334155] text-sm rounded-lg shadow-sm tooltip max-w-[160px] text-center";
    span.innerText = txt;
    document.body.appendChild(container);
    container.style.top = coord.top - container.offsetHeight - 10 + "px";
    container.style.left = coord.left - container.offsetWidth / 2 + 15 + "px";
    container.role = "dateTooltip";
  };

  protected removeTooltip = () => {
    document.querySelectorAll("[role=dateTooltip]")?.forEach((i) => i.remove());
  };

  private setClosedDays = (
    list: { name: string; day: number; month: number }[]
  ) => {
    list?.forEach((i: ClosedDayOfYear) => {
      if (i.month == this.#date.month.number) {
        if (i.day == this.#date.day) {
          const arDate = new DateObject({
            calendar: arabic,
            locale: arabic_ar,
            date: this.#date,
          });
          const enDate = new DateObject({
            calendar: gregorian,
            locale: gregorian_en,
            date: this.#date,
          });
          this.#props.className = "highlight highlight-red Closed";
          this.#props.dataClosed = i.name;
          this.#props.arDate = arDate.format().split(" ")[0];
          this.#props.enDate = enDate.format().split(" ")[0];
          this.#props.onMouseEnter = this.createTooltipAndShow;
          this.#props.onMouseLeave = this.removeTooltip;
          this.#props.onClick = this.addEvent;
        }
      }
    });
  };

  private addEvent = () => {
    this.removeTooltip();
  };
}

export class MainPageTooltip extends Tooltip {
  #obj: { date: DateObject; addEvent: (date: DateObject) => void };
  constructor(obj: { date: DateObject; addEvent: (date: DateObject) => void }) {
    super(obj.date);
    this.#obj = obj;
    this.props.onClick = this.#addEvent;
  }

  #addEvent = () => {
    this.removeTooltip();
    this.#obj.addEvent(this.#obj.date);
  };
}
