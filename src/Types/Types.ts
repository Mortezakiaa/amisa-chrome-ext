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
  editMode: boolean;
  deleteMode: boolean;
}
