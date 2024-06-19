import { CalendarProps, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { TEvent } from "../Types/Types";
import { getCurrentTime } from "./utils";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

type selectedFormat = Pick<CalendarProps, "calendar" | "locale">;

export class EventReminder {
  #NowDate: DateObject;
  #DatePickerFormat: selectedFormat;
  #EventList: TEvent[];

  constructor(DatePickerFormat: selectedFormat, items: TEvent[]) {
    this.#NowDate = new DateObject();
    this.#DatePickerFormat = DatePickerFormat;
    this.#EventList = items;
  }

  EventTimeReminder = (time: string) => {
    const Now = getCurrentTime();
    if (Now === time) {
      // remind time
    }
  };

  EventDateReminder = (date: string) => {
    const Now = new DateObject({
      calendar: persian,
      locale: persian_fa,
      format: "YYYY/MM/DD",
    }).format();
    if (Now === date) {
      // remind date
    }
  };

  EventTimeRepeter = () => {};
}

export function EventTimeReminder(time: string) {
  const Now = new DateObject({
    calendar: persian,
    locale: persian_fa,
    format: "HH:mm:ss",
  }).format();
  if (Now === time) {
    // remind time
  }
}

export function EventDateReminder(date: string) {
  const Now = new DateObject({
    calendar: persian,
    locale: persian_fa,
    format: "YYYY/MM/DD",
  }).format();
  if (Now === date) {
    // remind date
  }
}

export function EventTimeRepeter() {}
