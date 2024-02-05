import React from "react";
import { motion } from "framer-motion";

export const Tab = ({ active, selectTab, tabName }) => {
  return (
    <button
      key={tabName}
      onClick={() => selectTab(tabName)}
      className={`${
        active === tabName
          ? "text-[#5B5662] dark:text-[#CCC3D7]"
          : "dark:text-[#b7b0c2]/70 text-[#726C7B]/70   hover:text-[#5B5662] dark:hover:text-[#CCC3D7]"
      }  transition duration-300 px-2 md:px-4 relative text-sm sm:text-base md:text-lg font-bold py-2`}
    >
      <span className="relative">{tabName} </span>

      {active === tabName && (
        <motion.div
          layout
          className="absolute -bottom-[.2rem] left-0 h-[.4rem] w-fit rounded-sm bg-[#F38BBB] dark:bg-[#7943ed]"
          animate={{ width: "100%", transition: { duration: 0.4 } }}
        />
      )}
    </button>
  );
};
