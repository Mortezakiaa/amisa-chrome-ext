import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import toast from "react-hot-toast";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function EventTimeReminder(time: string) {
  const Now = new DateObject({
    calendar: persian,
    locale: persian_fa,
    format: "YYYY/DD/MM HH:mm:ss",
  })
    .format()
    .split(" ");
    const Nowdate = Now[0];
    const NowTime = Now[1];
    const reminder = time.split(' ')
    const reminderdate = reminder[0]
    const reminderTime = reminder[1]

    if(Nowdate === reminderdate && NowTime === reminderTime){
        toast
    }

}
