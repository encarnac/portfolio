import { useState, useTransition } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { SKILLS_DATA } from "../constants/SkillsData";

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
  const [tab, setTab] = useState("Languages");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <section id="skills" className="mb-12 w-full">
      <div className="relative mb-8 flex flex-col items-start justify-center py-3">
        <h4 className="l font-mono text-lg tracking-widest text-[#5b5662]/40 dark:text-[#D4D3D8]/40 lg:text-xl">
          [02]skills
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
          What I Do
        </h3>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={skillsContainer}
        y
        className="grid grid-cols-2 items-center md:grid-cols-12"
      >
        {/* SKILLS CONTENT */}
        <div className="col-span-6">
          {" "}
          {/* <AnimatePresence mode="wait"> */}
          <div
            // key={tab}
            // initial={{ y: -25, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // exit={{ y: 25, opacity: 0 }}
            // transition={{ duration: 0.2 }}
            className="space-y-3 py-4 text-[#5b5662] dark:text-[#D4D3D8] sm:px-12"
          >
            {SKILLS_DATA.find((t) => t.category === tab).tools.map(
              (skill, index) => (
                <div className="space-y-2">
                  <div className="flex flex-row justify-between">
                    <p>{skill.name}</p>
                    <p>{skill.percentage}</p>
                  </div>
                  <div className="h-3 w-full rounded-xl bg-[#CED7E5] dark:bg-[#2B2841]">
                    <div
                      className={`h-3 w-[${skill.percentage}] rounded-xl bg-gradient-to-r transition-all duration-300 ease-in-out from-[#A09AD8] to-[#CD94CA] dark:from-[#4E39CA] dark:to-[#703BCF]`}
                    ></div>
                  </div>
                </div>
              )
            )}
          </div>
          {/* </AnimatePresence> */}
        </div>

        {/* SKILLS TABS */}
        <div className="col-span-full mt-6 grid grid-cols-2 items-start justify-items-start gap-x-3 gap-y-4 sm:mt-0 md:col-span-5 md:col-end-12">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              onClick={() => selectTab(skill.category)}
              key={index}
              transition={{ type: "spring", stiffness: 50 }}
              variants={skillCard}
              className={`${
                tab === skill.category
                  ? "before:opacity-100 before:-translate-y-2 "
                  : "before:opacity-0"
              } relative cursor-pointer h-full w-full backdrop-blur-none before:absolute before:-bottom-[.3rem] before:-left-[.3rem] before:z-[-1] before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:before:rounded-2xl`}
            >
              <div
                className={`${
                  tab === skill.category ? "-translate-y-2 " : ""
                } flex h-full flex-col items-center justify-start gap-y-1 rounded-xl bg-[#E3E8EE] px-0 py-3 transition duration-300 hover:-translate-y-2 hover:duration-300 dark:bg-[#211e2c] md:gap-y-2 md:rounded-2xl xl:py-8`}
              >
                <div className="mb-px rounded-full bg-[#cfd7e5] p-3 dark:bg-[#2b2841] lg:p-5">
                  <img src={skill.image} className="w-5 md:w-9" />
                </div>
                <h4 className="relative text-base font-bold text-[#5b5662] dark:text-[#D4D3D8] sm:text-sm md:text-base lg:text-lg">
                  {skill.category}
                </h4>
                <span
                  className={`${
                    tab === skill.category
                      ? "bg-[#AD99DB] dark:bg-[#7943ED]"
                      : "bg-[#AD99DB]/30 dark:bg-[#7943ED]/20"
                  } h-[.3rem] transition duration-100 ease-in w-10 rounded-sm md:mt-0`}
                ></span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
