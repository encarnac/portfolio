import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SkillTab from "./SkillTab";
import { SKILLS_DATA } from "../constants/SkillsData";

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
  const [tab, setTab] = useState(SKILLS_DATA[0]);
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    setTab(nextTab);
  };

  return (
    <section id="skills" className="mb-12 w-full">
      {/* SECTION HEADER */}
      <div className="relative mb-8 flex flex-col items-start justify-center py-3">
        <h4 className="l font-mono text-lg tracking-widest text-[#5b5662]/40 dark:text-[#D4D3D8]/40 lg:text-xl">
          [02]skills
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
          What I Do
        </h3>
      </div>

      {/* SECTION CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={skillsContainer}
        y
        className="grid grid-cols-2 items-center md:grid-cols-12"
      >
        {/* SKILLS CONTENT */}
        <div className="col-span-full md:col-span-4 md:col-end-6">
          <motion.div
            key={tab}
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 py-4 text-[#5b5662] dark:text-[#D4D3D8]"
          >
            <SkillCard skills={tab.skills} />
          </motion.div>
        </div>

        {/* SKILLS TABS */}
        <div className="col-span-full mt-6 grid grid-cols-2 items-start justify-items-start gap-x-3 gap-y-4 sm:mt-0 md:col-span-5 md:col-end-12">
          {SKILLS_DATA.map((skill, index) => (
            <SkillTab
              key={index}
              skill={skill}
              tab={tab}
              selectTab={selectTab}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
