import React from 'react'
import SkillsLanguage from './SkillsLanguage';
import SkillItem from './SkillItem';

function Skills() {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#1e1e1f]'>
      <h1 className='heading'>
        Education & Skills
      </h1>
      <div className='w-[80%] mx-auto pt-[rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-start'>
      <div>
          <SkillItem 
            title='React Developer' 
            year='2024'
            text= "Worked on a complex injury logbook system with role-based access, PDF export, secure authentication, and user-friendly UX, using React, TypeScript and Firebase."/>
          <SkillItem 
            title='Python developer' 
            year='2021-2023'
            text="Built a time-tracking app for my bachelor thesis with data analytics and visualization. Continued with smaller projects in pandas, NumPy, and Matplotlib."/>
          <SkillItem 
            title='Blender' 
            year='2021-2024'
            text="Created low-poly 3D models for VR educational environments as part of my master's thesis. 
            Quickly adapted to Blender's advanced features for modeling, texturing, and exporting assets."/>
          <SkillsLanguage skill1 = 'React' skill2 = 'Python' skill3='Blender' level1= 'w-[80%]' level2='w-[60%]' level3='w-[65%]' />
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
          <SkillItem 
            title='Unity' 
            year='2023'
            text="Developed a VR exploration game in Unity using C# as part of my thesis project, including gameplay scripting, scene management, and integration of 3D assets."/>
          <div className='mt-4'> .</div>
          <SkillsLanguage skill1 = 'SQL Developer' skill2 = 'RPA developer' skill3='Unity' level1= 'w-[70%]' level2='w-[90%]' level3='w-[60%]'/>
        </div>
      </div>
    </div>
  );
};

export default Skills;   