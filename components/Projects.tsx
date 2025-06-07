import React from 'react'
import Image from "next/image";

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading mb-10'>
            My Projects
        </h1>
        <div className='w-[50%] pt-[rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-28'>
            <div data-aos = "fade-up">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/02.PNG" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/03.PNG" alt='portfolio' layout='fill' className='object-contain'/>
                </div>       
            </div>
            <div data-aos = "fade-up">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/04.PNG" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/07.PNG" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/05.PNG" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos = "fade-up" data-aos-delay="300">
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
                w-[100%] h-[200px] md:h-[300px]'>
                    <Image src="/images/06.PNG" alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
        </div>
        </div>
  );
};

export default Projects;