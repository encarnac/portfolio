import {
  FiUser,
  FiMapPin,
  FiAward,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiChevronDown,
} from "react-icons/fi";
import {
  BiUser,
  BiTrophy,
  BiMap,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoFigma,
  BiLogoPython,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoGoogleCloud,
  BiLogoTailwindCss,
  BiCodeBlock,
  BiSolidData,
  BiSolidCog,
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
      <div className="flex flex-col items-stretch px-1 md:px-4 lg:px-8">
        <ul className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <li>
              <div className="mb-2 mr-2 flex items-center justify-start space-x-3">
                <FiUser className="size-5 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
                <span>Colene Encarnado</span>
              </div>
            </li>
            <li>
              <div className="mb-2 mr-2 flex items-center justify-start space-x-3">
                <FiMapPin className="size-5 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
                <span>Los Angeles, CA</span>
              </div>
            </li>
            <li>
              <div className="mb-2 mr-2 flex items-center justify-start space-x-3">
                <FiAward className="size-5 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />{" "}
                <span>&lt; 1 YOE</span>
              </div>
            </li>
          </div>
          <div className="col-span-1">
            <li>
              <div className="mb-2 mr-2 flex items-start justify-start space-x-3">
                <FiMail className="size-5 mt-1 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />{" "}
                <span className="">
                  coleneencarnado&#8203;@&#8203;gmail.com
                </span>
              </div>
            </li>
            <li>
              <div className="mb-2 mr-2 flex items-center justify-start space-x-3">
                <FiGithub className="size-5 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
                <p>
                  <span className="hidden lg:inline"></span>encarnac
                </p>
              </div>
            </li>
            <li>
              <div className="mb-2 mr-2 flex items-center justify-start space-x-3">
                <FiLinkedin className="size-5 shrink-0 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />{" "}
                <p>
                  <span className="hidden lg:inline"></span>
                  encarnac
                </p>
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
      <ul className="space-y-4 px-1 md:px-4 lg:px-8">
        <li className="relative flex gap-2 md:gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:z-[-1] before:h-5/6 before:w-[1px] before:bg-[#F38BBB]/70 dark:before:bg-[#6a3dd1]/50">
            <LuGraduationCap className="size-5 text-[#F38BBB]/70 dark:text-[#6a3dd1]/50" />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between md:items-center">
              <h4 className="font-semibold">Oregon State University</h4>
              <p className="dark: rounded-full bg-[#F38BBB]/70 px-3 py-0 text-sm text-stone-100 dark:bg-[#6a3dd1]/70">
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
          <div className="before:absolute before:left-[.55rem] before:top-6 before:z-[-1] before:h-5/6 before:w-[1px] before:bg-[#F38BBB]/70 dark:before:bg-[#6a3dd1]/50">
            <LuGraduationCap className="size-5 text-[#F38BBB]/70 dark:text-[#6a3dd1]/50" />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between md:items-center">
              <h4 className="font-semibold">
                <span className="inline sm:hidden">Cal </span>
                <span className="hidden sm:inline">California </span>State Long
                Beach
              </h4>
              <p className="dark: rounded-full bg-[#F38BBB]/70 px-3 py-0 text-sm text-stone-100 dark:bg-[#6a3dd1]/70">
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
  {
    name: "Skills",
    content: (
      <>
        <div className="flex-col space-y-1 px-1 md:px-4 lg:px-8">
          <div className="flex flex-row justify-between border-b-[1px] border-stone-600/20 py-1 dark:border-[#b7b0c2]/10">
            <h4 className="font-semibold tracking-wide">
              Front-End Development
            </h4>
            {/* <FiChevronDown className="text-2xl" /> */}
          </div>
          <div className="mb-5 flex flex-row flex-wrap justify-center space-x-2 px-8 text-xs sm:justify-start">
            <div className="flex flex-col items-center">
              <p className="">HTML5</p>
              <RiHtml5Line className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">CSS3</p>
              <RiCss3Fill className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">Javascript</p>
              <RiJavascriptFill className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">React</p>
              <RiReactjsLine className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">Next.js</p>
              <TbBrandNextjs className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">Bootstrap</p>
              <RiBootstrapFill className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">Tailwind</p>
              <BiLogoTailwindCss className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>

            <div className="flex flex-col items-center">
              <p className="">Motion</p>
              <TbBrandFramerMotion className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
          </div>
          <div className="flex flex-row justify-between border-b-[1px] border-stone-600/20 py-1 dark:border-[#b7b0c2]/10">
            <h4 className="font-semibold tracking-wide">
              Back-End Development
            </h4>
            {/* <FiChevronDown className="text-2xl" /> */}
          </div>
          <div className="mb-5 flex flex-row flex-wrap justify-center space-x-2 px-8 text-xs sm:justify-start">
            <div className="flex flex-col items-center">
              <p className="">Python</p>
              <BiLogoPython className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">Express</p>
              <SiExpress className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>

            <div className="flex flex-col items-center">
              <p className="">MongoDB</p>
              <BiLogoMongodb className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">MySQL</p>
              <SiMysql className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">GCP</p>
              <BiLogoGoogleCloud className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
          </div>
          <div className="flex flex-row justify-between border-b-[1px] border-stone-600/20 py-1 dark:border-[#b7b0c2]/10">
            <h4 className="font-semibold tracking-wide">Development Tools</h4>
            {/* <FiChevronDown className="text-2xl" /> */}
          </div>
          <div className="mb-5 flex flex-row flex-wrap justify-center space-x-2 px-8 text-xs sm:justify-start">
            <div className="flex flex-col items-center">
              <p className="">Git</p>
              <BiLogoGit className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">GitHub</p>
              <BiLogoGithub className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">Figma</p>
              <BiLogoFigma className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">Jira</p>
              <SiJirasoftware className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
            <div className="flex flex-col items-center">
              <p className="">Postman</p>
              <SiPostman className="size-12 text-[#F38BBB]/70 dark:text-[#6a3dd1]/70" />
            </div>
          </div>
        </div>

        {/* // !!!!!!!!!!!!!! VERSION 2 !!!!!!!!!!!!!!!!!!! */}
        {/* <div className="flex h-full flex-col px-8 pb-4">
          <div className="grid grid-cols-12 gap-x-4 py-2">
            <div className="col-span-3 flex flex-col items-center">
              <h4 className="text-sm font-semibold">Front-End</h4>
              <BiCodeBlock className="text-7xl" />
            </div>
            <div className="col-span-9 flex flex-col">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="border-b-[1px] border-b-stone-600/20 bg-transparent"></div>
          <div className="grid grid-cols-12 gap-x-4 py-2">
            <div className="col-span-3 flex flex-col items-center">
              <h4 className="text-sm font-semibold">Back-End</h4>

              <BiSolidData className="text-7xl" />
            </div>
            <div className="col-span-9">
              {" "}
              <ul>
                <li>Python</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>GCP</li>
              </ul>
            </div>
          </div>
          <div className="my-0 border-b-[1px] border-b-stone-600/20 bg-transparent"></div>
          <div className="grid grid-cols-12 gap-x-4 py-2">
            <div className="col-span-3 flex flex-col items-center">
              <h4 className="text-sm font-semibold">Tools</h4>

              <BiSolidCog className="text-7xl" />
            </div>
            <div className="col-span-9">
              {" "}
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Jira</li>
                <li>Postman</li>
                <li>Figma</li>
              </ul>
            </div>
          </div> */}
      </>
    ),
  },
];
