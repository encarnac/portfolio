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
          : "dark:text-[#b7b0c2]/70 text-[#726C7B]/70 hover:text-[#5B5662] dark:hover:text-[#CCC3D7]"
      } font-mono transition duration-300 px-1 md:px-4 relative text-base lg:text-lg font-semibold py-3`}
    >
      <span className="relative">{tabName} </span>

      {active === tabName && (
        <motion.div
          layout
          className="absolute -bottom-[.22rem] left-0 h-[.45rem] w-fit rounded-md bg-[#F38BBB] dark:bg-[#7943ed]"
          animate={{ width: "100%", transition: { duration: 0.4 } }}
        />
      )}
    </button>
  );
};
