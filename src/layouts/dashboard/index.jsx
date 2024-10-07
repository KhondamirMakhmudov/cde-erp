import react from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

const Dashboard = ({ children }) => {
  return (
    <div className="flex bg-[#FCFCFC] gap-x-[12px] p-[12px] min-h-screen">
      <Sidebar />

      <main className="w-full flex flex-col gap-y-[12px]">
        <Header />
        <section className="">{children}</section>
      </main>
    </div>
  );
};

export default Dashboard;
