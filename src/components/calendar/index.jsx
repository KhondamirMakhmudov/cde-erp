import React from "react";
import clsx from "clsx"; // for conditional classes

const Calendar = ({ appeals }) => {
  const getBackgroundClass = (currentCount, prevCount) => {
    if (currentCount === 0) return "bg-white"; // No appeals

    const colorLevels = [
      "bg-green-100",
      "bg-green-200",
      "bg-green-300",
      "bg-green-400",
      "bg-green-500",
    ];
    if (currentCount > prevCount) {
      return clsx(colorLevels[Math.min(currentCount, colorLevels.length - 1)]);
    } else if (currentCount < prevCount) {
      return "bg-green-100"; // Less than yesterday, lighter shade
    } else {
      return "bg-green-300"; // Same as yesterday, moderate shade
    }
  };

  return (
    <div className="grid grid-cols-7 gap-1">
      {appeals.map((count, index) => {
        const prevCount = index > 0 ? appeals[index - 1] : 0;
        return (
          <div
            key={index}
            className={clsx(
              "w-8 h-8 border border-gray-200", // size and border
              getBackgroundClass(count, prevCount)
            )}
          >
            {/* Optional: Display appeal count */}
            <span className="text-xs">{count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
