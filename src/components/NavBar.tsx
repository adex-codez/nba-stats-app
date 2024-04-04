export const NavBar = () => {
  return (
    <>
      <nav className="h-[60px] bg-black py-4">
        <ul className="flex items-center justify-center">
          <li>
            <a className="px-3 text-lg text-gray-100" href="/">
              Standings
            </a>
            <a className=" px-3 text-lg text-gray-100" href="/">
              Teams
            </a>
            <a className="px-3 text-lg text-gray-100" href="/">
              Players
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
