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

  const [isHovered, toggleHover] = useState(false);

  
  const toggleHoverState = () => {
    toggleHover(isHovered => !isHovered)
  }

    const images = useStaticQuery(getImages)

    return (
       
        <div id="portfolio" className="container mx-auto w-full sm:px-2 pt-12 sm:pt-24 flex-grow">
        <div className="bg-white ">
           <div className="flex flex-col sm:px-56 mx-8 mb-2 mt-24">

           <div className="text-left">
              <h1 className="text-7xl font-bold tracking-tight">portfolio</h1>
             </div> 

             <div className="flex flex-wrap -mb-4 sm:w-full  sm:-mx-16 pt-12 sm:px-12" >
           
           <div  class="w-1/3 mb-4  px-2 border-gray-300">
              <Link to="/pipes/" ><Img fluid={images.pipes.childImageSharp.fluid} alt="pipes" onMouseEnter={() => toggleHoverState()} onMouseLeave={() => toggleHoverState()} /></Link>
              <div className={`${
                  isHovered ? 'block' : 'hidden'
              }`}>
                  
                <div className="border-gray-300">HTML, Tailwind, React, Gatsby</div>
                  
                  
              
              </div>
           </div>
          

     
           </div>
           
           </div>
        </div>
     </div>

    

        
    )
}

export default Portfolio;