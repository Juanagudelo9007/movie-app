import ReactDOM from "react-dom";

import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useSesion } from "../hooks/useSesion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { id: 1, title: "Home", link: "/home" },
  {
    id: 2,
    title: "Favorites",
    link: "/favorites",
  },
];

const Navbar = () => {
  const { openMenu, isOpen, setIsOpen, closeSesion } = useSesion();

  return (
    <motion.nav
      className=" w-full p-2 shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-black/10 backdrop-blur-[6px] font-montserrat"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>Logo</div>
        {/*  Navbar Links Big screens*/}
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.id}>
                <Link to={l.link}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <motion.button
          className="bg-[#8863F8] text-white text-[10px] px-2 py-1 rounded-sm hidden md:block cursor-pointer font-bold "
          onClick={() => {
            console.log("clickeado");
            closeSesion();
          }}
          whileHover={{
            backgroundColor: "#5B27F5",
          }}
          whileTap={{ scale: 0.75 }}
          transition={{
            duration: 0.33,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          Log out
        </motion.button>
        <button onClick={openMenu} className="md:hidden">
          {!isOpen && <CiMenuBurger className="cursor-pointer" />}
        </button>
        {/* Mobile Menu Overlay*/}
        {isOpen &&
          ReactDOM.createPortal(
            <div className="md:hidden w-[200px] fixed top-2 right-0 bg-[#070118]/60 backdrop-blur-3xl text-white rounded-l-sm p-2 h-[150px] z-60">
              <div className="relative flex h-full items-center">
                <ul className="flex flex-col gap-3  ml-3">
                  {links.map((l) => (
                    <li key={l.id}>
                      <Link to={l.link}>{l.title}</Link>
                    </li>
                  ))}
                  <motion.button
                    className="absolute top-1 right-1 cursor-pointer hover:text-red-700 duration-300"
                    onClick={() => setIsOpen(false)}
                    whileTap={{
                      scale: 0.45,
                    }}
                    transition={{
                      duration: 0.33,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                  >
                    <IoCloseSharp />
                  </motion.button>
                  <motion.button
                    className="bg-[#8863F8] rounded-sm text-[12px] cursor-pointer font-bold"
                    onClick={() => {
                      console.log("clickeado");
                      closeSesion();
                    }}
                    whileHover={{
                      backgroundColor: "#5B27F5",
                    }}
                    whileTap={{ scale: 0.75 }}
                    transition={{
                      duration: 0.33,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    Log out
                  </motion.button>
                </ul>
              </div>
            </div>,
            document.body
          )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
