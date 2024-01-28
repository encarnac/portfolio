import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Tab } from "./Tab";
import AboutPhoto from "../assets/about-pfp.png";

const motionVariants = (direction) => {
  return {
    hidden: { x: direction === "right" ? -50 : 50, opacity: 0 },
    visible: { opacity: 1, x: 0 },
  };
};

const TAB_CONTENT = [
  {
    title: "Info",
    content: (
      <div className="lg:grid lg:grid-cols-2">
        <div className="lg:col-span-1">
          <ul>
            <li>Colene Encarnado</li>
            <li>Los Angeles, CA</li>
          </ul>
        </div>
        <div className="lg:col-span-1">
          <p className="">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MySQL, MongoDB,
            HTML, CSS (TailwindCSS and Bootstrap), and Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <ul>
        <li>Oregon State University</li>{" "}
        <li>California State University, Long Beach</li>
      </ul>
    ),
  },
  { title: "Skills", content: "" },
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ type: "tween", duration: 0.5 }}
      variants={motionVariants("right")}
    >
      {" "}
      <div
        id="about"
        className="relative grid grid-cols-1 items-start justify-items-center gap-x-6 py-28 lg:grid-cols-12"
      >
        <div className="absolute z-[0] h-full w-screen bg-[#e1e7f4] py-48 dark:bg-[#130f19]"></div>
        <div className="size-[100px] md:size-[140px] absolute bottom-0 left-1/4 z-0 -translate-y-40 translate-x-1/4 rounded-full bg-[#c93283] blur-[4rem] dark:bg-[#502e77] md:blur-[5rem] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"></div>
        <div className="relative flex flex-col items-center gap-y-4 lg:col-span-4 lg:justify-self-end">
          <h2 className="text-center text-2xl font-extrabold text-stone-700 dark:text-slate-100 lg:text-3xl">
            About Me
          </h2>
          <div className="size-[200px] lg:size-[250px] relative my-2 rounded-full bg-[#F38BBB] pt-12 dark:bg-[#6a3dd1]">
            <img src={AboutPhoto} className="absolute inset-x-0 bottom-0" />
          </div>
        </div>
        <div className="mt-6 flex h-full w-10/12 flex-col items-center gap-y-2 rounded-3xl bg-slate-100/80 py-6 backdrop-blur-xl backdrop-filter dark:border-[1px] dark:border-[#150b2b] dark:bg-black/40 dark:shadow-md lg:col-span-8 lg:mt-0 lg:before:absolute lg:before:-left-[0.93rem] lg:before:top-[10%] lg:before:h-0 lg:before:w-0 lg:before:border-y-[10px] lg:before:border-r-[15px] lg:before:border-y-[#fff]/[.01] lg:before:border-r-slate-100 lg:before:border-opacity-70 lg:before:content-[''] dark:lg:before:border-y-[#000]/[.01] dark:lg:before:border-r-slate-950/30">
          <div className="shadow-900/20 relative flex h-11 w-max flex-row items-center rounded-full bg-slate-900/10 px-1 text-slate-800 shadow-inner backdrop-blur backdrop-filter transition dark:border-[1px] dark:border-[#150b2b] dark:bg-[#03000A]/60 dark:text-slate-100 lg:mx-0">
            <Tab
              active={tab === "Info"}
              selectTab={() => selectTab("Info")}
              text={"Info"}
            />
            <Tab
              active={tab === "Education"}
              selectTab={() => selectTab("Education")}
              text={"Education"}
            />
            <Tab
              active={tab === "Skills"}
              selectTab={() => selectTab("Skills")}
              text={"Skills"}
            />
          </div>
          <div className="mt-2 px-4 py-2 text-sm text-slate-800 dark:text-slate-100 lg:text-base">
            {TAB_CONTENT.find((t) => t.title === tab).content}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
