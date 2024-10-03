import React from "react";
import Image from "next/image";

const SideBar = ({ openSideBar }) => {
  return (
    <div className="col-span-3 !bg-white  border border-[#F5F5F5] rounded-xl  p-[8px]">
      <Image src={"/images/Logo.png"} alt="logo" width={103} height={42} />

      <button className=" bg-[#01565B] py-4 px-[33px]  gap-x-[12px] flex items-center rounded-[8px]">
        <Image src={"/images/plus.png"} alt="plus" width={18} height={18} />
        <p className="text-white text-sm">Yangi murojaat qo’shish</p>
      </button>
    </div>
  );
};

export default SideBar;
