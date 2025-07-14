import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import app from "../firebase/firebase";
import { getAuth,signOut } from "firebase/auth";

const auth = getAuth(app);

const closeS = ()=>{
   signOut(auth)
}

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
    <nav className=" fixed top-0 w-full p-2 shadow-[0_4px_10px_rgba(0,0,0,0.25)] bg-white/10 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>Logo</div>
        {/*  Navbar Links Big screens*/}
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.id}>
                <a href="">{l.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-slate-500 text-white text-[10px] px-2 py-1 rounded-sm hidden md:block"
        onClick={closeS}
        >
          log in
        </button>
        <button onClick={openMenu} className="md:hidden">
          {isOpen ? (
            <IoCloseSharp />
          ) : (
            <CiMenuBurger className="cursor-pointer md:hidden" />
          )}
        </button>
        {/* Mobile Menu Overlay*/}
        {isOpen && (
          <div className="md:hidden w-[200px] fixed top-2 right-0 bg-black/65 backdrop-blur-sm text-white rounded-l-sm p-2 h-[150px] z-10">
            <div className="flex">
              <ul className="flex flex-col gap-3 mt-2 ml-3">
                {links.map((l) => (
                  <li key={l.id}>
                    <a href="">{l.title}</a>
                  </li>
                ))}
                <button
                  className="fixed top-1 right-1 cursor-pointer "
                  onClick={() => setIsOpen(false)}
                >
                  <IoCloseSharp />
                </button>
                <button className="bg-slate-400 rounded-sm text-[12px] cursor-pointer"
                onClick={closeS}
                >
                  log in
                </button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
