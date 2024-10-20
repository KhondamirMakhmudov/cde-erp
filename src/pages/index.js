import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [tab, setTab] = useState("one-id");

  const selectTab = (tab) => {
    setTab(tab);
  };
  // mobile id
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  // eri
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="flex">
      <div className="w-2/5 min-h-screen flex items-center justify-center">
        <div className="p-[20px] max-w-[426px]">
          <h6 className="font-medium text-[24px] mb-[4px] text-center">
            Platformaga kirish
          </h6>
          <p className="text-[#393C4E] font-normal mb-[35px] flex justify-center items-center text-center">
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
                  className="px-[12px] py-[10px] w-full border border-[#F0F0F0] rounded-[6px] mt-[4px] mb-[16px] placeholder:text-sm"
                />
              </div>

              <div>
                <label>Parol</label>
                <div className="flex mb-[35px] relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Parolni kiriting"
                    className="px-[12px] py-[10px]  w-full border border-[#F0F0F0] rounded-[6px] mt-[4px] placeholder:text-sm"
                  />
                  <div className="absolute right-0 top-[18px]   mr-[10px]">
                    <Image
                      onClick={togglePasswordVisibility}
                      src={
                        isPasswordVisible
                          ? "/images/closed_eye.png"
                          : "/images/eye.png"
                      }
                      alt="eye"
                      width={18}
                      height={18}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <Link href={"/dashboard"}>
                <button className="bg-[#01565B] hover:bg-[#013D41] active:bg-[#002426] text-white w-full py-[10px] rounded-[8px] mb-[16px] transition-all duration-300">
                  Kirish
                </button>
              </Link>

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
                  className="px-[12px] py-[10px] w-full border text-black border-[#F0F0F0] rounded-[6px] mt-[4px] mb-[35px] placeholder:text-sm "
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
              <div className="relative w-full mb-[35px]">
                <p>ERI kaliti</p>
                <div
                  className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <span
                    className={` text-sm ${
                      selectedOption ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {selectedOption || "ERI kalitini tanlang"}
                  </span>
                  <Image
                    src={"/images/down.png"}
                    alt="down"
                    width={20}
                    height={20}
                  />
                </div>

                {isOpen && (
                  <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {options.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="bg-[#01565B] hover:bg-[#013D41] active:bg-[#002426] text-white w-full py-[10px] rounded-[8px] mb-[16px] transition-all duration-300">
                Kirish
              </button>
            </motion.form>
          )}
        </div>
      </div>
      <div className=" w-3/5  m-[12px]">
        <div
          className=" h-screen bg-no-repeat p-[24px] bg-cover"
          style={{ backgroundImage: "url(/images/bg-auth.png)" }}
        >
          <Image src={"/images/Logo.png"} alt="logo" width={103} height={42} />
        </div>
      </div>
    </div>
  );
}
