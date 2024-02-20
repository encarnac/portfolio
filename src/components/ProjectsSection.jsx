import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProjectsTab from "./ProjectsTab";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "../utils/ProjectsData";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const selectFilter = (type) => {
    setFilter(type);
  };

  const changeView = (count) => {
    console.log(filteredProjects);
    setView(count);
    console.log(filteredProjects);
  };

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.type.includes(filter)
  ).slice(0, filter === "all" ? view : undefined);

  const types = ["all", "web", "mobile", "design"];

  const tabVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const cardsVariants = {
    enter: {
      transition: { staggerChildren: 0.5, delayChildren: 0.5 },
    },
    exit: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const cardVariants = {
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 30,
      opacity: 0,
    },
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

        {/* CATEGORY FILTER TABS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={tabVariants}
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
        <AnimatePresence>
          <motion.ul
            ref={ref}
            key={`${filter}`}
            variants={cardsVariants}
            initial="exit"
            animate={isInView ? "enter" : "exit"}
            exit="exit"
            className="grid gap-y-8 text-[#312f34] dark:text-[#c3c3c4] sm:grid-cols-12 sm:gap-x-4 md:gap-x-3 lg:gap-x-8 xl:gap-x-12"
          >
            {filteredProjects.map((project, index) => (
              <li
                key={`${project.id}-${index}-${filter}`}
                className="col-span-1 flex flex-col items-center sm:col-span-6 md:col-span-4"
              >
                <ProjectCard key={index} project={project} />
              </li>
            ))}{" "}
          </motion.ul>
        </AnimatePresence>

        {/* GITHUB LINK */}
        <div className="place-self-center text-white">
          {filter === "all" && (
            <>
              {view < PROJECTS_DATA.length && (
                <button
                  onClick={() => changeView(view + 3)}
                  className="inline-block rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-8 py-3 text-base text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] lg:text-lg"
                >
                  View More
                </button>
              )}
              {view >= PROJECTS_DATA.length && view > 3 && (
                <button
                  onClick={() => changeView(3)}
                  className="inline-block rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-8 py-3 text-base text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] lg:text-lg"
                >
                  View Less
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
