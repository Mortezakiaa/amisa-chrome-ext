import { useState } from "react";
import { CalendarProps } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function useCalendar() {
  const [Header, setHeaderLocale] = useState<CalendarProps>({
    locale: persian_fa,
    calendar: persian,
  });
  const importCalendarLocale = (Case: string) => {
    switch (Case) {
      case "persian_fa": {
        setHeaderLocale({ ...Header, locale: persian_fa });
        break;
      }
      case "persian_ar": {
        import("react-date-object/locales/persian_ar")
          .then((res) => {
            setHeaderLocale({ ...Header, locale: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
      case "persian_en": {
        import("react-date-object/locales/persian_en")
          .then((res) => {
            setHeaderLocale({ ...Header, locale: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
      case "arabic_ar": {
        import("react-date-object/locales/arabic_ar")
          .then((res) => {
            setHeaderLocale({ ...Header, locale: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
      case "arabic_fa": {
        import("react-date-object/locales/arabic_fa")
          .then((res) => {
            setHeaderLocale({ ...Header, locale: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
      case "arabic_en": {
        import("react-date-object/locales/arabic_en")
          .then((res) => {
            setHeaderLocale({ ...Header, locale: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
      case "gregorian_en": {
        import("react-date-object/locales/gregorian_en")
          .then((res) => {
            setHeaderLocale({ ...Header, locale: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
      case "gregorian_fa": {
        import("react-date-object/locales/gregorian_fa")
          .then((res) => {
            setHeaderLocale({ ...Header, locale: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
      case "gregorian_ar": {
        import("react-date-object/locales/gregorian_ar")
          .then((res) => {
            setHeaderLocale({ ...Header, locale: res });
          })
          .catch((e) => {
            console.log(e);
          });
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
        import("react-date-object/calendars/arabic")
          .then((res) => {
            setHeaderLocale({ ...Header, calendar: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
      case "gregorian": {
        import("react-date-object/calendars/gregorian")
          .then((res) => {
            setHeaderLocale({ ...Header, calendar: res });
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }
    }
  };

  return { importCalendarLocale, importCalendar, Header };
}
