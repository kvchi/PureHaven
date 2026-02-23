import { useState, useEffect } from "react";
import { RiFlowerFill, RiMenu4Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { headerData } from "../data/headerData";

export default function Header() {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(false);
  }, [pathname]);

  const mainNavLinks = headerData.filter((el) => el.title !== "Contact Us");

  return (
    <header className="fixed top-0 left-0 right-0 p-2 px-4 sm:px-6 md:px-8 shadow-lg bg-white z-50">
      <div className="container mx-auto flex justify-between items-center gap-2 min-h-12">
        <Link to="/" className="flex gap-2 items-center shrink-0">
          <RiFlowerFill className="text-blue-300 text-xl md:text-2xl" />
          <h1 className="text-primary font-bold text-lg sm:text-xl md:text-2xl font-serif italic">
            PureHaven
          </h1>
        </Link>
        <nav
          className={`absolute z-50 md:static top-full left-0 right-0 md:left-auto md:right-auto w-full md:w-max flex flex-col md:flex-row md:gap-2 md:justify-center flex-1 md:flex-initial bg-white md:bg-transparent shadow-lg md:shadow-none rounded-b-lg md:rounded-none mt-0 md:mt-0 py-3 px-4 md:py-0 md:px-0 transition-all duration-200 ${
            showNav ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
          }`}
        >
          <div className="flex flex-col md:flex-row md:gap-6 md:items-center md:justify-center text-left md:text-center border-t border-secondary/50 md:border-0 pt-3 md:pt-0">
            {mainNavLinks.map((el) => (
              <Link
                key={el.id}
                to={el.url}
                className={`py-2 px-4 rounded md:rounded-none hover:translate-x-1 md:hover:translate-x-0 ${el.url === pathname ? "text-primary after:w-full" : "text-primary after:w-0"} relative after:hidden md:after:block after:h-[2px] after:transition-all after:bg-primary after:absolute after:left-4 after:right-4 md:after:left-0 md:after:right-auto after:bottom-0 after:rounded-full`}
              >
                {el.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:ml-auto text-left md:text-center border-t border-secondary/50 md:border-0 pt-3 md:pt-0">
            <Link
              to="/contact"
              className={`py-2 px-4 rounded-full text-center ${pathname === "/contact" ? "bg-primary text-white" : "text-primary border-2 border-primary hover:bg-primary hover:text-white"}`}
            >
              Contact Us
            </Link>
          </div>
        </nav>
        <button
          type="button"
          onClick={() => setShowNav(!showNav)}
          className="w-9 h-9 rounded-md flex md:hidden justify-center items-center cursor-pointer border-2 border-primary bg-rose-100 text-primary text-xl shrink-0"
          aria-label={showNav ? "Close menu" : "Open menu"}
        >
          <RiMenu4Line />
        </button>
      </div>
    </header>
  );
}
