import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import AboutIconCard from "./AboutIconCard";
import { ABOUT_DATA } from "../utils/AboutData";
import AboutPhoto from "../assets/about-pfp.png";
import resume from "../assets/Resume_ColeneEnc.pdf";
import { SiGithub, SiLinkedin } from "react-icons/si";

const aboutSummary = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.6 },
  },
};

const aboutPhoto = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const aboutContent = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.8 },
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
      {/* SECTION HEADER */}
      <div className="relative mb-0 flex flex-col items-center justify-start lg:col-span-5 lg:mb-8">
        <h4 className="font-mono text-lg tracking-widest text-[#5b5662]/40 dark:text-[#D4D3D8]/40 lg:text-xl">
          about
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
          Who I{" "}
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            Am
          </span>
        </h3>
      </div>

      {/* SECTION CONTENT */}
      <div className="flex flex-col">
        <div className="mt-0 grid grid-cols-1 items-center justify-items-center gap-x-0 gap-y-4 py-0 md:grid-cols-12 md:py-2 lg:gap-y-0 lg:py-0">
          {/* PHOTO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            variants={aboutPhoto}
            transition={{ type: "tween", duration: 0.3 }}
            className="relative hidden flex-col items-center justify-items-center gap-y-2 md:col-span-5 md:flex"
          >
            <div className="size-[250px] lg:size-[300px] before:size-[235px] lg:before:size-[285px] relative rounded-custom-1 bg-[#abaceb] before:absolute before:bottom-0 before:right-3 before:rounded-custom-4 before:bg-[#ad99db] dark:bg-[#5A32AF] dark:before:bg-[#7943ed] xl:before:w-[285px]">
              <img src={AboutPhoto} className="absolute -bottom-3" />
            </div>
          </motion.div>

          {/* SELF INTRODUCTION AND LINKS  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "tween", duration: 0.4 }}
            variants={aboutContent}
            className="relative mt-0 flex w-full min-w-fit flex-col gap-y-2 px-0 text-sm text-[#7B7484] dark:text-[#c3c3c4] md:col-span-7 lg:min-w-min lg:gap-y-6 lg:text-base xl:w-11/12"
          >
            {ABOUT_DATA.introduction}

            <div className="flex flex-row items-center justify-stretch gap-x-2 md:gap-x-3">
              <a
                href={resume}
                download
                className="inline-block rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] p-1 text-xs text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] md:text-sm lg:text-base"
              >
                <span className="block rounded-full bg-[#E3E8EE] px-4 py-3 transition duration-300 dark:bg-[#201E2C] md:px-6 md:py-3 lg:px-4 lg:py-3">
                  <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                    Download CV
                  </span>
                </span>
              </a>
              <hr class="h-px w-8 border-0 bg-[#6B6573] dark:bg-[#CCC3D7] sm:w-12"></hr>
              <p className="hidden font-mono text-sm font-light sm:inline">
                Follow me
              </p>
              <a href="https://github.com/encarnac">
                <SiGithub className="size-5 sm:size-6 transition duration-300 ease-in-out hover:scale-105 hover:text-[#7B7484] dark:hover:text-[#DAD1E6]" />
              </a>
              <a href="https://www.linkedin.com/in/encarnac/">
                <SiLinkedin className="size-5 sm:size-6 transition duration-300 ease-in-out hover:scale-105 hover:text-[#7B7484] dark:hover:text-[#DAD1E6]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* SUMMARY ICONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={aboutSummary}
          transition={{ type: "tween", duration: 0.6 }}
          className="order-first mt-0 grid grid-cols-2 gap-2 text-center text-base sm:justify-start md:order-last md:mt-10 md:grid-cols-4 md:text-start md:text-sm lg:text-lg"
        >
          {ABOUT_DATA.summary.map((info, index) => (
            <AboutIconCard info={info} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
