"use client";
import { TypeAnimation } from "react-type-animation";
import HeaderPhoto from "../assets/header-pfp.png";

export default function Header() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="mb-4 text-5xl font-extrabold text-white sm:text-6xl lg:text-8xl">
              <span className="bg-gradient-to-r from-[#3034C2] to-[#7244D9] bg-clip-text text-transparent">
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
            <p className="mb-6 text-base text-[#9d97a6] sm:text-lg lg:text-xl">
              I'm a front-end developer from Los Angeles, CA
            </p>
            <div className="">
              <button className="mr-4 w-full rounded-full bg-gradient-to-br from-[#3034C2] via-[#6A3DD1] to-[#9329BE] px-6 py-3 text-white sm:w-fit">
                Hire Me
              </button>
              <button className="mt-3 w-full rounded-full bg-gradient-to-br from-[#3034C2] via-[#6A3DD1] to-[#9329BE] px-1 py-1 text-white hover:bg-zinc-800 sm:w-fit">
                <span className="block rounded-full bg-[#10031A] px-5 py-2 hover:bg-[#150423]">
                  Download CV
                </span>
              </button>
            </div>
          </div>

          <div className="col-span-5 mt-4 place-self-center lg:mt-0">
            <div className="relative h-[250px] w-[250px] rounded-full bg-[#6a3dd1] lg:h-[350px] lg:w-[350px]">
              {/* 140B21 6a3dd1 */}
              <img
                src={HeaderPhoto}
                alt="profile photo"
                className="size-11/12 absolute inset-x-0 bottom-0 rounded-bl-[50%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
