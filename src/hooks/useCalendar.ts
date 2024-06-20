import { useEffect, useState } from "react";
import { CalendarProps, DateObject } from "react-multi-date-picker";
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
import { useDispatch } from "react-redux";
import {
  modalHandler,
  resetItem,
  setEventDateTime,
} from "../statemanagment/slices/Event";
import { getCurrentTime } from "../utils/utils";
import { setDateTimeFormat } from "../statemanagment/slices/globalState";

export default function useCalendar(props) {
  const dispatch = useDispatch();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    dispatch(
      setDateTimeFormat({ calendar: Header.calendar, locale: Header.locale })
    );
  }, [Header]);

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

  const addEvent = (date: DateObject) => {
    const nowTime = getCurrentTime();
    dispatch(resetItem());
    const dateTime = date.format().split(" ");
    dispatch(setEventDateTime({ date: dateTime[0], time: nowTime }));
    dispatch(modalHandler(true));
  };

  return { Header, addEvent };
}
