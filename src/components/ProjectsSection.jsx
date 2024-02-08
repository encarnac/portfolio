import watch_soon from "../assets/watch-soon.png";
import adopt_a_pal from "../assets/adopt-a-pal.png";
import portfolio from "../assets/portfolio.png";
import { LuGithub, LuExternalLink, LuFigma } from "react-icons/lu";

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
      <div className="space-y-8 text-[#3f3b43] dark:text-white">
        {/* FIRST PROJECT CARD */}
        <div class="group grid grid-cols-10 items-center">
          {/* PROJECT DESCRIPTION */}
          <div class="col-span-full row-span-full p-8 px-4 text-start opacity-0 transition duration-300 hover:opacity-100 md:col-span-5 md:col-start-2 md:p-0 md:opacity-100">
            <h4 class="font-mono text-sm">React Portfolio Website</h4>
            <h3 class="mb-2 mt-0 text-2xl font-bold">Portfolio</h3>
            <div class="">
              <p className="rounded-2xl md:bg-[#E3E8EE]/60 md:px-5 md:py-6 md:backdrop-blur-sm md:dark:bg-[#3f3554]/50">
                A responsive and interactive website to showcase my background,
                skills, and projects. Used as a learning tool for using
                animations and a dark/light mode theme.
              </p>
            </div>
            <ul className="mt-4 flex flex-row flex-wrap justify-start gap-x-2 gap-y-2 pr-16 text-sm text-[#3f3b43]/90 dark:text-white/80">
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
            <div className="mt-3 flex flex-row items-center justify-start space-x-4">
              <a
                href="https://github.com/encarnac/portfolio"
                className="transition duration-300 ease-in-out hover:scale-110"
              >
                <LuGithub className="size-5" />
              </a>
              <a
                href="https://encarnac.netlify.app/"
                className="transition duration-300 ease-in-out hover:scale-110"
              >
                <LuExternalLink className="size-5" />
              </a>
            </div>
          </div>

          {/* PROJECT PHOTO */}
          <div class="relative z-[-1] col-span-full row-span-full h-full rounded-2xl border-[1px] border-[#797382]/40 border-white p-2 transition duration-300 ease-in-out group-hover:border-2 group-hover:border-[#eaa3c2] dark:border-[#807C8E]/70 dark:group-hover:border-[#7943ED] md:col-start-6 md:col-end-10 md:h-fit">
            <img
              src={portfolio}
              alt="adopt-a-pal mockups"
              className="opacity30 h-full w-full rounded-xl object-cover transition duration-300 ease-linear group-hover:opacity-20 md:opacity-100 md:group-hover:opacity-100"
            />
          </div>
        </div>

        {/* SECOND PROJECT CARD */}
        <div class="group grid grid-cols-10 items-center">
          {/* PROJECT PHOTO */}
          <div class="relative z-[-1] col-span-full row-span-full h-full rounded-2xl border-[1px] border-white p-2 transition duration-300 ease-in-out group-hover:border-2 group-hover:border-[#eaa3c2] dark:border-[#807C8E]/70 dark:group-hover:border-[#7943ED] md:col-start-2 md:col-end-6 md:h-fit">
            <img
              src={watch_soon}
              alt="adopt-a-pal mockups"
              className="h-full w-full rounded-xl object-cover transition duration-300 ease-linear group-hover:opacity-20 md:opacity-100 md:group-hover:opacity-100"
            />
          </div>

          {/* PROJECT DESCRIPTION */}
          <div class="col-span-full row-span-full p-8 px-4 text-end opacity-0 transition duration-300 hover:opacity-100 md:col-span-5 md:col-start-5 md:p-0 md:opacity-100">
            <h4 class="font-mono text-sm">TV and Movie Reminder App</h4>
            <h3 class="mb-2 mt-0 text-2xl font-bold">Watch Soon</h3>
            <div class="">
              <p className="rounded-2xl md:bg-[#E3E8EE]/60 md:px-5 md:py-6 md:backdrop-blur-sm md:dark:bg-[#3f3554]/50">
                Search for tv shows or movies by title using the The Movie
                Database API, and add content to your watchlist to receive
                future release reminders on your Google Calendar.
              </p>
            </div>
            <ul className="mt-4 flex flex-row flex-wrap items-center justify-end gap-x-2 gap-y-2 pl-24 text-sm text-[#3f3b43]/90 dark:text-white/80">
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
            </ul>{" "}
            <div className="mt-3 flex flex-row items-center justify-end space-x-4">
              <a
                href="https://github.com/encarnac/tv-movie-reminder"
                className="transition duration-300 ease-in-out hover:scale-110"
              >
                <LuGithub className="size-5" />
              </a>
              <a
                href="https://watch-soon.up.railway.app/"
                className="transition duration-300 ease-in-out hover:scale-110"
              >
                <LuExternalLink className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* THIRD PROJECT CARD */}
        <div class="group grid grid-cols-10 items-center">
          {/* PROJECT DESCRIPTION */}
          <div class="col-span-full row-span-full p-8 px-4 text-start opacity-0 transition duration-300 hover:opacity-100 md:col-span-5 md:col-start-2 md:p-0 md:opacity-100">
            <h4 class="font-mono text-sm">Pet Adoption "Dating" App</h4>
            <h3 class="mb-2 mt-0 text-2xl font-bold">Adopt-a-Pal</h3>
            <div class="">
              <p className="rounded-2xl md:bg-[#E3E8EE]/60 md:px-5 md:py-6 md:backdrop-blur-sm md:dark:bg-[#3f3554]/50">
                A web application for a "dating" service to connect potential
                adopters with pets posted by animal shelters. Users can swipe
                through listings posted by shelters and "like" pets to create a
                collection of potential pets.
              </p>
            </div>
            <ul className="mt-4 flex flex-row flex-wrap justify-start gap-x-2 gap-y-2 pr-16 text-sm text-[#3f3b43]/90 dark:text-white/80">
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
            <div className="mt-3 flex flex-row items-center justify-start space-x-4">
              <a
                href="https://github.com/encarnac/adopt-a-pal"
                className="transition duration-300 ease-in-out hover:scale-110"
              >
                <LuGithub className="size-5" />
              </a>
              <a
                href="https://www.figma.com/file/yJkg7EMO0fpvOo6WCn6JMO/Desktop-Prototype?type=design&node-id=0%3A1&mode=design&t=dxbTPTU57jhHoxhv-1"
                className="transition duration-300 ease-in-out hover:scale-110"
              >
                <LuFigma className="size-5" />
              </a>
            </div>
          </div>

          {/* PROJECT PHOTO */}
          <div class="relative z-[-1] col-span-full row-span-full h-full rounded-2xl border-[1px] border-[#797382]/40 border-white p-2 transition duration-300 ease-in-out group-hover:border-2 group-hover:border-[#eaa3c2] dark:border-[#807C8E]/70 dark:group-hover:border-[#7943ED] md:col-start-6 md:col-end-10 md:h-fit">
            <img
              src={adopt_a_pal}
              alt="adopt-a-pal mockups"
              className="h-full w-full rounded-xl object-cover transition duration-300 ease-linear group-hover:opacity-20 md:opacity-100 md:group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
