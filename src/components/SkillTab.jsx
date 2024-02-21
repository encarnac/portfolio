import { motion } from "framer-motion";

const SkillTab = ({ index, skill, tab, selectTab }) => {
  const tabVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.li
      onClick={() => selectTab(skill)}
      variants={tabVariants}
      className={`${
        tab === skill
          ? "before:opacity-100 before:-translate-y-2 "
          : "before:opacity-0"
      } group relative cursor-pointer h-full w-full backdrop-blur-none before:absolute before:-bottom-[.3rem] before:-left-[.3rem] before:z-[-1] before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br  before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:from-[#68A3EB] before:to-[#F38BBB] before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:before:rounded-2xl`}
    >
      <div
        className={`${
          tab === skill ? "-translate-y-2 " : ""
        } flex h-full flex-col justify-center items-center gap-y-1 rounded-xl bg-[#E3E8EE] px-0 py-3 transition duration-300 group-hover:-translate-y-2 group-hover:duration-300 dark:bg-[#211e2c] md:gap-y-2 md:rounded-2xl xl:py-8`}
      >
        <div className="mb-px rounded-full bg-[#cfd7e5] p-3 transition-colors dark:bg-[#2b2841] lg:p-5">
          <img src={skill.image} className="w-5 md:w-9" />
        </div>

        <h4 className="relative text-base font-bold text-[#5b5662] dark:text-[#D4D3D8] sm:text-sm md:text-base lg:text-lg">
          {skill.category}
        </h4>

        <spans
          className={`${
            tab === skill
              ? "bg-[#DE8ABB] dark:bg-[#7943ED]"
              : "bg-[#DE8ABB]/30 dark:bg-[#7943ED]/20"
          } h-[.3rem] transition duration-100 ease-in w-10 rounded-sm md:mt-0`}
        ></spans>
      </div>
    </motion.li>
  );
};

export default SkillTab;
