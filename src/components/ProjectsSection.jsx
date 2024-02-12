import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../constants/ProjectsData";
import { LuEye, LuExternalLink, LuGithub, LuFolder } from "react-icons/lu";

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
      delayChildren: 0.4,
      staggerChildren: 0.8,
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
    <section id="projects" className="mb-12 w-full">
      <div className="relative mb-8 flex flex-col items-end justify-end py-3">
        <h4 className="text-md font-mono tracking-widest text-[#5b5662]/60 dark:text-[#D4D3D8]/40 lg:text-xl">
          [03]projects
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
          {/* <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]"> */}
          What I Made
          {/* </span> */}
        </h3>
      </div>

      <div className="flex flex-col items-center gap-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={projectsContainer}
          className="grid gap-y-8 text-[#7B7484] dark:text-[#c3c3c4] md:grid-cols-12 md:gap-x-2 md:gap-y-0 lg:gap-x-8 xl:gap-x-12"
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              transition={{ type: "tween", duration: 0.4 }}
              variants={projectCard}
              class="col-span-1 flex flex-col items-center md:col-span-4"
            >
              {/* PHOTO */}
              <div class="group relative overflow-clip rounded-3xl border-[1px] border-[#797382]/40 border-white bg-gradient-to-br from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] bg-clip-content p-2 transition duration-300 ease-in-out hover:border-[1.5px] hover:border-[#de8abb] dark:border-[#807C8E]/70 dark:from-[#3034C2]/30 dark:via-[#6A3DD1]/30 dark:to-[#9329BE]/30 dark:hover:border-[#7943ED] md:h-fit">
                <div className="absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform gap-x-4 text-white group-hover:flex">
                  <a
                    href={project.demo}
                    className="rounded-full border-2 border-white p-2 transition duration-300 ease-in-out hover:scale-105"
                  >
                    <LuEye className="size-8" />
                  </a>
                </div>
                <div className="overflow-clip rounded-2xl">
                  <img
                    src={project.image}
                    alt={`${project.title} mock-up`}
                    className="h-full w-full object-cover opacity-100 transition duration-200 ease-linear group-hover:scale-110 group-hover:opacity-50"
                  />
                </div>
              </div>
              {/* DESCRIPTION */}
              <div class="relative z-50 px-2 py-2 text-start">
                <div className="mb-2 flex flex-row items-start justify-between">
                  <div className="flex flex-col py-1">
                    <h4 class="font-mono text-sm font-semibold text-[#de8abb] dark:text-[#7943ED]">
                      {project.subtitle}
                    </h4>
                    <h3 class="mt-0 text-xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <a href={project.github} className="">
                    <LuExternalLink className="size-5 text-[#de8abb] transition duration-300 hover:scale-105 dark:text-[#7943ED]" />
                  </a>
                </div>

                <div class="">
                  <p className="text-pretty text-sm hover:line-clamp-none md:line-clamp-4 lg:text-base">
                    {project.description}
                  </p>
                </div>
                <ul className="mt-2 flex flex-row flex-wrap justify-start gap-x-1 gap-y-2 text-sm">
                  {project.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="rounded-lg bg-[#de8abb]/40 px-2 py-px text-white/90 dark:bg-[#7943ED]/30"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
