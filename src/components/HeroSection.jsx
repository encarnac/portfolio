import { TypeAnimation } from "react-type-animation";
import HeaderPhoto from "../assets/header-pfp.png";

export default function Header() {
  return (
    <>
      <section className="relative">
        <div className="mb-48 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-1">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="mb-4 text-5xl font-extrabold text-[#857e8f] dark:text-white sm:text-6xl lg:text-7xl">
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
              />
            </h1>
            <p className="mb-6 text-base text-[#938e9c] dark:text-[#9d97a6] sm:text-lg lg:text-xl">
              // Scroll down to learn more about what I do
            </p>
            <div className="">
              <button className="mr-4 w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-6 py-3 text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit">
                Hire Me
              </button>
              <button className="mt-3 w-full rounded-full bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] px-1 py-1 text-white transition duration-300 ease-in-out hover:scale-105 dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] sm:w-fit">
                <span className="block rounded-full bg-[#e3e8ee] px-5 py-2 transition duration-300 dark:bg-[#181320]">
                  <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
                    Download CV
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="col-span-5 mt-10 place-self-center lg:my-24">
            <div className="relative z-0 before:absolute before:bottom-1 before:left-4 before:h-full before:w-full before:rounded-full before:bg-[#afc6e2] before:mix-blend-multiply dark:before:bg-[#8630a5] lg:before:bottom-2 lg:before:left-8 lg:before:h-[315px] lg:before:w-[330px] xl:before:h-[400px] xl:before:w-[400px]">
              {" "}
              <div className="size-[250px] md:size-[325px] xl:size-[400px] relative rounded-full bg-[#ad99db]/60 dark:bg-[#6a3dd1]/60">
                <img
                  src={HeaderPhoto}
                  alt="profile photo"
                  className="absolute inset-x-0 bottom-0 w-11/12 rounded-bl-[50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
