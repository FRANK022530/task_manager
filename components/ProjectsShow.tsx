import React from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  
}

interface ProjectsShowProps {
  project: Project;
}

const ProjectsShow: React.FC<ProjectsShowProps> = ({ project }) => {
  return (
    <div className='border mx-5 my-20  w-72 h-52 rounded-md p-5 '>
      <h2 className='mb-5 font-bold text-blue-500'>{project.name}</h2>
      <p className='text-xs h-24 '>{project.description}</p>
      <div className='flex justify-end'>
      <button className='bg-blue-500 py-2 px-5 rounded-lg text-white text-xs'>View</button>
      </div>
    </div>
  );
}

export default ProjectsShow;
