import AboutPhoto from "../assets/about-pfp.png";
import { motion } from "framer-motion";

const motionVariants = (direction) => {
  return {
    hidden: { x: direction === "right" ? -50 : 50, opacity: 0 },
    visible: { opacity: 1, x: 0 },
  };
};

const AboutSection = ({ setSelectedPage }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ type: "tween", duration: 0.5 }}
      variants={motionVariants("right")}
    >
      <div
        id="about"
        className="md:grid-rows-8 mb-48 grid grid-flow-row grid-cols-1 items-stretch justify-items-center gap-x-0 gap-y-4 md:grid-cols-12 md:justify-items-stretch md:px-28"
      >
        <div className="px-2 md:col-span-7 md:row-span-1">
          <h1 className="text-2xl font-extrabold dark:text-white md:text-3xl">
            About Me
          </h1>
        </div>

        <div className="md:row-span-8 order-last place-self-center md:order-first md:col-span-5">
          <div className="h-fill relative max-w-[300px] overflow-clip rounded-full bg-[#ad99db] dark:bg-[#6a3dd1]">
            <img src={AboutPhoto} />
          </div>
        </div>
        <div className="md:row-span-7 place-self-stretch px-2 dark:text-white md:col-span-7">
          <div className="mb-4 flex flex-row justify-start">
            <button className="mr-1 grow pb-1 hover:border-b-2 hover:border-b-[#3034C2] md:text-start">
              My Story
            </button>
            <button className="mr-1 grow pb-1 hover:border-b-2 hover:border-b-[#3034C2] md:text-start">
              Education
            </button>
            <button className="mr-1 grow pb-1 hover:border-b-2 hover:border-b-[#3034C2] md:text-start">
              Skills
            </button>
          </div>
          <p className="mt-2 text-sm lg:text-base">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MySQL, MongoDB,
            HTML, CSS (TailwindCSS and Bootstrap), and Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
