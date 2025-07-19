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
                Next.js · TypeScript · Tailwind CSS · Firebase · Zod · React Hook Form · Git · Resend
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
            <h2 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[30px] text-white'>
                Secret Buddy Picker
            </h2>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono'> 
                A minimalist gift exchange app built for a close-knit friend group — no accounts or logins required.
                Each participant simply selects their name and is randomly assigned a friend to gift, with built-in safeguards to ensure fairness and prevent duplicates.
                The app also sends email notifications and was a fun way for me to practice my development skills while creating something meaningful to share with my friends.<br/>
                <span className='font-bold'>Tech Stack: </span> 
                Next.js · TypeScript · Tailwind CSS · Firebase · Resend
            </p>
            </div>
            <div className='col-span-2 flex justify-center items-center' data-aos="fade up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/buddyPicker.gif" alt='portfolio' layout='fill' className='object-contain w-full h-full'/>
                </div>       
            </div>
            <div className='flex flex-col justify-center col-span-2' data-aos = "fade up">
            <h2 className='mt-[5rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[30px] text-white'>
                Fleet Manager
            </h2>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono '> 
            Responsible for integrating a C# Blazor-based fleet management system with a Microsoft SQL Server database and designing the underlying data model using Entity Framework Core.
            Developed a custom workflow for vehicle reservations, including business rule enforcement and automated email notifications to approvers in a predefined sequence.
            Created a Blazor UI interface for approvers to review, approve, or reject bookings, ensuring a smooth and transparent approval process.
            <br/>
                <span className='font-bold'>Tech Stack:  </span> 
                 C# · Blazor · Microsoft SQL Server · Git 
            </p>
            </div>

            <div className='flex flex-col justify-center col-span-2' data-aos = "fade up">
            <h2 className='mt-[5rem] uppercase font-semibold mb-[1rem] text-[15px] sm:text-[25px] md:text-[30px] text-white'>
                Study Timer
            </h2>
            <p className='text-[#aaaaaa] w-[90%] text-[17px] opacity-80 font-mono '> 
            Developed a Python desktop application using Tkinter to track and log study time intervals for students, storing data locally with SQLite.
            Integrated the Tweepy API to allow users to post study summaries to Twitter and view study-related tweets from other users for motivation and accountability.
            Implemented visualizations of study patterns using Matplotlib, and provided a user-friendly interface for reviewing personal study history and comparing with peers. <br/>
                <span className='font-bold'>Tech Stack:  </span> 
                Python · Tkinter · Tweepy · MatPlotLib · SQLite3 · Git
            </p>
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
                    <Image src="/images/5.png" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/6.png" alt='portfolio' layout='fill' className='object-contain'/>
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