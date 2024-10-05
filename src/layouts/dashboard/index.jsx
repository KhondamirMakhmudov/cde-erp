import React from "react";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import Image from "next/image";

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-12 bg-[#FCFCFC]">
      <div className="">
        <Image src={"/images/Logo.png"} alt="logo" width={103} height={42} />

        <button className=" bg-[#01565B] py-4 px-[33px]  gap-x-[12px] flex items-center rounded-[8px]">
          <Image src={"/images/plus.png"} alt="plus" width={18} height={18} />
          <p className="text-white text-sm">Yangi murojaat qo’shish</p>
        </button>
      </div>
      <main className="col-span-9">
        <Header />
        <section className={"bg-[#F4F8FA] min-h-screen"}>{children}</section>
      </main>
    </div>
  );
};

export default Dashboard;
