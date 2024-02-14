const SkillCard = ({ skills }) => {
  return (
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div key={`skill_${index}`}>
          <div className="flex flex-row justify-between">
            <p>{skill.skill}</p>
            <p>{skill.percentage}</p>
          </div>
          <div className="h-4 w-full rounded-xl bg-[#E3E8EE] dark:bg-[#2B2841]">
            <div
              style={{ width: skill.percentage }}
              className={`h-4 rounded-xl bg-gradient-to-r from-[#A09AD8] to-[#CD94CA] transition-all ease-in-out dark:from-[#4E39CA] dark:to-[#703BCF]`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;