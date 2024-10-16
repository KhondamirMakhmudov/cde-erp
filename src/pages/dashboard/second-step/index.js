import Dashboard from "@/layouts/dashboard";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <Dashboard>
      <form className={"w-4/5  mt-[12px] "}>
        <div className="grid grid-cols-12 gap-x-[12px] bg-white rounded-lg border border-[#F5F5F5] p-[12px] ">
          <div className="col-span-12 grid grid-cols-12 gap-x-[12px] mt-[16px] mb-[12px]">
            <div className={"col-span-4"}>
              <label className={"text-black "}>Qurilish turi*</label>
              <select className=" w-full cursor-pointer py-[10px] px-[12px] border  rounded-[6px] focus:outline-none focus:ring-2 mt-[4px]">
                <option value="1">Yangi qurilish</option>
              </select>
            </div>

            <div className={"col-span-4"}>
              <label className={"text-black"}>Soxa*</label>
              <select className=" w-full py-[10px] px-[12px] border  rounded-[6px] focus:outline-none focus:ring-2  mt-[4px]">
                <option value="1">Yangi qurilish</option>
              </select>
            </div>

            <div className={"col-span-4"}>
              <label className={"text-black"}>ART*</label> <br />
              <input
                type="number"
                className="px-[12px] py-[12px] placeholder:text-[#D9D9D9] bg-[#F0F0F0] rounded-[6px] mt-[4px] text-sm w-full"
                placeholder="Raqamni kiriting"
              />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-[12px] mt-[16px] mb-[12px]">
            <div className={"col-span-4"}>
              <label className={"text-black"}>Buyurtmachi turi*</label>
              <select className=" w-full cursor-pointer py-[10px] px-[12px] border  rounded-[6px] focus:outline-none focus:ring-2 mt-[4px]">
                <option value="1">Yangi qurilish</option>
              </select>
            </div>

            <div className={"col-span-4"}>
              <label className={"text-black"}>Loyihachi INN*</label> <br />
              <input
                type="text"
                className="px-[12px] py-[12px] placeholder:text-[#D9D9D9] bg-[#F0F0F0] rounded-[6px] mt-[4px] text-sm w-full"
                placeholder="Loyihachi INN ni kiriting"
              />
            </div>

            <div className={"col-span-4"}>
              <label className={"text-black"}>Obyekt toifasi*</label>
              <select className=" w-full cursor-pointer py-[10px] px-[12px] border  rounded-[6px] focus:outline-none focus:ring-2 mt-[4px]">
                <option value="1">Obʼekt toifasini tanlang</option>
              </select>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-[12px] mt-[16px] mb-[12px]">
            <div className={"col-span-4"}>
              <label className={"text-black"}>Obʼekt nomi*</label> <br />
              <input
                type="text"
                className="px-[12px] py-[12px] placeholder:text-[#D9D9D9] bg-[#F0F0F0] rounded-[6px] mt-[4px] text-sm w-full"
                placeholder="Obʼekt nomini kiriting"
              />
            </div>

            <div className={"col-span-4"}>
              <label className={"text-black"}>
                Arxitek / shaxarsozlik kengash xulosasi
              </label>{" "}
              <br />
              <input
                type="text"
                className="px-[12px] py-[12px] placeholder:text-[#D9D9D9] bg-[#F0F0F0] rounded-[6px] mt-[4px] text-sm w-full"
                placeholder="Xulosa raqamini kiriting"
              />
            </div>

            <div className={"col-span-4"}>
              <label className={"text-black"}>Moliyalashtirish manbai*</label>
              <select className=" w-full cursor-pointer py-[10px] px-[12px] border  rounded-[6px] focus:outline-none focus:ring-2 mt-[4px]">
                <option value="1">Yangi qurilish</option>
              </select>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-[12px] mt-[16px] ">
            <div className={"col-span-10"}>
              <label className={"text-black "}>Ish hajmi*</label>
              <select className="appearance-none w-full cursor-pointer py-[10px] px-[12px] border  rounded-[6px] focus:outline-none focus:ring-2 mt-[4px]">
                <option value="1">
                  Loyiha-smeta hujjatlarining smeta qiymati (so‘m)
                </option>
              </select>
            </div>

            <div className={"col-span-2"}>
              <label className={"text-black"}>Ish hajmi*</label> <br />
              <input
                type="text"
                className="px-[12px] py-[12px] placeholder:text-[#D9D9D9] bg-[#F0F0F0] rounded-[6px] mt-[4px] text-sm w-full"
                placeholder="Loyihachi INN ni kiriting"
              />
            </div>

            <div className="col-span-12 flex gap-x-[6px] items-center mt-[4px]">
              <Image src={"/icons/info.svg"} alt="svg" width={16} height={16} />
              <h4 className="text-sm text-[#BFBFBF]">
                Tahminiy ekspertiza xulosa narhi 8 460 000,00 so‘m
              </h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-[12px] bg-white rounded-lg border border-[#F5F5F5] p-[12px] mt-[12px]">
          <h4 className="font-medium col-span-12">Obyekt manzili</h4>

          <div className="col-span-12 grid grid-cols-12 gap-x-[12px] mt-[16px] mb-[12px]">
            <div className={"col-span-4"}>
              <label className={"text-black "}>Viloyat*</label>
              <select className=" w-full cursor-pointer py-[10px] px-[12px] border  rounded-[6px] focus:outline-none focus:ring-2 mt-[4px]">
                <option value="1">Viloyatni tanlang</option>
              </select>
            </div>

            <div className={"col-span-4"}>
              <label className={"text-black"}>Tuman*</label>
              <select className=" w-full py-[10px] px-[12px] border  rounded-[6px] focus:outline-none focus:ring-2  mt-[4px]">
                <option value="1">Tumanni tanlang</option>
              </select>
            </div>

            <div className={"col-span-4"}>
              <label className={"text-black"}>Mahalla, Ko‘cha, Uy*</label>{" "}
              <br />
              <input
                type="text"
                className="px-[12px] py-[12px] placeholder:text-[#D9D9D9] bg-[#F0F0F0] rounded-[6px] mt-[4px] text-sm w-full"
                placeholder="Mahalla, Ko‘cha, Uyni kiriting"
              />
            </div>
          </div>
          <div className="col-span-12 mt-[12px]">
            <iframe
              className="rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.008160154168!2d69.25198194999999!3d41.330569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1728280207464!5m2!1sru!2s"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default Index;
