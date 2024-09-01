import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          My <span className="text-violet-400">Portfolio</span>
        </h1>
        <div className="hidden md:flex space-x-4">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer"
          >
            About me
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="reviewspage"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-violet-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
