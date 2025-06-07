import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#2b2b2d] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center"> */}
      <div className="w-[70%] mx-auto items-center">
        <div className="md:col-span-1">
          <h1 className="heading mb-[6rem]">
            About me
          </h1>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              <p className="text-[19px] text-slate-300 font-mono">
              I studied Business Informatics at the University of South Bohemia in České Budějovice, 
              where I focused my diploma thesis on developing an desktop game using Unity and Blender.  
              Currently, I am deeply interested in application design and frontend development using TypeScript and React.  

              I enjoy creating user-friendly, maintainable interfaces that combine logic with visual clarity.  
              I am a friendly and reliable team player, always eager to learn new technologies, 
              explore better solutions, and pay attention to the little details that make a product great.

              Outside of tech, I love traveling, listening to music, exploring history, and spending time with my dog.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
