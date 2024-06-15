import { useState } from "react";
// import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menus = [
    { href: "#profile", title: "About" },
    { href: "#projects", title: "Projects" },
    { href: "#experience", title: "Experience" },
    { href: "#contact", title: "Contact" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-ORB text-base md:text-lg lg:text-xl text-white flex items-center md:justify-center justify-start bg-[#8FB7D1] p-2 fixed z-40 w-full">
      <ul className="hidden md:flex justify-between gap-20">
        {menus.map((menu, index) => (
          <li className="menuItem hover:underline" key={index}>
            <a href={menu.href}>{menu.title}</a>
          </li>
        ))}
      </ul>
      <div className="relative inline-block text-left">
        <button className="btn block md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              style={{ color: "white" }}
            />
          </svg>
        </button>
        {isOpen && (
          <nav className="lg:hidden text-blue-700 text-base absolute ">
            <ul className="menu bg-stone-300 p-3 rounded">
              {menus.map((menu, index) => (
                <li className="menuItem" key={index}>
                  <a href={menu.href}>{menu.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
export default Navbar;
