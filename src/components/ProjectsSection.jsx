import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "../constants/ProjectsData";
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
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
    <section id="projects" className="mb-12 flex w-full flex-col">
      <div className="relative mb-8 flex flex-col items-end justify-end py-3">
        <h4 className="text-md font-mono tracking-widest text-[#5b5662]/60 dark:text-white/40 lg:text-xl">
          [03]projects
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-white/80 lg:text-4xl">
          {/* <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]"> */}
          What I Made
          {/* </span> */}
        </h3>
      </div>
      {/* MOBILE SLIDER VIEW */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={projectCard}
        transition={{ type: "tween", duration: 0.9 }}
        className="relative flex h-[33rem] flex-col items-center justify-center text-[#6B6573] dark:text-white md:hidden"
      >
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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className="absolute left-0 right-0 top-0"
          >
            <div class="group relative overflow-clip rounded-3xl border-[1px] border-[#797382]/40 border-white bg-gradient-to-br from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] bg-clip-content p-2 transition duration-300 ease-in-out hover:border-[#F38BBB] dark:border-[#807C8E]/70 dark:from-[#422451] dark:to-[#171040] dark:hover:border-[#7943ED] md:h-fit">
              <div className="absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform gap-x-4 text-white group-hover:flex">
                <a
                  href={PROJECTS_DATA[card].github}
                  className="cursor-pointer rounded-full border-2 border-white p-2 mix-blend-lighten shadow-lg transition duration-200 ease-in-out hover:scale-110"
                >
                  <LuCode2 className="size-8" />
                </a>
                <a
                  href={PROJECTS_DATA[card].demo}
                  className="hover:scle-105 cursor-pointer rounded-full border-2 border-white p-2 shadow-lg transition duration-300 ease-in-out"
                >
                  <LuEye className="size-8" />
                </a>
              </div>
              <div className="overflow-clip rounded-2xl">
                <img
                  src={PROJECTS_DATA[card].image}
                  alt={`${PROJECTS_DATA[card].title} mock-up`}
                  className="h-full w-full object-cover opacity-100 transition duration-200 ease-linear group-hover:scale-110 group-hover:opacity-50"
                />
              </div>
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
                <p className="text-pretty text-sm">
                  {PROJECTS_DATA[card].description}
                </p>
              </div>
              <ul className="mt-2 flex flex-row flex-wrap justify-start gap-x-1 gap-y-2 text-sm text-white">
                {PROJECTS_DATA[card].tags.map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-md bg-[#797382]/40 px-1 py-px dark:bg-[#807C8E]/50"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      </motion.div>

      {/* DESKTOP COLUMNS VIEW */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={projectsContainer}
        className="hidden gap-y-8 text-[#6B6573] dark:text-white md:grid md:grid-cols-12 md:gap-x-2 md:gap-y-0 lg:gap-x-8 xl:gap-x-12"
      >
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            transition={{ type: "tween", duration: 0.4 }}
            variants={projectCard}
            class="col-span-4 flex flex-col items-center"
          >
            {/* PHOTO */}
            <div class="group relative overflow-clip rounded-3xl border-[1px] border-[#797382]/40 border-white bg-gradient-to-br from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] bg-clip-content p-2 transition duration-300 ease-in-out hover:border-2 hover:border-[#F38BBB] dark:border-[#807C8E]/70 dark:from-[#422451] dark:from-[10%] dark:to-[#252949] dark:hover:border-[#7943ED] md:h-fit">
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
              <div className="overflow-clip rounded-xl">
                {" "}
                <img
                  src={project.image}
                  alt={`${project.title} mock-up`}
                  className="h-full w-full object-cover opacity-100 transition duration-200 ease-linear group-hover:scale-110 group-hover:opacity-50"
                />
              </div>
            </div>
            {/* DESCRIPTION */}
            <div class="visible relative z-50 px-2 py-2 text-start transition duration-300">
              <h4 class="font-mono text-sm text-[#F38BBB] dark:text-[#7943ED]">
                {project.subtitle}
              </h4>
              <h3 class="mb-2 mt-0 text-xl font-bold lg:text-2xl">
                {project.title}
              </h3>
              <div class="">
                <p className="line-clamp-4 text-sm hover:line-clamp-none lg:text-base">
                  {project.description}
                </p>
              </div>
              <ul className="mt-4 flex flex-row flex-wrap justify-start gap-x-1 gap-y-2 text-sm text-white">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-[#797382]/40 px-2 py-px dark:bg-[#807C8E]/50"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-4 flex flex-row items-center justify-center gap-x-4 md:hidden">
        {PROJECTS_DATA.map((project, index) => (
          <span
            key={index}
            onClick={() => setCard([index, index > card ? 1 : -1])}
            className={`transition-all linear duration-500 bg-none rounded-full border-[1px] hover:bg-[#6B6573] hover:dark:bg-white border-[#6B6573]/30 p-0 dark:border-white/20 cursor-pointer ${
              card === index
                ? "bg-[#6B6573]/80 dark:bg-white size-3 "
                : "bg-[#6B6573]/20 dark:bg-white/20 size-[.5rem]"
            }`}
          ></span>
        ))}
      </div>
      <div className="mt-8 place-self-center text-white md:order-last md:mt-24">
        <a
          href="https://github.com/encarnac"
          className="inline-block w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-8 py-3 text-base text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit md:px-32 lg:text-lg"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
