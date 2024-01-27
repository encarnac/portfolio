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
    <div id="about" className="mb-48 grid grid-cols-1 gap-x-0 md:grid-cols-12">
      <div className="order-last col-span-5 place-self-center md:order-first">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "tween", duration: 0.5 }}
          variants={motionVariants("right")}
        >
          <div className="relative h-[250px] w-[250px] overflow-clip rounded-full bg-[#ad99db] dark:bg-[#6a3dd1] lg:h-[300px] lg:w-[300px]">
            <img src={AboutPhoto} />
          </div>
        </motion.div>{" "}
      </div>
      <div className="col-span-7">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "tween", duration: 0.5 }}
          variants={motionVariants("left")}
        >
          <div className="m-1 mb-6 max-w-xl basis-1/2 place-self-center rounded-3xl bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-1 py-1 text-center shadow-sm dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] md:mx-6 lg:mx-12 lg:my-6 lg:text-left">
            <div className="h-fit rounded-3xl bg-[#d7cfdc] px-4 py-8 text-[#57545c] dark:bg-[#14022A] dark:text-indigo-100 lg:m-1 lg:px-8 lg:py-10">
              <h1 className="mb-6 text-2xl font-extrabold md:text-3xl">
                About Me
              </h1>
              <p className="text-sm lg:text-base">
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Node.js, Express, MySQL,
                MongoDB, HTML, CSS (TailwindCSS and Bootstrap), and Git. I am a
                quick learner and I am always looking to expand my knowledge and
                skill set.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
