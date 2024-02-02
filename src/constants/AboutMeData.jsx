import {
  FiUser,
  FiMapPin,
  FiAward,
  FiMail,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

import { LuGraduationCap } from "react-icons/lu";

export const AboutMeData = [
  {
    name: "About",
    content: (
      <div className="flex flex-col items-stretch px-0 py-4 sm:px-1 md:px-6">
        <ul className="">
          <div className="col-span-1">
            <li>
              <div className="mb-2 mr-2 flex items-center justify-start space-x-3">
                <FiUser className="size-5 shrink-0 text-[#E38EC0] dark:text-[#7943ed]" />
                <span>Colene Encarnado</span>
              </div>
            </li>
            <li>
              <div className="mb-2 mr-2 flex items-center justify-start space-x-3">
                <FiMapPin className="size-5 shrink-0 text-[#E38EC0] dark:text-[#7943ed]" />
                <span>Los Angeles, CA</span>
              </div>
            </li>
            <li>
              <div className="mb-2 mr-2 flex items-center justify-start space-x-3">
                <FiAward className="size-5 shrink-0 text-[#E38EC0] dark:text-[#7943ed]" />{" "}
                <span>&lt; 1 YOE</span>
              </div>
            </li>
          </div>
        </ul>
        <div className="mt-3">
          <p className="mb-2">
            My journey as a developer began in 2021 when I made a career switch
            to Computer Science. Since then, I've continued to grow and evolve
            as a <span className="font-bold">full-stack</span> and
            <span className="font-bold"> front-end developer</span>,
            specializing in <span className="font-bold">React.js</span> and{" "}
            <span className="font-bold"> Node.js</span>.
          </p>
          <p className="">
            I strive to write code that accurately implements designs for
            interactive and responsive web applications, providing users with a
            memorable, seamless experience. I am a quick learner and always
            looking to expand my knowledge, taking on new challenges by learning
            the latest technologies.
          </p>
          <p></p>
        </div>
      </div>
    ),
  },
  {
    name: "Education",
    content: (
      <ul className="space-y-4 px-0 py-4 sm:px-1 md:px-6">
        <li className="relative flex gap-2 md:gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:h-5/6 before:w-[1px] before:bg-[#F38BBB]/60 dark:before:bg-[#7943ed]/50">
            <LuGraduationCap className="size-5 text-[#F38BBB] dark:text-[#7943ed]" />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between md:items-center">
              <h4 className="font-semibold">Oregon State University</h4>
              <p className="rounded-lg bg-[#F38BBB]/50 bg-gradient-to-bl from-[#68A3EB]/60 to-[#F38BBB]/60 px-3 py-px text-sm text-stone-100 dark:from-[#3034C2]/80 dark:via-[#6A3DD1]/80 dark:to-[#9329BE]/80">
                <span className="hidden sm:inline">2021 - </span>2023
              </p>
            </div>
            <p className="px-2 md:px-4">
              Bachelor of Science: Computer Science
            </p>
            <p className="px-2 md:px-4">GPA: 3.8</p>
          </div>
        </li>
        <li className="relative flex gap-2 md:gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:h-4/6 before:w-[1px] before:bg-[#F38BBB]/60 dark:before:bg-[#7943ed]/50">
            <LuGraduationCap className="size-5 text-[#F38BBB] dark:text-[#7943ed]" />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between md:items-center">
              <h4 className="font-semibold">
                <span className="inline sm:hidden">Cal </span>
                <span className="hidden sm:inline">California </span>State Long
                Beach
              </h4>
              <p className="rounded-lg bg-[#F38BBB]/50 bg-gradient-to-bl from-[#68A3EB]/60 to-[#F38BBB]/60 px-3 py-px text-sm text-stone-100 dark:from-[#3034C2]/80 dark:via-[#6A3DD1]/80 dark:to-[#9329BE]/80">
                <span className="hidden sm:inline">2015 - </span>2019
              </p>
            </div>
            <p className="px-2 md:px-4">Bachelor of Arts: Psychology</p>
            <p className="px-2 md:px-4">GPA: 3.5</p>
          </div>
        </li>
      </ul>
    ),
  },
];
