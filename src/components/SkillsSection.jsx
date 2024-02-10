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
        <h4 className="font-mono text-lg tracking-widest text-[#797382]/40 dark:text-white/40 sm:text-xl lg:text-2xl">
          [02]skills
        </h4>
        <h3 className="font-sans text-4xl font-bold lg:text-5xl">
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            What I Do
          </span>
        </h3>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={skillsContainer}
        className="grid grid-cols-1 justify-items-center gap-x-0 gap-y-4 px-0 sm:px-16 md:grid-cols-12 md:gap-x-4 md:gap-y-0 md:px-0 lg:gap-x-6 xl:gap-x-20 2xl:gap-x-28"
      >
        {SKILLS_DATA_SORTED.map((skill, index) => (
          <motion.div
            key={index}
            transition={{ type: "spring", stiffness: 100 }}
            variants={skillCard}
            className="relative rounded-3xl backdrop-blur-none before:absolute before:-bottom-[.4rem] before:-left-[.4rem] before:z-[-1] before:h-full before:w-full before:rounded-3xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:col-span-4"
          >
            <div className="flex h-full flex-col items-center justify-start gap-y-5 rounded-3xl bg-[#E3E8EE] px-0 py-6 transition duration-300 hover:-translate-y-2 hover:duration-300 dark:bg-[#231F2F] lg:py-10">
              <div className="mb-1 rounded-full bg-[#cfd7e5] p-4 dark:bg-[#2b2841] md:p-5">
                <img src={skill.image} className="w-8 md:w-11" />
              </div>
              <h4 className="relative pb-4 text-base font-bold text-[#5b5662] after:absolute after:inset-x-3 after:bottom-0 after:h-2 after:w-3/4 after:rounded-full after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED] md:text-xl">
                {skill.category}
              </h4>
              <ul className="flex-rows flex flex-wrap justify-center gap-x-1 gap-y-2 px-6 text-sm text-[#6B6573] dark:text-[#CCC3D7] md:text-base">
                {skill.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-3 items-center justify-items-center gap-x-px rounded-xl border-[1px] border-[#6B6573] px-2 py-1 dark:border-[#CCC3D7]"
                  >
                    {tool.logo}
                    <span className="col-span-2">{tool.name}</span>
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
