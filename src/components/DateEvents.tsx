import { DatePanelProps } from "react-multi-date-picker/plugins/date_panel";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DateEvents(_props:DatePanelProps) {
  return (
    <div className="flex flex-col gap-2 w-[150px]" hidden={_props.hidden}>
       <h4>رویداد ها</h4>
    </div>
  )
}
