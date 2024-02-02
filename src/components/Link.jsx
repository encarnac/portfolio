import { motion } from "framer-motion";

export const Link = ({ mobile, page, selectedPage, setSelectedPage }) => {
  const variants = {
    hidden: {
      height: 100,
      width: 100,
    },
    visible: {
      backgroundColor: ["#60F", "#09F", "#FA0"],
      transition: {
        delay: 1,
        duration: 2,
        ease: [0.075, 0.82, 0.165, 1],
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <div className="relative">
      <a
        href={page.href}
        onClick={() => setSelectedPage(page.title)}
        className={`${
          selectedPage === page.title
            ? "dark:text-[#7943ed] text-[#DC659C]"
            : "text-stone-500 dark:text-[#b7b0c2]"
        } transition ease-linear duration-300 block rounded py-2 pl-3 pr-4 hover:text-[#DC659C] dark:hover:text-[#7943ed] sm:text-xl md:p-0`}
      >
        {page.title}
      </a>
    </div>
  );
};
