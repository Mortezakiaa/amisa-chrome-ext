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
  title: string;
  dateTime: string;
}

export type TReminderTime =
  | "در همان لحظه"
  | "10 دقیقه قبل"
  | "30 دقیقه قبل"
  | "1 ساعت قبل"
  | "2 ساعت قبل"
  | "1 روز قبل"
  | "1 هفته قبل"
  | "مقدار دلخواه";
