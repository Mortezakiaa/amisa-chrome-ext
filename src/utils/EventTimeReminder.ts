import { DateObject } from "react-multi-date-picker";
import { TEvent, TEventReminder } from "../Types/Types";
import { getCurrentTime } from "./utils";
import { importCalendar, importCalendarLocale } from "./Calendar";

export class EventReminder implements TEventReminder {
  #today: string;
  #EventList: TEvent[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(Format: { calendar: any; locale: any }, items: TEvent[]) {
    const c = importCalendar(Format.calendar.name);
    const l = importCalendarLocale(Format.locale.name);
    this.#today = new DateObject({ locale: l, calendar: c }).format();
    this.#EventList = items;
  }

  isEventTime = (time: string): boolean => {
    const Now = getCurrentTime();
    return Now === time ? true : false;
  };

  todayEvents = (): TEvent[] => {
    return this.#EventList?.filter((i) => i.date === this.#today);
  };

  timeDiffrenceInMillis = (
    time1: string,
    time2: string,
    reminderDelay: string
  ) => {
    const [hours1, minutes1] = time1.split(":").map(Number);
    const [hours2, minutes2] = time2.split(":").map(Number);
    const date1 = new Date(0, 0, 0, hours1, minutes1);
    const date2 = new Date(0, 0, 0, hours2, minutes2);
    const differenceInMillis = date2.getTime() - date1.getTime();
    return differenceInMillis - Number(reminderDelay);
  };

  EventTimeRepeter = () => {};
}
