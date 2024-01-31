import { motion } from "framer-motion";
export const Link = ({ mobile, page, selectedPage, setSelectedPage }) => {
  return (
    <div className="relative">
      <a
        href={page.href}
        onClick={() => setSelectedPage(page.title)}
        className={`${
          selectedPage === page.title
            ? "dark:text-[#7943ed] text-[#DC659C]"
            : "text-stone-500 dark:text-[#b7b0c2]"
        } transition duration-500 block rounded py-2 pl-3 pr-4 hover:text-[#DC659C] dark:hover:text-[#7943ed] sm:text-xl md:p-0`}
      >
        {page.title}
      </a>
      {page.title == selectedPage && !mobile ? (
        <motion.div
          className="absolute left-0 right-0 hidden h-px bg-[#DC659C] dark:bg-[#7943ed] md:-bottom-2 md:block"
          layoutId="underline"
        />
      ) : null}
    </div>
  );
};
