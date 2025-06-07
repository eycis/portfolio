import React from 'react'
import SkillsLanguage from './SkillsLanguage';
import SkillItem from './SkillItem';

function Skills() {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#1e1e1f]'>
      <h1 className='heading'>
        Education & Skills
      </h1>
      <div className='w-[80%] mx-auto pt-[rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
          <SkillItem 
            title='React Developer' 
            year='2024'
            text= "Worked on a complex injury logbook system with role-based access, PDF export, secure authentication, and user-friendly UX, using React, TypeScript and Firebase."/>
          <SkillItem 
            title='Python developer' 
            year='2021-2023'
            text="Built a time-tracking app for my bachelor thesis with data analytics and visualization. Continued with smaller projects in pandas, NumPy, and Matplotlib."/>
          <SkillsLanguage skill1 = 'React' skill2 = 'Python' level1= 'w-[65%]' level2='w-[50%]' />
        </div>
        <div>
          <SkillItem 
            title='SQL developer' 
            year='2023-2024'
            text="At Bosch, I created SQL audits focused on data correctness and consistency across internal systems, helping identify and trace anomalies efficiently."/>
          <SkillItem 
            title='RPA developer' 
            year='2024'
            text="I develop and maintain automation bots in Bosch to streamline routine tasks and reduce manual effort, supporting both my own workflow and that of my colleagues."/>
          <SkillsLanguage skill1 = 'SQL Developer' skill2 = 'RPA developer'  level1= 'w-[70%]' level2='w-[90%]'/>
        </div>
      </div>
    </div>
  );
};

export default Skills;   