import { motion, AnimatePresence } from "framer-motion";

import { LuEye, LuEyeOff, LuExternalLink } from "react-icons/lu";

const ProjectCard = ({ index, project }) => {
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
    <motion.div variants={cardVariants} class="">
      {/* PROJECT PHOTO */}
      <div class="group relative overflow-clip rounded-2xl border-[1px] border-[#797382]/40 border-white bg-gradient-to-br from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] bg-clip-content p-[6px] transition duration-300 ease-in-out hover:border-[1.5px] hover:border-[#de8abb] dark:border-[#807C8E]/70 dark:from-[#3034C2]/30 dark:via-[#6A3DD1]/30 dark:to-[#9329BE]/30 dark:hover:border-[#7943ED] md:h-fit">
        <div className="group/demo absolute left-1/2 top-1/2 z-50 hidden w-fit -translate-x-1/2 -translate-y-1/2 transform gap-x-4 text-[#dee2e6] group-hover:flex">
          {project.demo ? (
            <a
              href={project.demo}
              className="rounded-full border-2 border-[#dee2e6] p-2 transition duration-300 ease-in group-hover/demo:border-white group-hover/demo:text-white"
            >
              <LuEye className="size-8" />
            </a>
          ) : (
            <div className="group/invalid relative flex flex-col items-center">
              <span className="text-nowrap absolute -top-7 w-fit rounded-lg px-2 py-1 text-center text-sm font-semibold opacity-0 transition-all duration-150 ease-in group-hover/invalid:opacity-100">
                No Demo
              </span>
              <div className="w-fit rounded-full border-2 border-[#dee2e6] p-2">
                <LuEyeOff className="size-8" />
              </div>
            </div>
          )}
        </div>
        <div className="before:size-full relative overflow-clip rounded-xl before:absolute before:bg-[#181818] before:bg-opacity-0 before:transition before:duration-300 before:ease-in-out group-hover:before:bg-opacity-40 dark:group-hover:before:bg-opacity-70">
          <img
            src={project.image}
            alt={`${project.title} mock-up`}
            className="h-full w-full object-cover opacity-100 transition duration-200 ease-linear group-hover:scale-110 group-hover:opacity-50"
          />
        </div>
      </div>
      {/* PROJECT DETAILS */}
      <div class="relative z-50 px-2 py-2 text-start text-[#7B7484] dark:text-[#C3C3C4]">
        {/* HEADER */}
        <div className="mb-2 flex flex-row items-start justify-between">
          <div className="flex flex-col py-1">
            <h4 class="font-mono text-sm font-semibold text-[#de8abb] dark:text-[#7943ED]">
              {project.subtitle}
            </h4>
            <h3 class="mt-0 text-xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-2xl">
              {project.title}
            </h3>
          </div>
          <a href={project.repo} className="">
            <LuExternalLink className="size-5 m-1 text-[#de8abb] dark:text-[#7943ED]" />
          </a>
        </div>

        {/* DESCRIPTION */}
        <div class="">
          <p className="text-pretty text-sm hover:line-clamp-none sm:line-clamp-3 lg:text-base">
            {project.description}
          </p>
        </div>

        {/* TAGS */}
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
  );
};

export default ProjectCard;
