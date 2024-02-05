import frontend from "../assets/frontend.svg";
import backend from "../assets/backend.svg";
import tools from "../assets/tools.svg";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  return (
    <section id="#skills" className="mb-12 w-full">
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
      <div className="grid grid-cols-1 gap-y-4 px-12 sm:px-24 md:px-36 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-4 lg:px-10 xl:px-48">
        <motion.div
          layout
          className="box-content flex flex-col items-center justify-start gap-y-4 rounded-xl border-[#d6e0eb] bg-[#d6e0eb] px-0 py-8 backdrop-blur-sm transition duration-300 hover:border-b-8 hover:border-l-8 hover:border-[#AD99DB]/80 dark:border-[#1f1c24] dark:bg-[#1f1c24] dark:hover:border-[#7943ED] lg:col-span-4"
        >
          <div className="mb-1 rounded-full bg-[#bbc8dd] p-4 dark:bg-[#312b3f]">
            <img src={frontend} className="w-10" />
          </div>
          <h4 className="relative pb-4 font-bold after:absolute after:inset-x-4 after:bottom-0 after:h-1 after:w-2/3 after:rounded-3xl after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
            Front-End
          </h4>
          <ul className="place-self-center text-[#6B6573] dark:text-[#CCC3D7]">
            <li className="">HTML5</li>
            <li className="">CSS3</li>
            <li className="">Javascript</li>
            <li className="">React.js</li>
            <li className="">Next.js</li>
            <li className="">Bootstrap</li>
            <li className="">TailwindCSS</li>
          </ul>
        </motion.div>
        <motion.div
          layout
          className="box-border flex flex-col items-center justify-start gap-y-4 rounded-xl border-[#d6e0eb] bg-[#d6e0eb] px-2 py-8 backdrop-blur-sm transition duration-300 hover:border-b-8 hover:border-l-8 hover:border-[#AD99DB]/80 dark:border-[#1f1c24] dark:bg-[#1f1c24] dark:hover:border-[#7943ED] lg:col-span-4"
        >
          <div className="mb-1 rounded-full bg-[#bbc8dd] p-4 dark:bg-[#312b3f]">
            <img src={backend} className="w-10" />
          </div>
          <h4 className="relative pb-4 font-bold after:absolute after:inset-x-4 after:bottom-0 after:h-1 after:w-2/3 after:rounded-3xl after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
            Back-End
          </h4>
          <ul className="place-self-center text-[#6B6573] dark:text-[#CCC3D7]">
            <li className="">Python</li>
            <li className="">Express</li>
            <li className="">MongoDB</li>
            <li className="">MySQL</li>
            <li className="">GCP</li>
          </ul>
        </motion.div>{" "}
        <motion.div
          layout
          className="box-content flex flex-col items-center justify-start gap-y-4 rounded-xl border-[#d6e0eb] bg-[#d6e0eb] px-2 py-8 backdrop-blur-sm transition duration-300 hover:border-b-8 hover:border-l-8 hover:border-[#AD99DB]/80 dark:border-[#1f1c24] dark:bg-[#1f1c24] dark:hover:border-[#7943ED] lg:col-span-4"
        >
          <div className="mb-1 rounded-full bg-[#bbc8dd] p-4 dark:bg-[#312b3f]">
            <img src={tools} className="w-10" />
          </div>
          <h4 className="relative pb-4 font-bold after:absolute after:inset-x-4 after:bottom-0 after:h-1 after:w-2/3 after:rounded-3xl after:bg-[#AD99DB] dark:text-white dark:after:bg-[#7943ED]">
            Dev Tools
          </h4>
          <ul className="place-self-center text-[#6B6573] dark:text-[#CCC3D7]">
            <li className="">Git</li>
            <li className="">GitHub</li>
            <li className="">Jira</li>
            <li className="">Figma</li>
            <li className="">Postman</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
