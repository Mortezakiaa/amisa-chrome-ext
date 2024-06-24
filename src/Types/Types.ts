import { ChangeEvent, KeyboardEvent } from "react";

export interface ClosedDayOfYear {
  day: number;
  month: number;
  name: string;
}
export interface TDatePickerHandler {
  arDate: string;
  enDate: string;
  className: string;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  dataClosed: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface TodoLists {
  id: string;
  todo: string;
  status: "Done" | "Todo";
  date: string;
  deleteMode: boolean;
}
export interface TTodoCard {
  text: string;
  id: string;
  DeleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  setToEdit: (id: string, edit: boolean) => void;
  todo: TodoLists;
  changeStatus: (id: string, check: boolean) => void;
}
export interface TEvent {
  id: string;
  eventTitle: string;
  date: string;
  time: string;
  reminderTime: string;
}
export interface InputProps {
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  onkeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  value: string;
}
export interface ButtonProps {
  onclick?: (e?: React.MouseEvent<HTMLElement>) => void;
  txt: string;
  mode: "default" | "delete" | "other";
}
export interface TTooltip {
  createTooltipAndShow: (e: React.MouseEvent<HTMLDivElement>) => void;
  removeTooltip: () => void;
  setClosedDays: (list: { name: string; day: number; month: number }[]) => void;
  addEvent: () => void;
}
export interface TEventReminder {
  isEventTime: (time: string) => boolean;
  todayEvents: () => TEvent[];
  timeDiffrenceInMillis: (
    time1: string,
    time2: string,
    reminderDelay: string
  ) => void;
}
