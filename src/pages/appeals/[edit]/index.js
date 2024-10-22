import React from "react";
import { motion } from "framer-motion";
import AppealCard from "@/components/appeal-card";

const Index = () => {
  return (
    <Dashboard>
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
                url={`/appeals/221626`}
                numberOfAppeal={"221626"}
                status={"Yangi"}
                title={
                  "Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta taʼlim maktabi binosini joriy tamirlash"
                }
                company={"Farg’ona Komunal Loyiha MChJ"}
              />
            </li>

            <li>
              <AppealCard
                url={`/appeals/221625`}
                numberOfAppeal={"221625"}
                status={"Yangi"}
                title={
                  "Fargona viloyat Uzbekiston tumani 15-sonli umumiy urta taʼlim maktabi binosini joriy tamirlash"
                }
                company={"Farg’ona Komunal Loyiha MChJ"}
              />
            </li>

            <li>
              <AppealCard
                url={`/appeals/221624`}
                numberOfAppeal={"221624"}
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
      </motion.div>
    </Dashboard>
  );
};

export default Index;
