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
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
} from "react-icons/si";

export const SkillsSection = () => {
  return (
    <section id="skills" className="mb-12 w-full">
      <div className="relative mb-10 flex flex-col items-center justify-center py-3">
        <h3 className="font-sans text-4xl font-extrabold tracking-wider sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            Skills
          </span>
        </h3>
        <h4 className="absolute bottom-1 font-mono text-lg tracking-tighter text-[#797382]/70 dark:text-white/60 sm:text-xl lg:text-2xl">
          [02]what i do
        </h4>
      </div>
      <div className="justify--content-center grid grid-cols-1 gap-x-0 gap-y-8 px-8 md:grid-cols-12 md:gap-x-3 md:gap-y-0 lg:gap-x-12 xl:gap-x-16">
        <motion.div
          layout
          className="relative rounded-2xl backdrop-blur-none before:absolute before:-bottom-[.35rem] before:-left-[.35rem] before:z-[-1] before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:col-span-4"
        >
          <div className="flex h-full flex-col items-center justify-start gap-y-4 rounded-2xl bg-[#d6e0eb] px-0 py-10 dark:bg-[#231F2F]">
            <div className="mb-1 rounded-full bg-[#c8d6e6] p-5 dark:bg-[#2b2841]">
              <img src={frontend} className="w-10" />
            </div>
            <h4 className="relative pb-4 text-xl font-bold after:absolute after:inset-x-3 after:bottom-0 after:h-1 after:w-3/4 after:rounded-full after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
              Front-End
            </h4>
            <ul className="flex-rows flex flex-wrap justify-center gap-x-1 gap-y-2 px-8 text-[#6B6573] dark:text-[#CCC3D7]">
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-2 py-px dark:border-[#CCC3D7]">
                <SiHtml5 className="col-span-1" />
                <span className="col-span-2">HTML5</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiCss3 className="col-span-1" />
                <span className="col-span-2">CSS3</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiJavascript className="col-span-1" />
                <span className="col-span-2">Javascript</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiReact className="col-span-1" />
                <span className="col-span-2">React</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiNextdotjs className="col-span-1" />
                <span className="col-span-2">Next.js</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiBootstrap className="col-span-1" />
                <span className="col-span-2">Bootstrap</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiTailwindcss className="col-span-1" />
                <span className="col-span-2">Tailwind</span>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          layout
          className="relative rounded-2xl backdrop-blur-none before:absolute before:-bottom-[.35rem] before:-left-[.35rem] before:z-[-1] before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:col-span-4"
        >
          <div className="flex h-full flex-col items-center justify-start gap-y-4 rounded-2xl bg-[#d6e0eb] px-0 py-10 dark:bg-[#231F2F]">
            <div className="mb-1 rounded-full bg-[#c8d6e6] p-5 dark:bg-[#2b2841]">
              <img src={backend} className="w-10" />
            </div>
            <h4 className="relative pb-4 text-xl font-bold after:absolute after:inset-x-3 after:bottom-0 after:h-1 after:w-3/4 after:rounded-full after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
              Back-End
            </h4>
            <ul className="flex-rows flex flex-wrap justify-center gap-x-1 gap-y-2 px-8 text-[#6B6573] dark:text-[#CCC3D7]">
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-2 py-px dark:border-[#CCC3D7]">
                <SiPython className="col-span-1" />
                <span className="col-span-2">Python</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiExpress className="col-span-1" />
                <span className="col-span-2">Express</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiMongodb className="col-span-1" />
                <span className="col-span-2">MongoDB</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiMysql className="col-span-1" />
                <span className="col-span-2">MySQL</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiGooglecloud className="col-span-1" />
                <span className="col-span-2 px-1">GCP</span>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          layout
          className="relative rounded-2xl backdrop-blur-none before:absolute before:-bottom-[.35rem] before:-left-[.35rem] before:z-[-1] before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-br before:from-[#68A3EB] before:to-[#F38BBB] before:opacity-0 before:transition before:duration-300 before:hover:opacity-100 before:hover:duration-300 before:dark:from-[#3034C2] before:dark:via-[#6A3DD1] before:dark:to-[#9329BE] md:col-span-4"
        >
          <div className="flex h-full flex-col items-center justify-start gap-y-4 rounded-2xl bg-[#d6e0eb] px-0 py-10 dark:bg-[#231F2F]">
            <div className="mb-1 rounded-full bg-[#c8d6e6] p-5 dark:bg-[#2b2841]">
              <img src={tools} className="w-10" />
            </div>
            <h4 className="relative pb-4 text-xl font-bold after:absolute after:inset-x-3 after:bottom-0 after:h-1 after:w-3/4 after:rounded-full after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
              Dev Tools
            </h4>
            <ul className="flex-rows flex flex-wrap justify-center gap-x-1 gap-y-2 px-8 text-[#6B6573] dark:text-[#CCC3D7]">
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-2 py-px dark:border-[#CCC3D7]">
                <SiPython className="col-span-1" />
                <span className="col-span-2">Python</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiExpress className="col-span-1" />
                <span className="col-span-2">Express</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiMongodb className="col-span-1" />
                <span className="col-span-2">MongoDB</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiMysql className="col-span-1" />
                <span className="col-span-2">MySQL</span>
              </li>
              <li className="grid grid-cols-3 items-center justify-items-center rounded-3xl border-[1px] border-[#6B6573] px-3 py-1 dark:border-[#CCC3D7]">
                <SiGooglecloud className="col-span-1" />
                <span className="col-span-2 px-1">GCP</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
