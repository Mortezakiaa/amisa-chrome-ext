import { EventReminder } from "./EventReminder";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import { TEvent } from "../Types/Types";

describe("", () => {
  test("init event reminder", () => {
    const TCalendar = { calendar: persian, locale: persian_fa };
    const items: TEvent[] = [
      {
        date: "",
        eventTitle: "example",
        id: "1",
        reminderTime: "0",
        time: "12:00",
      },
    ];
    const evt = new EventReminder(TCalendar, items);

    expect(evt).toBeDefined();
    expect(evt.isEventTime(items[0].time)).toBeFalsy();
    expect(evt.timeDiffrenceInMillis("11:59", items[0].time, "0")).toBe(60000);
    expect(evt.todayEvents().length).toBe(0);
  });
  test("set persian_en locale", () => {
    const TCalendar = { calendar: persian, locale: persian_en };
    const items: TEvent[] = [
      {
        date: "1403/04/07",
        eventTitle: "simple",
        id: "1",
        reminderTime: "0",
        time: "12:00",
      },
    ];
    const evt = new EventReminder(TCalendar, items);

    expect(evt).toBeDefined();
    expect(evt.isEventTime(items[0].time)).toBeFalsy();
    expect(evt.timeDiffrenceInMillis("11:59", items[0].time, "0")).toBe(60000);
    expect(evt.todayEvents().length).toBe(1);
  });
});
