import React from "react";
import { motion } from "framer-motion";

export const Tab = ({ active, selectTab, tabName }) => {
  return (
    <button
      key={tabName}
      onClick={() => selectTab(tabName)}
      className={`${
        active === tabName
          ? "text-[#6F6977] dark:text-[#b7b0c2]"
          : "dark:text-[#b7b0c2]/70 text-[#726C7B]/70   hover:text-[#726C7B] dark:hover:text-[#6F6977]"
      }  transition duration-300  px-2 md:px-8 relative text-lg font-bold md:text-xl py-2`}
    >
      <span className="relative">{tabName} </span>

      {active === tabName && (
        <motion.div
          layout
          className="absolute -bottom-[.2rem] left-0 h-[.3rem] w-fit rounded-3xl bg-[#F38BBB] dark:bg-[#7943ed]"
          animate={{ width: "100%", transition: { duration: 0.3 } }}
        />
      )}
    </button>
  );
};
