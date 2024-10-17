import Diagram from "@/components/diagram";
import Dashboard from "@/layouts/dashboard";
import React from "react";

const Index = () => {
  return (
    <Dashboard title={"Murojaatlar"}>
      <div className="grid grid-cols-12 gap-x-[12px]">
        <div className="col-span-4"></div>
        <div className="col-span-8 bg-white rounded-xl border border-[#F5F5F5] px-[16px] py-[14px]">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Barcha murojaatlar</h3>

            <button className="text-sm py-[6px] px-[10px] bg-[#FCFCFC] border border-[#F5F5F5] rounded-[6px]">
              Recent Hiring
            </button>
          </div>

          <Diagram />
        </div>
      </div>
    </Dashboard>
  );
};

export default Index;
