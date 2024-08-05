import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props{
    nav:boolean;
    closeNav:()=> void;
}
const MobileNav = ({nav, closeNav}: Props) => {

    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';
    return(
        <div className = {`fixed ${navAnimation} transform transition-all duration-300 top-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
            <div className = "w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <div className = "nav-link-mobile">Home</div>
                <div className = "nav-link-mobile">About me</div>
                <div className = "nav-link-mobile">Services</div>
                <div className = "nav-link-mobile">Skills</div>
                <div className = "nav-link-mobile">Projects</div>
                <div className = "nav-link-mobile">Contact</div>
            </div>
            <div onClick = {closeNav} 
                className= "absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-violet-300">
                <XMarkIcon/>
            </div>
        </div>
    );
};
export default MobileNav;
