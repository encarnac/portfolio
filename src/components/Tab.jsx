import React from "react";

export const Tab = ({ active, selectTab, text }) => {
  const buttonClasses = active ? "dark:bg-[#2d2096] bg-slate-100" : "";
  return (
    <button
      onClick={selectTab}
      className={`${buttonClasses} h-10 rounded-full px-3`}
    >
      <span className="">{text}</span>
    </button>
  );
};
