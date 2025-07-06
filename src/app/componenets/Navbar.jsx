"use client"; {/* React state (useState) only works on the client.  */}
import Link from 'next/link'; {/* Used for client sided navigation. */}
import React, { useState } from 'react'; {/* Used to toggle the mobile menu. */}
import NavLink from './NavLink'; {/* Custom link component for nav items. */}
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; {/* Bars3 hamburger icon, XMark "close" icon. */}
import MenuOverlay from './MenuOverlay'; {/* A Custom componenet for movile nav links. */}

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]
    {/* 
    Array of navigation items
    Title is the text shown in the navbar
    Path is the section is scrolls to on the page
    */}

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
        {/* 
        Boolean state to track if the mobile menu is open.
        SetNevbarOpen function to toggle it.
        */}
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
                LOGO
            </Link>
            <div className='mobile-menu block md:hidden'>
                {navbarOpen ? (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar

    {/*nav
     Tailwind CSS Guide:
     fixed: makes the navbar stick to the top of the screen
     top-0, left-0, right-0: positions the navigation bar across the top
     z-10: keeps it on top of other elements
     bg-[#121212]: dark colored background
     opacity-100: fully opaque
    */}
    
    {/*div
    Tailwind CSS Guide:
    flex - uses flexbox layout
    justify-between: space between logo and nav links
    mx-auto: centers the nav container horizontally
    px-4 py-2: padding inside the navbar
    */}

    {/*Logo
    Tailwind CSS Guide:
    text-2xl: font size on small screens
    md:text-5xl: larger font on medium screens and up
    */}

    {/*div mobile menu toggle
    Tailwind CSS Guide:
    md:hidden: Only show on small screens
    Shows either the X icon or the hamburger icon depending on navbarOpen
    Toggling the button sets the navbarOpen state.
    */}

    {/*div desktop menu
    Tailwind CSS Guide:
    hidden on small screens (default)
    md:block: on medium screens and above it's displayed
    
    items are placed in an unordered list
    the list items are provided by the navLinks refrence by mapping the link and index to the function.

    */}

    {/*Mobile Menu
    contains the logic to display the MenuOverlay
    */}