import { useState, useTransition } from "react";
import { Tab } from "./Tab";
import { AboutMeData } from "../constants/AboutMeData";
import AboutPhoto from "../assets/about-pfp.png";
import { motion, AnimatePresence } from "framer-motion";

const motionVariants = (direction) => {
  return {
    hidden: { x: direction === "right" ? -50 : 50, opacity: 0 },
    visible: { opacity: 1, x: 0 },
  };
};

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
          className="relative mt-4 h-full w-full rounded-[2rem] border-slate-200 bg-slate-100 p-[.7px] dark:border-none dark:bg-gradient-to-b dark:from-[#3034C2] dark:from-10% dark:via-[#6A3DD1] dark:to-[#9329BE] dark:shadow-2xl dark:shadow-[#3236ab]/20 md:w-3/4 lg:col-span-8 lg:mt-0 lg:before:absolute lg:before:-left-[0.93rem] lg:before:top-[10%] lg:before:h-0 lg:before:w-0 lg:before:border-y-[10px] lg:before:border-r-[15px] lg:before:border-none lg:before:border-y-[#fff]/[.01] lg:before:border-r-slate-100 lg:before:border-opacity-90 lg:before:content-['']"
        >
          <div className="flex h-full w-full flex-col items-center gap-y-2 rounded-[2rem] py-4 backdrop-blur-xl backdrop-filter dark:bg-[#100c16]/90 lg:col-span-8 lg:mt-0 lg:before:absolute lg:before:-left-[0.93rem] lg:before:top-[10%] lg:before:h-0 lg:before:w-0 lg:before:border-y-[10px] lg:before:border-r-[15px] lg:before:border-y-[#fff]/[.01] lg:before:border-r-slate-100 lg:before:border-opacity-90 lg:before:content-[''] dark:lg:before:border-none">
            {" "}
            <div className="shadow-900/20 relative flex h-11 w-max flex-row items-center rounded-full bg-slate-300/30 px-1 shadow-inner backdrop-blur backdrop-filter transition dark:border-[1px] dark:border-[#272a9c]/80 dark:bg-[#110e19] lg:mx-0">
              {AboutMeData.map((tabContent, index) => (
                <Tab
                  className={index}
                  active={tab}
                  selectTab={() => selectTab(tabContent.name)}
                  tabName={tabContent.name}
                />
              ))}
            </div>
            <div className="mt-4 place-self-stretch px-4 py-2 text-sm text-stone-600 dark:text-slate-100 lg:text-base">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {AboutMeData.find((t) => t.name === tab).content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutSection;
