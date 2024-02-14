import { motion } from "framer-motion";
import { LuEye, LuExternalLink } from "react-icons/lu";

const projectCard = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      key={index}
      transition={{ type: "tween", duration: 0.4 }}
      variants={projectCard}
      class="col-span-1 flex flex-col items-center md:col-span-4"
    >
      {/* PHOTO */}
      <div class="group relative overflow-clip rounded-3xl border-[1px] border-[#797382]/40 border-white bg-gradient-to-br from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] bg-clip-content p-2 transition duration-300 ease-in-out hover:border-[1.5px] hover:border-[#de8abb] dark:border-[#807C8E]/70 dark:from-[#3034C2]/30 dark:via-[#6A3DD1]/30 dark:to-[#9329BE]/30 dark:hover:border-[#7943ED] md:h-fit">
        <div className="group/demo absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform gap-x-4 group-hover:flex">
          <a
            href={project.demo}
            className="rounded-full border-2 border-[#dee2e6] p-2 text-[#dee2e6] transition duration-300 ease-in group-hover/demo:border-white group-hover/demo:text-white"
          >
            <LuEye className="size-8" />
          </a>
        </div>
        <div className="before:size-full relative overflow-clip rounded-2xl before:absolute before:bg-[#181818] before:bg-opacity-0 before:transition before:duration-300 before:ease-in-out group-hover:before:bg-opacity-40 dark:group-hover:before:bg-opacity-70">
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
            <LuExternalLink className="size-5 text-[#de8abb] dark:text-[#7943ED]" />
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
  );
};

export default ProjectCard;
