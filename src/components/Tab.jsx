import React from "react";
import { motion } from "framer-motion";

export const Tab = ({ active, selectTab, tabName }) => {
  return (
    <button
      key={tabName}
      onClick={() => selectTab(tabName)}
      className={`${
        active === tabName
          ? "text-[#6B6573] dark:text-[#CCC3D7]"
          : "dark:text-[#b7b0c2]/70 text-[#726C7B]/70   hover:text-[#6B6573] dark:hover:text-[#CCC3D7]"
      }  transition duration-300 px-2 md:px-8 relative text-sm sm:text-base md:text-lg font-bold py-2`}
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
