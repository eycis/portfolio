import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-scroll";

interface Props{
    nav:boolean;
    closeNav:()=> void;
}
const MobileNav = ({nav, closeNav}: Props) => {

    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';
    return(
        <div className = {`fixed ${navAnimation} transform transition-all duration-300 top-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
            <div className = "w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <Link 
                    to="hero"
                    spy={true}
                    onClick={closeNav}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className = "nav-link-mobile">
                    Home
                </Link>
                <Link 
                    to="about"
                    spy={true}
                    smooth={true}
                    onClick={closeNav}
                    offset={-70}
                    duration={500}
                    className = "nav-link-mobile">About me
                </Link>
                <Link 
                    to="skills"
                    spy={true}
                    smooth={true}
                    onClick={closeNav}
                    offset={-70}
                    duration={500}
                    className = "nav-link-mobile">Skills
                </Link>
                <Link 
                    to="projects"
                    spy={true}
                    onClick={closeNav}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className = "nav-link-mobile">Projects
                </Link>
                <Link 
                    to="reviewspage"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                className = "nav-link-mobile">Reviews</Link>
                <Link 
                    to="contact"
                    spy={true}
                    onClick={closeNav}
                    smooth={true}
                    offset={-70}
                    duration={500}
                className = "nav-link-mobile">Contact</Link>
            </div>
            <div onClick = {closeNav} 
                className= "absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-violet-300">
                <XMarkIcon/>
            </div>
        </div>
    );
};
export default MobileNav;
