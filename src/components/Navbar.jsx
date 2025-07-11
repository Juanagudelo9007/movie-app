import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const links = [
  { id: 1, title: "Home", link: "#home" },
  {
    id: 2,
    title: "Favorites",
    link: "#favorite",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full p-2">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>Logo</div>
        {/*  Navbar Links Big screens*/}
        <div className="">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.id}>
                <a href="">{l.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <button>log in</button>
        <button onClick={openMenu}>
          {isOpen ? <IoCloseSharp /> : <CiMenuBurger />}
        </button>
        {/* Mobile Menu Overlay*/}
        {isOpen && (
          <div className="md:hidden w-[200px] fixed top-2 right-0 bg-black/50 backdrop-blur-sm text-white rounded-sm p-2">
            <div className="flex">
              <ul>
                {links.map((l) => (
                  <li key={l.id}>
                    <a href="">{l.title}</a>
                  </li>
                ))}
                <button
                  className="fixed top-1 right-1"
                  onClick={() => setIsOpen(false)}
                >
                  <IoCloseSharp />
                </button>
                <button>log in</button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
