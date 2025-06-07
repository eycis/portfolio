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
        <div className="h-[88vh]  bg-[#0a0a0a] mt-[10vh] bg-cover bg-center">
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        Hi, I am <span className="text-violet-400">Marie</span> and this is my portfolio!
                    </h1>
                    <TextEffect/>
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
                    I am a frontend developer who enjoys building secure, functional, 
                    and user-friendly applications. While working on an injury reporting system, 
                    I designed the data model, security layer, export features, and role-based UX. 
                    I believe even simple apps deserve thoughtful, well-structured solutions that make sense —
                     not just work.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <a href="/CV.pdf"
                            download
                            className="px-[2rem] hover:bg-violet-400 transition-all duration-200 py-[1rem] text-[18px]
                            font-bold uppercase bg-[#31363992] text-black flex items-center space-x-2">
                            Download CV
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black "/>
                        </a>
                    </div>
                </div>
                <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                <Image src="/images/me.jpeg" alt="user" layout="fill" objectFit="\contain" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Hero;