import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import portrait from "../assets/portrait.png";

const ContactSection = () => {
  return (
    <section id="contact" className="mb-12 w-full">
      {/* SECTION HEADER */}
      <div className="relative mb-3 flex flex-col items-start justify-start py-3">
        <h4 className="font-mono text-lg tracking-widest text-[#5b5662]/40 dark:text-[#D4D3D8]/40 lg:text-xl">
          [04]contact
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
          Get In Touch
        </h3>
      </div>

      {/* SECTION CONTENT */}
      <div className="grid grid-cols-1 text-sm text-[#7B7484] dark:text-[#c3c3c4] sm:text-base md:grid-cols-10">
        <div className="col-span-5 flex flex-col">
          <div className="flow-row mb-2 flex items-center gap-x-2">
            <div className="w-20 overflow-clip rounded-custom-3">
              <img src={portrait} />
            </div>
            <div className="">
              <p className="text-base font-semibold sm:text-lg lg:text-xl">
                Colene Encarnado
              </p>
              <p className="font-mono">Front-End Developer</p>
            </div>
          </div>

          <p className="text-balance mb-3 text-sm sm:text-base">
            I am currently looking for new opportunities! Feel free to message
            me if you want to work together or just to connect.
          </p>
          <ul className="mb-3 space-y-2">
            <li className="group">
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
            </li>
            <li className="group">
              <a
                href="tel:13235788030"
                className="flex flex-row items-center gap-x-2 transition duration-300 ease-in group-hover:text-[#DE8ABB] dark:group-hover:text-[#7943ED]"
              >
                <span className="cursor-pointer rounded-lg bg-[#CED7E5] p-2 dark:bg-[#2B2841]">
                  <FaPhoneAlt className="size-5" />
                </span>
                +1 (323) 578 - 8030
              </a>
            </li>
          </ul>
          <h5 className="text-base font-bold sm:text-lg">Follow Me</h5>
          <div className="flex flex-row gap-x-2">
            <a
              href="https://www.linkedin.com/in/encarnac/"
              className="rounded-lg bg-[#DADAE7] bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] p-2 text-white transition duration-300 ease-in-out hover:scale-105 dark:bg-[#3e3759] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] dark:text-[#c3c3c4]"
            >
              <FaLinkedinIn className="size-6" />
            </a>
            <a
              href="https://github.com/encarnac"
              className="rounded-lg bg-[#DADAE7] bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] p-2 text-white transition duration-300 ease-in-out hover:scale-105 dark:bg-[#3e3759] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] dark:text-[#c3c3c4]"
            >
              <FaGithub className="size-6" />
            </a>
          </div>
        </div>
        <div className="col-span-5 mt-8 md:mt-0">
          <form className="flex flex-col">
            <div className="mb-3 flex w-full flex-col items-stretch justify-between gap-x-4 md:flex-row">
              <div className="mb-3 grow md:mb-0">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
                  placeholder="John Doe"
                />
              </div>
              <div className="grow">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
                placeholder="Just wanted to say hi"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="block w-full rounded-xl border border-[#CCD0D7] bg-[#DCE1E7] p-2.5 text-sm text-[#ADADB6] placeholder-[#9CA2A9] dark:border-[#33353F] dark:bg-[#282638] dark:text-gray-100"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="inline-block w-fit rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-1 py-1 text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]"
            >
              <span className="block rounded-full bg-[#e3e8ee] px-10 py-2 transition duration-300 dark:bg-[#201E2C]">
                <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                  Submit
                </span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
