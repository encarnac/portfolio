import { motion } from "framer-motion";

const SkillCard = ({ skills }) => {
  const skillVariants = {
    hidden: { opacity: 0, width: "0%" },
    visible: {
      opacity: 1,
      width: "100%",
      transition: { duration: 0.3 },
    },
  };

  const barVariants = {
    hidden: { width: "0%" },
    visible: (index) => ({
      width: `${skills[index].percentage}`,
      transition: {
        type: "spring",
        damping: 17,
        stiffness: 150,
      },
    }),
  };

  return (
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <motion.li variants={skillVariants} key={`skill_${index}`}>
          <div className="flex flex-row justify-between">
            <p>{skill.skill}</p>
            <p className="font-mono">{skill.percentage}</p>
          </div>

          <div className="h-4 w-full rounded-xl bg-[#E3E8EE]/70 dark:bg-[#201E2C]/70">
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={barVariants}
              className={`h-4 rounded-xl bg-gradient-to-r from-[#A09AD8] to-[#CD94CA] dark:from-[#4E39CA] dark:to-[#703BCF]`}
            ></motion.div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default SkillCard;
