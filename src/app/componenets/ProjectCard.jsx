import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, gitHubLink, link2, hasSource}) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group'
        style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
            <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#121212] opacity-0 group-hover:flex group-hover:opacity-80 transition-all duration-500'>
              {gitHubLink ? 
              <Link href={gitHubLink} className='h-14 w-14 mr-4 border-2 relative rounded-full border-[#b3b3b3] hover:border-white group/link'>
                <CodeBracketIcon className='h-10 w-10 text-[#b3b3b3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'></CodeBracketIcon>
              </Link> 
              : <></>} {/* if the project has source code it will  */}
              <Link href={link2} className='h-14 w-14 border-2 relative rounded-full border-[#b3b3b3] hover:border-white group/link'>
                <EyeIcon className='h-10 w-10 text-[#b3b3b3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'></EyeIcon>
              </Link>

            </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#242424] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#b3b3b3]'>{description}</p>
        </div>
      
    </div>
  )
}

export default ProjectCard
