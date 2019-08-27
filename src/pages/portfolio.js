import React from 'react'
import {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Link} from 'gatsby'



const getImages = graphql`
query Images {
  pipes: file(relativePath: {eq: "pipes-project.png"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92){
        ...GatsbyImageSharpFluid
      }
    }
  }
  
}
`

const Portfolio = ({children}) => {


    const images = useStaticQuery(getImages)

    return (
       
        <div id="portfolio" className="container  min-w-full  pt-12 sm:pt-4 flex-grow bg-gray-100">
        <div className="min-w-full bg-gray-100 ">

           <div className="flex flex-col  mb-2 mt-10">

           <div className="text-center">
              <h1 className="text-5xl font-thin tracking-tight uppercase antialiased">projects</h1>
             </div> 

             <div className="flex flex-wrap -mb-4 sm:w-full  sm:-mx-16 pt-12 sm:px-12" >
           
           <div  class="w-1/3 mb-4  px-2 ">
              <Link to="/pipes/" ><Img fluid={images.pipes.childImageSharp.fluid} alt="pipes"  /></Link>
            
           </div>
          

     
           </div>
           
           </div>
        </div>
     </div>

    

        
    )
}

export default Portfolio;