import React, { useState } from "react";
import Image from "next/image";

import Header from "@/layouts/dashboard/components/header";
import { motion } from "framer-motion";
import Sidebar from "@/layouts/dashboard/components/sidebar";
import StepInNumbers from "@/components/step-numbers";
import FirstStep from "@/components/form-steps/first-step";
import SecondStep from "@/components/form-steps/second-step";
import ThirdStep from "@/components/form-steps/third-step";
import FourthStep from "@/components/form-steps/fourth-step";

const Index = () => {
  const [goToTheNextStep, setGoToTheNextStep] = useState("1");

  const handleSelectingStep = (select) => {
    setGoToTheNextStep(select);
  };

  return (
    <div className="flex bg-[#FCFCFC] gap-x-[12px] p-[12px] min-h-screen">
      <Sidebar />

      <main className="w-full">
        <Header />

        <StepInNumbers />
        <section className={""}>
          {goToTheNextStep === "1" && (
            <FirstStep
              initialOption={""}
              initialSection={"davlat-tashkiloti"}
              clickToTheSecondStep={() => handleSelectingStep("2")}
            />
          )}

          {goToTheNextStep === "2" && (
            <SecondStep
              clickToTheFirstStep={() => handleSelectingStep("1")}
              clickToTheThirdStep={() => handleSelectingStep("3")}
            />
          )}

          {goToTheNextStep === "3" && (
            <ThirdStep
              clickToTheSecondStep={() => handleSelectingStep("2")}
              clickToTheFourthStep={() => handleSelectingStep("4")}
            />
          )}

          {goToTheNextStep === "4" && (
            <FourthStep clickToTheFourthStep={() => handleSelectingStep("3")} />
          )}

          {/* <div className="fixed bottom-8 bg-white w-4/5 p-[16px] rounded-[12px]">
            <button
              onClick={() => handleSelectingStep("4")}
              className="text-sm text-white bg-[#015357] hover:bg-[#017177] active:bg-[#02878E] float-right py-[12px] px-[66px] rounded-[8px] transition-all duration-300"
            >
              Davom etish
            </button>

            {goToTheNextStep > "1" && (
              <button
                onClick={() => handleSelectingStep("1")}
                className="text-sm bg-white border border-[#015357] hover:bg-[#017177] hover:text-white mr-[10px] text-[#015357]  active:bg-[#02878E] float-right py-[12px] px-[56px] rounded-[8px] transition-all duration-300"
              >
                Orqaga qaytish
              </button>
            )}
          </div> */}
        </section>
      </main>
    </div>
  );
};

export default Index;
