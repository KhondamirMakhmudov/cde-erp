import Dashboard from "@/layouts/dashboard";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AppealCard from "@/components/appeal-card";
import SearchBar from "@/components/search/sidebar-search";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  const [tab, setTab] = useState("asosiy-hujjatlar");

  const [attachedData, setAttachedData] = useState(false);

  const [documents, setDocuments] = useState(false);

  const handleTab = (tabs) => {
    setTab(tabs);
  };
  return (
    <Dashboard title={"Murojaatlar"}>
      <motion.div
        initial={{ opacity: 0, translateY: "100px" }}
        animate={{ opacity: 1, translateY: "0px" }}
        className="grid grid-cols-12 gap-x-[12px] mt-[12px]"
      >
        <div className="col-span-4 bg-white w-full rounded-xl border border-[#F5F5F5] px-[16px] py-[12px]">
          <SearchBar searchPlaceholder="Murojaat raqamini kiriting" />

          <ul className="py-[12px] space-y-[16px]">
            <li>
              <AppealCard
                url={`/appeals/221627`}
                numberOfAppeal={"221627"}
                status={"Yangi"}
                title={
                  "Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta taʼlim maktabi binosini joriy tamirlash"
                }
                company={"Farg’ona Komunal Loyiha MChJ"}
              />
            </li>

            <li>
              <AppealCard
                numberOfAppeal={"221627"}
                status={"Yangi"}
                title={
                  "Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta taʼlim maktabi binosini joriy tamirlash"
                }
                company={"Farg’ona Komunal Loyiha MChJ"}
              />
            </li>

            <li>
              <AppealCard
                numberOfAppeal={"221627"}
                status={"Yangi"}
                title={
                  "Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta taʼlim maktabi binosini joriy tamirlash"
                }
                company={"Farg’ona Komunal Loyiha MChJ"}
              />
            </li>

            <li>
              <AppealCard
                numberOfAppeal={"221627"}
                status={"Yangi"}
                title={
                  "Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta taʼlim maktabi binosini joriy tamirlash"
                }
                company={"Farg’ona Komunal Loyiha MChJ"}
              />
            </li>

            <li>
              <AppealCard
                numberOfAppeal={"221627"}
                status={"Yangi"}
                title={
                  "Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta taʼlim maktabi binosini joriy tamirlash"
                }
                company={"Farg’ona Komunal Loyiha MChJ"}
              />
            </li>

            <li>
              <AppealCard
                numberOfAppeal={"221627"}
                status={"Yangi"}
                title={
                  "Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta taʼlim maktabi binosini joriy tamirlash"
                }
                company={"Farg’ona Komunal Loyiha MChJ"}
              />
            </li>
          </ul>
        </div>

        <div className="col-span-8">
          <Link
            href={"/appeals"}
            className="flex space-x-[8px] items-center py-[4px]"
          >
            <Image src={"/images/left.png"} alt="left" width={24} height={24} />
            <p className="text-lg text-black font-medium">
              Fargona viloyati tumani 15-sonli umumiy o’rta taʼlim maktabi
              binosini joriy tamirlash
            </p>
          </Link>

          <div className="bg-white w-full rounded-xl border border-[#F5F5F5] py-[8px] px-[12px] flex gap-x-[12px]">
            <button
              onClick={() => handleTab("asosiy-hujjatlar")}
              className={`${
                tab === "asosiy-hujjatlar"
                  ? "text-[#01565B] bg-[#E6EEEF]"
                  : "text-black bg-transparent"
              } px-[12px] py-[8px] font-medium rounded-lg active:scale-110 scale-100 transition-all duration-200`}
            >
              Asosiy ma&apos;lumotlar
            </button>

            <button
              onClick={() => handleTab("hujjatlar")}
              className={`${
                tab === "hujjatlar"
                  ? "text-[#01565B] bg-[#E6EEEF]"
                  : "text-black bg-transparent"
              } px-[12px] py-[8px] font-medium rounded-lg active:scale-110 scale-100 transition-all duration-200`}
            >
              Hujjatlar
            </button>
          </div>

          {tab === "asosiy-hujjatlar" && (
            <motion.div
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 1, translateY: "0px" }}
            >
              <div className="bg-white w-full rounded-xl border border-[#F5F5F5] mt-[12px] px-[16px]">
                <h4 className="py-[12px] text-black font-medium">
                  Loyiha haqida ma’lumot
                </h4>

                <ul className="flex flex-col gap-y-[12px] py-[12px]">
                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">Tashkilot:</p>
                    <p className="text-black font-medium col-span-3">
                      Farg’ona Komunal Loyiha MChJ
                    </p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">Qurilish turi:</p>
                    <p className="text-black font-medium col-span-3">
                      Rekonstruksiya
                    </p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">ART:</p>
                    <p className="text-black font-medium col-span-3">
                      76543218
                    </p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">
                      Buyurtmachi turi:
                    </p>
                    <p className="text-black font-medium col-span-3">
                      Davlat tashkiloti
                    </p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">Obʼekt toifasi:</p>
                    <p className="text-black font-medium col-span-3">II</p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">Ish hajmi:</p>
                    <p className="text-black font-medium col-span-3">
                      2 400 m3
                    </p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">Smeta qiymati:</p>
                    <p className="text-black font-medium col-span-3">
                      4 400 000 000 so‘m
                    </p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">Loyihachi INN:</p>
                    <p className="text-black font-medium col-span-3">
                      876321549
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-white w-full rounded-xl border border-[#F5F5F5] mt-[12px] px-[16px]">
                <h4 className="py-[12px] text-black font-medium">
                  Obyekt manzili
                </h4>

                <div className="py-[16px]">
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

                <ul className="flex flex-col gap-y-[12px] pb-[12px]">
                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">Viloyat:</p>
                    <p className="text-black font-medium col-span-3">
                      Farg‘ona viloyati
                    </p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">Tuman:</p>
                    <p className="text-black font-medium col-span-3">
                      Uzbekiston tumani
                    </p>
                  </li>

                  <li className="grid grid-cols-4">
                    <p className="text-[#8C8C8C] col-span-1">
                      Mahalla, Ko‘cha, Uy:
                    </p>
                    <p className="text-black font-medium col-span-3">
                      Alisher Navoiy ko‘chasi
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {tab === "hujjatlar" && (
            <motion.div
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 1, translateY: "0px" }}
            >
              <div className=" mt-[12px] ">
                <div className="bg-white w-full rounded-tr-xl rounded-tl-xl border border-[#F5F5F5]">
                  <div
                    onClick={() => setAttachedData(!attachedData)}
                    className="flex items-center justify-between cursor-pointer px-[16px]"
                  >
                    <h4 className="py-[12px] text-black font-medium">
                      Biriktirilgan maʼlumotlar
                    </h4>

                    <Image
                      src={"/images/left.png"}
                      alt="left"
                      width={24}
                      height={24}
                      className={` ${
                        attachedData ? "-rotate-90" : "rotate-90"
                      } transition-all duration-300`}
                    />
                  </div>
                  {attachedData && (
                    <motion.div
                      initial={{ opacity: 0, translateY: "10px" }}
                      animate={{ opacity: 1, translateY: "0px" }}
                      transition={{ duration: 0.3 }}
                      className="rounded-br-xl rounded-bl-xl border border-[#F5F5F5] border-t-0"
                    >
                      <div className="px-[16px] bg-white ">
                        <h4 className="py-[12px]">
                          Obʼektni rekonstruksiya qilish uchun asos bo‘lgan
                          normativ hujjat
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          O‘rnatilgan tartibda tegishli idora va tashkilotlar
                          bilan tasdiqlangan loyihalash topshirig‘i (qachon va
                          kim tomonidan)
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          Qurilish maydonining muhandislik-geologik tadqiqotlari
                          natijalari to‘g‘risidagi xulosalar
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          Loyihalashning avvalgi bosqichda ko‘rib chiqilgan va
                          tasdiqlangan materiallar va hujjatlar (tegishli
                          hollarda)
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          Obʼekt joylashgan hududdagi qurilish bosh boshqarmasi
                          tomonidan berilgan kengash xulosasi VMQ-370
                          18.05.2018y qarorga asosan
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          Ekologiya va atrof muhitni muhofaza qilish davlat
                          qo‘mitasi hududiy organlarining eʼtirozlarsiz xulosasi
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          Ilmiy-tadqiqot kengashi xulosasi (tegishli hollarda)
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          Tarmoq xulosasi (mavjud hollarda)
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="mt-[12px] bg-white w-full rounded-tr-xl rounded-tl-xl border border-[#F5F5F5]">
                  <div
                    onClick={() => setDocuments(!documents)}
                    className="flex items-center justify-between cursor-pointer px-[16px]"
                  >
                    <h4 className="py-[12px] text-black font-medium">
                      Loyiha smeta xujjatlari
                    </h4>

                    <Image
                      src={"/images/left.png"}
                      alt="left"
                      width={24}
                      height={24}
                      className={` ${
                        documents ? "-rotate-90" : "rotate-90"
                      } transition-all duration-300`}
                    />
                  </div>

                  {documents && (
                    <motion.div
                      initial={{ opacity: 0, translateY: "10px" }}
                      animate={{ opacity: 1, translateY: "0px" }}
                      transition={{ duration: 0.3 }}
                      className="rounded-br-xl rounded-bl-xl border border-[#F5F5F5] border-t-0"
                    >
                      <div className="px-[16px] bg-white ">
                        <h4 className="py-[12px]">
                          Loyihaning umumiy tushuntirish xati, shuningdek
                          birlamchi hujjatlar (Poyasnitelыnaya zapiska)
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">Asosiy reja (GP)</h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          Arxitektura va qurilish yechimlari (AR, KJ, AS, KM)
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">
                          Tarmoq muhandisligi (EO, PS, OV, VK, NVK, va boqalar)
                        </h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-[16px] bg-white">
                        <h4 className="py-[12px]">Smeta (baxolash) qismi</h4>

                        <div className="grid grid-cols-2 gap-x-[12px] py-[12px]">
                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>

                          <div className="col-span-1 flex gap-x-[8px] border p-[8px] bg-[#FCFCFC] border-[#F5F5F5] rounded-[6px]">
                            <div className=" bg-[#E6EEEF] py-[13px] px-[14px] rounded-[6px] ">
                              <Image
                                src={"/icons/file-check.svg"}
                                alt="upload"
                                width={12}
                                height={15}
                                className=""
                              />
                            </div>

                            <div className="">
                              <h3 className="text-sm">
                                Loyiha normativ hujjat.docx
                              </h3>
                              <p className="text-xs text-[#595959]">314 kb.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </Dashboard>
  );
};

export default Index;

{
  /* <h4 className="p-[16px] text-black font-medium">
Loyiha smeta hujjatlari
</h4>

<div className="h-[1px] w-full bg-[#F5F5F5]"></div> */
}
