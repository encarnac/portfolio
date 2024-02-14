import { HiUser, HiMapPin, HiBriefcase, HiAcademicCap } from "react-icons/hi2";

export const ABOUT_DATA = {
  introduction: (
    <div className="">
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
    </div>
  ),
  summary: [
    {
      icon: <HiUser className="size-10 text-[#AD99DB] dark:text-[#a32dd2]" />,
      firstLine: "Colene",
      secondLine: "Encarnado",
    },
    {
      icon: <HiMapPin className="size-10 text-[#AD99DB] dark:text-[#a32dd2]" />,
      firstLine: "Los Angeles,",
      secondLine: "California",
    },
    {
      icon: (
        <HiAcademicCap className="size-11 text-[#AD99DB] dark:text-[#a32dd2]" />
      ),
      firstLine: "Computer Science",
      secondLine: "Bachelor's",
    },
    {
      icon: (
        <HiBriefcase className="size-10 text-[#AD99DB] dark:text-[#a32dd2]" />
      ),
      firstLine: "< 1 Year",
      secondLine: "Experience",
    },
  ],
};