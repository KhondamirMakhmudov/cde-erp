import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [tab, setTab] = useState("one-id");

  const selectTab = (tab) => {
    setTab(tab);
  };
  return (
    <div className="flex">
      <div className="w-2/5 min-h-screen flex items-center justify-center">
        <div className="p-[20px]">
          <h6 className="font-medium text-[24px] mb-[4px] text-center">
            Platformaga kirish
          </h6>
          <p className="text-[#393C4E] font-normal mb-[35px] flex justify-center items-center">
            Loyiha-smeta hujjatlarini ekspertizadan o‘tkazish axborot tizimiga
            xush kelibsiz
          </p>

          <div className="flex gap-x-[12px] justify-center items-center rounded-sm mb-[35px]">
            <button
              onClick={() => selectTab("one-id")}
              className={`${
                tab === "one-id"
                  ? "border-[#01565B] text-black"
                  : "border-[#F0F0F0] text-[#595959]"
              } border  text-center py-[8px] w-[134px] rounded-[4px]`}
            >
              One ID
            </button>

            <button
              onClick={() => selectTab("mobile-id")}
              className={`${
                tab === "mobile-id"
                  ? "border-[#01565B] text-black"
                  : "border-[#F0F0F0] text-[#595959]"
              } border  text-center py-[8px] w-[134px] rounded-[4px]`}
            >
              Mobile-ID
            </button>

            <button
              onClick={() => selectTab("eri")}
              className={`${
                tab === "eri"
                  ? "border-[#01565B] text-black"
                  : "border-[#F0F0F0] text-[#595959]"
              } border  text-center py-[8px] w-[134px] rounded-[4px]`}
            >
              ERI
            </button>
          </div>

          {tab === "one-id" && (
            <motion.form
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              className=""
            >
              <div>
                <label>Login</label>
                <input
                  type="text"
                  placeholder="Loginni kiriting"
                  className="px-[12px] py-[10px] w-full border border-[#F0F0F0] rounded-[6px] mt-[4px] mb-[16px]"
                />
              </div>

              <div>
                <label>Parol</label>
                <input
                  type="password"
                  placeholder="Parolni kiriting"
                  className="px-[12px] py-[10px] w-full border border-[#F0F0F0] rounded-[6px] mt-[4px] mb-[35px]"
                />
              </div>

              <button className="bg-[#01565B] hover:bg-[#013D41] active:bg-[#002426] text-white w-full py-[10px] rounded-[8px] mb-[16px] transition-all duration-300">
                Kirish
              </button>

              <Link
                href={"#"}
                className="text-[#8C8C8C] flex items-center justify-center "
              >
                Login yoki parolni unutdingizmi?
              </Link>
            </motion.form>
          )}
          {tab == "mobile-id" && (
            <motion.form
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 1, translateY: "0px" }}
            >
              <div>
                <label>Telefon raqam</label>
                <input
                  type="text"
                  placeholder="Telefon raqamni kiriting"
                  className="px-[12px] py-[10px] w-full border text-black border-[#F0F0F0] rounded-[6px] mt-[4px] mb-[35px]"
                />
              </div>
              <p className="text-[#595959] text-sm mb-[16px]">
                Tizimga kirish uchun Mobile-ID xizmati telefon raqamingizga
                ulangan bo‘lishi kerak.
              </p>

              <button className="bg-[#01565B] hover:bg-[#013D41] active:bg-[#002426] text-white w-full py-[10px] rounded-[8px] mb-[16px] transition-all duration-300">
                SMS kodni olish
              </button>
            </motion.form>
          )}

          {tab === "eri" && (
            <motion.form
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 1, translateY: "0px" }}
            >
              {" "}
              <div>
                <label>ERI kaliti</label>
                <input
                  type="text"
                  placeholder="ERI kalitini tanlang"
                  className="px-[12px] py-[10px] w-full border text-black border-[#F0F0F0] rounded-[6px] mt-[4px] mb-[35px]"
                />
              </div>
              <button className="bg-[#01565B] hover:bg-[#013D41] active:bg-[#002426] text-white w-full py-[10px] rounded-[8px] mb-[16px] transition-all duration-300">
                Kirish
              </button>
            </motion.form>
          )}
        </div>
      </div>
      <div
        className="w-3/5 h-screen bg-no-repeat p-[12px] bg-cover"
        style={{ backgroundImage: "url(/images/bg-auth.png)" }}
      >
        Hello
      </div>
    </div>
  );
}
