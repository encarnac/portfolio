import { motion, AnimatePresence } from "framer-motion";

const ProjectsTab = ({ active, selectFilter, type }) => {
  return (
    <button
      key={type}
      onClick={() => selectFilter(type)}
      className={`${
        active === type
          ? "text-[#5B5662] dark:text-[#c3c3c4]"
          : "dark:text-[#c3c3c4]/60 text-[#5B5662]/70 hover:text-[#5B5662] dark:hover:text-[#c3c3c4]"
      } group transition duration-300 mx-px px-1 md:px-5 relative text-base lg:text-lg font-semibold py-2  `}
    >
      <span className="relative">{type} </span>
      <div className="after:absolute after:-bottom-[.22rem] after:left-0 after:h-[.3rem] after:w-0 after:rounded-sm after:bg-[#de8abb] after:opacity-0 after:transition-all after:duration-500 group-hover:after:w-full group-hover:after:opacity-100 after:dark:bg-[#7943ed]"></div>
      <AnimatePresence>
        {active === type && (
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%", transition: { duration: 0.3 } }}
            exit={{ width: "0%", transition: { duration: 0.2 } }}
            className="absolute -bottom-[.22rem] left-0 h-[.3rem] w-full rounded-sm bg-[#de8abb] dark:bg-[#7943ed]"
          ></motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ProjectsTab;
