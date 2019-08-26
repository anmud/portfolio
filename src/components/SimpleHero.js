import React from 'react'
import BackgroundImage from 'gatsby-background-image'


const SimpleHero = ({image, children, className}) => {
         
 return (
            <BackgroundImage 
            fluid={image} 
            className={className}>
            {children}
            </BackgroundImage>
           )
    

     
    }


export default  SimpleHero;

