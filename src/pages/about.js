import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'


const getAvatar = graphql`
query Avatar {
  avatar: file(relativePath: {eq: "avatar-1.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 177, quality: 92){
        ...GatsbyImageSharpFluid
      }
    }
  }
  
}
`

const About = ({children}) => {

    const image = useStaticQuery(getAvatar)

    return (
       
        <div id="about" className="container mx-auto min-w-full pt-20 sm:pt-32 pb-8 sm:pb-24 flex-grow">
        <div className="bg-white ">
           <div className="flex flex-col  sm:px-12 mt-8 sm:mt-10">
             
             <div className="pb-2 sm:pb-10">
             <h1 className="text-3xl sm:text-5xl font-thin tracking-tight uppercase antialiased text-center">about me</h1>
             </div>

                <div className="flex flex-wrap ">

                <div className="w-full sm:w-1/2 sm:-mx-8">
                  <div className="py-2 px-48 sm:px-56 ">
                  <Img fluid={image.avatar.childImageSharp.fluid} className="w-full shadow-2xl rounded"/>
                   </div>
                  </div> 

                  <div className="w-full mx-12 sm:-mx-32 sm:w-1/2 ">
           <div className="min-w-full text-left sm:text-left sm:px-2 pt-4 sm:pt-0">
           <div className="text-gray-800 pb-4 ">
           <p className="text-left text-xl sm:text-2xl tracking-wider my-1 antialiased">I'm Anastasia.</p> 
           <p className="text-left text-xl sm:text-2xl tracking-wider antialiased">
           A junior front-end developer based in Berlin, Germany.
           </p>
          </div> 
          <div className="text-left text-lg sm:text-xl tracking-wider leading-normal text-gray-700 antialiased"> 
          <p className="mb-4">
                 I have studied English & German philology at the University in Russia. 2018 finished my PHD in Methodology of Teaching in Moscow.
                 Now I have successfully transferred my passion for foreign languages to programming languages.
            </p>
           <p className="mb-4">
           I work with technologies such as <strong>HTML, CSS, Tailwind, JavaScript, Ract, QraphQl, Gatsby, Github</strong>.
           I'm also familliar with <strong>Vue</strong>.
           </p>
           <p className="mb-4">
           I am eager to work on new things with creative ideas!
           </p>
          </div>
            </div>
           </div>


              

                </div>
          
          
          
           </div>
        </div>
     </div>

    


        
    )
}


export default About;

