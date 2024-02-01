import { useState, useTransition } from "react";
import { Tab } from "./Tab";
import { AboutMeData } from "../constants/AboutMeData";
import AboutPhoto from "../assets/about-pfp.png";
import { motion, AnimatePresence } from "framer-motion";
import { HiCode, HiOutlineGlobeAlt } from "react-icons/hi";

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
        className="grid grid-cols-1 items-start justify-items-center gap-x-6 py-28 lg:grid-cols-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "tween", duration: 0.6 }}
          variants={motionVariants("right")}
          className="flex flex-col items-center justify-items-center gap-y-2 lg:col-span-4 lg:justify-self-end"
        >
          <h2 className="text-center text-2xl font-extrabold tracking-wide text-stone-800/80 dark:text-[#b8b3c1] lg:text-3xl">
            about me
          </h2>
          <div className="size-[200px] lg:size-[250px] relative my-2 rounded-full bg-[#F38BBB] pt-12 dark:bg-[#2d2839]">
            <img
              src={AboutPhoto}
              className="absolute inset-x-0 -bottom-2 shadow-sm"
            />
            <div className="absolute -right-10 top-24 w-fit rounded-br-2xl rounded-tl-2xl rounded-tr-2xl border-b-[2px] border-r-[2px] border-b-[#dfc1cf] border-r-[#b2cceb] bg-gradient-to-bl from-[#68A3EB]/60 to-[#F38BBB]/60 p-1 shadow-md backdrop-blur-2xl backdrop-filter dark:border-b-[#815b90]/90 dark:border-r-[#6567a5] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] dark:shadow-xl dark:shadow-[#3a3d8d]/50">
              <span className="block break-words rounded-xl px-2 py-1 text-sm text-slate-200 transition duration-300">
                <HiOutlineGlobeAlt className="size-7 text-stone-100 dark:text-white" />
              </span>
            </div>
            <div className="absolute -left-8 top-8 w-fit rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl border-b-[2px] border-l-[2px] border-b-[#dfc1cf] border-l-[#b2cceb] bg-gradient-to-br from-[#68A3EB]/60 to-[#F38BBB]/60 p-1 shadow-md backdrop-blur-2xl dark:border-b-[#815b90]/90 dark:border-l-[#6567a5] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] dark:shadow-xl dark:shadow-[#3a3d8d]/50">
              <span className="text-wrap block rounded-xl px-2 py-1 text-sm text-slate-200 transition duration-300">
                {/* full-stack */}
                <HiCode className="size-7 text-stone-100 dark:text-white" />
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "tween", duration: 0.8 }}
          variants={motionVariants("left")}
          className="dark:lg:before:border-r-slate-950/6 lg:border-x-none relative mt-8 flex h-full w-full min-w-fit flex-col items-center rounded-3xl bg-slate-100 p-px py-6 shadow-sm backdrop-blur-lg before:absolute before:-top-5 before:h-0 before:w-0 before:border-x-[15px] before:border-b-[20px] before:border-x-[#fff]/[.01] before:border-t-slate-100 before:border-opacity-70 before:content-[''] dark:bg-[#251e32] dark:before:border-[#251e32]/70 dark:before:border-x-[#000]/[.01] md:w-5/6 lg:col-span-8 lg:mt-0 lg:min-w-min lg:before:-left-[1.2rem] lg:before:top-16 lg:before:h-0 lg:before:w-0 lg:before:border-x-0 lg:before:border-y-[15px] lg:before:border-r-[25px] lg:before:border-y-[#fff]/[.01] lg:before:border-r-slate-100 lg:before:border-opacity-70 lg:before:content-[''] dark:lg:before:border-[#251e32]/70 dark:lg:before:border-y-[#000]/[.01] xl:w-9/12"
        >
          <div className="shadow-900/20 relative mx-2 mt-1 flex h-11 w-max flex-row items-center rounded-3xl bg-slate-300/30 px-1 shadow-inner backdrop-blur backdrop-filter transition dark:border-[1px] dark:border-[#6a3dd1]/30 dark:bg-[#1b1624] lg:mx-0">
            {AboutMeData.map((tabContent, index) => (
              <Tab
                className={index}
                active={tab}
                selectTab={() => selectTab(tabContent.name)}
                tabName={tabContent.name}
              />
            ))}
          </div>
          <div className="mt-6 place-self-stretch px-4 pb-2 text-base text-stone-600 dark:text-[#b7b0c2] md:mb-6">
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
