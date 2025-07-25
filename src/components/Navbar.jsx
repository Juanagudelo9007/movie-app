import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useSesion } from "../hooks/useSesion";
import { Link } from "react-router-dom";

const links = [
  { id: 1, title: "Home", link: "/home" },
  {
    id: 2,
    title: "Favorites",
    link: "/favorites",
  },
  {
    id: 3,
    title: "Profile",
    link: "/Profile",
  },
];

const Navbar = () => {
  const { openMenu, isOpen, setIsOpen, closeSesion } = useSesion();

  return (
    <nav className=" w-full p-2 shadow-[0_0_8px_rgba(255,255,255,0.6)] bg-white/10 backdrop-blur-sm font-montserrat">
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
        <button
          className="bg-slate-500 text-white text-[10px] px-2 py-1 rounded-sm hidden md:block cursor-pointer"
          onClick={() => {
            console.log("clickeado");
            closeSesion();
          }}
        >
          Log out
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
          <div className="md:hidden w-[200px] fixed top-2 right-0 bg-black/90 backdrop-blur-lg text-white rounded-l-sm p-2 h-[150px] z-10">
            <div className="flex">
              <ul className="flex flex-col gap-3  ml-3">
                {links.map((l) => (
                  <li key={l.id}>
                    <Link to={l.link} >{l.title}</Link>
                  </li>
                ))}
                <button
                  className="fixed top-1 right-1 cursor-pointer "
                  onClick={() => setIsOpen(false)}
                >
                  <IoCloseSharp />
                </button>
                <button
                  className="bg-slate-400 rounded-sm text-[12px] cursor-pointer"
                  onClick={() => {
                    console.log("clickeado");
                    closeSesion();
                  }}
                >
                  Log out
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
