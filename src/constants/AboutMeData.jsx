import { LuGraduationCap } from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiUser, HiMapPin, HiBriefcase, HiAcademicCap } from "react-icons/hi2";
import resume from "../assets/Resume_ColeneEnc.pdf";

export const AboutMeData = [
  {
    name: "Introduction",
    content: (
      <div className="flex flex-col gap-y-4 py-px">
        <div className="">
          <p className="text-pretty mb-2">
            My journey as a developer began in 2021 when I made a career switch
            from Psychology to Computer Science. Since then, I've continued to
            grow and evolve as a
            <span className="font-extrabold"> front-end </span>
            developer, specializing in{" "}
            <span className="font-extrabold">React.js</span>.
          </p>
          <p className="text-pretty">
            I have a holistic understanding of web design and development. I
            strive to write code that accurately implements designs for
            interactive and responsive web applications. I am a quick learner
            and always looking to expand my knowledge by taking on new
            challenges and learning the latest technologies.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-stretch gap-2 text-xs text-[#5b5662] dark:text-[#D4D3D8] sm:justify-start md:text-sm lg:text-base">
          <div className="flex w-fit flex-row items-center justify-between gap-x-1 rounded-lg bg-white/30 px-1 py-2 font-semibold backdrop-blur-lg dark:bg-[#403457]/50 sm:gap-x-2 sm:px-2">
            <HiUser className="size-4 text-[#AD99DB] dark:text-[#a32dd2]" />
            <p>Colene Encarnado</p>
          </div>
          <div className="flex w-fit flex-row items-center justify-between gap-x-1 rounded-lg bg-white/30 px-1 py-2 font-semibold backdrop-blur-lg dark:bg-[#403457]/50 sm:gap-x-2 sm:px-2">
            <HiMapPin className="size-4 text-[#AD99DB] dark:text-[#a32dd2]" />
            <p>Los Angeles, CA</p>
          </div>
          <div className="flex w-fit flex-row items-center justify-between gap-x-1 rounded-lg bg-white/30 px-1 py-2 font-semibold backdrop-blur-lg dark:bg-[#403457]/50 sm:gap-x-2 sm:px-2">
            <HiAcademicCap className="size-4 text-[#AD99DB] dark:text-[#a32dd2]" />
            <p>B.S. Computer Science</p>
          </div>
          <div className="flex w-fit flex-row items-center justify-between gap-x-1 rounded-lg bg-white/30 px-1 py-2 font-semibold backdrop-blur-lg dark:bg-[#403457]/50 sm:gap-x-2 sm:px-2">
            <HiBriefcase className="size-4 text-[#AD99DB] dark:text-[#a32dd2]" />
            <p>&lt; 1 YOE</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-stretch gap-x-2 md:gap-x-3">
          <a
            href={resume}
            download
            className="inline-block rounded-3xl bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-4 py-3 text-xs text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] md:px-6 md:py-3 md:text-sm lg:px-4 lg:py-3 lg:text-base"
          >
            Download CV
          </a>
          <hr class="h-px w-8 border-0 bg-[#6B6573] dark:bg-[#CCC3D7] sm:w-12"></hr>
          <p className="hidden text-sm font-light sm:inline">Follow me</p>
          <a href="https://github.com/encarnac">
            <SiGithub className="size-5 sm:size-6 transition duration-300 ease-in-out hover:scale-105 hover:text-[#7B7484] dark:hover:text-[#DAD1E6]" />
          </a>
          <a href="https://www.linkedin.com/in/encarnac/">
            <SiLinkedin className="size-5 sm:size-6 transition duration-300 ease-in-out hover:scale-105 hover:text-[#7B7484] dark:hover:text-[#DAD1E6]" />
          </a>
        </div>
      </div>
    ),
  },
  {
    name: "Education",
    content: (
      <ul className="space-y-4 py-px">
        <li className="relative flex gap-2 md:gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:h-5/6 before:w-[.15rem] before:bg-[#de8abb]/90 dark:before:bg-[#7943ed]/90">
            <LuGraduationCap className="size-5 text-[#de8abb] dark:text-[#7943ed]" />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between md:items-center">
              <h4 className="font-semibold">Oregon State University</h4>
              <p className="rounded-lg bg-[#F38BBB]/50 bg-gradient-to-bl from-[#68A3EB]/60 to-[#F38BBB]/60 px-3 py-px text-white/90 dark:from-[#3034C2]/80 dark:via-[#6A3DD1]/80 dark:to-[#9329BE]/80">
                <span className="hidden sm:inline">2021 - </span>2023
              </p>
            </div>
            <p className="px-2 md:px-4">
              Bachelor of Science: Computer Science
            </p>
            <p className="px-2 md:px-4">GPA: 3.8</p>
          </div>
        </li>
        <li className="relative flex gap-2 md:gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:h-5/6 before:w-[.15rem] before:bg-[#de8abb]/90 dark:before:bg-[#7943ed]/90">
            <LuGraduationCap className="size-5 text-[#de8abb] dark:text-[#7943ed]" />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between md:items-center">
              <h4 className="font-semibold">
                <span className="inline sm:hidden">Cal </span>
                <span className="hidden sm:inline">California </span>State Long
                Beach
              </h4>
              <p className="rounded-lg bg-[#F38BBB]/50 bg-gradient-to-bl from-[#68A3EB]/60 to-[#F38BBB]/60 px-3 py-px text-white/90 dark:from-[#3034C2]/80 dark:via-[#6A3DD1]/80 dark:to-[#9329BE]/80">
                <span className="hidden sm:inline">2015 - </span>2019
              </p>
            </div>
            <p className="px-2 md:px-4">Bachelor of Arts: Psychology</p>
            <p className="px-2 md:px-4">GPA: 3.5</p>
          </div>
        </li>
      </ul>
    ),
  },
];
