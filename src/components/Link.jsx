export const Link = ({ page, selectedPage, setSelectedPage }) => {
  return (
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
  );
};
