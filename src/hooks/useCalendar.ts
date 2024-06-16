import { useEffect, useState } from "react";
import { CalendarProps } from "react-multi-date-picker";
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

export default function useCalendar(props) {
  const [Header, setHeaderLocale] = useState<CalendarProps>({
    locale: persian_fa,
    calendar: persian,
  });

  useEffect(() => {
    if (
      typeof props.calendar !== "string" ||
      typeof props.locale !== "string"
    ) {
      importCalendar(props.calendar.name);
      importCalendarLocale(props.locale.name);
    }
  }, [props]);

  const importCalendarLocale = (Case: string) => {
    switch (Case) {
      case "persian_fa": {
        setHeaderLocale({ ...Header, locale: persian_fa });
        break;
      }
      case "persian_ar": {
        setHeaderLocale({ ...Header, locale: persian_ar });
        break;
      }
      case "persian_en": {
        setHeaderLocale({ ...Header, locale: persian_en });
        break;
      }
      case "arabic_ar": {
        setHeaderLocale({ ...Header, locale: arabic_ar });
        break;
      }
      case "arabic_fa": {
        setHeaderLocale({ ...Header, locale: arabic_fa });
        break;
      }
      case "arabic_en": {
        setHeaderLocale({ ...Header, locale: arabic_en });
        break;
      }
      case "gregorian_en": {
        setHeaderLocale({ ...Header, locale: gregorian_en });
        break;
      }
      case "gregorian_fa": {
        setHeaderLocale({ ...Header, locale: gregorian_fa });
        break;
      }
      case "gregorian_ar": {
        setHeaderLocale({ ...Header, locale: gregorian_ar });
        break;
      }
    }
  };

  const importCalendar = (Case: string) => {
    switch (Case) {
      case "persian": {
        setHeaderLocale({ ...Header, calendar: persian });
        break;
      }
      case "arabic": {
        setHeaderLocale({ ...Header, calendar: arabic });
        break;
      }
      case "gregorian": {
        setHeaderLocale({ ...Header, calendar: gregorian });
        break;
      }
    }
  };

  const addEvent = ()=>{
    alert('s')
  }

  return { Header , addEvent };
}
