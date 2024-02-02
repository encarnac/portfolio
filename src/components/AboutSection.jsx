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
  const [tab, setTab] = useState("About");
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
        className="grid grid-cols-1 items-start justify-items-center gap-x-0 py-2 lg:grid-cols-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "tween", duration: 0.6 }}
          variants={motionVariants("right")}
          className="flex flex-col items-center justify-items-center gap-y-2 py-0 lg:col-span-5 lg:py-14"
        >
          <div className="size-[200px] sm:size-[250px] md:size-[275px] xl:size-[350px] before:size-[190px] sm:before:size-[250px] md:before:size-[255px] relative my-2 rounded-custom-1 bg-[#F38BBB] before:absolute before:right-3 before:rounded-custom-4 before:bg-[#7943ed] dark:bg-[#5A32AF] xl:before:h-[325px] xl:before:w-[335px]">
            <img src={AboutPhoto} className="absolute inset-x-0 -bottom-4" />
            <div className="absolute -right-4 top-24 w-fit rounded-br-2xl rounded-tl-2xl rounded-tr-2xl border-b-[2px] border-r-[2px] border-b-[#dfc1cf] border-r-[#b2cceb] bg-gradient-to-bl from-[#68A3EB]/60 to-[#F38BBB]/60 p-1 shadow-md backdrop-blur-2xl backdrop-filter dark:border-b-[#815b90] dark:border-r-[#6567a5] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] dark:shadow-xl dark:shadow-[#3a3d8d]/50">
              <span className="block break-words rounded-xl px-2 py-1 text-sm text-slate-200 transition duration-300">
                <HiOutlineGlobeAlt className="size-7 lg:size-10 text-stone-100 dark:text-white" />
              </span>
            </div>
            <div className="absolute -left-2 top-8 w-fit rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl border-b-[2px] border-l-[2px] border-b-[#dfc1cf] border-l-[#b2cceb] bg-gradient-to-br from-[#68A3EB]/60 to-[#F38BBB]/60 p-1 shadow-md backdrop-blur-2xl dark:border-b-[#815b90] dark:border-l-[#6567a5] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] dark:shadow-xl dark:shadow-[#3a3d8d]/50">
              <span className="text-wrap block rounded-xl px-2 py-1 text-sm text-slate-200 transition duration-300">
                <HiCode className="size-7 lg:size-10 text-stone-100 dark:text-white" />
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
          className="relative mt-4 flex h-full w-full min-w-fit flex-col items-center px-0 py-6 lg:col-span-7 lg:mt-0 lg:min-w-min xl:w-11/12"
        >
          <div className="relative mt-1 flex w-max flex-row items-stretch justify-center border-b-[1px] border-b-[#726C7B]/40 px-8 transition dark:border-b-[#b7b0c2]/70 lg:mx-0">
            {AboutMeData.map((tabContent, index) => (
              <Tab
                className={index}
                active={tab}
                selectTab={() => selectTab(tabContent.name)}
                tabName={tabContent.name}
              />
            ))}
          </div>
          <div className="mt-6 place-self-stretch pb-2 text-base text-[#6F6977] dark:text-[#b7b0c2] md:mb-6">
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
