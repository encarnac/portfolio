import { TypeAnimation } from "react-type-animation";
import HeaderPhoto from "../assets/header-pfp.png";
import react from "../assets/react.svg";
import python from "../assets/python.svg";
import nodejs from "../assets/nodejs.svg";
import resume from "../assets/Resume_ColeneEnc.pdf";
import { motion } from "framer-motion";

const heroContainer = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const logo = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Header() {
  return (
    <>
      <header className="relative mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={heroContainer}
          className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-1"
        >
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="mb-4 text-5xl font-extrabold text-[#797382] dark:text-white sm:text-6xl lg:text-8xl">
              <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                Hello, I'm
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Colene",
                  2000, // Waits 2s
                  "Full-Stack",
                  2000,
                  "Front-End",
                  700,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="font-mono text-4xl sm:text-5xl lg:text-7xl"
              />
            </h1>
            <p className="mb-3 font-mono text-base text-[#938e9c] dark:text-[#9d97a6] sm:text-lg lg:text-xl">
              // I enjoy building and designing for the web
            </p>
            <div className="">
              <a
                href="#contact"
                className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-6 py-3 text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit"
              >
                Hire Me
              </a>
              <a
                href={resume}
                download
                className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-1 py-1 text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit"
              >
                <span className="block rounded-full bg-[#e3e8ee] px-5 py-2 transition duration-300 dark:bg-[#251e32]">
                  <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                    Download CV
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-5 mt-6 place-self-center sm:mt-12">
            <div className="relative z-0 before:absolute before:bottom-2 before:left-2 before:h-full before:w-full before:rounded-custom-3 before:bg-[#afc6e2] dark:before:bg-[#872FC3] lg:before:h-[330px] lg:before:w-[330px] xl:before:h-[400px] xl:before:w-[400px]">
              <div className="size-[230px] md:size-[325px] xl:size-[400px] relative rounded-custom-2 bg-[#ad99db] dark:bg-[#7943ed]">
                <img
                  src={HeaderPhoto}
                  alt="profile photo"
                  className="size-[230px] md:size-[325px] xl:size-[390px] absolute inset-x-0 bottom-0 z-10 rounded-bl-[50%]"
                />
                <motion.div
                  transition={{ type: "spring", stiffness: 200 }}
                  variants={logo}
                  className="absolute -bottom-9 right-9 z-50 rounded-3xl border-[1px] border-[#E3E8EE] bg-[#E3E8EE]/70 p-2 shadow-md backdrop-blur-sm dark:border-[#231F2F] dark:bg-[#231F2F]/80 sm:rounded-[2rem]"
                >
                  <img src={react} className="size-16 md:size-24" />
                </motion.div>
                <motion.div
                  transition={{ type: "spring", stiffness: 200 }}
                  variants={logo}
                  className="absolute -left-3 top-1/4 z-[1] rounded-3xl border-[1px] border-[#E3E8EE] bg-[#E3E8EE]/70 p-2 shadow-md backdrop-blur-sm dark:border-[#231F2F] dark:bg-[#231F2F]/80"
                >
                  <img src={nodejs} className="size-12 md:size-16" />
                </motion.div>
                <motion.div
                  transition={{ type: "spring", stiffness: 200 }}
                  variants={logo}
                  className="absolute right-0 h-fit rounded-2xl border-[1px] border-[#E3E8EE] bg-[#E3E8EE]/70 p-2 shadow-md backdrop-blur-sm dark:border-[#231F2F] dark:bg-[#231F2F]/80 sm:rounded-3xl"
                >
                  <img src={python} className="size-9 md:size-14" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
