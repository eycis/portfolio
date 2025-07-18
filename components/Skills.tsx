import React from 'react';
import SkillsLanguage from './SkillsLanguage';
import SkillItem from './SkillItem';

function Skills() {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#1e1e1f]">
      <h1 className="heading">Education & Skills</h1>
      <div className="w-[90%] md:w-[80%] mx-auto pt-[5rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-start">
        
        <div className="flex flex-col space-y-[5rem] h-full">
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
          title="Game Developer" 
          year="2021–2024"
          text="Designed and implemented educational desktop game experiences using Unity and Blender. Developed gameplay logic in C#, and created low-poly 3D assets with modeling, texturing, and scene export workflows tailored for interactive environments." 
        />
          <SkillsLanguage 
            skill1="React" 
            level1="w-[80%]" 
            skill2="Python" 
            level2="w-[60%]" 
            skill3="Game Dev" 
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
            text="At Bosch, I develop and maintain RPA bots to automate repetitive tasks, reduce manual effort, and ensure reliable business processes across teams." 
            />
          <SkillItem 
            title="C# / Blazor Developer" 
            year="2021-2024"
            text="Connected a Blazor-based fleet system to a SQL Server database. Designed the data model using Entity Framework, implemented multi-step reservation workflows, and developed an interface for approvers to review, approve, or reject bookings."
            />
          <SkillsLanguage 
            skill1="SQL Developer" 
            level1="w-[70%]" 
            skill2="RPA Developer" 
            level2="w-[90%]" 
            skill3="C# / Blazor" 
            level3="w-[60%]" 
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
