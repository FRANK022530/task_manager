import Navigation from '@/components/Navigation';
import ProjectsShow from '@/components/ProjectsShow';
import SideBar from '@/components/SideBar';
import React from 'react';

const Projects = () => {
  // Sample list of projects
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description of Project 1' },
    { id: 2, name: 'Project 2', description: 'Description of Project 2' },
    { id: 3, name: 'Project 3', description: 'Description of Project 3' },
    { id: 4, name: 'Project 4', description: 'Description of Project 4' }, // Fixed description
  ];

  return (
    <div className='h-screen overflow-hidden'>
      <Navigation/>
      <div className='flex'>
        <SideBar/>
        <div className='flex'>
          {/* Map over the projects array and render ProjectsShow for each project */}
          {projects.map(project => (
            <ProjectsShow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
