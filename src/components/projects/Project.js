import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

const Project = ({img}) => {
    return (
        <article>
    
    
        <div className="container flex flex-grow flex-shrink flex-wrap -mb-4 sm:w-full  sm:mx-8 pt-12 px-8 sm:px-32" >
           
           <div  className="w-1/3 mb-4 px-10 shadow-2xl bg-white rounded hover:opacity-50 ">
               <div classname="flex flex-col flex-shrink">
               <Link to="/pipes/" ><Img fluid={img} alt="pipes"   /></Link>
               <div className="pt-6 ">
               <div className="bg-blue-600 h-1 w-auto -mx-8 "></div>
              </div> 
               </div>
            
              <div className="flex flex-col">
                  <h1 className="text-blue-600 tracking-normal text-lg sm:text-3xl text-left pt-2">Pipes Landing Page</h1>
                  <p className="hidden  sm:text-lg text-left">
                 
                  The landing page of Pipes was built using React, Gatsby, and Tailwind


                  </p>
              </div>
            
           </div>
           </div>
         
           
              
        </article>
    )
}

export default Project;