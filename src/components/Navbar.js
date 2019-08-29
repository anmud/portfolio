import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import links from '../constants/links'
import {Link} from 'gatsby'
import logo from '../images/anamo-logo.png'


const Navbar = () => {

  const [isExpanded, toggleExpansion] = useState(false);

  
  const toggleNav = () => {
    toggleExpansion(isExpanded => !isExpanded)
  }

  return (


  <div className="w-full px-6 sm:px-16 -mt-2  mx-auto bg-white flex flex-wrap flex-grow items-start sm:items-center fixed z-50 ">  

     <nav className="container pt-10 mx-auto sm:flex sm:flex-wrap flex-grow sm:items-center sm:justify-between bg-white sm:px-2 sm:pt-0 pb-4">
  
   <div className="flex justify-between items-center bg-white flex-shrink-0 text-black sm:mr-4">
         <Link to='/#' className=" sm:inline-block pt-1 sm:pt-3">
         <img src={logo} alt="pipes logo" className=" flex w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:inline-block "/>
         </Link>
      
      
      <div className="block sm:hidden"> 
      <button type="button"  onClick={() => toggleNav()} className="flex text-right text-black sm:hidden appearance-none">
          <FaBars className="w-6 h-5 "/>
      </button>
      </div>
  
   </div>

  

   <div className={`${
    isExpanded ? 'block' : 'hidden'
    }   mt-2 sm:mt-4 w-full bg-blue-700 flex-grow sm:block md:flex sm:w-auto lg:flex sm:items-center sm:w-auto sm:bg-white md:block md:flex md:items-center md:w-auto`} >
     <div className="text-lg sm:flex-grow py-10 ">
       <div className="min-w-full">
       <ul className="px-4  sm:items-center justify-end sm:px-0 sm:flex sm:flex-wrap ">
          {links.map((item, index) => (
          
          <li key={index} className="sm:flex  ">
          <Link to={item.path} onClick={() => toggleNav()}  className="block text-lg font-medium uppercase tracking-wide text-white sm:text-black flex items-center border-b-4 border-transparent hover:border-white sm:hover:border-black no-underline sm:block mr-4 mt-4 sm:mt-0 ">{item.text}</Link>
           </li>
            
          ))}
     </ul>
       </div>
      
     </div>
     
   </div>
 

  

 </nav>


 

   </div>
  
  )
}

export default Navbar;