import { motion } from "framer-motion";

const SkillCard = ({ skills }) => {
  const cardVariants = {
    hidden: { width: "0%" },
    active: (skill) => ({
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
        <div key={`skill_${index}`}>
          <div className="flex flex-row justify-between">
            <p>{skill.skill}</p>
            <p className="font-mono">{skill.percentage}</p>
          </div>

          <div className="h-4 w-full rounded-xl bg-[#E3E8EE]/70 dark:bg-[#201E2C]/70">
            <motion.div
              custom={skill}
              variants={cardVariants}
              initial="hidden"
              animate="active"
              className={`h-4 rounded-xl bg-gradient-to-r from-[#A09AD8] to-[#CD94CA] dark:from-[#4E39CA] dark:to-[#703BCF]`}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
