import { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SkillTab from "./SkillTab";
import { SKILLS_DATA } from "../utils/SkillsData";

const SkillsSection = () => {
  const [tab, setTab] = useState(SKILLS_DATA[0]);

  const selectTab = (nextTab) => {
    setTab(nextTab);
  };

  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={skillsVariants}
      className="my-20 w-full"
    >
      {/* SECTION CONTENT */}
      <div className="grid grid-cols-2 md:grid-cols-11 md:gap-x-4">
        <div className="col-span-full flex flex-col justify-center md:col-span-5 md:col-end-6 xl:col-span-4 xl:col-end-6">
          <div className="place-self-start md:place-self-end">
            {/* SECTION HEADER */}
            <h4 className="text-start font-mono text-lg tracking-widest text-[#5b5662]/40 dark:text-[#D4D3D8]/40 md:text-end lg:text-xl">
              //skills
            </h4>
            <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
              What I{" "}
              <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                Do
              </span>
            </h3>
          </div>

          {/* SKILLS CONTENT */}
          <motion.div
            variants={skillsVariants}
            className="py-4 text-[#7B7484] dark:text-[#c3c3c4]"
          >
            <SkillCard skills={tab.skills} />
          </motion.div>
        </div>

        {/* SKILLS TABS */}
        <ul className="col-span-full mt-6 grid h-full grid-cols-2 items-start justify-items-start gap-x-3 gap-y-4 md:col-span-5 md:col-end-12 md:mt-0 xl:col-span-4 xl:col-end-11">
          {SKILLS_DATA.map((skill, index) => (
            <SkillTab
              key={index}
              skill={skill}
              tab={tab}
              selectTab={selectTab}
            />
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
