import React from 'react'
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';

interface Props{
    name:string;
    role:string;
    image:string;
}

const ReviewItems = ({name, role, image} : Props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
        <Image src={image} alt={name} width={100} height={100} objectFit="contain" className='mx-auto mb-[2rem] rounded-full'/>
        <div className='flex items-center mx-auto'>
            <StarIcon className='w-[2rem] h-[2rem] text-violet-400'/>
            <StarIcon className='w-[2rem] h-[2rem] text-violet-400'/>
            <StarIcon className='w-[2rem] h-[2rem] text-violet-400'/>
            <StarIcon className='w-[2rem] h-[2rem] text-violet-400'/>
        </div>
        <h1 className='text-[25px] text-white mt-[1rem]'>{name} </h1>
        <p className='text-[18px] text-white mt-[0.5rem] opacity-75 mb-[1.5rem]'> {role}</p>
        <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto '> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quos cumque quod neque minima omnis consequatur, id repellat eligendi.
             Enim officiis saepe inventore asperiores. Consequuntur, molestias.
        </p>
    </div>
  )
}

export default ReviewItems