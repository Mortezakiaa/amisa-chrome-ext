import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import { MainPageTooltip } from "../utils/Tooltip";
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header";
import Settings from "react-multi-date-picker/plugins/settings";
import { useState } from "react";
import useCalendar from "../hooks/useCalendar";
import DateEvents from "./DateEvents";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";

export default function DateTimePicker() {
  const [props, setProps] = useState({
    calendar: "persian",
    locale: "fa",
    calendarPosition: "bottom-right",
    multiple: true,
  });
  const { Header, addEvent } = useCalendar(props);

  return (
    <div>
      <Calendar
        onPropsChange={setProps}
        format="YYYY/MM/DD HH:mm"
        plugins={[
          <DatePickerHeader
            locale={Header.locale}
            calendar={Header.calendar}
            position="top"
            size="small"
            style={{ backgroundColor: "steelblue" }}
          />,
          <Settings
            position="bottom"
            calendars={["gregorian", "persian", "arabic"]}
            locales={["en", "fa", "ar"]}
            disabledList={["other", "mode"]}
          />,
          <DateEvents position="left"/>,
          weekends(),
        ]}
        mapDays={({ date }) => {
          const tooltip = new MainPageTooltip({ date, addEvent });
          return tooltip.props;
        }}
        // weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}
