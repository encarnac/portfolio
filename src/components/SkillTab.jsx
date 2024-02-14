import { motion } from "framer-motion";

const skillCard = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SkillTab = ({ index, skill, tab, selectTab }) => {
  return (
    <motion.div
      onClick={() => selectTab(skill)}
      key={index}
      transition={{ type: "spring", stiffness: 50 }}
      variants={skillCard}
      className={`${
        tab === skill
          ? "before:opacity-100 before:-translate-y-2 "
          : "before:opacity-0"
      } relative cursor-pointer h-full w-full backdrop-blur-none before:absolute before:-bottom-[.3rem] before:-left-[.3rem] before:z-[-1] before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:before:rounded-2xl`}
    >
      <div
        className={`${
          tab === skill ? "-translate-y-2 " : ""
        } flex h-full flex-col items-center justify-start gap-y-1 rounded-xl bg-[#E3E8EE] px-0 py-3 transition duration-300 hover:-translate-y-2 hover:duration-300 dark:bg-[#211e2c] md:gap-y-2 md:rounded-2xl xl:py-8`}
      >
        <div className="mb-px rounded-full bg-[#cfd7e5] p-3 dark:bg-[#2b2841] lg:p-5">
          <img src={skill.image} className="w-5 md:w-9" />
        </div>

        <h4 className="relative text-base font-bold text-[#5b5662] dark:text-[#D4D3D8] sm:text-sm md:text-base lg:text-lg">
          {skill.category}
        </h4>

        <spans
          className={`${
            tab === skill
              ? "bg-[#AD99DB] dark:bg-[#7943ED]"
              : "bg-[#AD99DB]/30 dark:bg-[#7943ED]/20"
          } h-[.3rem] transition duration-100 ease-in w-10 rounded-sm md:mt-0`}
        ></spans>
      </div>
    </motion.div>
  );
};

export default SkillTab;
