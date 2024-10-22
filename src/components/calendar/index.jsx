import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { uz } from "date-fns/locale";
import Image from "next/image";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const renderHeader = () => {
    const dateFormat = "LLLL yyyy";

    return (
      <div>
        <div className="py-[8px]">
          <h2 className="text-[24px] font-medium mb-[4px]">
            {format(currentMonth, dateFormat, { locale: uz })}
          </h2>
          <p className="text-sm text-[#8C8C8C]">
            Oylar bo&apos;yicha murojaatlar kelishi miqdori
          </p>
        </div>
        <div className="flex justify-start items-center gap-x-[4px] mb-4">
          <button onClick={prevMonth} className="px-4 py-2 border rounded">
            <Image src={"/images/left.png"} alt="left" width={24} height={24} />
          </button>

          <button
            onClick={nextMonth}
            className="px-4 py-2 border rounded rotate-180"
          >
            <Image src={"/images/left.png"} alt="left" width={24} height={24} />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEEE";
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center text-[#8C8C8C] font-semibold" key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: uz })}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-4">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`text-center py-[20px] mt-[4px] rounded-md ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300"
                : isSameDay(day, selectedDate)
                ? "bg-blue-500 text-white"
                : "bg-[#558E91] text-white"
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 space-x-[4px] " key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
