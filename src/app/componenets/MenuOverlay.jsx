import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title}/>
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay

  {/*
  Functional component named Menu Overlay that receives one prop:
  links: an array of objects where each object contains a path and a title

  returns an unordered list with the different links in a list

  unordered list
  Tailwin CSS Guide:
  flex: makes it a flex container
  flex-col: stacks items vertically
  py-4: padding on the 4-axis (tob and bottom)
  items-center: centers items horizontally

  map goes through each link object in the link array
  key={index} gives each <li> a unique key (React needs this)
  for each link:
    a list item is created
    it contains a NavLink with the link's path and title
  
  */}