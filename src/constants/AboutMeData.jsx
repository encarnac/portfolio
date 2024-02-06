import { LuGraduationCap } from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiUser, HiMapPin, HiLightBulb } from "react-icons/hi2";

export const AboutMeData = [
  {
    name: "Background",
    content: (
      <div className="flex flex-col gap-y-4 px-0 py-px sm:px-1 md:px-6">
        <div className="flex flex-row flex-wrap justify-center gap-x-2 gap-y-2 sm:justify-start md:gap-y-0">
          <div className="flex w-fit flex-row items-center justify-between gap-x-2 rounded-lg bg-white/30 px-2 py-2 text-base font-semibold text-[#797382] backdrop-blur-lg dark:bg-[#403457]/50 dark:text-[#CCC3D7]">
            <HiUser className="sm:size-6 text-[#E38EC0] dark:text-[#a32dd2]" />
            <p>Colene Encarnado</p>
          </div>
          <div className="flex w-fit flex-row items-center justify-between gap-x-2 rounded-lg bg-white/30 px-2 py-2 font-semibold text-[#797382] backdrop-blur-lg dark:bg-[#403457]/50 dark:text-[#CCC3D7] md:text-base">
            <HiMapPin className="sm:size-6 text-[#E38EC0] dark:text-[#a32dd2]" />
            <p>Los Angeles, CA</p>
          </div>
          <div className="flex w-fit flex-row items-center justify-between gap-x-2 rounded-lg bg-white/30 px-2 py-2 text-base font-semibold text-[#797382] backdrop-blur-lg dark:bg-[#403457]/50 dark:text-[#CCC3D7]">
            <HiLightBulb className="sm:size-6 text-[#E38EC0] dark:text-[#a32dd2]" />
            <p>&lt; 1 YOE</p>
          </div>
        </div>

        <div className="">
          <p className="text-pretty mb-2">
            My journey as a developer began in 2021 when I made a career switch
            from Psychology to Computer Science. Since then, I've continued to
            grow and evolve as a
            <span className="font-extrabold"> front-end</span> and
            <span className="font-extrabold"> full-stack</span> developer,
            specializing in <span className="font-extrabold">React.js</span> and
            <span className="font-extrabold"> Express</span>.
          </p>
          <p className="text-pretty">
            I have a holistic understanding of web design and development, and I
            strive to write code that accurately implements designs for
            interactive and responsive web applications. I am a quick learner
            and always looking to expand my knowledge, taking on new challenges
            by learning the latest technologies.
          </p>
        </div>

        <div className="flex flex-row items-center justify-stretch gap-x-1 md:gap-x-4">
          <button className="rounded-3xl bg-[#F38BBB] px-4 py-3 text-sm text-white transition duration-300 ease-in-out hover:scale-105 dark:bg-[#7943ED] sm:text-base md:px-6 md:py-3">
            Download CV
          </button>
          <hr class="h-px w-8 border-0 bg-[#6B6573] dark:bg-[#CCC3D7] sm:w-12"></hr>
          <p className="hidden text-sm font-light sm:inline">Follow me</p>
          <SiGithub className="size-6 sm:size-7" />
          <SiLinkedin className="size-6 sm:size-7" />
        </div>
      </div>
    ),
  },
  {
    name: "Qualifications",
    content: (
      <ul className="space-y-4 px-0 py-px sm:px-1 md:px-6">
        <li className="relative flex gap-2 md:gap-4">
          <div className="before:absolute before:left-[.55rem] before:top-6 before:h-5/6 before:w-[.15rem] before:bg-[#F38BBB]/90 dark:before:bg-[#7943ed]/90">
            <LuGraduationCap className="size-5 text-[#F38BBB] dark:text-[#7943ed]" />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between md:items-center">
              <h4 className="font-semibold">Oregon State University</h4>
              <p className="rounded-lg bg-[#F38BBB]/50 bg-gradient-to-bl from-[#68A3EB]/60 to-[#F38BBB]/60 px-3 py-px text-stone-100 dark:from-[#3034C2]/80 dark:via-[#6A3DD1]/80 dark:to-[#9329BE]/80">
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
          <div className="before:absolute before:left-[.55rem] before:top-6 before:h-5/6 before:w-[.15rem] before:bg-[#F38BBB]/90 dark:before:bg-[#7943ed]/90">
            <LuGraduationCap className="size-5 text-[#F38BBB] dark:text-[#7943ed]" />
          </div>
          <div className="w-full">
            <div className="flex items-start justify-between md:items-center">
              <h4 className="font-semibold">
                <span className="inline sm:hidden">Cal </span>
                <span className="hidden sm:inline">California </span>State Long
                Beach
              </h4>
              <p className="rounded-lg bg-[#F38BBB]/50 bg-gradient-to-bl from-[#68A3EB]/60 to-[#F38BBB]/60 px-3 py-px text-stone-100 dark:from-[#3034C2]/80 dark:via-[#6A3DD1]/80 dark:to-[#9329BE]/80">
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
