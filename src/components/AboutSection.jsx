import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Tab } from "./Tab";
import AboutPhoto from "../assets/about-pfp.png";
import { LuGraduationCap } from "react-icons/lu";
import { BiUser, BiTrophy, BiMap } from "react-icons/bi";

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
            I am a <span className="font-bold">full-stack</span> and
            <span className="font-bold"> front-end developer</span> that crafts
            interactive and responsive web applications.
          </p>
          <p className="">
            My journey as a developer began in 2021 when I made a career switch
            to Computer Science. Since then, I've continued to grow and evolve
            as a developer, specializing in{" "}
            <span className="font-bold">React.js and Node.js</span>. I am a
            quick learner and always looking to expand my knowledge, taking on
            new challenges by learning the latest technologies.
          </p>
          <p></p>
        </div>
      </div>
    ),
  },
  {
    name: "Education",
    content: (
      <ul className="space-y-4 pr-2 md:px-10 xl:px-12">
        <li className="relative flex gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:z-[-1] before:h-4/6 before:w-[2px] before:bg-[#F38BBB]/30 dark:before:bg-[#6a3dd1]/30">
            <LuGraduationCap className="size-5 text-[#F38BBB]/60 dark:text-[#6a3dd1]/60" />
          </div>
          <div className="w-full">
            <div className="flex justify-between font-semibold">
              <h4>Oregon State University</h4>
              <p>2021-2023</p>
            </div>
            <p className="px-2 md:px-4 lg:px-6">
              Bachelor of Science: Computer Science
            </p>
            <p className="px-2 md:px-4 lg:px-6">GPA: 3.8</p>
          </div>
        </li>
        <li className="relative flex gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:z-[-1] before:h-4/6 before:w-[2px] before:bg-[#F38BBB]/30 dark:before:bg-[#6a3dd1]/30">
            <LuGraduationCap className="size-5 text-[#F38BBB]/60 dark:text-[#6a3dd1]/60" />
          </div>
          <div className="w-full">
            <div className="flex justify-between font-semibold">
              <h4>California State Long Beach</h4>
              <p>2015-2019</p>
            </div>
            <p className="px-2 md:px-4 lg:px-6">Bachelor of Arts: Psychology</p>
            <p className="px-2 md:px-4 lg:px-6">GPA: 3.5</p>
          </div>
        </li>
      </ul>
    ),
  },
  { name: "Skills", content: "" },
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
        <div className="absolute z-[0] h-full w-screen bg-[#eaedf1] py-48 dark:bg-[#181320]"></div>
        <div className="size-[100px] md:size-[140px] absolute bottom-0 left-1/4 z-0 -translate-y-40 translate-x-1/4 rounded-full blur-[4rem] dark:bg-[#502e77] md:blur-[5rem] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"></div>
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
          className="mb-2 flex h-full w-10/12 flex-col items-center gap-y-2 rounded-3xl border-[1px] border-slate-200 bg-slate-100 py-6 backdrop-blur-xl backdrop-filter dark:border-[1px] dark:border-[#1c0f39] dark:bg-black/40 dark:shadow-md lg:col-span-8 lg:mt-0 lg:before:absolute lg:before:-left-[0.93rem] lg:before:top-[10%] lg:before:h-0 lg:before:w-0 lg:before:border-y-[10px] lg:before:border-r-[15px] lg:before:border-y-[#fff]/[.01] lg:before:border-r-slate-100 lg:before:border-opacity-90 lg:before:content-[''] dark:lg:before:border-none"
        >
          <div className="shadow-900/20 relative flex h-11 w-max flex-row items-center rounded-full bg-slate-300/30 px-1 shadow-inner backdrop-blur backdrop-filter transition dark:border-[1px] dark:border-[#1c0f39] dark:bg-[#03000A]/60 lg:mx-0">
            {TAB_CONTENT.map((tabContent, index) => (
              <Tab
                className={index}
                active={tab}
                selectTab={() => selectTab(tabContent.name)}
                tabName={tabContent.name}
              />
            ))}
          </div>
          <div className="mt-5 place-self-stretch px-4 py-2 text-sm text-stone-600 dark:text-slate-100 lg:text-base">
            {TAB_CONTENT.find((t) => t.name === tab).content}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutSection;
