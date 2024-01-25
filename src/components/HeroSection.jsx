import ProfilePhoto from "../assets/header-pfp.png";

export default function Header() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7">
            <h1 className="mb-4 text-4xl font-extrabold text-white lg:text-6xl">
              Hello, I'm Colene
            </h1>
            <p className="text-lg text-lightest-purple lg:text-xl">
              I'm a front-end developer from Los Angeles, CA
            </p>
            <div>
              <button>Hire Me</button>
              <button>Download CV</button>
            </div>
          </div>

          <div className="col-span-5">
            <div className="w-500 h-400 rounded-full bg-darkest-purple">
              <img
                src={ProfilePhoto}
                alt="profile photo"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
