import React from "react";
import SideBar from "./components/sidebar";
import Header from "./components/header";

const Dashboard = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12 bg-[#FCFCFC]">
        <SideBar />
        <main className="col-span-9">
          <Header />
          <section className={"bg-[#F4F8FA] min-h-screen"}>{children}</section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
