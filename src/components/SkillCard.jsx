import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillCard = ({ skills }) => {
  const progressBarVariants = {
    hidden: { opacity: 0, width: "0%" },
    visible: {
      opacity: 1,
      width: "100%",
    },
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (skill) => ({
      width: `${skill.percentage}`,
      transition: {
        type: "spring",
        damping: 17,
        stiffness: 150,
      },
    }),
  };

  return (
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <motion.div variants={progressBarVariants} key={`skill_${index}`}>
          <div className="flex flex-row justify-between">
            <p>{skill.skill}</p>
            <p className="font-mono">{skill.percentage}</p>
          </div>

          <div className="h-4 w-full rounded-xl bg-[#E3E8EE]/70 dark:bg-[#201E2C]/70">
            <motion.div
              custom={skill}
              animate="visible"
              variants={progressVariants}
              className={`h-4 rounded-xl bg-gradient-to-r from-[#A09AD8] to-[#CD94CA] dark:from-[#4E39CA] dark:to-[#703BCF]`}
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillCard;
