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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <div>
                  <img src={require(`../Assets/${project.image}`)} alt={project.title} className="w-full object-cover rounded-t-lg mb-4" style={{ height: '50%' }} />
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4 p-8">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-2xl">
                    <FaExternalLinkAlt />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-2xl">
                    <FaGithub />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
