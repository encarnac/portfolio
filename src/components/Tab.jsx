import React from "react";
import { motion } from "framer-motion";

export const Tab = ({ active, selectTab, tabName }) => {
  return (
    <button
      key={tabName}
      onClick={() => selectTab(tabName)}
      className={`${
        active === tabName
          ? "text-[#5E5965] dark:text-[#C7BFD3]"
          : "dark:text-[#b7b0c2]/70 text-[#726C7B]/70   hover:text-[#5E5965] dark:hover:text-[#C7BFD3]"
      }  transition duration-300 px-px md:px-8 relative text-sm sm:text-base md:text-lg font-bold py-2`}
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
