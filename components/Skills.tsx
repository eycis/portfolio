import React from 'react';
import SkillsLanguage from './SkillsLanguage';
import SkillItem from './SkillItem';

function Skills() {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#1e1e1f]">
      <h1 className="heading">Education & Skills</h1>
      <div className="w-[90%] md:w-[80%] mx-auto pt-[5rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-start">
        
        <div className="flex flex-col space-y-[5rem]">
          <SkillItem 
            title="React Developer" 
            year="2024"
            text="Worked on a complex injury logbook system with role-based access, PDF export, secure authentication, and user-friendly UX, using React, TypeScript and Firebase." 
          />
          <SkillItem 
            title="Python Developer" 
            year="2021-2023"
            text="Built a time-tracking app for my bachelor thesis with data analytics and visualization. Continued with smaller projects in pandas, NumPy, and Matplotlib." 
          />
          <SkillItem 
            title="Blender" 
            year="2021-2024"
            text="Created and edited detailed low-poly 3D models for educational VR environments. I quickly adapted to Blender's advanced features for modeling, texturing, and exporting assets."
            />
          <SkillsLanguage 
            skill1="React" 
            level1="w-[80%]" 
            skill2="Python" 
            level2="w-[60%]" 
            skill3="Blender" 
            level3="w-[65%]" 
          />
        </div>

        <div className="flex flex-col space-y-[5rem]">
          <SkillItem 
            title="SQL Developer" 
            year="2023-2024"
            text="At Bosch, I created SQL audits to ensure data consistency and accuracy across key systems — supporting validation processes and root cause detection of anomalies."
          />
          <SkillItem 
            title="RPA Developer" 
            year="2024"
            text="I develop and maintain automation bots in Bosch to streamline routine tasks and reduce manual effort, supporting both my own workflow and that of my colleagues." 
          />
          <SkillItem 
            title="Unity" 
            year="2023"
            text="Developed a desktop game in Unity using C# for my thesis. Focused on gameplay scripting, scene logic, and integrating 3D models into an interactive learning experience."
            />
          <SkillsLanguage 
            skill1="SQL Developer" 
            level1="w-[70%]" 
            skill2="RPA Developer" 
            level2="w-[90%]" 
            skill3="Unity" 
            level3="w-[60%]" 
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
