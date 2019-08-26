import React from 'react'
import { FaEnvelope} from "react-icons/fa"


const Contact = ({children}) => {

    return (
       
        <div id="contact" className="container mx-auto w-full sm:px-2 pt-1 sm:pt-1 flex-grow">
        <div className="bg-white ">
           <div className="flex flex-col sm:px-56 mx-8 mb-2 mt-12">
              
              <div className="text-left">
              <h1 className="text-7xl font-bold tracking-tight">contact me</h1>
             </div> 
            <div className="flex items-center">
            <FaEnvelope className="mr-6 text-blue-500 text-lg"/>
            <a href="mailto:anmud@list.ru" className="hover:underline text-xl">anmud@list.ru</a>
            </div>


           
           </div>
        </div>
     </div>

    


        
    )
}

export default Contact;