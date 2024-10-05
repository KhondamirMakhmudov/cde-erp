import Image from "next/image";
import React from "react";
// You can use heroicons for the search icon

const SearchBar = () => {
  return (
    <div className="flex items-center bg-[#FCFCFC] border border-[#F5F5F5] rounded-lg p-[8px] mt-[12px] mb-[8px]">
      {/* Search Icon */}
      <Image src={"/icons/search.svg"} alt="search" width={16} height={16} />
      {/* Input Field */}
      <input
        type="text"
        placeholder="Qidiruv..."
        className="bg-transparent focus:outline-none text-[#D9D9D9] max-w-[176px] placeholder:text-[#D9D9D9]  ml-[3px] mr-[6px]"
      />

      {/* Command Icon and Number */}
      {/* <div className="flex items-center gap-x-[4px] bg-[#F5F5F5] border border-gray-200 rounded-lg py-[2px] px-[4px] text-[#8C8C8C]">
        <Image src={"/icons/command.svg"} alt="search" width={11} height={11} />
        <span className=" text-xs font-normal mb-[1px]">1</span>
      </div> */}
    </div>
  );
};

export default SearchBar;
