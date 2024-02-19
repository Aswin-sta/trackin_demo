import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";

const CalendarHeaderHandler = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleNextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + 1);
    setDate(newDate);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() - 1);
    setDate(newDate);
  };

  const handleYearClick = () => {
    const newYear = prompt("Enter new year:");
    if (newYear) {
      const newDate = new Date(date);
      newDate.setFullYear(parseInt(newYear, 10));
      setDate(newDate);
    }
  };

  return (
    <>
      <CalendarHeader
        date={date}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
        handleYearClick={handleYearClick}
      />
    </>
  );
};

export default CalendarHeaderHandler;
