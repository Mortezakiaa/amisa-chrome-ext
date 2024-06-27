import { Calendar } from "react-multi-date-picker";
import { importCalendar, importCalendarLocale } from "./Calendar";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Locale } from "react-date-object";

const mockLocale: Locale = {} as Locale;

describe("", () => {
  test("init calendar", () => {
    const calendar = importCalendar("persian");
    expect(calendar).not.toBeUndefined();
    expect(calendar).not.toBeNull();
    expect(typeof calendar).toBe(typeof Calendar);
  });

  test("default calendar", () => {
    const calendar = importCalendar("");
    expect(calendar.name).toBe("persian");
  });

  test("persian calendar", () => {
    const calendar = importCalendar("persian");
    expect(calendar.name).toBe("persian");
  });

  test("init locale", () => {
    const locale = importCalendarLocale("");
    expect(locale).toBe(persian_fa);
    expect(typeof locale).toEqual(typeof mockLocale);
  });

  test("gregorian locale", () => {
    const locale = importCalendarLocale("gregorian_en");
    expect(locale).not.toBeUndefined();
    expect(locale.name).toBe("gregorian_en");
  });
});
