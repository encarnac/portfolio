import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import HeaderPhoto from "../assets/header-pfp.png";

export default function Header() {
  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-48 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-1"
        >
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="mb-4 text-4xl font-extrabold text-[#857e8f] dark:text-white sm:text-6xl lg:text-8xl">
              <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:to-[#7943ed]">
                Hello, I'm
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Colene",
                  3000, // Waits 2s
                  "",
                  700,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <p className="mb-6 text-base text-[#938e9c] dark:text-[#9d97a6] sm:text-lg lg:text-xl">
              // I am a Front-End Developer based in Los Angeles, CA
            </p>
            <div className="">
              <button className="mr-4 w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-6 py-3 text-white dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit">
                Hire Me
              </button>
              <button className="mt-3 w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-1 py-1 text-white hover:bg-zinc-800 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit">
                <span className="block rounded-full bg-[#d2c6da] px-5 py-2 hover:bg-[#d4c3df] dark:bg-[#10031A] dark:hover:bg-[#150423]">
                  Download CV
                </span>
              </button>
            </div>
          </div>

          <div className="col-span-5 mt-6 place-self-center lg:my-24">
            <div className="lg:before:border-blue z-0 before:max-w-[400px] lg:relative lg:before:absolute lg:before:-left-12 lg:before:-top-12 lg:before:z-[-1] lg:before:h-full lg:before:w-full lg:before:rounded-full lg:before:border-2">
              {" "}
              <div className="size-[250px] md:size-[325px] xl:size-[400px] relative rounded-full bg-[#ad99db] dark:bg-[#6a3dd1]">
                <img
                  src={HeaderPhoto}
                  alt="profile photo"
                  className="size-11/12 absolute inset-x-0 bottom-0 rounded-bl-[50%]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
