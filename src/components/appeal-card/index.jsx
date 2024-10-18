import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

const AppealCard = ({
  numberOfAppeal,
  date,
  status,
  title,
  company,
  url = "#",
}) => {
  const formattedDate = dayjs(date).format("DD.MM.YYYY");
  return (
    <Link href={url}>
      <div className="bg-white border border-[#F5F5F5] hover:border-[#D5D5D5] py-[12px] px-[16px] rounded-lg cursor-pointer transition-all duration-300">
        <div className="flex justify-between mb-[12px]">
          <div className="flex  gap-x-[16px] items-center">
            <div className="flex gap-x-[8px] items-center">
              <Image
                src={"/icons/appeal-file.svg"}
                alt="appeal_file"
                width={16}
                height={16}
              />

              <p>
                <span className="text-[#01565B] text-sm font-medium">
                  {numberOfAppeal}
                </span>
              </p>
            </div>

            <div className="flex gap-x-[8px] items-center">
              <Image
                src={"/icons/appeal-calendar.svg"}
                alt="appeal_calendar"
                width={16}
                height={16}
              />

              <p>
                <span className="text-[#8C8C8C] text-sm font-medium">
                  {formattedDate}
                </span>
              </p>
            </div>
          </div>

          <div className="py-[8px] px-[12px] bg-[#E8F4FF] rounded-lg">
            <p className="text-xs text-[#1990FF] ">{status}</p>
          </div>
        </div>

        <div>
          <h3 className="text-base text-black font-medium mb-[16px] hover:underline transition-all duration-300">
            {title}
          </h3>
          <p className="text-[#8C8C8C]">{company}</p>
        </div>
      </div>
    </Link>
  );
};

export default AppealCard;
