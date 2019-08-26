import React from 'react'
import {Link} from 'gatsby'
import socialIcons from '../constants/social-icons'


const Footer = () => {

  
  return (
    <>
      <div className="w-full px-8 py-10 text-black bg-white flex flex-wrap sm:flex-row justify-between items-start sm:items-center border-t border-black">
        <div className="container mx-auto w-auto sm:px-2 pt-6 pb-8 items-start flex-grow">
        
        
         <div className="flex sm:px-48 items-center justify-between">
         
         <div className="flex-initial text-lg text-black  font-bold mr-24 antialiased">
         <div className="">
          Copiright &copy; {new Date().getFullYear()} by Ana Mo.
        </div>
           </div>

         <div className="flex">
         <div className="flex ">
         {socialIcons.map((item, index) => (
           <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="pr-4 text-2xl">{item.icon}</a>
         ))}
        </div>
       </div>
         </div>
      

      
         </div>
        </div>
        

      
    </>

  )
}

export default Footer;