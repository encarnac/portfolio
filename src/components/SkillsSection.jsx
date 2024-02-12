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
        <h4 className="l font-mono text-lg tracking-widest text-[#5b5662]/60 dark:text-[#D4D3D8]/40 lg:text-xl">
          [02]skills
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
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
        className="grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-8 2xl:gap-14"
      >
        {SKILLS_DATA_SORTED.map((skill, index) => (
          <motion.div
            key={index}
            transition={{ type: "spring", stiffness: 50 }}
            variants={skillCard}
            className="relative h-full w-full backdrop-blur-none before:absolute before:-bottom-[.3rem] before:-left-[.3rem] before:z-[-1] before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:before:rounded-2xl"
          >
            <div className="flex h-full flex-col items-center justify-start gap-y-2 rounded-xl bg-[#E3E8EE] px-0 py-5 transition duration-300 hover:-translate-y-2 hover:duration-300 dark:bg-[#211e2c] md:rounded-2xl xl:py-8">
              <div className="mb-px rounded-full bg-[#cfd7e5] p-4 dark:bg-[#2b2841] lg:p-5">
                <img src={skill.image} className="w-7 md:w-9" />
              </div>
              <h4 className="relative text-base font-bold text-[#5b5662] dark:text-[#D4D3D8] sm:text-sm md:text-base lg:text-lg">
                {skill.category}
              </h4>
              <span className="h-[.3rem] w-10 rounded-sm bg-[#AD99DB] dark:bg-[#7943ED] md:mt-0"></span>

              <ul className="2 grid grid-cols-4 justify-center gap-1 gap-y-1 px-1 text-xs text-[#7B7484] dark:text-[#c3c3c4] sm:grid-cols-2 sm:text-sm lg:text-base">
                {skill.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-items-center gap-y-1 px-0 py-1"
                  >
                    <span className="">{tool.name}</span>
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
