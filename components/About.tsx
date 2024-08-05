import React from 'react'
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div className="md:col-span-1">
          <h1 className="heading mb-[6rem]">
            About me
          </h1>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
              <p className="text-[19px] text-slate-300 w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, 
                cumque in culpa harum aut, quos odio, ad modi officia est sed. Modi, repudiandae 
                repellat numquam quidem consectetur quasi ducimus incidunt necessitatibus nisi 
                voluptates commodi illo!
              </p>
            </div>
          {/* <button className="px-[2rem] hover:bg-violet-400 transition-all duration-200 py-[1rem] 
          text-[18px] font-bold uppercase bg-[#ffffff92] text-black flex items-center space-x-2">
            <p>Tell me more</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black "/>
          </button> */}
        </div>
        <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image src="/images/me.jpg" alt="user" layout="fill" objectFit="\contain" className="relative z-[11] w-[100%] 
          h-[100%] object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default About;
