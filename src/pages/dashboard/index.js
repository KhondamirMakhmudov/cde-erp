import Dashboard from "@/layouts/dashboard";
import React from "react";
import Image from "next/image";
import SearchBar from "@/components/search/sidebar-search";
import Header from "@/components/header/header";
import { get } from "lodash";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import Sidebar from "@/components/sidebar";

const Index = () => {
  return (
    <div className="flex bg-[#FCFCFC] gap-x-[12px] p-[12px] min-h-screen">
      <Sidebar />

      <main className="w-full">
        <Header />
        <section className={""}></section>
      </main>
    </div>
  );
};

export default Index;
