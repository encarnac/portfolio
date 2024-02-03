import { useState, useTransition } from "react";
import { Tab } from "./Tab";
import { AboutMeData } from "../constants/AboutMeData";
import AboutPhoto from "../assets/about-pfp.png";
import { motion, AnimatePresence } from "framer-motion";
import { HiUser, HiMapPin, HiLightBulb } from "react-icons/hi2";

const aboutPhoto = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const statBubble = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AboutSection = ({ setSelectedPage }) => {
  const [tab, setTab] = useState("My Story");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <section id="about" className="mb-12 w-full">
      <div className="relative mb-4 flex flex-col items-center justify-center py-3">
        <h3 className="font-sans text-4xl font-extrabold tracking-wider sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            About
          </span>
        </h3>
        <h4 className="absolute bottom-1 font-mono text-lg tracking-tighter text-[#797382]/70 dark:text-white/60 sm:text-xl lg:text-2xl">
          [01]who i am
        </h4>
      </div>
      <div className="items-enter mt-4 grid grid-cols-1 justify-items-center gap-x-0 gap-y-4 py-10 lg:mt-0 lg:grid-cols-12 lg:gap-y-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "tween", duration: 0.8 }}
          variants={aboutPhoto}
          className="relative flex flex-col items-center justify-items-center gap-y-4 lg:col-span-5"
        >
          <div className="size-[200px] sm:size-[250px] md:size-[275px] xl:size-[350px] before:size-[190px] sm:before:size-[240px] md:before:size-[260px] relative rounded-custom-1 bg-[#abaceb] before:absolute before:bottom-0 before:right-3 before:rounded-custom-4 before:bg-[#ad99db] dark:bg-[#5A32AF] dark:before:bg-[#7943ed] xl:before:h-[325px] xl:before:w-[335px]">
            <img src={AboutPhoto} className="absolute inset-x-0 -bottom-3" />
            <motion.div
              variants={statBubble}
              className="absolute inset-x-28 -top-9 flex h-fit w-fit flex-row items-center justify-between space-x-1 rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-white/40 px-2 py-1 text-[.65rem] font-bold text-[#797382] shadow-sm backdrop-blur-md dark:bg-[#403457]/50 dark:text-[#CCC3D7] dark:shadow-md sm:py-2 sm:text-xs xl:inset-x-44 xl:text-sm"
            >
              <HiUser className="size-6 sm:size-8 text-[#E38EC0] dark:text-[#a32dd2]" />
              <span className="">Colene Encarnado</span>
            </motion.div>
            <motion.div
              variants={statBubble}
              className="absolute -left-9 -top-3 flex h-fit w-28 flex-row items-center justify-between space-x-1 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl bg-white/40 px-2 py-px text-[.65rem] font-bold text-[#797382] shadow-sm backdrop-blur-md dark:bg-[#403457]/50 dark:text-[#CCC3D7] dark:shadow-md sm:-left-24 sm:top-14 sm:w-fit sm:py-2 sm:text-xs xl:text-sm"
            >
              <HiMapPin className="size-6 text-[#E38EC0] dark:text-[#a32dd2]" />
              <span className="">Los Angeles, CA</span>
            </motion.div>
            <motion.div
              variants={statBubble}
              className="absolute -right-9 bottom-1/2 flex h-fit w-fit flex-row items-center justify-between space-x-1 rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-white/40 px-2 py-1 text-[.65rem] font-bold text-[#797382] shadow-sm backdrop-blur-lg dark:bg-[#403457]/50 dark:text-[#CCC3D7] dark:shadow-md sm:py-2 sm:text-xs xl:text-sm"
            >
              <HiLightBulb className="size-4 sm:size-5 text-[#E38EC0] dark:text-[#a32dd2]" />
              <span className="">&lt; 1 YOE</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "tween", duration: 0.4 }}
          variants={{
            hidden: { x: 50, opacity: 0 },
            visible: { opacity: 1, x: 0 },
          }}
          className="relative mt-4 flex h-full w-full min-w-fit flex-col items-center space-y-4 px-0 lg:col-span-7 lg:mt-0 lg:min-w-min lg:space-y-10 xl:w-11/12"
        >
          <div className="relative mb-4 flex w-fit flex-row items-stretch justify-center border-b-[1px] border-b-[#726C7B]/20 px-8 transition dark:border-b-[#b7b0c2]/10 lg:mx-0 lg:my-0">
            {AboutMeData.map((tabContent, index) => (
              <Tab
                className={index}
                active={tab}
                selectTab={() => selectTab(tabContent.name)}
                tabName={tabContent.name}
              />
            ))}
          </div>
          <div className="place-self-stretch text-sm text-[#6B6573] dark:text-[#CCC3D7] sm:text-base md:text-lg">
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
    </section>
  );
};

export default AboutSection;
