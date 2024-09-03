import React from "react";
import TextEffect from "./TextEffects";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { sendEmail } from "../services/emailService"; // Import služby

const downloadCV = async () => {
    try {
        // Zavolání funkce, která spustí odeslání e-mailu
        await sendEmail();

        // Po úspěšném odeslání e-mailu zahajte stahování CV
        //window.location.href = '/CV.pdf';
    } catch (error) {
        alert('Error sending email');
    }
};

const Hero = () => {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        Hi, I am <span className="text-violet-400">Marie</span> and this is my portfolio!
                    </h1>
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam neque provident pariatur sint ipsam 
                        alias mollitia earum, doloribus aliquid beatae? Fugit cupiditate ipsum harum consequatur?
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <button
                            onClick={downloadCV}
                            className="px-[2rem] hover:bg-violet-400 transition-all duration-200 py-[1rem] text-[18px]
                            font-bold uppercase bg-[#ffffff92] text-black flex items-center space-x-2"
                        >
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="w-[500px] hidden bg-violet-400 relative lg:flex items-center rounded-full h-[500px]">
                    <img src="/images/me.jpg" alt="user" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
