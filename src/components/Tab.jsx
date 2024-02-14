import { motion } from "framer-motion";

export const Tab = ({ active, selectTab, tabName }) => {
  return (
    <button
      key={tabName}
      onClick={() => selectTab(tabName)}
      className={`${
        active === tabName
          ? "text-[#5B5662] dark:text-[#c3c3c4]"
          : "dark:text-[#c3c3c4]/60 text-[#5B5662]/70 hover:text-[#5B5662] dark:hover:text-[#c3c3c4]"
      } font-mono transition duration-300 px-1 md:px-4 relative text-base lg:text-lg font-semibold py-2`}
    >
      <span className="relative">{tabName} </span>

      {active === tabName && (
        <motion.div
          layout
          className="absolute -bottom-[.22rem] left-0 h-[.3rem] w-fit rounded-sm bg-[#de8abb] dark:bg-[#7943ed]"
          animate={{ width: "100%", transition: { duration: 0.4 } }}
        />
      )}
    </button>
  );
};
