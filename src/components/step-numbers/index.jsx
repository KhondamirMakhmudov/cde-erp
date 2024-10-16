import React from "react";
import StepDivider from "../step-divider";

const StepInNumbers = ({ firstStep, secondStep, thirdStep, fourthStep }) => {
  return (
    <div>
      <ul className="flex items-center mt-[12px]">
        <li className="py-[4px] px-[12px]">
          <div>
            <div className="flex gap-x-[12px] mb-[10px]">
              {firstStep}
              <StepDivider />
            </div>

            <h4 className="text-sm font-normal">Yuborish turi</h4>
          </div>
        </li>

        <li className="py-[4px] px-[12px]">
          <div>
            <div className="flex gap-x-[12px] mb-[10px]">
              {secondStep}

              <StepDivider />
            </div>

            <h4 className="text-sm font-normal">Obyekt haqida maʼlumot</h4>
          </div>
        </li>
        <li className="py-[4px] px-[12px]">
          <div>
            <div className="flex gap-x-[12px] mb-[10px]">
              {thirdStep}

              <StepDivider />
            </div>

            <h4 className="text-sm font-normal">Taqdim qili-n hujjatlar</h4>
          </div>
        </li>
        <li className="py-[4px] px-[12px]">
          <div>
            <div className="flex gap-x-[12px] mb-[10px]">
              {fourthStep}

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
