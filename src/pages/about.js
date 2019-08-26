import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

// const getAvatar = graphql`
// query Avatar{
//    avatar: file(relativePath: {eq: "avatar.jpg"}) {
//         childImageSharp {
//           fluid(quality: 91, maxWidth: 300) {
//             ...GatsbyImageSharpFluid_tracedSVG
//           }
//         }
//       }
// }
// `

const About = ({children}) => {

    // const image = useStaticQuery(getAvatar)

    return (
       
        <div id="about" className="container mx-auto w-full sm:px-2 pt-12 sm:pt-24 flex-grow">
        <div className="bg-white ">
           <div className="flex flex-col sm:px-56 mx-8  mt-10">
             
             <div className="">
             <h1 className="text-left  text-7xl font-bold tracking-tight">about me</h1>
             </div>
{/* 
            <div className="flex">
            <Img fluid={image.avatar.childImageSharp.fluid} className="w-full"/>
            </div>  */}

           <div className="text-gray-800 pb-4 ">
           <p className="text-left text-2xl tracking-wider my-1 antialiased">I'm Anastasia.</p> 
           <p className="text-left text-2xl tracking-wider antialiased">
           A junior front-end developer based in Berlin, Germany.
           </p>
          </div> 
          <div className="text-left text-xl tracking-wider leading-normal text-gray-700 antialiased"> 
          <p className="mb-4">
                 I have studied English & German philology at the University in Russia. 2018 finished my PHD in Methodology of Teaching in Moscow.
                 Now I have successfully transferred my passion for foreign languages to programming languages.
            </p>
           <p className="mb-4">
           I work with technologies such as <strong>HTML, CSS, Tailwind, JavaScript, QraphQl, Gatsby, Github</strong>.
           I'm also familliar with <strong>Vue</strong>.
           </p>
           <p className="mb-4">
           I am eager to work on new things with creative ideas!
           </p>
          </div>
          
           </div>
        </div>
     </div>

    


        
    )
}


export default About;

