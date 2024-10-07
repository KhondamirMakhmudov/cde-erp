import Dashboard from "@/layouts/dashboard";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Index = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <Dashboard>
      <form
        className={
          "w-4/5  mt-[12px] bg-white text-black rounded-lg border border-[#F5F5F5]"
        }
      >
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
    </Dashboard>
  );
};

export default Index;
