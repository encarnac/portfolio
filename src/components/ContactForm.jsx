import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

const ContactForm = ({ contactVariants, contentVariants }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "spring",
          stiffness: 400,
          damping: 20,
        },
        opacity: { duration: 0.1 },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={contactVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="col-span-5 mt-8 flex flex-col justify-end md:mt-0"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3 flex w-full flex-col items-stretch justify-between gap-x-4 md:flex-row">
          {/* NAME */}
          <motion.div variants={contentVariants} className="mb-3 grow md:mb-0">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInput}
              disabled={submitted ? true : false}
              required
              className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
              placeholder="John Doe"
            />
          </motion.div>
          {/* EMAIL */}
          <motion.div variants={contentVariants} className="grow">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              disabled={submitted ? true : false}
              required
              className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
              placeholder="johndoe@gmail.com"
            />
          </motion.div>
        </div>
        {/* SUBJECT */}
        <motion.div variants={contentVariants} className="mb-3">
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInput}
            disabled={submitted ? true : false}
            required
            className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
            placeholder="Just wanted to say hi"
          />
        </motion.div>
        {/* MESSAGE */}
        <motion.div variants={contentVariants} className="mb-3">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInput}
            rows="5"
            disabled={submitted ? true : false}
            className="block h-full w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
            placeholder="Let's talk about..."
          />
        </motion.div>
        {/* SUBMIT BUTTON */}
        {submitted ? (
          <div className="flex items-center gap-x-2">
            <svg
              fill="none"
              width="24"
              viewBox="0 0 24 24"
              className="stroke-[#de8abb] transition dark:stroke-[#7943ED]"
              strokeWidth={3.5}
            >
              <motion.path
                variants={checkVariants}
                initial="hidden"
                animate="visible"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></motion.path>
            </svg>
            <motion.span
              className="font-semibold"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.7 },
              }}
            >
              Message sent successfully!
            </motion.span>
          </div>
        ) : (
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
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
