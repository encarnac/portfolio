import React from "react";
import { motion } from "framer-motion";

export const Tab = ({ active, selectTab, tabName }) => {
  return (
    <button
      key={tabName}
      onClick={() => selectTab(tabName)}
      className={`${
        active === tabName
          ? "text-stone-600 dark:text-[#b7b0c2]"
          : "dark:text-[#b7b0c2]/70 text-stone-500 transition duration-300 hover:text-stone-700 dark:hover:text-[#b7b0c2]"
      } relative h-9  rounded-3xl px-2 sm:px-4 md:px-8 transition focus-visible:outline-2`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {active === tabName && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-white shadow-sm dark:bg-[#211b2d]"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        ></motion.div>
      )}
      <span className="relative">{tabName}</span>
    </button>
  );
};
