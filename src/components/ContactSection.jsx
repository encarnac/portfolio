// import watch_soon from "../assets/watch-soon.png";
const ContactSection = () => {
  return (
    <section id="contact" className="mb-12 w-full">
      <div className="relative mb-8 flex flex-col items-start justify-start py-3">
        <h4 className="font-mono text-lg tracking-widest text-[#5b5662]/60 dark:text-[#D4D3D8]/40 lg:text-xl">
          [04]contact
        </h4>
        <h3 className="font-sans text-3xl font-bold text-[#5b5662] dark:text-[#D4D3D8] lg:text-4xl">
          {/* <span className="bg-gradient-to-r from-[#68A3EB] to-[#F38BBB] bg-clip-text text-transparent dark:from-[#3034C2] dark:via-[#6A3DD1] dark:to-[#9329BE]"> */}
          Get In Touch
          {/* </span> */}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center text-[#797382] dark:text-white"></div>
    </section>
  );
};

export default ContactSection;
