import React, { useState } from "react";
import Image from "next/image";

import Header from "@/layouts/dashboard/components/header";
import { motion } from "framer-motion";
import Sidebar from "@/layouts/dashboard/components/sidebar";

const Index = ({ options, initialOption, initialSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [selectSection, setSelectSection] = useState(initialSection);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  //   const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="flex bg-[#FCFCFC] gap-x-[12px] p-[12px] min-h-screen">
      <main className="w-full">
        <section className={""}>
          <div className="grid grid-cols-12 gap-x-[16px] bg-white py-[12px] px-[16px] rounded-xl border border-[#F5F5F5] mt-[12px]">
            <div
              onClick={() => setSelectSection("davlat-tashkiloti")}
              className={`col-span-4 bg-[#FCFCFC]  flex flex-col py-[38px] justify-center items-center border ${
                selectSection === "davlat-tashkiloti"
                  ? "border-[#01565B]"
                  : "border-[#F5F5F5]"
              } hover:border-[#01565B] transition-all duration-300 cursor-pointer rounded-md`}
            >
              <Image
                src={"/icons/bank.svg"}
                alt="bank"
                width={40}
                height={40}
              />

              <h4 className="font-medium text-sm text-black mt-[16px]">
                Davlat tashkilotiga
              </h4>
            </div>

            <div
              onClick={() => setSelectSection("xususiy-tashkilot")}
              className={`col-span-4 bg-[#FCFCFC]  flex flex-col py-[38px] justify-center items-center border ${
                selectSection === "xususiy-tashkilot"
                  ? "border-[#01565B]"
                  : "border-[#F5F5F5]"
              } hover:border-[#01565B] transition-all duration-300 cursor-pointer rounded-md`}
            >
              <Image
                src={"/icons/user.svg"}
                alt="user"
                width={40}
                height={40}
              />

              <h4 className="font-medium text-sm text-black mt-[16px]">
                Xususiy tashkilotga
              </h4>
            </div>

            <div
              onClick={() => setSelectSection("qayta-ekspertiza")}
              className={`col-span-4 bg-[#FCFCFC] flex flex-col py-[38px] justify-center items-center border ${
                selectSection === "qayta-ekspertiza"
                  ? "border-[#01565B]"
                  : "border-[#F5F5F5]"
              }  hover:border-[#01565B] transition-all duration-300 cursor-pointer rounded-md`}
            >
              <Image
                src={"/icons/file-check.svg"}
                alt="file-check"
                width={40}
                height={40}
              />

              <h4 className="font-medium text-sm text-black mt-[16px]">
                Qayta ekspertiza
              </h4>
            </div>

            <div className="col-span-12 relative mt-[12px]">
              <motion.h3
                initial={{ opacity: 0, translateY: "10px" }}
                animate={{ opacity: 1, translateY: "0px" }}
                className="text-black mb-[4px]"
              >
                {selectSection === "davlat-tashkiloti"
                  ? "Davlat tashkiloti"
                  : selectSection === "xususiy-tashkilot"
                  ? "Xususiy tashkilot"
                  : selectSection === "qayta-ekspertiza"
                  ? "Qayta ekspertiza"
                  : ""}
              </motion.h3>

              <div
                className="flex items-center justify-between w-full px-4 py-2 border border-[#F0F0F0] rounded-lg cursor-pointer"
                onClick={toggleDropdown}
              >
                <span
                  className={` text-sm ${
                    selectedOption ? "text-black" : "text-[#D9D9D9]"
                  }`}
                >
                  {selectedOption ||
                    `${
                      selectSection === "davlat-tashkiloti"
                        ? "Davlat tashkilotini tanlang"
                        : selectSection === "xususiy-tashkilot"
                        ? "Xususiy tashkilotni tanlang"
                        : selectSection === "qayta-ekspertiza"
                        ? "Qayta ekspertizani tanlang"
                        : ""
                    }`}
                </span>
                <Image
                  src={"/images/down.png"}
                  alt="down"
                  width={20}
                  height={20}
                />
              </div>
              {isOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white border border-[#F0F0F0] rounded-lg shadow-lg z-10">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
