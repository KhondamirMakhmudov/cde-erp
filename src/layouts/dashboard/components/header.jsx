import Head from "next/head";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center border border-[#F5F5F5] py-[12px] px-[16px] rounded-lg !bg-white">
      <div className="flex items-center gap-x-[8px]">
        <Image src={"/images/left.png"} alt="left" width={24} height={24} />
        <h2 className="font-medium text-[24px]">Murojaat yuborish</h2>
      </div>

      <div className="flex gap-x-[11px]">
        <button>
          <Image src={"/images/bell.png"} alt="bell" width={18} height={18} />
        </button>

        <div className="border  flex items-center gap-x-[8px] border-[#D9D9D9] px-[12px] py-[10px] ">
          <Image
            src={"/images/calendar.png"}
            alt="calendar"
            width={18}
            height={18}
          />

          <p className="!text-[#D9D9D9]">Seshanba, 10 Avgust, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
