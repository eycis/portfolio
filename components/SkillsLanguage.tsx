import React from 'react'

interface Props{
    skill1: string;
    skill2: string;
    level1: string;
    level2: string;
}

const SkillsLanguage = ({skill1, skill2, level1, level2}: Props) => {
  return (
    <div>
        <div className='relative mb-[3rem]'>
            <h1 className='p-5 w-[100%] uppercase bg-[#303030] placeholder:rounded-sm text-white text-[20px] font-bold'>
                {skill1}
            </h1>
            <span className={`${level1} bottom-0 h-[6px] absolute bg-violet-400`}></span>
        </div>
        <div className='relative mb-[3rem]'>
            <h1 className='p-5 w-[100%] uppercase bg-[#303030] rounded-sm text-white text-[20px] font-bold'>
                {skill2}
            </h1>
        <span className={`${level2} bottom-0 h-[6px] absolute bg-violet-400`}></span>
        </div>
    </div>
  );
};

export default SkillsLanguage;