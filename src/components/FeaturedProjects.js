import React from 'react'
import Project from '../components/projects/Project'
import {useStaticQuery, qraphql} from 'gatsby'
import {Link} from 'gatsby'


const getProjects = graphql`
query Projects {
    original: file(relativePath: {eq: "pipes-new-3.png"}) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 92){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    
  }
`


const FeaturedProjects = () => {

  const response = useStaticQuery(getProjects)

  const project = response.original.childImageSharp.fluid



    return(
        <section id="portfolio" className="container  min-w-full pt-12 pb-24 sm:pt-24 flex-grow bg-gray-100">
          <div className="min-w-full bg-gray-100 ">
            <div className="text-center pb-4 ">
              <h1 className="text-3xl sm:text-5xl font-thin tracking-tight uppercase antialiased pt-8">Projects</h1>
             </div> 

            <Project img={project}/>

            

          </div>
             
        </section>
    )
}

export default FeaturedProjects;