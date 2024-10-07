import Dashboard from "@/layouts/dashboard";
import Image from "next/image";
import React, { useState } from "react";

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
          Biriktirilgan maʼlumotlar
        </h4>

        <div className="h-[1px] w-full bg-[#F5F5F5]"></div>

        <div>
          <h5 className="text-black px-[16px] py-[12px]">
            Ob&apos;ektni yangi qurilish uchun asos boʻlgan normativ hujjat
            (e-qaror, lex.uz)
          </h5>

          <div className=" px-[16px] py-[12px] flex items-end gap-x-[16px]">
            <div>
              <label>E-qaror yoki Lex.uz raqamini kiriting</label> <br />
              <input
                type="text"
                placeholder="E-qaror yoki Lex.uz raqamini kiriting"
                className="bg-[#F0F0F0] mt-[4px] placeholder:text-[#D9D9D9] text-black py-[10px] px-[12px] max-w-[360px] w-full rounded-[6px] text-sm"
              />
            </div>
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
            O‘rnatilgan tartibda tegishli idora va tashkilotlar bilan
            tasdiqlangan loyihalash topshirig‘i (qachon va kim tomonidan)
          </h5>

          <div className=" px-[16px] py-[12px] flex items-center gap-x-[16px]">
            <div className="flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
              <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px]">
                <Image
                  src={"/icons/file-check.svg"}
                  alt="upload"
                  width={12}
                  height={15}
                  className=""
                />
              </div>

              <div>
                <h3 className="text-sm">Loyiha normativ hujjat.docx</h3>
                <p className="text-xs text-[#595959]">314 kb.</p>
              </div>
            </div>
            <div className="border border-dashed border-[#B0CBCC] rounded-lg  max-w-[360px] w-full ">
              <div className="flex  items-center ">
                <Image
                  src={"/icons/upload.svg"}
                  alt="upload"
                  width={15}
                  height={15}
                  className="m-[13px] "
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
            Muhandislik tarmoqlariga ulanishning texnik shartlari, muhandislik
            tarmoqlarini nazorat qiluvchi va foydalanuvchi manfaatdor
            tashkilotlar bilan kelishilgan materiallar
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
            Qurilish maydonining muhandislik-geologik tadqiqotlari natijalari
            to‘g‘risidagi xulosalar
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
            Loyihalashning avvalgi bosqichda ko‘rib chiqilgan va tasdiqlangan
            materiallar va hujjatlar (tegishli hollarda)
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
            Obʼekt joylashgan hududdagi qurilish bosh boshqarmasi tomonidan
            berilgan kengash xulosasi VMQ-370 18.05.2018y qarorga asosan
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
            Экология ва атроф муҳитни муҳофаза қилиш давлат қўмитаси ҳудудий
            органларининг эътирозларсиз хулосаси (eco-service.uz integratsiya)
          </h5>

          <div className=" px-[16px] py-[12px] flex items-end gap-x-[16px]">
            <div>
              <label>Eco-service.uz raqamini kiriting</label> <br />
              <input
                type="text"
                placeholder="Eco-service.uz raqamini kiriting"
                className="bg-[#F0F0F0] mt-[4px] placeholder:text-[#D9D9D9] text-black py-[10px] px-[12px] max-w-[360px] w-full rounded-[6px] text-sm"
              />
            </div>
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
            Loyihalashning avvalgi bosqichda ko‘rib chiqilgan va tasdiqlangan
            materiallar va hujjatlar (tegishli hollarda)
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
