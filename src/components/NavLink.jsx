export const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block rounded py-2 pl-3 pr-4 hover:text-stone-600 dark:hover:text-white sm:text-xl md:p-0"
    >
      {title}
    </a>
  );
};
