import watch_soon from "../assets/watch-soon.png";
import adopt_a_pal from "../assets/adopt-a-pal.png";
import portfolio from "../assets/portfolio.png";
const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-12 w-full">
      <div className="relative mb-8 flex flex-col items-end justify-end py-3">
        <h4 className="font-mono text-lg tracking-widest text-[#797382]/40 dark:text-white/40 sm:text-xl lg:text-2xl">
          [03]projects
        </h4>
        <h3 className="font-sans text-4xl font-bold lg:text-5xl">
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            What I Made
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-x-4 text-[#797382] dark:text-white lg:grid-cols-12">
        {/* FIRST CARD */}
        <div className="col-span-1 lg:col-span-4">
          <img src={adopt_a_pal} className="w-fit rounded-t-2xl" />
          <h3 className="text-xl">Adopt-a-Pal</h3>
          <h4>Pet Adoption "Dating" App</h4>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <img src={watch_soon} className="w-fit rounded-t-2xl" />
          <h3 className="text-xl">Watch-Soon</h3>
          <h4>Tv and Movie Reminder</h4>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <img src={portfolio} className="w-fit rounded-t-2xl" />
          <h3 className="text-xl">Portfolio</h3>
          <h4>React Portfolio Website</h4>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
