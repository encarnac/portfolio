import React from "react";
import { motion } from "framer-motion";

export const Tab = ({ active, selectTab, text }) => {
  // const buttonClasses = active ? "" : "";
  return (
    <button
      key={text}
      onClick={() => selectTab(text)}
      className={`${
        active === text ? "" : "hover:text-white/80"
      } relative h-9 text-sm rounded-full px-3 transition focus-visible:outline-2`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {active === text && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white/50 dark:bg-[#7943ed]/30"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {text}
    </button>
  );
};
