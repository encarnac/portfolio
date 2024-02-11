import { motion } from "framer-motion";
import {
  SKILLS_DATA_SORTED,
  SKILLS_DATA_UNSORTED,
} from "../constants/SkillsData";

const skillCard = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const skillsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="mb-12 w-full">
      <div className="relative mb-8 flex flex-col items-center justify-center py-3">
        <h4 className="l font-mono text-lg tracking-widest text-[#5b5662]/60 dark:text-white/40 lg:text-xl">
          [02]skills
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-white/80 lg:text-4xl">
          {/* <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]"> */}
          What I Use
          {/* </span> */}
        </h3>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={skillsContainer}
        className="grid grid-cols-2 justify-items-center gap-3 md:grid-cols-4 lg:gap-4 xl:gap-8 2xl:gap-14"
      >
        {SKILLS_DATA_SORTED.map((skill, index) => (
          <motion.div
            key={index}
            transition={{ type: "spring", stiffness: 100 }}
            variants={skillCard}
            className="relative w-full rounded-2xl backdrop-blur-none before:absolute before:-bottom-[.4rem] before:-left-[.4rem] before:z-[-1] before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE]"
          >
            <div className="flex h-full flex-col items-center justify-start gap-y-1 rounded-2xl bg-[#E3E8EE] px-0 py-4 transition duration-300 hover:-translate-y-2 hover:duration-300 dark:bg-[#211e2c] xl:py-8">
              <div className="mb-1 rounded-full bg-[#cfd7e5] p-3 dark:bg-[#2b2841] md:p-5">
                <img src={skill.image} className="w-10" />
              </div>
              <h4 className="relative text-base font-bold text-[#676070] dark:text-white lg:text-xl">
                {skill.category}
              </h4>
              <span className="mt-3 h-[7px] w-14 rounded-full bg-[#AD99DB] dark:bg-[#7943ED]"></span>

              <ul className="grid grid-cols-2 justify-center gap-2 px-2 py-3 text-[.65rem] text-[#6B6573] dark:text-[#CCC3D7] sm:px-2 sm:text-sm lg:text-base">
                {skill.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-items-center gap-y-1 px-2 py-1"
                  >
                    <span className="col-span-2">{tool.name}</span>
                    {tool.logo}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
