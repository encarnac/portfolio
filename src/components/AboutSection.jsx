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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "tween", duration: 0.6 }}
          variants={motionVariants("right")}
          className="relative flex flex-col items-center justify-items-center gap-y-4 lg:col-span-4 lg:justify-self-end"
        >
          <h2 className="text-center text-2xl font-extrabold text-stone-700 dark:text-[#b7b0c2] lg:text-3xl">
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
          className="lg:before:border-x-none mt-4 flex h-full w-full flex-col items-center rounded-3xl bg-slate-100 p-px py-6 shadow-sm backdrop-blur-lg before:absolute before:-top-[0.93rem] before:h-0 before:w-0 before:border-x-[10px] before:border-b-[15px] before:border-x-[#fff]/[.01] before:border-t-slate-100 before:border-opacity-70 before:content-[''] dark:bg-[#221c2d] dark:bg-opacity-80 dark:before:border-[#211b2d] dark:before:border-x-[#000]/[.01] md:w-3/4 lg:col-span-8 lg:mt-0 lg:before:absolute lg:before:-left-[0.93rem] lg:before:top-[40%] lg:before:h-0 lg:before:w-0 lg:before:border-x-0 lg:before:border-y-[10px] lg:before:border-r-[15px] lg:before:border-y-[#fff]/[.01] lg:before:border-r-slate-100 lg:before:border-opacity-70 lg:before:content-[''] dark:lg:before:border-[#211b2d] dark:lg:before:border-y-[#000]/[.01]"
        >
          <div className="shadow-900/20 relative flex h-11 w-max flex-row items-center rounded-full bg-slate-300/30 px-1 shadow-inner backdrop-blur backdrop-filter transition dark:border-[1px] dark:border-[#6a3dd1]/30 dark:bg-[#1b1625] lg:mx-0">
            {AboutMeData.map((tabContent, index) => (
              <Tab
                className={index}
                active={tab}
                selectTab={() => selectTab(tabContent.name)}
                tabName={tabContent.name}
              />
            ))}
          </div>
          <div className="mt-4 place-self-stretch px-4 py-2 text-sm text-stone-600 dark:text-[#b7b0c2] lg:text-base">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 25, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {AboutMeData.find((t) => t.name === tab).content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutSection;
