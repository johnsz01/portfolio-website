import Link from 'next/link'; {/* Link from next.js is used for client sided navigation and is faster than normal <a> tags.
    It helps with routing without reloading the page.*/}
// <a> tags 

const NavLink = ({ href, title }) => { 
{/* This is a react functional component, ref is the path to navigate to and the title is the name given to it. */}
    return(
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#a9b4bb] sm:text-xl rounded md:p-0 hover:text-white'>
            {/* href={href} sets the destination URL of the Link component to the href variable passed previously. */}
            {title}
        </Link>
    )
}

export default NavLink;

{/* Styling breakdown:
    block: Makes the link a block-level element (Fills the available width.)
    py-2: padding on the y axis (top and bottom = 0.5rem)
    pl-3: padding-left 0.75rem
    pr-4: padding right 1.0rem
    text-[color code]: sets the text to that specific color
    sm:text-xl: on small or larger screens font size is text-xl
    rounded: applies a small border radius for rounded corners.
    md:p-0 On medium screen and up set all padding to 0
    hover:text-[color]: on hover set text to specific color.
    */}