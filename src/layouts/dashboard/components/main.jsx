// components/Main.js
import React from "react";

const Main = ({ children }) => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-xl font-semibold">Dashboard Header</h1>
      </header>
      <section className="p-6">{children}</section>
    </div>
  );
};

export default Main;
