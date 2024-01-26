import AboutPhoto from "../assets/about-pfp.png";

const AboutSection = () => {
  return (
    <div id="about" className="my-72 grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-5 place-self-center">
        <div className="relative h-[250px] w-[250px] overflow-clip rounded-full bg-[#ad99db] dark:bg-[#6a3dd1] lg:h-[300px] lg:w-[300px]">
          <img src={AboutPhoto} />
        </div>
      </div>
      <div className="col-span-7 mr-0 mt-12 place-self-center rounded-3xl bg-gradient-to-br from-[#68A3EB] to-[#F38BBB] dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE] px-1 py-1 text-center shadow-sm lg:mr-16 lg:mt-0 lg:text-left">
        <div className="h-fit backdrop-blur-sm bg-opacity-90 rounded-3xl text-[#625f68] dark:text-indigo-100  bg-[#e2e0e6] dark:bg-[#14022A] px-8 py-10 lg:px-16 lg:py-24 lg:m-1">
          {" "}
          <h1 className="mb-6 text-2xl font-extrabold md:text-3xl">About Me</h1>
          <p className="">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MySQL, MongoDB,
            HTML, CSS (TailwindCSS and Bootstrap), and Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
