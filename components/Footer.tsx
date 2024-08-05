import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/solid';
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
      <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-violet-400 '>
            <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div>
            <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
              Address
            </h1>
            <p className='text-white opacity-60 text-[17px] w-[90%]'>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-violet-400 '>
            <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div>
            <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
              Phone
            </h1>
            <p className='text-white opacity-60 text-[17px] w-[90%]'>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-violet-400 '>
            <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div>
            <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
              E-Mail
            </h1>
            <p className='text-white opacity-60 text-[17px] w-[90%]'>
                eycisxxx@gmail.com
            </p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Footer;
