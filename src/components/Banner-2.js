import React from 'react'


const Banner2 = ({children}) => {
    return (
       <div className="text-center w-full my-56 sm:my-48  py-48 z-40 absolute">
         <h1 className="mb-2 uppercase text-white text-3xl sm:text-5xl ">Junior Front-end Developer</h1>
         <p className="text-white text-3xl ">with a growth mindset</p>

         {children}
       </div>
    )
}

export default Banner2;