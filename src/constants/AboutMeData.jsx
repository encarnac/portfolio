import {
  BiUser,
  BiTrophy,
  BiMap,
  BiLogoFigma,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoGithub,
  BiLogoGoogleCloud,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  RiJavascriptFill,
  RiHtml5Line,
  RiCss3Fill,
  RiReactjsLine,
  RiBootstrapFill,
} from "react-icons/ri";
import { SiExpress, SiJirasoftware, SiPostman, SiMysql } from "react-icons/si";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";

export const AboutMeData = [
  {
    name: "Info",
    content: (
      <div className="px-2 md:gap-x-8 md:px-4 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ul>
            <li>
              <div className="mb-2 flex justify-start space-x-3">
                <BiUser className="size-5 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
                <span>Colene Encarnado</span>
              </div>
            </li>

            <li>
              <div className="mb-2 flex justify-start space-x-3">
                <BiMap className="size-5 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
                <span>Los Angeles, CA</span>
              </div>
            </li>
            <li>
              <div className="flex justify-start space-x-3">
                <BiTrophy className="size-5 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />{" "}
                <span>&lt; 1 YOE</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-3 lg:col-span-8 lg:mt-0">
          <p className="mb-2">
            My journey as a developer began in 2021 when I made a career switch
            to Computer Science. Since then, I've continued to grow and evolve
            as a <span className="font-bold">full-stack</span> and
            <span className="font-bold"> front-end developer</span>,
            specializing in{" "}
            <span className="font-bold">React.js and Node.js</span>.
          </p>
          <p className="">
            I strive to write code that accurately implements pixel-perfect
            designs. I craft interactive and responsive web applications that
            provide users with a memorable, seamless experience. I am a quick
            learner and always looking to expand my knowledge, taking on new
            challenges by learning the latest technologies.
          </p>
          <p></p>
        </div>
      </div>
    ),
  },
  {
    name: "Education",
    content: (
      <ul className="space-y-4 px-0 md:px-10 xl:px-12">
        <li className="relative flex gap-2 md:gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:z-[-1] before:h-4/6 before:w-[2px] before:bg-[#F38BBB]/30 dark:before:bg-[#6a3dd1]/30">
            <LuGraduationCap className="size-5 text-[#F38BBB]/60 dark:text-[#6a3dd1]/60" />
          </div>
          <div className="w-full">
            <div className="flex justify-between font-semibold">
              <h4>Oregon State University</h4>
              <p>
                <span className="hidden md:inline">2021 - </span>2023
              </p>
            </div>
            <p className="px-2 md:px-4">
              Bachelor of Science: Computer Science
            </p>
            <p className="px-2 md:px-4">GPA: 3.8</p>
          </div>
        </li>
        <li className="relative flex gap-2 md:gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:z-[-1] before:h-4/6 before:w-[2px] before:bg-[#F38BBB]/30 dark:before:bg-[#6a3dd1]/30">
            <LuGraduationCap className="size-5 text-[#F38BBB]/60 dark:text-[#6a3dd1]/60" />
          </div>
          <div className="w-full">
            <div className="flex justify-between font-semibold">
              <h4>California State Long Beach</h4>
              <p>
                <span className="hidden md:inline">2015 - </span>2019
              </p>
            </div>
            <p className="px-2 md:px-4">Bachelor of Arts: Psychology</p>
            <p className="px-2 md:px-4">GPA: 3.5</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    name: "Skills",
    content: (
      <div className="px-8 pb-4">
        <h3 className="text-center font-bold md:text-start">Front-End</h3>
        <div className="mb-5 flex flex-row flex-wrap justify-evenly space-x-2 px-2 text-xs">
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">HTML5</p>
            <RiHtml5Line className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">CSS3</p>
            <RiCss3Fill className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Javascript</p>
            <RiJavascriptFill className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">React</p>
            <RiReactjsLine className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Next.js</p>
            <TbBrandNextjs className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Bootstrap</p>
            <RiBootstrapFill className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Tailwind</p>
            <BiLogoTailwindCss className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Figma</p>
            <BiLogoFigma className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Motion</p>
            <TbBrandFramerMotion className="size-10 text-[#6a3dd1]" />
          </div>
        </div>
        <h3 className="text-center font-bold md:text-start">Back-End</h3>
        <div className="mb-5 flex flex-row flex-wrap justify-evenly space-x-2 px-2 text-xs">
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Python</p>
            <BiLogoPython className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Express</p>
            <SiExpress className="size-10 text-[#6a3dd1]" />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">MongoDB</p>
            <BiLogoMongodb className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">MySQL</p>
            <SiMysql className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">GCP</p>
            <BiLogoGoogleCloud className="size-10 text-[#6a3dd1]" />
          </div>
        </div>
        <h3 className="text-center font-bold md:text-start">Development</h3>
        <div className="flex flex-row flex-wrap justify-evenly space-x-2 px-2 text-xs">
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Git</p>
            <BiLogoGit className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">GitHub</p>
            <BiLogoGithub className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Jira</p>
            <SiJirasoftware className="size-10 text-[#6a3dd1]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9d97a6]">Postman</p>
            <SiPostman className="size-10 text-[#6a3dd1]" />
          </div>
        </div>
      </div>
    ),
  },
];
