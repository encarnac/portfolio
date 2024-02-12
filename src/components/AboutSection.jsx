import { useState, useTransition } from "react";
import { Tab } from "./Tab";
import { AboutMeData } from "../constants/AboutMeData";
import AboutPhoto from "../assets/about-pfp.png";
import { motion, AnimatePresence } from "framer-motion";
import { HiUser, HiMapPin, HiLightBulb } from "react-icons/hi2";

const aboutPhoto = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
  },
};
// const aboutContent = {
//   hidden: { x: 20, opacity: 0 },
//   visible: { opacity: 1, x: 0 },
// };

const aboutContent = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const aboutContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const AboutSection = ({ setSelectedPage }) => {
  const [tab, setTab] = useState("Introduction");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <section id="about" className="mb-12 w-full">
      <div className="grid grid-cols-1 items-center justify-items-start lg:grid-cols-12">
        <div className="relative mb-4 flex flex-col items-start justify-start lg:col-span-5 lg:mb-8">
          <h4 className="font-mono text-lg tracking-widest text-[#5b5662]/40 dark:text-[#D4D3D8]/40 lg:text-xl">
            [01]about
          </h4>
          <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
            {/* <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]"> */}
            Who I Am
            {/* </span> */}
          </h3>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={aboutContainer}
          transition={{ type: "tween", duration: 0.5 }}
          className="relative flex h-fit w-full flex-row justify-self-center border-b-[2px] border-b-[#726C7B]/20 px-2 dark:border-b-[#b7b0c2]/10 sm:px-6 lg:col-span-7 lg:mx-0 lg:my-0"
        >
          {AboutMeData.map((tabContent, index) => (
            <Tab
              className={index}
              active={tab}
              selectTab={() => selectTab(tabContent.name)}
              tabName={tabContent.name}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={aboutContainer}
        className="mt-0 grid grid-cols-1 items-start justify-items-center gap-x-0 gap-y-4 py-4 lg:grid-cols-12 lg:gap-y-0 lg:py-0"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={aboutContent}
          transition={{ type: "tween", duration: 0.3 }}
          className="relative hidden flex-col items-center justify-items-center gap-y-2 lg:col-span-5 lg:flex"
        >
          <div className="size-[190px] md:size-[250px] lg:size-[300px] xl:size-[350px] before:size-[175px] md:before:size-[235px] lg:before:size-[285px] xl:before:size-[325px] relative rounded-custom-1 bg-[#abaceb] before:absolute before:bottom-0 before:right-3 before:rounded-custom-4 before:bg-[#ad99db] dark:bg-[#5A32AF] dark:before:bg-[#7943ed] xl:before:w-[335px]">
            <img src={AboutPhoto} className="absolute inset-x-4 -bottom-3" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ type: "tween", duration: 0.3 }}
          variants={aboutContent}
          className="relative mt-0 flex h-full w-full min-w-fit flex-col items-center space-y-4 px-0 lg:col-span-7 lg:min-w-min lg:space-y-6 xl:w-11/12"
        >
          <div className="place-self-stretch text-sm text-[#7B7484] dark:text-[#c3c3c4] lg:text-base">
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
      </motion.div>
    </section>
  );
};

export default AboutSection;
