import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import Tooltip from "../utils/Tooltip";

export default function DateTimePicker() {
  return (
    <>
      <Calendar
        mapDays={({ date }) => {
          const tooltip = new Tooltip(date);
          return tooltip.props;
        }}
        weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
        calendar={persian}
        locale={persian_fa}
      />
    </>
  );
}
