import  { useState } from "react";
import { RiFlowerFill, RiMenu4Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { headerData } from "../data/headerData";

export default function Header() {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);
  console.log({pathname})

  const mainNavLinks = headerData.filter((el) => el.title !== "ContactUs");

  return (
    <header className="relative p-2 px-8 shadow-lg bg-white z-50">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <Link to={"/"} className="flex gap-2 items-center ml-4">
          <RiFlowerFill className="text-blue-300 text-xl md:text-2xl" />
          <h1 className="text-primary font-bold text-xl md:text-2xl font-serif italic">
            PureHaven
          </h1>
        </Link>
        <nav className={`absolute z-50 md:static top-full ${ showNav ? "left-0" : "left-full" } w-full md:w-max flex flex-col md:flex-row md:gap-2 md:justify-center flex-1 bg-white md:bg-transparent rounded-md mt-2 py-2 px-4`} >
          <div className="flex-1 flex flex-col md:flex-row md:gap-6 md:items-center md:justify-center text-right md:text-center">
            {mainNavLinks.filter(el => el.title !== "Contact Us").map((el) => {
              
              
              return (
                <Link key={el.id} to={el.url} className={`py-2 px-4 hover:translate-x-1 md:hover:translate-x-0 ${ el.url === pathname ? " text-primary after:w-full" : "text-primary after:w-0"} relative after:hidden md:after:flex after:h-[2px] after:hover:w-full after:bg-primary after:z-10 after:left-0 after:bottom-0 after:absolute `}> {el.title} </Link>
              );
            })}
          </div>
          <div className="flex flex-col md:ml-auto text-right md:text-center">
            <Link key={"820398423"} to={"/contact"} className={`py-2 px-4 hover:translate-x-1 md:hover:translate-x-0 ${pathname === "/contact" ? "bg-primary text-white" : "text-primary bg-white"} md:rounded-full md:border border-primary `}>Contact Us</Link>
          </div>
        </nav>
        <div onClick={() => setShowNav(!showNav)} className="w-8 h-8 rounded-md flex md:hidden justify-center items-center cursor-pointer border border-primary bg-rose-100 text-primary text-xl"> <RiMenu4Line /> </div>
      </div>
      
    </header>
  );
}
