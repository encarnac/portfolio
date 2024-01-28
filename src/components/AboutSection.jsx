import { useState } from "react";
import { motion } from "framer-motion";
import AboutPhoto from "../assets/about-pfp.png";

const motionVariants = (direction) => {
  return {
    hidden: { x: direction === "right" ? -50 : 50, opacity: 0 },
    visible: { opacity: 1, x: 0 },
  };
};

const AboutSection = ({ setSelectedPage }) => {
  const [tab, setTab] = useState("info");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ type: "tween", duration: 0.5 }}
      variants={motionVariants("right")}
    >
      <div
        id="about"
        className="mb-48 items-start justify-items-center gap-x-8 md:grid md:grid-cols-12"
      >
        <div className="col-span-3 flex flex-col items-center gap-y-4 justify-self-end">
          <h2 className="text-start text-2xl font-extrabold text-slate-700 dark:text-slate-100 md:text-3xl">
            About Me
          </h2>
          <div className="size-[150px] relative overflow-clip rounded-full bg-[#F38BBB] pt-12 dark:bg-[#3034C2]">
            <img
              src={AboutPhoto}
              className="absolute inset-x-0 bottom-0 rounded-full"
            />
          </div>
        </div>

        <div className="col-span-9 mt-6 flex h-full max-w-2xl flex-col items-center gap-y-2 rounded-3xl bg-slate-200/90 px-2 py-6 shadow-sm backdrop-blur-lg dark:bg-slate-950/60 md:mt-0 md:before:absolute md:before:-left-[0.93rem] md:before:top-[40%] md:before:h-0 md:before:w-0 md:before:border-y-[10px] md:before:border-r-[15px] md:before:border-y-[#fff]/[.01] md:before:border-r-slate-200 md:before:border-opacity-70 md:before:content-[''] dark:md:before:border-y-[#000]/[.01] dark:md:before:border-r-slate-950/60">
          <div
            role="tablsit"
            aria-label="tabs"
            className="shadow-900/20 relative flex h-11 w-max flex-row items-center rounded-full bg-slate-900/10 px-1 text-slate-800 shadow-inner transition dark:bg-slate-800/20 dark:text-slate-100 md:mx-0"
          >
            <button
              role="tab"
              aria-selected="true"
              className="h-10 rounded-full bg-slate-100 px-3 dark:bg-slate-800"
            >
              <span className="">Info</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="rounded-full px-3"
            >
              <span className=""> Education</span>
            </button>
            <button className="h-10 rounded-full px-3">
              <span className="">Skills</span>
            </button>
          </div>
          <p className="mt-2 px-8 text-sm text-slate-800 dark:text-slate-100 lg:text-base">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MySQL, MongoDB,
            HTML, CSS (TailwindCSS and Bootstrap), and Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
