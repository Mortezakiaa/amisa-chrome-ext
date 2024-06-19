import { CalendarProps, DateObject } from "react-multi-date-picker";
import type { Locale } from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { TEvent } from "../Types/Types";
import { getCurrentTime } from "./utils";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

type selectedFormat = {
  locale: Omit<CalendarProps, "leapsLength">;
  calendar: Locale;
};

type TEventDateReminder = {
  date: string;
  locale: CalendarProps;
  calendar: CalendarProps;
  format: string;
};

export class EventReminder {
  #today: string;
  #DatePickerFormat: selectedFormat;
  #EventList: TEvent[];

  constructor(DatePickerFormat: selectedFormat, items: TEvent[]) {
    this.#DatePickerFormat = DatePickerFormat;
    this.#today = new DateObject({
      locale: persian_fa,
      calendar: persian,
    }).format();
    this.#EventList = items;
  }

  isEventTime = (time: string): boolean => {
    const Now = getCurrentTime();
    return Now === time ? true : false;
  };

  todayEvents = (): TEvent[] => {
    return this.#EventList?.filter((i) => i.date === this.#today);
  };

  timeDiffrenceInMillis = (time1: string, time2: string) => {
    const [hours1, minutes1] = time1.split(":").map(Number);
    const [hours2, minutes2] = time2.split(":").map(Number);
    const date1 = new Date(0, 0, 0, hours1, minutes1);
    const date2 = new Date(0, 0, 0, hours2, minutes2);
    const differenceInMillis = date2.getTime() - date1.getTime();
    return differenceInMillis;
  };

  EventTimeRepeter = () => {};
}
