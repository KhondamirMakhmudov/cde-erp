import Dashboard from "@/layouts/dashboard";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const FourthStep = ({ clickToTheFourthStep }) => {
  const [step, setStep] = useState("4");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <form
      className={
        "w-4/5  mt-[12px] bg-white text-black rounded-lg border border-[#F5F5F5]"
      }
    >
      <div className="fixed bottom-8 bg-white w-4/5 p-[16px] rounded-[12px]">
        <button className="text-sm text-white bg-[#015357] hover:bg-[#017177] active:bg-[#02878E] float-right py-[12px] px-[77px] rounded-[8px] transition-all duration-300">
          Yuborish
        </button>

        <button
          onClick={clickToTheFourthStep}
          className="text-sm bg-white border border-[#015357] hover:bg-[#017177] hover:text-white mr-[10px] text-[#015357]  active:bg-[#02878E] float-right py-[12px] px-[56px] rounded-[8px] transition-all duration-300"
        >
          Orqaga qaytish
        </button>
        {/* submit */}
      </div>

      <h4 className="p-[16px] text-black font-medium">
        Loyiha smeta hujjatlari
      </h4>

      <div className="h-[1px] w-full bg-[#F5F5F5]"></div>

      <div>
        <h5 className="text-black px-[16px] py-[12px]">
          Loyihaning umumiy tushuntirish xati, shuningdek birlamchi hujjatlar
          (Poyasnitelыnaya zapiska)
        </h5>

        <div className=" px-[16px] py-[12px] flex items-end gap-x-[16px]">
          <div className="border border-dashed border-[#B0CBCC] rounded-lg  max-w-[360px] w-full ">
            <div className="flex  items-center">
              <Image
                src={"/icons/upload.svg"}
                alt="upload"
                width={15}
                height={15}
                className="m-[13px]"
              />
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="text-blue-500">Faylni yuklang</span> yoki
                tashlang
              </label>
            </div>
            {file && (
              <span className="ml-2 text-gray-500 max-w-[300px] text-xs p-[12px]">
                Yuklangan hujjat: {file.name}
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-black px-[16px] py-[12px]">Asosiy reja (GP)</h5>

        <div className=" px-[16px] py-[12px] flex items-end gap-x-[16px]">
          <div className="border border-dashed border-[#B0CBCC] rounded-lg  max-w-[360px] w-full ">
            <div className="flex  items-center">
              <Image
                src={"/icons/upload.svg"}
                alt="upload"
                width={15}
                height={15}
                className="m-[13px]"
              />
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="text-blue-500">Faylni yuklang</span> yoki
                tashlang
              </label>
            </div>
            {file && (
              <span className="ml-2 text-gray-500 max-w-[300px] text-xs p-[12px]">
                Yuklangan hujjat: {file.name}
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-black px-[16px] py-[12px]">
          Arxitektura va qurilish yechimlari (AR, KJ, AS, KM)
        </h5>

        <div className=" px-[16px] py-[12px] flex items-end gap-x-[16px]">
          <div className="border border-dashed border-[#B0CBCC] rounded-lg  max-w-[360px] w-full ">
            <div className="flex  items-center">
              <Image
                src={"/icons/upload.svg"}
                alt="upload"
                width={15}
                height={15}
                className="m-[13px]"
              />
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="text-blue-500">Faylni yuklang</span> yoki
                tashlang
              </label>
            </div>
            {file && (
              <span className="ml-2 text-gray-500 max-w-[300px] text-xs p-[12px]">
                Yuklangan hujjat: {file.name}
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-black px-[16px] py-[12px]">
          Tarmoq muhandisligi (EO, PS, OV, VK, NVK, va boqalar)
        </h5>

        <div className=" px-[16px] py-[12px] flex items-end gap-x-[16px]">
          <div className="border border-dashed border-[#B0CBCC] rounded-lg  max-w-[360px] w-full ">
            <div className="flex  items-center">
              <Image
                src={"/icons/upload.svg"}
                alt="upload"
                width={15}
                height={15}
                className="m-[13px]"
              />
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="text-blue-500">Faylni yuklang</span> yoki
                tashlang
              </label>
            </div>
            {file && (
              <span className="ml-2 text-gray-500 max-w-[300px] text-xs p-[12px]">
                Yuklangan hujjat: {file.name}
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-black px-[16px] py-[12px]">
          Smeta (baxolash) qismi
        </h5>

        <div className=" px-[16px] py-[12px] flex items-end gap-x-[16px]">
          <div className="border border-dashed border-[#B0CBCC] rounded-lg  max-w-[360px] w-full ">
            <div className="flex  items-center">
              <Image
                src={"/icons/upload.svg"}
                alt="upload"
                width={15}
                height={15}
                className="m-[13px]"
              />
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="text-blue-500">Faylni yuklang</span> yoki
                tashlang
              </label>
            </div>
            {file && (
              <span className="ml-2 text-gray-500 max-w-[300px] text-xs p-[12px]">
                Yuklangan hujjat: {file.name}
              </span>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FourthStep;
