import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import Tooltip from "../utils/Tooltip";
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header";
import Settings from "react-multi-date-picker/plugins/settings";
import {  useState } from "react";
import useCalendar from "../hooks/useCalendar";

export default function DateTimePicker() {
  const [props, setProps] = useState({
    calendar: "persian",
    locale: "fa",
    calendarPosition: "bottom-right",
    multiple: true,
  });
  const { Header } = useCalendar(props);

  return (
    <>
      <Calendar
        onPropsChange={setProps}
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
        ]}
        mapDays={({ date }) => {
          const tooltip = new Tooltip(date);
          return tooltip.props;
        }}
        // weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
        calendar={persian}
        locale={persian_fa}
      />
    </>
  );
}
