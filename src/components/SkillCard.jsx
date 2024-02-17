import { motion } from "framer-motion";
const SkillCard = ({ skills }) => {
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
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}` }}
              transition={{
                duration: 1,
                type: "spring",
                damping: 12,
                stiffness: 100,
                // delay: 0.5,
              }}
              className={`h-4 rounded-xl bg-gradient-to-r from-[#A09AD8] to-[#CD94CA] dark:from-[#4E39CA] dark:to-[#703BCF]`}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
