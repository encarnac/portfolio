import AboutPhoto from "../assets/about-pfp.png";

const AboutSection = () => {
  return (
    <div id="about" className="my-72 grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-5 place-self-center">
        <div className="relative h-[200px] w-[200px] overflow-clip rounded-full bg-[#6a3dd1] lg:h-[270px] lg:w-[270px]">
          <img src={AboutPhoto} />
        </div>
      </div>
      <div className="col-span-7 mr-0 mt-12 place-self-center rounded-3xl bg-gradient-to-br from-[#3034C2] via-[#6A3DD1] to-[#9329BE] px-1 py-1 text-center shadow-2xl lg:mr-16 lg:mt-0 lg:text-left">
        <div className="h-fit rounded-3xl bg-[#14022A] px-16 py-24 lg:m-2">
          {" "}
          <h1 className="mb-6 text-2xl font-extrabold text-indigo-100 md:text-3xl">
            About Me
          </h1>
          <p className="text-indigo-100">
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
