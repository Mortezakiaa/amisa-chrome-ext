import { useEffect, useState } from "react";
import { CalendarProps, DateObject } from "react-multi-date-picker";
import { useDispatch } from "react-redux";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {
  modalHandler,
  resetItem,
  setEventDateTime,
} from "../statemanagment/slices/Event";
import { getCurrentTime } from "../utils/utils";
import { setDateTimeFormat } from "../statemanagment/slices/globalState";
import { importCalendar, importCalendarLocale } from "../utils/Calendar";

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
      const clr = importCalendar(props.calendar.name);
      const Lce = importCalendarLocale(props.locale.name);
      setHeaderLocale({ locale: Lce, calendar: clr });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    dispatch(
      setDateTimeFormat({ calendar: Header.calendar, locale: Header.locale })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Header]);

  const addEvent = (date: DateObject) => {
    const nowTime = getCurrentTime();
    dispatch(resetItem());
    const dateTime = date.format().split(" ");
    dispatch(setEventDateTime({ date: dateTime[0], time: nowTime }));
    dispatch(modalHandler(true));
  };

  return { Header, addEvent };
}
