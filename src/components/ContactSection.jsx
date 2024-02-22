import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import portrait from "../assets/portrait.png";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };
  return (
    <section id="contact" className="mb-12 w-full">
      {/* SECTION CONTENT */}
      <div className="grid grid-cols-1 text-sm text-[#7B7484] dark:text-[#c3c3c4] sm:text-base md:grid-cols-10">
        {/* CONTACT INFO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={contactVariants}
          className="col-span-5 flex flex-col"
        >
          {/* SECTION HEADER */}
          <div className="relative mb-3 flex flex-col items-start justify-start py-3">
            <h4 className="font-mono text-lg tracking-widest text-[#5b5662]/40 dark:text-[#D4D3D8]/40 lg:text-xl">
              //contact
            </h4>
            <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
              Get In{" "}
              <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                Touch
              </span>
            </h3>
          </div>

          {/* PORTTRAIT AND TITLE */}
          <motion.div
            variants={contentVariants}
            className="flow-row mb-2 flex items-center gap-x-2"
          >
            <div className="w-20 overflow-clip rounded-custom-3">
              <img src={portrait} />
            </div>
            <div className="">
              <p className="text-base font-semibold sm:text-lg lg:text-xl">
                Colene Encarnado
              </p>
              <p className="font-mono">Front-End Developer</p>
            </div>
          </motion.div>

          {/* CALL TO ACTION  */}
          <motion.p
            variants={contentVariants}
            className="text-balance mb-3 text-sm sm:text-base"
          >
            I am currently looking for new opportunities! Feel free to message
            me if you want to work together or just to connect.
          </motion.p>

          {/* CONTACT INFO */}
          <ul className="mb-3 space-y-2">
            <motion.li variants={contentVariants} className="group">
              <a
                href="mailto:coleneencarnado@gmail.com"
                className="flex flex-row items-center gap-x-2 transition duration-300 ease-in group-hover:text-[#DE8ABB] dark:group-hover:text-[#7943ED]"
              >
                <span className="cursor-pointer rounded-lg bg-[#CED7E5] p-2 dark:bg-[#2B2841]">
                  <FaEnvelope className="size-5" />
                </span>
                coleneencarnado
                <wbr />
                @gmail.com
              </a>
            </motion.li>
            <motion.li variants={contentVariants} className="group">
              <a
                href="tel:13235788030"
                className="flex flex-row items-center gap-x-2 transition duration-300 ease-in group-hover:text-[#DE8ABB] dark:group-hover:text-[#7943ED]"
              >
                <span className="cursor-pointer rounded-lg bg-[#CED7E5] p-2 dark:bg-[#2B2841]">
                  <FaPhoneAlt className="size-5" />
                </span>
                +1 (323) 578 - 8030
              </a>
            </motion.li>
          </ul>

          {/* SOCIAL LINKS */}
          <motion.h5
            variants={contentVariants}
            className="text-base font-bold sm:text-lg"
          >
            Follow Me
          </motion.h5>
          <div className="flex flex-row gap-x-2">
            <motion.a
              variants={contentVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              href="https://www.linkedin.com/in/encarnac/"
              className="rounded-lg bg-[#DADAE7] bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] p-2 text-white dark:bg-[#3e3759] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] dark:text-[#c3c3c4]"
            >
              <FaLinkedinIn className="size-6" />
            </motion.a>
            <motion.a
              variants={contentVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              href="https://github.com/encarnac"
              className="rounded-lg bg-[#DADAE7] bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] p-2 text-white dark:bg-[#3e3759] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] dark:text-[#c3c3c4]"
            >
              <FaGithub className="size-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* EMAIL FORM SECTION */}
        <motion.div
          ref={ref}
          variants={contactVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-5 mt-8 flex flex-col justify-end md:mt-0"
        >
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-3 flex w-full flex-col items-stretch justify-between gap-x-4 md:flex-row">
              {/* NAME */}
              <motion.div
                variants={contentVariants}
                className="mb-3 grow md:mb-0"
              >
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
                  placeholder="John Doe"
                />
              </motion.div>
              {/* EMAIL */}
              <motion.div variants={contentVariants} className="grow">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
                  placeholder="johndoe@gmail.com"
                />
              </motion.div>
            </div>
            {/* SUBJECT */}
            <motion.div variants={contentVariants} className="mb-3">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
                placeholder="Just wanted to say hi"
              />
            </motion.div>
            {/* MESSAGE */}
            <motion.div variants={contentVariants} className="mb-3">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="block h-full w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
                placeholder="Let's talk about..."
              />
            </motion.div>
            {/* SUBMIT BUTTON */}
            <motion.button
              variants={contentVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              type="submit"
              className="inline-block w-fit rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-1 py-1 text-white dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]"
            >
              <span className="block rounded-full bg-[#e3e8ee] px-10 py-2 transition duration-300 dark:bg-[#201E2C]">
                <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                  Submit
                </span>
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
