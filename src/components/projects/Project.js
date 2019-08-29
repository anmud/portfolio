import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'


const Project = ({img}) => {
    return (
        <article>
    
    
        <div className="container flex flex-grow flex-shrink flex-wrap -mb-4 sm:w-full  sm:mx-8 pt-10 px-8 sm:px-32 " >
           
           <div  className="w-1/3  mb-2 sm:mb-4 px-10 shadow-2xl bg-white rounded hover:opacity-75 ">
               <div classname="flex flex-col flex-shrink">
               <Link to="/pipes/" ><Img fluid={img} alt="pipes" /></Link>
              
               <div className="pt-6 ">
               <div className="bg-blue-600 h-1 w-auto -mx-8 "></div>
              </div> 
               </div>
            
              <div className="flex flex-col">
                  <h1 className="text-blue-600 tracking-normal text-lg sm:text-3xl text-left pt-2 -mx-6 sm:-mx-4">Pipes Landing Page</h1>
                  <p className="hidden sm:flex sm:text-lg text-left sm:-mx-4">
                 
                  The landing page of Pipes was built using React, Gatsby, and Tailwind


                  </p>
              </div>
           </div>
           
           </div>
          
              
        </article>
    )
}

export default Project;