import { HiUser, HiMapPin, HiBriefcase, HiAcademicCap } from "react-icons/hi2";

export const ABOUT_DATA = {
  introduction: (
    <>
      <p className="text-balance mb-2">
        I consistently embraced my creativity throughout my life and found joy
        in the process of designing and crafting things. Due to my background in
        Psychology, I was also fascinated by the relationship between human
        behavior and technology, which made learning to code feel like the next
        natural step.
      </p>
      <p className="text-balance mb-2">
        My journey as a developer officially began in 2021 when I made a career
        switch to Computer Science by getting my second Bachelor's degree. Since
        then, I've continued to grow as a
        <span className="font-bold text-[#DE8ABB] dark:text-[#7943ED]">
          {" "}
          front-end software developer{" "}
        </span>
        specializing in{" "}
        <span className="font-bold text-[#DE8ABB] dark:text-[#7943ED]">
          React.js
        </span>
        , taking on new challenges and learning the latest technologies.
      </p>
    </>
  ),
  summary: [
    {
      icon: <HiUser className="size-11" />,
      firstLine: "Colene",
      secondLine: "Encarnado",
    },
    {
      icon: <HiMapPin className="size-11" />,
      firstLine: "Los Angeles,",
      secondLine: "California",
    },
    {
      icon: <HiAcademicCap className="size-12" />,
      firstLine: "Computer Science",
      secondLine: "Bachelor's",
    },
    {
      icon: <HiBriefcase className="size-11" />,
      firstLine: "< 1 Year",
      secondLine: "Experience",
    },
  ],
};
