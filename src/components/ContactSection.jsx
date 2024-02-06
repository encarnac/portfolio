// import watch_soon from "../assets/watch-soon.png";
const ContactSection = () => {
  return (
    <section id="contact" className="mb-12 w-full">
      <div className="relative mb-8 flex flex-col items-center justify-end py-3">
        <h4 className="font-mono text-lg tracking-widest text-[#797382]/40 dark:text-white/40 sm:text-xl lg:text-2xl">
          [04]contact
        </h4>
        <h3 className="font-sans text-4xl font-bold lg:text-5xl">
          <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]">
            Let's Talk
          </span>
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center text-[#797382] dark:text-white"></div>
    </section>
  );
};

export default ContactSection;
