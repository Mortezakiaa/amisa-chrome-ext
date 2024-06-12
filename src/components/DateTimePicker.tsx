import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import Tooltip from "../utils/Tooltip";
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header";
import Settings from "react-multi-date-picker/plugins/settings";
import { useState } from "react";

export default function DateTimePicker() {
  const [props, setProps] = useState({
    calendar: "persian",
    locale: "fa",
    calendarPosition: "bottom-right",
    multiple: true,
  });
  return (
    <>
      <Calendar
        onPropsChange={setProps}
        plugins={[
          <DatePickerHeader
            position="top"
            size="small"
            style={{ backgroundColor: "steelblue" }}
          />,
          <Settings
            position="bottom"
            calendars={["gregorian", "persian", "arabic"]}
            locales={["en", "fa", "ar"]}
            disabledList={["other" , "mode"]}
          />,
        ]}
        mapDays={({ date }) => {
          const tooltip = new Tooltip(date);
          if(typeof props.calendar === 'object'){
            const clr = props.calendar.name as any
            if(clr === "persian"){
              return tooltip.props
            }else{
              const isWeekend = date.weekDay.index === 6;
              const p = {} as any
              isWeekend && (p.className = "highlight highlight-red")
              return p 
            }
          }else{
            return tooltip.props;
          }
          
        }}
        // weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
        calendar={persian}
        locale={persian_fa}
      />
    </>
  );
}
