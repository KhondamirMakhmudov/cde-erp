import AppealCard from "@/components/appeal-card";
import Calendar from "@/components/calendar";
import Diagram from "@/components/diagram";
import SearchBar from "@/components/search/sidebar-search";
import Dashboard from "@/layouts/dashboard";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Index = () => {
  const appealsData = [0, 3, 4, 6, 2, 1, 0, 5, 7];
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
        <div className="col-span-8 ">
          <div className="bg-white w-full rounded-xl border border-[#F5F5F5] px-[16px] py-[14px]">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Barcha murojaatlar</h3>

              <button className="text-sm py-[6px] px-[10px] bg-[#FCFCFC] border border-[#F5F5F5] rounded-[6px]">
                Recent Hiring
              </button>
            </div>

            <Diagram />
          </div>

          <div className="grid grid-cols-6 gap-x-[12px]">
            <div className="col-span-4 bg-white w-full rounded-xl border border-[#F5F5F5] px-[16px] py-[12px] mt-[12px]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Murojaatlar kelishi</h3>

                <button className="text-sm py-[6px] px-[10px] bg-[#FCFCFC] border border-[#F5F5F5] rounded-[6px]">
                  Oy
                </button>
              </div>

              <div className="py-[8px]">
                <h2 className="text-[24px] font-medium mb-[4px]">Yanvar</h2>
                <p className="text-sm text-[#8C8C8C]">
                  Oylar bo&apos;yicha murojaatlar kelishi miqdori
                </p>
              </div>

              {/* <div>
                <Calendar appeals={appealsData} />
              </div> */}
            </div>

            <div className="col-span-2  mt-[12px]">
              <div className="bg-white w-full rounded-xl border border-[#F5F5F5] px-[16px] py-[12px]">
                <div className="flex space-x-[12px]">
                  <div className="p-[15px] bg-[#E6EEEF] rounded-lg">
                    <Image
                      src={"/icons/clock.svg"}
                      alt="clock"
                      width={18}
                      height={18}
                      className="bg"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-black">Yakunlanayotgan</p>
                    <h4 className="text-lg text-black font-medium">Muddatli</h4>
                  </div>
                </div>

                <div className="mt-[12px]">
                  <h3 className="text-base text-[#FE4D4F] mb-[8px]">Bugun</h3>

                  <ul className="">
                    <li className="flex justify-between px-[8px] py-[6px]">
                      <p className="line-clamp-1  max-w-[250px]">
                        Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta
                        taʼlim maktabi binosini joriy tamirlash
                      </p>

                      <button className="flex items-center text-sm text-[#1990FF]">
                        <p>Ko’rish</p>
                        <Image
                          src={"/icons/arrow-right.svg"}
                          alt="clock"
                          width={13.5}
                          height={11.25}
                          className="ml-[4px] p"
                        />
                      </button>
                    </li>

                    <li className="flex justify-between px-[8px] py-[6px]">
                      <p className="line-clamp-1 max-w-[250px]">
                        Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta
                        taʼlim maktabi binosini joriy tamirlash
                      </p>

                      <button className="flex items-center text-sm text-[#1990FF]">
                        <p>Ko’rish</p>
                        <Image
                          src={"/icons/arrow-right.svg"}
                          alt="clock"
                          width={13.5}
                          height={11.25}
                          className="ml-[4px] p"
                        />
                      </button>
                    </li>

                    <li className="flex justify-between px-[8px] py-[6px]">
                      <p className="line-clamp-1  max-w-[250px]">
                        Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta
                        taʼlim maktabi binosini joriy tamirlash
                      </p>

                      <button className="flex items-center text-sm text-[#1990FF]">
                        <p>Ko’rish</p>
                        <Image
                          src={"/icons/arrow-right.svg"}
                          alt="clock"
                          width={13.5}
                          height={11.25}
                          className="ml-[4px] p"
                        />
                      </button>
                    </li>

                    <li className="flex justify-between px-[8px] py-[6px]">
                      <p className="line-clamp-1  max-w-[250px]">
                        Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta
                        taʼlim maktabi binosini joriy tamirlash
                      </p>

                      <button className="flex items-center text-sm text-[#1990FF]">
                        <p>Ko’rish</p>
                        <Image
                          src={"/icons/arrow-right.svg"}
                          alt="clock"
                          width={13.5}
                          height={11.25}
                          className="ml-[4px] p"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white w-full rounded-xl border border-[#F5F5F5] px-[16px] py-[12px]">
                <div className="mb-[12px]">
                  <h3 className="text-lg font-medium text-black">
                    Bugungi murojaatlar
                  </h3>
                </div>

                <div className="mt-[12px]">
                  <h4 className="text-sm text-[#8C8C8C] mb-[4px]">
                    Bugun ko’rib chiqilganlar
                  </h4>

                  <span className="text-2xl font-medium">
                    <CountUp end={120} duration={3} />
                  </span>
                </div>

                <div className="w-full bg-[#F5F5F5] h-[1px] my-[16px]"></div>

                <div className="grid grid-cols-2 gap-x-[8px]">
                  <div className="col-span-1">
                    <div className="flex gap-x-[4px] items-end mb-[4px]">
                      <p className="text-lg text-black font-medium ">
                        <CountUp end={78} duration={3} />
                      </p>
                      <p className="text-[#53C31B] bg-[#EEF9E8] text-xs py-[2px] px-[8px] rounded-lg">
                        68%
                      </p>
                    </div>

                    <p className="text-sm text-[#595959]">Tasdiqlandi</p>
                  </div>

                  <div className="col-span-1">
                    <div className="flex gap-x-[4px] items-end mb-[4px]">
                      <p className="text-lg text-black font-medium ">
                        <CountUp end={42} duration={3} />
                      </p>
                      <p className="text-[#FE4D4F] bg-[#FFEDED] text-xs py-[2px] px-[8px] rounded-lg">
                        32%
                      </p>
                    </div>

                    <p className="text-sm text-[#595959]">Tasdiqlanmadi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Dashboard>
  );
};

export default Index;
