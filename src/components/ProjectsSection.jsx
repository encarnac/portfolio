import watch_soon from "../assets/watch-soon.png";
import adopt_a_pal from "../assets/adopt-a-pal.png";
import portfolio from "../assets/portfolio.png";
import { LuFigma, LuEye, LuCode2 } from "react-icons/lu";
import { motion } from "framer-motion";

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
      delayChildren: 0.2,
      staggerChildren: 0.6,
    },
  },
};

const ProjectsSection = () => {
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={projectsContainer}
        className="grid grid-cols-1 gap-y-8 text-[#6B6573] dark:text-white md:grid-cols-12 md:gap-x-6 md:gap-y-0"
      >
        {/* PROJECT 1 CARD */}
        <motion.div
          transition={{ type: "tween", duration: 0.4 }}
          variants={projectCard}
          class="col-span-4 flex flex-col items-center"
        >
          {/* PROJECT 1 PHOTO */}
          <div class="group relative rounded-3xl border-[1px] border-[#797382]/40 border-white p-2 transition duration-300 ease-in-out hover:border-[#F38BBB] dark:border-[#807C8E]/70 dark:hover:border-[#7943ED] md:h-fit">
            <div className="absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform gap-x-4 text-white group-hover:flex">
              <a
                href="https://github.com/encarnac/portfolio"
                className="rounded-full border-2 border-white p-2 mix-blend-lighten shadow-lg transition duration-300 ease-in-out hover:scale-105"
              >
                <LuCode2 className="size-8" />
              </a>
              <a
                href="https://encarnac.netlify.app/"
                className="rounded-full border-2 border-white p-2 shadow-lg transition duration-300 ease-in-out hover:scale-105"
              >
                <LuEye className="size-8" />
              </a>
            </div>
            <img
              src={portfolio}
              alt="adopt-a-pal mockups"
              className="h-full w-full rounded-2xl object-cover opacity-100 transition duration-300 ease-linear group-hover:opacity-60"
            />
          </div>
          {/* PROJECT 1 DESCRIPTION */}
          <div class="visible relative z-50 px-2 py-2 text-start transition duration-300">
            <h4 class="font-mono text-sm text-[#F38BBB] dark:text-[#7943ED]">
              React Portfolio Website
            </h4>
            <h3 class="mb-2 mt-0 text-2xl font-bold">Portfolio</h3>
            <div class="">
              <p className="line-clamp-4 rounded-2xl text-base hover:line-clamp-none">
                A responsive and interactive website to showcase my background,
                skills, and projects. Used as a learning tool for using
                animations and a dark/light mode theme.
              </p>
            </div>
            <ul className="mt-4 flex flex-row flex-wrap justify-start gap-x-1 gap-y-2 text-sm text-[#3f3b43]/90 dark:text-white/80">
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                React
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Tailwind
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Framer Motion
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Netlify
              </li>
            </ul>
          </div>
        </motion.div>

        {/* PROJECT 2 CARD */}
        <motion.div
          transition={{ type: "tween", duration: 0.4 }}
          variants={projectCard}
          class="col-span-4 flex flex-col items-center"
        >
          {/* PROJECT 2 PHOTO */}
          <div class="group relative rounded-3xl border-[1px] border-[#797382]/40 border-white p-2 transition duration-300 ease-in-out hover:border-[#F38BBB] dark:border-[#807C8E]/70 dark:hover:border-[#7943ED] md:h-fit">
            <div className="absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform gap-x-4 text-white group-hover:flex">
              <a
                href="https://github.com/encarnac/portfolio"
                className="rounded-full border-2 border-white p-2 mix-blend-lighten shadow-lg transition duration-300 ease-in-out hover:scale-105"
              >
                <LuCode2 className="size-8" />
              </a>
              <a
                href="https://encarnac.netlify.app/"
                className="rounded-full border-2 border-white p-2 shadow-lg transition duration-300 ease-in-out hover:scale-105"
              >
                <LuEye className="size-8" />
              </a>
            </div>
            <img
              src={watch_soon}
              alt="adopt-a-pal mockups"
              className="h-full w-full rounded-2xl object-cover opacity-100 transition duration-300 ease-linear group-hover:opacity-60"
            />
          </div>
          {/* PROJECT 2 DESCRIPTION */}
          <div class="visible relative z-50 px-2 py-2 text-start transition duration-300">
            <h4 class="font-mono text-sm text-[#F38BBB] dark:text-[#7943ED]">
              TV & Movie Reminder App
            </h4>
            <h3 class="mb-2 mt-0 text-2xl font-bold">Watch Soon</h3>
            <div class="">
              <p className="line-clamp-4 rounded-2xl text-base hover:line-clamp-none">
                Search for tv shows or movies by title using the The Movie
                Database API, and add content to your watchlist to receive
                future release reminders on Google Calendar.
              </p>
            </div>
            <ul className="mt-4 flex flex-row flex-wrap justify-start gap-x-1 gap-y-2 text-sm text-[#3f3b43]/90 dark:text-white/80">
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                React
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Bootstrap
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Express
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                MongoDB
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                GCP
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Railway
              </li>
            </ul>
          </div>
        </motion.div>

        {/* PROJECT 3 CARD */}
        <motion.div
          transition={{ type: "tween", duration: 0.4 }}
          variants={projectCard}
          class="col-span-4 flex flex-col items-center"
        >
          {/* PROJECT 3 PHOTO */}
          <div class="group relative rounded-3xl border-[1px] border-[#797382]/40 border-white p-2 transition duration-300 ease-in-out hover:border-[#F38BBB] dark:border-[#807C8E]/70 dark:hover:border-[#7943ED] md:h-fit">
            <div className="absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 transform gap-x-4 text-white group-hover:flex">
              <a
                href="https://github.com/encarnac/portfolio"
                className="rounded-full border-2 border-white p-2 mix-blend-lighten shadow-lg transition duration-300 ease-in-out hover:scale-105"
              >
                <LuCode2 className="size-8" />
              </a>
              <a
                href="https://encarnac.netlify.app/"
                className="rounded-full border-2 border-white p-2 shadow-lg transition duration-300 ease-in-out hover:scale-105"
              >
                <LuEye className="size-8" />
              </a>
            </div>
            <img
              src={adopt_a_pal}
              alt="adopt-a-pal mockups"
              className="h-full w-full rounded-2xl object-cover opacity-100 transition duration-300 ease-linear group-hover:opacity-60"
            />
          </div>
          {/* PROJECT 3 DESCRIPTION */}
          <div class="visible relative z-50 px-2 py-2 text-start transition duration-300">
            <h4 class="font-mono text-sm text-[#F38BBB] dark:text-[#7943ED]">
              Pet Adoption App
            </h4>
            <h3 class="mb-2 mt-0 text-2xl font-bold">Adopt-a-Pal</h3>
            <div class="">
              <p className="text-bas line-clamp-3 rounded-2xl hover:line-clamp-none">
                A web application for a "dating" service to connect potential
                adopters with pets posted by animal shelters. Users can swipe
                through listings posted by shelters and "like" pets to create a
                collection of potential pets.
              </p>
            </div>
            <ul className="mt-4 flex flex-row flex-wrap justify-start gap-x-1 gap-y-2 text-sm text-[#3f3b43]/90 dark:text-white/80">
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                React
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Tailwind
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Flask
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                GCP
              </li>
              <li className="rounded-lg border-2 border-[#797382]/40 px-2 py-px dark:border-[#807C8E]/90">
                Figma
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
