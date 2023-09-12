

import { yellow } from '@mui/material/colors';
import Container from '@mui/material/Container';
import React ,{useEffect, useState } from 'react';
import Nav from '../../components/Nav'
import Aboutcenter from './component/Aboutcenter';
import Abouttop from './component/Abouttop';
import Skills from './component/Skills';


export default function About() {
    const [skil, setskil] = useState('')
   
  
   window.addEventListener('scroll',()=>{
       if (window.pageYOffset>200) {
           setskil('active')
           
       }
      
   })
    
    return (
        <>
        
            

           
            
              
                <Container fixed>
                    <Abouttop/>
                    <Aboutcenter/>
                    <Skills active={skil}/>
                </Container>

            
            
        </>
    )
}
