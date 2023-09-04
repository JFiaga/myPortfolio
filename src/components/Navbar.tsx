import React, { FC, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.png";

const Navbar: FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);

 const navLinks = ["home", "projects", "experiences", "about","skills", "contact"];

  return (
    <header className="bg-transparent backdrop-blur-md shadow-xl   min-h-[4.375rem] border-b border-white/40  text-white fixed z-[99999]  w-[100vw] flex justify-center">
      <nav className="h-full w-full py-2 flex justify-between  items-center px-2 lg:px-[5rem] max-w-[87.5rem]">
        <a href="#home" className=" w-auto  flex items-center justify-center ">
          <img
            src={logo}
            onMouseEnter={() =>setAnimation(() => true )}
            onMouseOut={() =>setAnimation(() => false )}
            alt="Logo"
            className="w-[3.125rem] object-cover hover:rotate-90 hover:translate-x-[-1.25rem] scale-90 transition-all duration-500"
          />
          <h1 className={`${animation ? 'text-mainGreen':'text-white'} md:text-xl font-bold transition-all duration-500`}>Jayden F.</h1>
        </a>

        <ul className="hidden lg:flex justify-center font-medium items-center gap-5 capitalize">
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className="text-white text-lg hover:text-[#00bd97] transition-all duration-500 font-semibold "
            >
              <a href={`#${navLink}`}> {navLink} </a>{" "}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div
          onClick={() => setToggleNav((nav) => !nav)}
          className="lg:hidden text-white text-2xl cursor-pointer hover:text-[#00bd97] transition-all duration-[400]"
        >
          {toggleNav ? <RiCloseLine /> : <FaBars />}
        </div>

        <ul
          className={`lg:hidden absolute w-full max-w-[28.125rem] left-1/2 bg-[#f1f1f1] flex flex-col py-4 rounded-lg gap-4 items-center justify-center transition-all duration-500 -translate-x-1/2 ${
            toggleNav ? "top-[100%]" : "top-[-400%]"
          }`}
        >
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className="text-black capitalize font-semibold text-xl hover:text-[#00bd97] transition-all duration-500"
            >
              <a href={`#${navLink}`}> {navLink} </a>{" "}
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
};
export default Navbar;
