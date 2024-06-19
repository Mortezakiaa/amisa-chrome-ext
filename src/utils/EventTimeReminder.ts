import { CalendarProps, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

type selectedFormat = Pick<CalendarProps, "calendar" | "locale">;

export class EventReminder {
  #NowDate: DateObject;
  #DatePickerFormat: selectedFormat;

  constructor(DatePickerFormat: selectedFormat) {
    this.#NowDate = new DateObject({} as selectedFormat);
    this.#DatePickerFormat = DatePickerFormat;
  }

  EventTimeReminder = (time: string) => {
    const Now = new DateObject({
      calendar: persian,
      locale: persian_fa,
      format: "HH:mm:ss",
    }).format();
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
