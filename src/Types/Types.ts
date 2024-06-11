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
}
export interface TTodoCard {
  text: string;
  id: string;
  DeleteTodo: (id: string) => void;
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  editTodo: (id: string) => void;
}
