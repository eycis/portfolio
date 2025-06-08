import React from "react";
import TextEffect from "./TextEffects";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { sendEmail } from "../services/emailService"; 


// const downloadCV = async () => {
//     try {
//         //await sendEmail();
//     } catch (error) {
//         alert('Error sending email');
//         console.error('Error during CV download:', error);
//     }
// };

const Hero = () => {
    return (
        // <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
        <div className="h-screen md:h-[88vh]  bg-[#0a0a0a] mt-[10vh] bg-cover bg-center">
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] pt-10 md:text-[50px] text-white font-bold">
                        Hi, I am <span className="text-violet-400">Marie</span> and this is my portfolio!
                    </h1>
                    <TextEffect/>
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
                    A technically skilled and design-aware frontend developer with strong practical overlap into backend logic, automation, and data analysis.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center">
                        <a href="/CV.pdf"
                            download
                            className="px-[2rem] hover:bg-violet-400 transition-all duration-200 py-[1rem] text-[18px]
                            font-bold uppercase bg-[#8d8e8e92] text-black flex items-center space-x-2">
                            Download CV
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black "/>
                        </a>
                    </div>
                </div>
                <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                <Image src="/images/me.jpeg" alt="user" fill objectFit="\contain" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Hero;