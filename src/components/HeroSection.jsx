import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeaderPhoto from "../assets/header-pfp.png";
import react from "../assets/react.svg";
import python from "../assets/python.svg";
import nodejs from "../assets/nodejs.svg";
import resume from "../assets/Resume_ColeneEnc.pdf";

export default function Header() {
  const heroVariants = {
    visible: {
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={heroVariants}
      className="relative mb-12"
    >
      {/* INTRO TEXT AND BUTTONS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-1">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <motion.h1
            variants={contentVariants}
            className="mb-4 text-5xl font-extrabold text-[#5b5662] dark:text-[#D4D3D8] sm:text-6xl lg:text-8xl"
          >
            <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Colene",
                2000, // Waits 2s
                "Front-End",
                2000, // Waits 2s
                "Web Dev",
                900,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="font-mono text-4xl sm:text-5xl lg:text-7xl"
            />
          </motion.h1>
          <motion.p
            variants={contentVariants}
            className="text-balance md:text-md mb-2 font-mono text-sm text-[#938e9c] dark:text-[#9d97a6] lg:text-lg"
          >
            //I enjoy building interactive and responsive applications with
            React
          </motion.p>
          <div className="">
            <motion.a
              variants={contentVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              href="#contact"
              className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-6 py-3 text-white dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit"
            >
              Hire Me
            </motion.a>
            <motion.a
              variants={contentVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              href={resume}
              download
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-1 py-1 text-white dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit"
            >
              <span className="block rounded-full bg-gradient-to-r from-[#D0C5DD] to-[#DFC6D8] px-5 py-2 transition duration-300 dark:from-[#2C1F40] dark:to-[#20213C] sm:bg-[#D2C6DD] sm:bg-none dark:sm:bg-[#27213F]">
                <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                  Download CV
                </span>
              </span>
            </motion.a>
          </div>
        </div>

        {/* HERO PHOTO */}
        <motion.div
          variants={contentVariants}
          className="col-span-5 mt-6 place-self-center sm:mt-12"
        >
          <div className="relative z-0 before:absolute before:bottom-2 before:left-2 before:h-full before:w-full before:rounded-custom-3 before:bg-[#afc6e2] dark:before:bg-[#872FC3] lg:before:h-[330px] lg:before:w-[330px] xl:before:h-[400px] xl:before:w-[400px]">
            <div className="size-[230px] md:size-[325px] xl:size-[400px] relative rounded-custom-2 bg-[#ad99db] dark:bg-[#7943ed]">
              <img
                src={HeaderPhoto}
                alt="profile photo"
                className="size-[230px] md:size-[325px] xl:size-[390px] absolute inset-x-0 bottom-0 z-10 rounded-bl-[50%]"
              />
              <motion.div
                transition={{ type: "spring", stiffness: 200 }}
                variants={logoVariants}
                className="absolute -bottom-7 right-11 z-50 rounded-3xl border-[1px] border-[#E3E8EE] bg-[#E3E8EE]/70 p-2 shadow-md backdrop-blur-sm dark:border-[#312D3C] dark:bg-[#211e2c]/80 sm:rounded-[2rem]"
              >
                <img src={react} className="size-14 md:size-24" />
              </motion.div>
              <motion.div
                transition={{ type: "spring", stiffness: 200 }}
                variants={logoVariants}
                className="absolute -left-3 top-1/4 z-[1] rounded-3xl border-[1px] border-[#E3E8EE] bg-[#E3E8EE]/70 p-2 shadow-md backdrop-blur-sm dark:border-[#312D3C] dark:bg-[#211e2c]/80"
              >
                <img src={nodejs} className="size-10 md:size-16" />
              </motion.div>
              <motion.div
                transition={{ type: "spring", stiffness: 200 }}
                variants={logoVariants}
                className="absolute right-0 h-fit rounded-2xl border-[1px] border-[#E3E8EE] bg-[#E3E8EE]/70 p-2 shadow-md backdrop-blur-sm dark:border-[#312D3C] dark:bg-[#211e2c]/80 sm:rounded-3xl"
              >
                <img src={python} className="size-8 md:size-14" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
