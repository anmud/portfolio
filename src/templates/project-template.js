import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {Link} from 'gatsby'
import Img from "gatsby-image"
import {FaChevronCircleRight} from 'react-icons/fa'


export default ({ data }) => {
    const post = data.markdownRemark
    const image = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <div className="container sm:mx-80 w-auto pt-32 sm:pt-32 pb-10 flex-grow ">
          <div className="bg-white sm:pl-24 ">
           <div className="flex flex-col  sm:px-10 mx-8">
       
       <div>
       <h1 className="text-3xl sm:text-4xl font-bold antialiased text-blue-600">{post.frontmatter.title}</h1>
       <h3 className="text-lg sm:text-lg font-thin antialiased tracking-normal">{post.frontmatter.description}</h3>
       </div>
         <div className="w-full px-16 sm:px-4">
           <div className="w-full py-2 ">
           <Img fluid={image} className="w-70 "/>
            </div>

            <p className="text-sm sm:text-md font-bold tracking-wider">The {post.frontmatter.title} website viewed in large and small layouts</p>

         </div> 
          
          <div className="flex mx-auto flex-shrink self-center pt-2 pb-4 sm:pb-10 items-center">
            <div className="container flex  bg-blue-600 shadow">
            <a   href={post.frontmatter.url}  target="_blank" className="w-48 h-12 block text-lg text-center py-3 font-light uppercase tracking-wide text-white  no-underline sm:block -mx-2 pl-12 ">
            view website
            </a>
            <FaChevronCircleRight className="mx-6 my-3 text-white text-lg"/>
            </div>
          </div>

           <div className="w-full  sm:mx-6 ">  
           <div className="min-w-full text-left text-justify sm:text-left px-4 sm:px-0 pl-4  pt-4 sm:pt-0">
            <div dangerouslySetInnerHTML={{ __html: post.html }} className="min-w-full text-md sm:text-xl leading-normal tracking-wide "/>
             <Link to="/" className="underline text-xl sm:text-2xl text-blue-600">Back</Link>
            </div>
           </div>
          
         
           </div>
          </div>
      
      </div>
    </Layout>
  )
}

export const query = graphql`
query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
       url
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`