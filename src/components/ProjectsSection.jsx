import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectsTab from "./ProjectsTab";
import { PROJECTS_DATA } from "../utils/ProjectsData";

const projectsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const projectsTabs = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const types = ["all", "web", "mobile", "design"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const selectFilter = (type) => {
    setFilter(type);
  };

  return (
    <section id="projects" className="mb-12 w-full">
      {/* SECTION HEADER */}
      <div className="relative mb-8 flex flex-col items-center justify-end py-3">
        <h4 className="text-md font-mono tracking-widest text-[#5b5662]/40 dark:text-[#D4D3D8]/40 lg:text-xl">
          projects
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
          What I{" "}
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            Made
          </span>
        </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={projectsTabs}
          transition={{ type: "tween", duration: 0.3 }}
          className="relative mt-8 flex h-fit w-fit flex-row place-self-center border-b-[2px] border-b-[#726C7B]/20 px-2 dark:border-b-[#b7b0c2]/10 sm:px-6 lg:col-span-7 lg:mx-0"
        >
          {types.map((type, index) => (
            <ProjectsTab
              className={index}
              active={filter}
              selectFilter={() => selectFilter(type)}
              type={type}
            />
          ))}
        </motion.div>
      </div>

      {/* SECTION CONTENT */}

      <div className="flex flex-col items-center gap-y-12">
        {/* PROJECT CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={projectsContainer}
          className="grid gap-y-8 text-[#7B7484] dark:text-[#c3c3c4] md:grid-cols-12 md:gap-x-2 md:gap-y-0 lg:gap-x-8 xl:gap-x-12"
        >
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* GITHUB LINK */}
        <div className="place-self-center text-white">
          <a
            href=""
            className="inline-block rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-8 py-3 text-base text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit md:px-32 lg:text-lg"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
