import persian from "react-date-object/calendars/persian";
import arabic from "react-date-object/calendars/arabic";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_ar from "react-date-object/locales/persian_ar";
import persian_en from "react-date-object/locales/persian_en";
import arabic_ar from "react-date-object/locales/arabic_ar";
import arabic_en from "react-date-object/locales/arabic_en";
import arabic_fa from "react-date-object/locales/arabic_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import gregorian_ar from "react-date-object/locales/gregorian_ar";
import type { Locale } from "react-date-object";

export const importCalendarLocale = (Case: string): Locale => {
  switch (Case) {
    case "persian_fa":
      return persian_fa;
    case "persian_ar":
      return persian_ar;
    case "persian_en":
      return persian_en;
    case "arabic_ar":
      return arabic_ar;
    case "arabic_fa":
      return arabic_fa;
    case "arabic_en":
      return arabic_en;
    case "gregorian_en":
      return gregorian_en;
    case "gregorian_fa":
      return gregorian_fa;
    case "gregorian_ar":
      return gregorian_ar;
    default:
      return persian_fa;
  }
};

export const importCalendar = (Case: string) => {
  switch (Case) {
    case "persian":
      return persian;
    case "arabic":
      return arabic;
    case "gregorian":
      return gregorian;
    default:
      return persian;
  }
};
