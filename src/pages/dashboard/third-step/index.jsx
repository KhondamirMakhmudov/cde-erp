import Dashboard from "@/layouts/dashboard";
import React from "react";

const Index = () => {
  return (
    <Dashboard>
      <form
        className={
          "w-4/5  mt-[12px] bg-white text-black rounded-lg border border-[#F5F5F5]"
        }
      >
        <h4 className="p-[16px] text-black font-medium">
          Biriktirilgan maʼlumotlar
        </h4>

        <div className="h-[1px] w-full bg-[#F5F5F5]"></div>

        <h5 className="text-black p-[16px]">
          Ob&apos;ektni yangi qurilish uchun asos boʻlgan normativ hujjat
          (e-qaror, lex.uz)
        </h5>

        <div className=" px-[16px] py-[12px]">
          <label>E-qaror yoki Lex.uz raqamini kiriting</label> <br />
          <input
            type="text"
            placeholder="E-qaror yoki Lex.uz raqamini kiriting"
            className="bg-[#F0F0F0] mt-[4px] placeholder:text-[#D9D9D9] text-black py-[10px] px-[12px] max-w-[360px] w-full rounded-[6px] text-sm"
          />
        </div>
      </form>
    </Dashboard>
  );
};

export default Index;
