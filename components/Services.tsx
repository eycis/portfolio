import CommandLineIcon from '@heroicons/react/24/outline/CommandLineIcon'
import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'> 
            My <span className='text-violet-400'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center 
        gap-[3rem] mt-[4rem] text-white'>
            <div data-aos="fade-out">
                <div className='bg-violet-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                uppercase font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.rem]'>
                        Placeholder 01 
                    </h1>
                    <p className='text-[15px] text-[#d3fae8] font-normal'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo quam maxime facere obcaecati voluptates eos impedit? Aliquid eveniet deleniti necessitatibus.
                    </p>
                </div>
            </div>
            <div data-aos="fade-out" data-aos-delay="300">
                <div className='bg-violet-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                uppercase font-semibold text-center p-[2rem]'>
                    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.rem]'>
                        Placeholder 02 
                    </h1>
                    <p className='text-[15px] text-[#d3fae8] font-normal'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo quam maxime facere obcaecati voluptates eos impedit? Aliquid eveniet deleniti necessitatibus.
                    </p>
                </div>
            </div>
            <div data-aos="fade-out" data-aos-delay="500">
                <div className='bg-violet-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                uppercase font-semibold text-center p-[2rem]'>
                    <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.rem]'>
                        Placeholder 03
                    </h1>
                    <p className='text-[15px] text-[#d3fae8] font-normal'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo quam maxime facere obcaecati voluptates eos impedit? Aliquid eveniet deleniti necessitatibus.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services