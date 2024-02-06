import { useState, useTransition } from "react";
import { Tab } from "./Tab";
import { AboutMeData } from "../constants/AboutMeData";
import AboutPhoto from "../assets/about-pfp.png";
import { motion, AnimatePresence } from "framer-motion";
import { HiUser, HiMapPin, HiLightBulb } from "react-icons/hi2";

const aboutPhoto = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.4,
    },
  },
};
const aboutContent = {
  hidden: { x: 50, opacity: 0 },
  visible: { opacity: 1, x: 0 },
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
      <div className="relative mb-8 flex flex-col items-center justify-center py-3">
        <h3 className="font-sans text-4xl font-bold lg:text-5xl">
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            About
          </span>
        </h3>
        <h4 className="absolute -top-2 font-mono text-lg tracking-widest text-[#797382]/40 dark:text-white/40 sm:text-xl lg:text-2xl">
          [01]who i am
        </h4>
      </div>
      <div className="mt-4 grid grid-cols-1 items-start justify-items-center gap-x-0 gap-y-4 py-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-0 lg:py-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 80 }}
          variants={aboutPhoto}
          className="relative flex flex-col items-center justify-items-center gap-y-4 lg:col-span-5"
        >
          <div className="size-[250px] md:size-[300px] xl:size-[350px] before:size-[235px] md:before:size-[285px] xl:before:size-[325px] relative rounded-custom-1 bg-[#abaceb] before:absolute before:bottom-0 before:right-3 before:rounded-custom-4 before:bg-[#ad99db] dark:bg-[#5A32AF] dark:before:bg-[#7943ed] xl:before:w-[335px]">
            <img src={AboutPhoto} className="absolute inset-x-4 -bottom-3" />
            <motion.div
              variants={statBubble}
              className="absolute inset-x-24 -top-10 flex h-fit w-fit flex-row items-center justify-between space-x-1 rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-white/40 px-2 py-1 text-sm font-semibold text-[#797382] shadow-sm backdrop-blur-md dark:bg-[#403457]/50 dark:text-[#CCC3D7] dark:shadow-md sm:py-2 xl:inset-x-44"
            >
              <HiUser className="size-8 text-[#E38EC0] dark:text-[#a32dd2]" />
              <span className="">Colene Encarnado</span>
            </motion.div>
            <motion.div
              variants={statBubble}
              className="absolute -left-12 top-6 flex h-fit w-28 flex-row items-center justify-between space-x-1 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl bg-white/40 px-2 py-1 text-sm font-semibold text-[#797382] shadow-sm backdrop-blur-md dark:bg-[#403457]/50 dark:text-[#CCC3D7] dark:shadow-md sm:-left-20 sm:top-14 sm:w-fit sm:py-2"
            >
              <HiMapPin className="size-8 text-[#E38EC0] dark:text-[#a32dd2]" />
              <span className="">Los Angeles, CA</span>
            </motion.div>
            <motion.div
              variants={statBubble}
              className="absolute -right-10 bottom-1/2 flex h-fit w-fit flex-row items-center justify-between space-x-1 rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-white/40 px-2 py-1 text-sm font-semibold text-[#797382] shadow-sm backdrop-blur-lg dark:bg-[#403457]/50 dark:text-[#CCC3D7] dark:shadow-md sm:py-2"
            >
              <HiLightBulb className="size-5 text-[#E38EC0] dark:text-[#a32dd2]" />
              <span className="">&lt; 1 YOE</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 70 }}
          variants={aboutContent}
          className="relative mt-4 flex h-full w-full min-w-fit flex-col items-center space-y-4 px-0 lg:col-span-7 lg:mt-0 lg:min-w-min lg:space-y-6 xl:w-11/12"
        >
          <div className="relative flex w-fit flex-row items-stretch justify-center border-b-[2px] border-b-[#726C7B]/20 px-8 transition dark:border-b-[#b7b0c2]/10 lg:mx-0 lg:my-0">
            {AboutMeData.map((tabContent, index) => (
              <Tab
                className={index}
                active={tab}
                selectTab={() => selectTab(tabContent.name)}
                tabName={tabContent.name}
              />
            ))}
          </div>
          <div className="place-self-stretch text-base text-[#6B6573] dark:text-[#CCC3D7] md:text-lg">
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
