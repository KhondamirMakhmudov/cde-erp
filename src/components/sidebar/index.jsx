import React from "react";
import Image from "next/image";
import SearchBar from "../search/sidebar-search";
import Link from "next/link";
import { get } from "lodash";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";

const sideBarMenuData = [
  {
    id: 1,
    title: "Murojaatlar",
    url: "/appeals",
    quantity: 100,
  },
  {
    id: 2,
    title: "Mening hisoblarim",
    url: "/dashboard",
    quantity: 10,
  },

  {
    id: 3,
    title: "Billing",
    url: "/dashboard",
    quantity: 3,
  },

  {
    id: 4,
    title: "Mening xatlarim",
    url: "/dashboard",
    quantity: 56,
  },

  {
    id: 5,
    title: "Eʼlonlar",
    url: "/dashboard",
    quantity: 32,
  },
  {
    id: 6,
    title: "Bilimlar bazasi",
    url: "/dashboard",
    quantity: 0,
  },
];

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleProfile = () => setOpen(!open);
  return (
    <div className="w-[270px] flex flex-col !bg-white border border-[#F5F5F5] rounded-xl p-[8px]">
      <Image src={"/images/Logo.png"} alt="logo" width={103} height={42} />

      <SearchBar />

      <button className=" bg-[#01565B]  w-full py-[12px] gap-x-[12px] flex justify-center items-center rounded-[8px] mb-[8px]">
        <Image src={"/images/plus.png"} alt="plus" width={18} height={18} />
        <p className="text-white text-sm font-medium">
          Yangi murojaat qo’shish
        </p>
      </button>

      <ul className="flex flex-grow flex-col gap-y-[8px]">
        {sideBarMenuData.map((item) => (
          <li
            key={get(item, "id")}
            className={clsx("flex w-full items-center rounded-sm p-[8px] ", {
              "bg-[#E6EEEF] text-[#01565B]": selectedId === get(item, "id"),
              "bg-transparent text-black": selectedId !== get(item, "id"),
            })}
            onClick={() => setSelectedId(get(item, "id"))}
          >
            <Link
              href={"#"}
              className={clsx("flex gap-x-[10px] rounded-sm w-full")}
            >
              <Image
                src={
                  selectedId === get(item, "id")
                    ? "/icons/active-file.svg"
                    : "/icons/file.svg"
                }
                alt="logo"
                width={15}
                height={18}
                layout="intrinsic"
              />
              <p>{get(item, "title")}</p>
            </Link>

            <p
              className={clsx(
                "text-xs  py-[4px] px-[4px] max-w-[32px] rounded-[6px] w-full text-center",
                {
                  "bg-[#B0CBCC] text-[#01565B]": selectedId === get(item, "id"),
                  "bg-[#01565B] text-white": selectedId !== get(item, "id"),
                }
              )}
            >
              {get(item, "quantity")}
            </p>
          </li>
        ))}
      </ul>

      <div className="relative w-full">
        <button
          onClick={toggleProfile}
          className="p-[8px] flex justify-between items-center w-full border border-[#F5F5F5] rounded-lg"
        >
          <div className="flex text-start gap-x-[8px]">
            <Image
              src={"/icons/avatar.svg"}
              alt="logo"
              width={48}
              height={48}
            />

            <div>
              <h4 className="font-medium text-black">Utkir Musaboev</h4>
              <p className="text-sm text-[#8C8C8C]">Ekspert</p>
            </div>
          </div>

          <Image
            src={"/images/left.png"}
            alt="left"
            width={18}
            height={18}
            className={`${
              open ? "rotate-90" : "-rotate-90"
            } transition-all duration-300`}
          />
        </button>

        {open && (
          <motion.div
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            exit={{ opacity: 0, translateY: "10px" }}
            className="absolute -top-[85px]  left-0 right-0 "
          >
            <div className="border rounded-lg gap-y-[8px] shadow-md">
              <Link
                href={"#"}
                className="flex p-[8px] hover:bg-[#F5F5F5] items-center justify-between transition-all duration-300"
              >
                <h4>Sozlamalar</h4>
                <Image
                  src={"/icons/settings.svg"}
                  alt="left"
                  width={18}
                  height={18}
                  className="-rotate-90"
                />
              </Link>
              <Link
                href={"#"}
                className="flex p-[8px] hover:bg-[#F5F5F5]  items-center justify-between transition-all duration-300"
              >
                <h4>Chiqish</h4>
                <Image
                  src={"/icons/exit.png"}
                  alt="left"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
