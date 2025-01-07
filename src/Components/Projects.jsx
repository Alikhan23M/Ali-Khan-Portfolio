import React from 'react';
import ProjectsHero from './ProjectHero';
import projectJson from '../Projects/Projects.json';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = projectJson;

  return (
    <>
      <ProjectsHero />
      <section className="projects bg-gray-100 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-200 border-2 border-blue-500 rounded-t-lg shadow-lg flex flex-col">
                <img
                  src={require(`../Assets/${project.image}`)}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-800 mb-4 text-justify">{project.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-2xl">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-2xl">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {document.title = 'Ali Khan | Projects'}
    </>
  );
};

export default Projects;
