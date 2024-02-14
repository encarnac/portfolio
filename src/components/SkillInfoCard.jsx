import React from "react";

const SkillInfoCard = ({ tools }) => {
  return (
    <div className="space-y-2">
      {tools.map((tool, index) => (
        <React.Fragment key={`skill_${index}`} className="">
          <div className="flex flex-row justify-between">
            <p>{tool.name}</p>
            <p>{tool.percentage}</p>
          </div>
          <div className="h-4 w-full rounded-xl bg-[#E3E8EE] dark:bg-[#2B2841]">
            <div
              style={{ width: tool.percentage }}
              className={`h-4 rounded-xl bg-gradient-to-r from-[#A09AD8] to-[#CD94CA] transition-all ease-in-out dark:from-[#4E39CA] dark:to-[#703BCF]`}
            ></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SkillInfoCard;
