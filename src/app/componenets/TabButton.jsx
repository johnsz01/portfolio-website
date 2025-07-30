import React from 'react'

/* 
    active should be a bool passed that will determine if the tab is active or not
    selectTab is a function that happens when the button is clicked
    children is everthing within the TabButton div
*/
const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ?
     'text-white border-b border-[#be3cbe]' : 
     'text-[#aaaaaa] border-b border-[#093fa3]';
    {/* If the button is active it will be white with a pink/purple underline
        otherwise it will be a light grey with a dark blue underline. */}


    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>

  )
}

export default TabButton
