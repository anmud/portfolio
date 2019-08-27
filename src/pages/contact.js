import React from 'react'
import { FaEnvelope} from "react-icons/fa"
import socialIcons from '../constants/social-icons'


const Contact = ({children}) => {

    return (
       
        <div id="contact" className="flex flex-wrap sm:flex-row  mx-auto min-w-full px-4 sm:px-2 pt-1 sm:pt-8 pb-32 flex-grow  flex-shrink ">
        <div className="bg-white container mx-auto w-auto flex-grow">
          
           <div className="flex flex-col sm:px-88 mx-8 mb-2 mt-12">
              
              <div className="flex justify-center pb-12">
              <h1 className="text-3xl sm:text-5xl font-thin tracking-tight antialiased">CONTACT</h1>
             </div> 
          


            <div className="flex">
         <div className="flex mx-20">
         {socialIcons.map((item, index) => (
           <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="pr-8  sm:pr-32 text-2xl sm:text-4xl text-blue-600 ">{item.icon}</a>
         ))}

        <div className="flex sm:items-center">
          
          <a href="mailto:anmud@list.ru">
          <FaEnvelope className="text-blue-600 text-2xl sm:text-4xl"/>
          </a>
          </div>
        </div>
       

       </div>
           </div>
        </div>
     </div>

    


        
    )
}

export default Contact;