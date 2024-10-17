import { get } from "lodash";
import React from "react";
import { NumericFormat } from "react-number-format";

const Diagram = () => {
  // Data for the diagram
  const data = [
    { label: "Yangi murojaatlar", value: 1382, color: "bg-[#1990FF]" },
    { label: "Qabul qilingan", value: 783, color: "bg-[#FAAD14]" },
    { label: "Yakunlangan", value: 432, color: "bg-[#53C31B]" },
    { label: "Bekor qilingan", value: 182, color: "bg-[#8C8C8C]" },
    { label: "Rad etilgan", value: 98, color: "bg-[#FE4D4F]" },
  ];

  const total = 4392;

  return (
    <div>
      {/* total */}
      <div className="flex items-center gap-x-[8px]">
        <p className="text-[48px] ">
          <span>{total}</span>
        </p>

        <p className="text-[#8C8C8C] mt-[25px]"> murojaatlar</p>
      </div>
      <div className="flex gap-x-[4px]   ">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.color} h-[8px] rounded-[2px] `}
            style={{ width: `${(item.value / total) * 100}%` }}
          />
        ))}
      </div>

      {/* Legend with counts */}
      <div className="flex mt-8 text-sm text-center">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex gap-x-[8px] items-center">
              <div
                className={`max-w-[14px] w-full h-[8px] rounded-[999px] ${get(
                  item,
                  "color"
                )}`}
              ></div>
              <p className="text-[#8C8C8C]">{get(item, "label")}</p>
            </div>

            <p className="text-[30px] font-medium">{get(item, "value")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagram;
