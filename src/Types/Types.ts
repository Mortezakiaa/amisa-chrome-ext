export interface ClosedDayOfYear {
  day: number;
  month: number;
  name: string;
}
export interface TDatePickerHandler {
  className: string;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  dataClosed: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
