export type HandleNextMonth = () => void;

export type HandlePrevMonth = () => void;
 
export type HandleYearClick = () => void;
 
export type Program = {
  date: Date;
  numberOfPrograms: number;
};
  
export type WeekGridProps = {
  currentDate: Date;
}
  
export type CalendarBodyProps = {
  isCurrentMonth: boolean;
  dayNumber: number;
  programInfo: JSX.Element | null;
}

export type CalendarHeaderProps = {
  date: Date;
  handleNextMonth: HandleNextMonth;
  handlePrevMonth: HandlePrevMonth;
  handleYearClick: HandleYearClick;
}