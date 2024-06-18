import { DatePanelProps } from "react-multi-date-picker/plugins/date_panel";
import { useSelector } from "react-redux";
import { EventSelector } from "../statemanagment/slices/Event";
import EventCard from "./EventCard";

export default function DateEvents(_props: DatePanelProps) {
  const { items } = useSelector(EventSelector);
  return (
    <div
      className="flex flex-col rmdp-rtl p-1 gap-2 w-[150px]"
      hidden={_props.hidden}
    >
      <h4>رویداد ها</h4>
      {items?.map((i) => (
        <EventCard key={i.id} id={i.id} eventTitle={i.eventTitle} />
      ))}
    </div>
  );
}
