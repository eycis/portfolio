import React from 'react'
import Image from "next/image";

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading mb-10'>
            My Projects
        </h1>
        <div className='w-[80%] pt-[rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-28'>
        <div className='flex flex-col justify-center col-span-2' data-aos = "fade up">
            <h2 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[30px] text-white'>
                Injury Logbook
            </h2>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono '> 
                A web application for recording and managing workplace injuries, used across 100+ branches in CZ and SK. 
                It features secure role-based access, automated approval workflows, and centralized injury data storage.<br/>
                <span className='font-bold'>Tech Stack:  </span> 
                React · TypeScript · Tailwind CSS · Firebase (Auth, Firestore) · Zod · React Hook Form · Git
            </p>
            </div>
            <div data-aos = "fade-up">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/el2.gif" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/el1.gif" alt='portfolio' layout='fill' className='object-contain'/>
                </div>       
            </div>
            <div className='flex flex-col justify-center col-span-2' data-aos = "fade up">
            <h2 className='mt-[5rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[30px] text-white'>
                Apocalypse Chronicles
            </h2>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono '> 
            An educational low-poly VR game developed in Unity using C#. Players explore a stylized historical world with interactive elements. 
            Built as part of a thesis project, focusing on custom scripts, VR controls, and optimized Blender models.<br/>
                <span className='font-bold'>Tech Stack:  </span> 
                Unity · C# · Blender · Git · Low Poly
            </p>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/05.png" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/06.png" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div className='flex flex-col justify-center col-span-2' data-aos = "fade up">
            <h2 className='mt-[5rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[30px] text-white'>
                3D Modeling Intern - Neos/Solirax CoreDev
            </h2>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono '> 
            Worked on creating low-poly 3D models for use in a virtual reality environment. Collaborated with an international team, using Blender for modeling and Unity for implementation and testing within the VR application.<br/>
                <span className='font-bold'>Tech Stack:  </span> 
                Blender · VR · Low Poly
            </p>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/stavebnice.gif" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/stavebnice_2.gif" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div className='flex flex-col justify-center col-span-2' data-aos = "fade up">
            <h2 className='mt-[5rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[30px] text-white'>
                RPA developer - Bosch GmbH
            </h2>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono '> 
                Responsible for designing and maintaining RPA bots that automate repetitive business tasks across various Bosch divisions. 
                Developed bots using the in-house platforms Fastlane and Automation Anywhere, enabling significant time savings and process standardization.
                In addition to development, I handle ongoing support, maintenance, and continuous improvement to ensure reliability and adaptability as business needs evolve.<br/>
                <span className='font-bold'>Tech Stack:  </span> 
                Automation Anywhere · Fastlane (internal) · Process Analysis · User Support · Automation Design
            </p>
            </div>
            <div className='flex flex-col justify-center col-span-2' data-aos = "fade up">
            <h2 className='mt-[5rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[30px] text-white'>
                Data Quality & Mining – Bosch GmbH
            </h2>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono '> 
                As part of my work at Bosch, I got to be a part of an international team, where I was involved in data analysis and validation across multiple 
                systems to support better decision-making and ensure data reliability. <br/>
                <span className='font-bold'>Tech Stack:  </span> 
                SQL Server Management Studio · Microsoft SQL Server · DevOps 
            </p>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono mt-4 '> 
                In addition, I worked on user behavior analysis by extracting and processing log file data using Jupyter Notebook, pandas, NumPy, and visualization tools.
                The goal was to understand user journeys and extract critical usage patterns, helping the team identify improvement points and reduce friction in internal tools.<br/>
                <span className='font-bold'>Tech Stack:  </span> 
                Jupyter Notebook · Pandas · NumPy · MatPlotLib
            </p>
            </div>
        </div>
        </div>
  );
};

export default Projects;