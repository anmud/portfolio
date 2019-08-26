import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout";
import Home from './home'
import About from './about'
import Portfolio from "./portfolio";
import Contact from './contact'
import Banner2 from '../components/Banner-2'
import { Helmet } from "react-helmet"




export default ({data}) => {


    return (
        <Layout>
           <Helmet>
                  <meta charSet="utf-8" />
                  <title>Ana Mo - Frontend Developer</title>
                  
             </Helmet>
        
               
               <div className="flex flex-col">
               <div className="min-w-full  mx-auto md:w-3/5 py-6 text-center">
                 <div className="min-w-full min-h-screen flex justify-center items-center text-center bg-cover bg-blue-600 md:w-4/5 z-10 opacity-100 relative"></div>
                </div>
                 <Banner2/>
               </div>
               

                <div className="container mx-auto">
                <div className="flex-col">
                  <About/>
                  <Portfolio/>
                  <Contact/>
                </div>
            </div>

        </Layout>
    )
}

