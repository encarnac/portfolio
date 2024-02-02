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

const SKILLS_CONTENT = {
  name: "Skills",
  content: (
    <div className="flex-col space-y-1 px-1 md:px-4 lg:px-8">
      <div className="flex flex-row justify-between border-b-[1px] border-stone-600/20 py-1 dark:border-[#6a3dd1]/30">
        <h4 className="font-semibold tracking-wide">Front-End Development</h4>
        {/* <FiChevronDown className="text-2xl" /> */}
      </div>
      <div className="mb-5 flex flex-row flex-wrap justify-center space-x-2 px-8 text-xs sm:justify-start">
        <div className="flex flex-col items-center">
          <p className="">HTML5</p>
          <RiHtml5Line className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">CSS3</p>
          <RiCss3Fill className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">Javascript</p>
          <RiJavascriptFill className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">React</p>
          <RiReactjsLine className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">Next.js</p>
          <TbBrandNextjs className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">Bootstrap</p>
          <RiBootstrapFill className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">Tailwind</p>
          <BiLogoTailwindCss className="size-12" />
        </div>

        <div className="flex flex-col items-center">
          <p className="">Motion</p>
          <TbBrandFramerMotion className="size-12" />
        </div>
      </div>
      <div className="flex flex-row justify-between border-b-[1px] border-stone-600/20 py-1 dark:border-[#6a3dd1]/30">
        <h4 className="font-semibold tracking-wide">Back-End Development</h4>
        {/* <FiChevronDown className="text-2xl" /> */}
      </div>
      <div className="mb-5 flex flex-row flex-wrap justify-center space-x-2 px-8 text-xs sm:justify-start">
        <div className="flex flex-col items-center">
          <p className="">Python</p>
          <BiLogoPython className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">Express</p>
          <SiExpress className="size-12" />
        </div>

        <div className="flex flex-col items-center">
          <p className="">MongoDB</p>
          <BiLogoMongodb className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">MySQL</p>
          <SiMysql className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">GCP</p>
          <BiLogoGoogleCloud className="size-12" />
        </div>
      </div>
      <div className="flex flex-row justify-between border-b-[1px] border-stone-600/20 py-1 dark:border-[#6a3dd1]/30">
        <h4 className="font-semibold tracking-wide">Development Tools</h4>
        {/* <FiChevronDown className="text-2xl" /> */}
      </div>
      <div className="mb-5 flex flex-row flex-wrap justify-center space-x-2 px-8 text-xs sm:justify-start">
        <div className="flex flex-col items-center">
          <p className="">Git</p>
          <BiLogoGit className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">GitHub</p>
          <BiLogoGithub className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">Figma</p>
          <BiLogoFigma className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">Jira</p>
          <SiJirasoftware className="size-12" />
        </div>
        <div className="flex flex-col items-center">
          <p className="">Postman</p>
          <SiPostman className="size-12" />
        </div>
      </div>
    </div>
  ),
};
export const SkillsSection = () => {
  return <div>SkillsSection</div>;
};
