import React from 'react'
import SkillsLanguage from './SkillsLanguage';
import SkillItem from './SkillItem';

function Skills() {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#121121]'>
      <h1 className='heading'>
        Education & <span className='text-violet-400'>Skills</span>
      </h1>
      <div className='w-[80%] mx-auto pt-[rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
          <SkillItem title='React Developer' year='2024'/>
          <SkillItem title='Python developer' year='2021-2023'/>
          <SkillsLanguage skill1 = 'name' skill2 = 'name' skill3 = 'name' level1= 'w-[91%]' level2='w-[88%]' level3='w-[80%]' />
        </div>
        <div>
          <SkillItem title='SQL developer' year='2023-2024'/>
          <SkillItem title='SQL developer' year='2023-2024'/>
          <SkillsLanguage skill1 = 'name' skill2 = 'name' skill3 = 'name' level1= 'w-[91%]' level2='w-[20%]' level3='w-[80%]'/>
        </div>
      </div>
    </div>
  );
};

export default Skills;   