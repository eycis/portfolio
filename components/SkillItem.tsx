import React from 'react'

interface Props{
    title:string;
    year:string;
}


const SkillItem = ({title, year} : Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
        <h1 className='px-[2rem] text: text-violet-400 py-[0.9rem] font-bold text-[18px] border-[2px] border-[#a755e6]'>
            {year}
        </h1>
        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white'>
            {title}
        </h1>
        <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fugit voluptate nihil blanditiis dolore voluptates explicabo, 
             id maiores consequuntur dolorum voluptatem!
        </p>
    </div>
  );
};

export default SkillItem;