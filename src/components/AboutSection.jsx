import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Tab } from "./Tab";
import AboutPhoto from "../assets/about-pfp.png";
import { LuGraduationCap } from "react-icons/lu";
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
} from "react-icons/bi";
import {
  RiJavascriptFill,
  RiHtml5Line,
  RiCss3Fill,
  RiReactjsLine,
  RiBootstrapFill,
} from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiJirasoftware, SiPostman, SiMysql } from "react-icons/si";

const motionVariants = (direction) => {
  return {
    hidden: { x: direction === "right" ? -50 : 50, opacity: 0 },
    visible: { opacity: 1, x: 0 },
  };
};

const TAB_CONTENT = [
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
            <div className="flex flex-wrap justify-between font-semibold">
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
            <div className="flex flex-wrap justify-between font-semibold">
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

const AboutSection = ({ setSelectedPage }) => {
  const [tab, setTab] = useState("Info");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <>
      {" "}
      <div
        id="about"
        className="relative grid grid-cols-1 items-start justify-items-center gap-x-6 py-28 lg:grid-cols-12"
      >
        {/* <div className="size-[100px] md:size-[140px] absolute bottom-0 left-1/4 z-0 -translate-y-40 translate-x-1/4 rounded-full blur-[4rem] dark:bg-[#502e77] md:blur-[5rem] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"></div> */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "tween", duration: 0.6 }}
          variants={motionVariants("right")}
          className="relative flex flex-col items-center gap-y-4 lg:col-span-4 lg:justify-self-end"
        >
          <h2 className="text-center text-2xl font-extrabold text-stone-700 dark:text-slate-100 lg:text-3xl">
            About Me
          </h2>
          <div className="size-[200px] lg:size-[250px] relative my-2 rounded-full bg-[#F38BBB] pt-12 dark:bg-[#6a3dd1]">
            <img src={AboutPhoto} className="absolute inset-x-0 bottom-0" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: "tween", duration: 0.8 }}
          variants={motionVariants("left")}
          className="mt-4 h-full w-full rounded-3xl border-[1px] border-slate-200 bg-slate-100 p-px dark:border-none dark:bg-gradient-to-b dark:from-[#3034C2] dark:to-[#7943ed] dark:shadow-2xl dark:shadow-[#33186C]/20 md:w-3/4 lg:col-span-8 lg:mt-0 lg:before:absolute lg:before:-left-[0.93rem] lg:before:top-[10%] lg:before:h-0 lg:before:w-0 lg:before:border-y-[10px] lg:before:border-r-[15px] lg:before:border-none lg:before:border-y-[#fff]/[.01] lg:before:border-r-slate-100 lg:before:border-opacity-90 lg:before:content-['']"
        >
          <div className="flex h-full w-full flex-col items-center gap-y-2 rounded-3xl py-4 dark:bg-[#11091b]">
            {" "}
            <div className="shadow-900/20 relative flex h-11 w-max flex-row items-center rounded-full bg-slate-300/30 px-1 shadow-inner backdrop-blur backdrop-filter transition dark:border-[1px] dark:border-[#3034C2]/80 dark:bg-[#0D0714]/90 lg:mx-0">
              {TAB_CONTENT.map((tabContent, index) => (
                <Tab
                  className={index}
                  active={tab}
                  selectTab={() => selectTab(tabContent.name)}
                  tabName={tabContent.name}
                />
              ))}
            </div>
            <div className="mt-4 place-self-stretch px-4 py-2 text-sm text-stone-600 dark:text-slate-100 lg:text-base">
              {TAB_CONTENT.find((t) => t.name === tab).content}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutSection;
