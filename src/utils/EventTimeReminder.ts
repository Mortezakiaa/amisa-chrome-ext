import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function EventTimeReminder(time: string) {
  const Now = new DateObject({
    calendar: persian,
    locale: persian_fa,
    format: "HH:mm:ss",
  }).format();
  if (Now === time) {
    //add toast to remind user
  }
}

export function EventDateReminder(date: string) {
  const Now = new DateObject({
    calendar: persian,
    locale: persian_fa,
    format: "YYYY/DD/MM",
  }).format();
  if (Now === date) {
    // remind date
  }
}

export function EventTimeRepeter(){

}
