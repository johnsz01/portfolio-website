"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li> Java </li>
                <li> C++ </li>
                <li>Python</li>
                <li>C#</li>
                <li>Git/GitHub</li>
                <li>Node.js</li>
            </ul>
        )
    },
    
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='pl-2'>
                <li className='font-bold text-[#be3cbe]'>Computer Science</li>
                <li>Bachelor's of Science</li>
                <li>Florida International University</li>
                <li>2025 // GPA - 3.71</li>
            </ul>
        )
    },
    
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li> Java </li>
                <li> C++ </li>
                <li>Python</li>
                <li>C#</li>
                <li>Git/GitHub</li>
                <li>Node.js</li>
            </ul>
        )
        
    },

    {
        title: "Favorite Games",
        id: "games",
        content: (
            <ul className='list-disc pl-2 columns-2'>
                <li> League Of Legends </li>
                <li> Minecraft </li>
                <li> Super Smash Bros </li>
                <li> Celeste </li>
                <li> Terraria </li>
                <li> Marvel Rivals</li>
                <li> Animal Crossing </li>
                <li> Plate Up </li>
            </ul>
        )
    },
] /* This is the data contained within the different tabs. */

const AboutSection = () => {
    const [tab, setTab] = useState("education"); /* The starting tab for the about section's tab buttons stored in tab, and setTab is used to update this value. */
    const [isPending, startTransition] = useTransition(); /* allows the UI to remain responsive during state updates */

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        }) /* Wraps setTab in a startTransition, which tells React it's a non-urgent update. Triggered when a user clicks on a tab. */
    }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='col-span-1'>
                <Image src={"/images/placeholder.png"} width={500} height={500} alt={"TBD"}/> {/*I need to update this image.*/}
            </div>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Hey my name is John and I'm a computer science major with an interest
                    in software development and game development. I'm a very creative individual
                    with a keen eye in noticing patterns in things. I've worked with a variety
                    of tools such as (insert tools here). I also dable in event planning and
                    coordiantion when I can. I think that it's very important for people to be
                    represented and for them to be able to share their stories and that is what
                    I hope to one day be able to do.
                </p>
                <div className='flex flex-row justify-start mt-6'>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton> {/* See the TabButton.jsx file */}
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
                    {/* <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> Experience </TabButton> */} {/* Add experience. */}
                    <TabButton selectTab={() => handleTabChange("games")} active={tab === "games"}> Favorite Games </TabButton>
                </div>
                <div className='mt-6'>
                    {TAB_DATA.find((t) => t.id === tab).content} {/* Looks for the tab data within the array and displays it dynamically. */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
