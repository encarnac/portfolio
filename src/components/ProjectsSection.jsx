import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "../constants/ProjectsData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuChevronLeft, LuChevronRight, LuEye, LuCode2 } from "react-icons/lu";

const projectCard = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const projectsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const sliderVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const ProjectsSection = () => {
  const [[card, direction], setCard] = useState([0, 0]);

  const nextSlide = () => {
    setCard([card === PROJECTS_DATA.length - 1 ? 0 : card + 1, 1]);
  };

  const prevSlide = () => {
    setCard([card === 0 ? PROJECTS_DATA.length - 1 : card - 1, -1]);
  };
  return (
    <section id="projects" className="mb-12 w-full">
      <div className="relative mb-8 flex flex-col items-end justify-end py-3">
        <h4 className="text-md font-mono tracking-widest text-[#797382]/40 dark:text-white/40 sm:text-xl md:text-2xl">
          [03]projects
        </h4>
        <h3 className="font-sans text-4xl font-bold md:text-5xl">
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            What I Made
          </span>
        </h3>
      </div>
      {/* MOBILE SLIDER VIEW */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={projectCard}
        transition={{ type: "tween", duration: 0.9 }}
        className="relative flex h-full flex-col items-center justify-center pb-40 pt-60 text-[#6B6573] dark:text-white md:hidden"
      >
        <LuChevronLeft
          className="size-8 absolute -left-2 top-1/2 z-10"
          onClick={prevSlide}
        />
        <LuChevronRight
          className="size-8 absolute -right-2 top-1/2 z-10"
          onClick={nextSlide}
        />
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={card}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.8 },
            }}
            className="absolute left-0 right-0 px-8"
          >
            <div class="group relative rounded-3xl border-[1px] border-[#797382]/40 border-white p-2 transition duration-300 ease-in-out hover:border-[#F38BBB] dark:border-[#807C8E]/70 dark:hover:border-[#7943ED] md:h-fit">
              <div className="absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform gap-x-4 text-white group-hover:flex">
                <a
                  href={PROJECTS_DATA[card].github}
                  className="rounded-full border-2 border-white p-2 mix-blend-lighten shadow-lg transition duration-300 ease-in-out hover:scale-105"
                >
                  <LuCode2 className="size-8" />
                </a>
                <a
                  href={PROJECTS_DATA[card].demo}
                  className="rounded-full border-2 border-white p-2 shadow-lg transition duration-300 ease-in-out hover:scale-105"
                >
                  <LuEye className="size-8" />
                </a>
              </div>
              <img
                src={PROJECTS_DATA[card].image}
                alt={`${PROJECTS_DATA[card].title} mock-up`}
                className="h-full w-full rounded-2xl object-cover opacity-100 transition duration-300 ease-linear group-hover:opacity-60"
              />
            </div>
            {/* DESCRIPTION */}
            <div class="visible relative z-50 px-2 py-2 text-start transition duration-300">
              <h4 class="font-mono text-xs text-[#F38BBB] dark:text-[#7943ED]">
                {PROJECTS_DATA[card].subtitle}
              </h4>
              <h3 class="mb-2 mt-0 text-xl font-bold">
                {PROJECTS_DATA[card].title}
              </h3>
              <div class="">
                <p className="rounded-2xl text-sm">
                  {PROJECTS_DATA[card].description}
                </p>
              </div>
              <ul className="mt-4 flex flex-row flex-wrap justify-start gap-x-1 gap-y-2 text-xs text-[#3f3b43]/90 dark:text-white/80">
                {PROJECTS_DATA[card].tags.map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {/* DESKTOP COLUMNS VIEW */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={projectsContainer}
        className="hidden gap-y-8 text-[#6B6573] dark:text-white md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-0"
      >
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            transition={{ type: "tween", duration: 0.4 }}
            variants={projectCard}
            class="col-span-4 flex flex-col items-center"
          >
            {/* PHOTO */}
            <div class="group relative rounded-3xl border-[1px] border-[#797382]/40 border-white p-2 transition duration-300 ease-in-out hover:border-[#F38BBB] dark:border-[#807C8E]/70 dark:hover:border-[#7943ED] md:h-fit">
              <div className="absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform gap-x-4 text-white group-hover:flex">
                <a
                  href={project.github}
                  className="rounded-full border-2 border-white p-2 mix-blend-lighten shadow-lg transition duration-300 ease-in-out hover:scale-105"
                >
                  <LuCode2 className="size-8" />
                </a>
                <a
                  href={project.demo}
                  className="rounded-full border-2 border-white p-2 shadow-lg transition duration-300 ease-in-out hover:scale-105"
                >
                  <LuEye className="size-8" />
                </a>
              </div>
              <img
                src={project.image}
                alt={`${project.title} mock-up`}
                className="h-full w-full rounded-2xl object-cover opacity-100 transition duration-300 ease-linear group-hover:opacity-60"
              />
            </div>
            {/* DESCRIPTION */}
            <div class="visible relative z-50 px-2 py-2 text-start transition duration-300">
              <h4 class="font-mono text-sm text-[#F38BBB] dark:text-[#7943ED]">
                {project.subtitle}
              </h4>
              <h3 class="mb-2 mt-0 text-2xl font-bold">{project.title}</h3>
              <div class="">
                <p className="line-clamp-4 rounded-2xl text-base hover:line-clamp-none">
                  {project.description}
                </p>
              </div>
              <ul className="mt-4 flex flex-row flex-wrap justify-start gap-x-1 gap-y-2 text-sm text-[#3f3b43]/90 dark:text-white/80">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
