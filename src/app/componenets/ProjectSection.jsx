'use client'
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "React Personal Website",
        description: "A personal website used to share my projects, acomplishments, and interests.",
        image: "images/projectImages/portfolioPorject.png",
        tag: ["All", "Web"],
        gitHubLink: "/",
        link2: "/",
        hasSource: true
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description",
        image: "images/placeholder.png",
        tag: ["All", "Web"],
        link2: "/",
        hasSource: false
    },
    
]

const ProjectSection = () => {
  const [tag, setTag] = useState('All');
  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )

  return (
    <>
    <h2 className='text-4xl font-bold text-center pb-8'>My Projects</h2>

    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag 
        onClick={handleTagChange} 
        name="All" 
        isSelected={tag === 'All'}
      />
      <ProjectTag 
        onClick={handleTagChange} 
        name="Web" 
        isSelected={tag === 'Web'}
      />
      <ProjectTag 
        onClick={handleTagChange} 
        name="Video" 
        isSelected={tag === 'Video'}
      />
      
    </div>

    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => 
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image} 
        gitHubLink={project.gitHubLink} 
        link2={project.link2}
        hasSource={project.hasSource}
        />)}
    </div>
    </>
  )
}

export default ProjectSection
