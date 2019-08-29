import React from "react"
import Layout from "../components/Layout";
import About from './about'
import Contact from './contact'
import Banner2 from '../components/Banner-2'
import { Helmet } from "react-helmet"
import { FaChevronDown } from "react-icons/fa";
import FeaturedProjects from '../components/FeaturedProjects'




export default ({data}) => {


    return (
        <Layout>
           <Helmet>
                  <meta charSet="utf-8" />
                  <title>Ana Mo - Frontend Developer</title>
                  
             </Helmet>
        
               
               <div className="flex flex-col relative">
               <div className="min-w-full  mx-auto sm:w-3/5 py-3 sm:py-6 text-center">
                 <div className="min-w-full min-h-screen flex justify-center items-center text-center bg-cover bg-blue-600 sm:w-4/5  opacity-100 relative">
                 </div>
                </div>
                 <Banner2/>
                 <div className="bg-transparent -my-20 sm:-my-24 self-center z-10">
                   <a  href="#about" className="bg-transparent" >
                     <FaChevronDown className="text-white text-5xl "/>
                   </a>
                 </div>
               </div>
               

                <div className="container min-w-full ">
                
                  <About/>
                  <FeaturedProjects/>
                  <Contact/>
              
                </div>

        </Layout>
    )
}

