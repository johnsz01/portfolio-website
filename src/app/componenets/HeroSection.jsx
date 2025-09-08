"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            {/*Grid layout to the section of the page. Default is 1 column, for large screens it's increased to 12 columns. */}
            <div className='col-span-7 place-self-center'>
            {/*This div takes 7 of the 12 columns in the grid above it. It is alos centering itself within it's section. */}
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"> 
                {/*White text. Bottom margin of 1rem.
                Text size of 4xl default, increased to 6xl for large screens or bigger. Extra bold fonts weight. */}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#093fa3] to-[#be3cbe]'>
                        {/* So the span allows us to select this specific text from the header and apply specific
                            attributes to it.
                            Transparent color for text. Clips the background to the shape of the text. 
                            Gradient from left to right from color to color*/}
                        Hello, I'm {" "}
                    </span> 
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'John',
                            1000, // wait 1s before replacing
                            'Flan',
                            1000,
                            'Heavenly',
                            1000,
                            'Tech Papi',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#a8acaf] text-lg lg:text-xl mb-6'>
                {/*Paragraph section for text.
                    Custom color, default text size is large, slightly larger on large screens or bigger. Right Margin.*/}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores debitis quam rerum quidem animi.
                Voluptates molestiae placeat quidem, nemo consectetur temporibus dicta expedita, 
                consequatur commodi provident accusamus dolorum sequi cum.
                </p>
                <div>
                    <button className='px-6 py-3 mb-3 sm:mb-0 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#093fa3] via-[#570996] to-[#be3cbe] hover:bg-[#a1a5a7] text-[#ffffff]'>
                    {/*X and Y padding (Inside the button). If small screen  have padding below. Fit full screen if small screen. Fully rounded. Right margin.
                    Gradient background form color, via color, to color. On hover change color. White text*/}
                        Download CV
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#093fa3] via-[#570996] to-[#be3cbe] hover:bg-[#4d4d4d] text-[#ffffff]'>
                    {/*Similar to previous + Transparent background, color on hover, and colored border. */}
                        <span className='block bg-[#121212] hover:bg-[#4d4d4d] rounded-full px-5 py-2'>Button Two</span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            {/*Takes up 5 columns on large screens. Centers itself on the grid. Top margin on mobile of 4 remove top margin on large screens.*/}
                <div className='relative rounded-full bg-[#525151] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden'>
                    {/*"relative" sets a positioning context for the imagine inside. Circular container. Gray background in case image doesn't load.
                        Fized size of 250x250, 400x400 on larger screens. Hides anything outside of the circular area.*/}
                    <Image
                        src="/images/luxFanArt.png"
                        alt="League of Legends Star Guardian Lux"
                        layout="fill"
                        objectFit="cover" // or "contain" if you don't want cropping
                        className="rounded-full"
                    />
                    {/*IMAGE: layout- fills the parent container. objectFit- scales and crops the image to fill the container without distortion.
                         rounded-full- keeps the image circular but it's technically not doing aything because of the previous parameters.*/}
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection

{/*  */}