import ProfilePhoto from "../assets/header-pfp.jpeg";

export default function Header() {
  return (
    <>
      <section>
        <div>
          <div>
            <h5>Hello World, </h5>
            <h1>I'm Colene</h1>
            <p> Front-end developer from Los Angeles, CA </p>
            <div>
              <button>Hire Me</button>
              <button>Download CV</button>
            </div>
          </div>
          <div>
            <div>
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
