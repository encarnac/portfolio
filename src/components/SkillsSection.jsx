import frontend from "../assets/frontend.svg";
import backend from "../assets/backend.svg";
import tools from "../assets/tools.svg";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiJirasoftware,
  SiFigma,
  SiPostman,
} from "react-icons/si";

const skillCard = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const skillsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="mb-12 w-full">
      <div className="relative mb-8 flex flex-row items-center justify-between py-3">
        <h3 className="font-sans text-4xl font-extrabold tracking-wide sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            Skills
          </span>
        </h3>
        <h4 className="font-mono text-lg tracking-widest text-[#797382]/40 dark:text-white/40 sm:text-xl lg:text-2xl">
          [02]what i do
        </h4>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={skillsContainer}
        className="justify-content-center grid grid-cols-1 gap-x-0 gap-y-4 md:grid-cols-12 md:gap-x-3 md:gap-y-0 lg:gap-x-12 xl:gap-x-16"
      >
        <motion.div
          transition={{ type: "spring", stiffness: 150 }}
          variants={skillCard}
          className="relative rounded-3xl backdrop-blur-none before:absolute before:-bottom-[.4rem] before:-left-[.4rem] before:z-[-1] before:h-full before:w-full before:rounded-3xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:col-span-4"
        >
          <div className="flex h-full flex-col items-center justify-start gap-y-5 rounded-3xl bg-[#dae0e7] px-0 py-8 transition duration-300 hover:-translate-y-2 hover:duration-300 dark:bg-[#231F2F] lg:py-14">
            <div className="mb-1 rounded-full bg-[#cfd7e5] p-5 dark:bg-[#2b2841]">
              <img src={frontend} className="w-11" />
            </div>
            <h4 className="relative pb-4 text-xl font-bold text-[#5b5662] after:absolute after:inset-x-3 after:bottom-0 after:h-2 after:w-3/4 after:rounded-full after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
              Front-End
            </h4>
            <ul className="flex-rows flex flex-wrap justify-center gap-x-1 gap-y-2 px-8 text-[#6B6573] dark:text-[#CCC3D7]">
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiHtml5 className="col-span-1" />
                <span className="col-span-2 px-px">HTML5</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiCss3 className="col-span-1" />
                <span className="col-span-2 px-px">CSS3</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiJavascript className="col-span-1" />
                <span className="col-span-2 px-px">Javascript</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiReact className="col-span-1" />
                <span className="col-span-2 px-px">React</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiNextdotjs className="col-span-1" />
                <span className="col-span-2 px-px">Next.js</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiBootstrap className="col-span-1" />
                <span className="col-span-2">Bootstrap</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiTailwindcss className="col-span-1" />
                <span className="col-span-2">Tailwind</span>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          transition={{ type: "spring", stiffness: 150 }}
          variants={skillCard}
          className="relative rounded-3xl backdrop-blur-none before:absolute before:-bottom-[.4rem] before:-left-[.4rem] before:z-[-1] before:h-full before:w-full before:rounded-3xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:col-span-4"
        >
          <div className="flex h-full flex-col items-center justify-start gap-y-5 rounded-3xl bg-[#dae0e7] px-0 py-8 transition duration-300 hover:-translate-y-2 hover:duration-300 dark:bg-[#231F2F] lg:py-14">
            <div className="mb-1 rounded-full bg-[#cfd7e5] p-5 dark:bg-[#2b2841]">
              <img src={backend} className="w-11" />
            </div>
            <h4 className="relative pb-4 text-xl font-bold text-[#5b5662] after:absolute after:inset-x-3 after:bottom-0 after:h-2 after:w-3/4 after:rounded-full after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
              Back-End
            </h4>
            <ul className="flex-rows flex flex-wrap justify-center gap-x-1 gap-y-2 px-8 text-[#6B6573] dark:text-[#CCC3D7]">
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiPython className="col-span-1" />
                <span className="col-span-2 px-px">Python</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiFlask className="col-span-1" />
                <span className="col-span-2 px-px">Flask</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiExpress className="col-span-1" />
                <span className="col-span-2 px-px">Express</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiMongodb className="col-span-1" />
                <span className="col-span-2 px-px">MongoDB</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiMysql className="col-span-1" />
                <span className="col-span-2 px-px">MySQL</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiGooglecloud className="col-span-1" />
                <span className="col-span-2 px-px">GCP</span>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          transition={{ type: "spring", stiffness: 150 }}
          variants={skillCard}
          className="relative rounded-3xl backdrop-blur-none before:absolute before:-bottom-[.4rem] before:-left-[.4rem] before:z-[-1] before:h-full before:w-full before:rounded-3xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 hover:before:-translate-y-2 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:col-span-4"
        >
          <div className="flex h-full flex-col items-center justify-start gap-y-5 rounded-3xl bg-[#dae0e7] px-0 py-8 transition duration-300 hover:-translate-y-2 hover:duration-300 dark:bg-[#231F2F] lg:py-14">
            <div className="mb-1 rounded-full bg-[#cfd7e5] p-5 dark:bg-[#2b2841]">
              <img src={tools} className="h-11" />
            </div>
            <h4 className="relative pb-4 text-xl font-bold text-[#5b5662] after:absolute after:inset-x-3 after:bottom-0 after:h-2 after:w-3/4 after:rounded-full after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
              Dev Tools
            </h4>
            <ul className="flex-rows flex flex-wrap justify-center gap-x-1 gap-y-2 px-8 text-[#6B6573] dark:text-[#CCC3D7]">
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiGit className="col-span-1" />
                <span className="col-span-2 px-px">Git</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiGithub className="col-span-1" />
                <span className="col-span-2 px-px">GitHub</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiJirasoftware className="col-span-1" />
                <span className="col-span-2 px-px">Jira</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiFigma className="col-span-1" />
                <span className="col-span-2 px-px">Figma</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiPostman className="col-span-1" />
                <span className="col-span-2 px-px">Postman</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
