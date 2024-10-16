import React from "react";
import StepDivider from "../step-divider";

const StepInNumbers = ({ firstStep, secondStep, thirdStep, fourthStep }) => {
  return (
    <div>
      <ul className="flex items-center mt-[12px]">
        <li className="py-[4px] px-[12px]">
          <div>
            <div className="flex gap-x-[12px] mb-[10px]">
              <p className="font-semibold text-base text-white px-[14px]  py-[5px] bg-[#015357] rounded-full">
                1
              </p>

              <StepDivider />
            </div>

            <h4 className="text-sm font-normal">Yuborish turi</h4>
          </div>
        </li>

        <li className="py-[4px] px-[12px]">
          <div>
            <div className="flex gap-x-[12px] mb-[10px]">
              <p className="font-semibold text-base text-white px-[13px]  py-[5px] bg-[#015357] rounded-full">
                2
              </p>

              <StepDivider />
            </div>

            <h4 className="text-sm font-normal">Obyekt haqida maʼlumot</h4>
          </div>
        </li>
        <li className="py-[4px] px-[12px]">
          <div>
            <div className="flex gap-x-[12px] mb-[10px]">
              <p className="font-semibold text-base text-white px-[13px]  py-[5px] bg-[#015357] rounded-full">
                3
              </p>

              <StepDivider />
            </div>

            <h4 className="text-sm font-normal">Taqdim qili-n hujjatlar</h4>
          </div>
        </li>
        <li className="py-[4px] px-[12px]">
          <div>
            <div className="flex gap-x-[12px] mb-[10px]">
              <p className="font-semibold text-base text-white px-[13px]  py-[5px] bg-[#015357] rounded-full">
                4
              </p>

              <StepDivider />
            </div>

            <h4 className="text-sm font-normal">Loyiha smeta hujjatlari</h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StepInNumbers;
