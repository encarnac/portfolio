import { motion } from "framer-motion";

export const Link = ({ mobile, page, selectedPage, setSelectedPage }) => {
  const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
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
        } transition duration-500 block rounded py-2 pl-3 pr-4 hover:text-[#DC659C] dark:hover:text-[#7943ed] sm:text-xl md:p-0`}
      >
        {page.title}
        {page.title == selectedPage && !mobile ? (
          <motion.div
            layout
            className="h-[2px] w-0 bg-[#DC659C] dark:bg-[#7943ed]"
            animate={{ width: "100%" }}
          />
        ) : null}
      </a>
    </div>
  );
};
