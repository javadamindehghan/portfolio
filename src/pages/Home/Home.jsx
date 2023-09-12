import {Link} from 'react-router-dom'
import Typed from "typed.js";
import {useEffect ,useRef, useState} from 'react'
import Nav from '../../components/Nav'
import { TypeAnimation } from 'react-type-animation';
import User from '../../img/user.png'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { handelcurrent } from '../../action/current'
import { Grid } from '@mui/material'




export default function Home({curser , henel}) {
    const [force,setForce]=useState(0)
const dispatch = useDispatch()


   
    return (
        <>
            
          
                
                <div  className='content-home'>
                    
               
                   
                     <h2 > <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '👋Hi , I`M JAVAD ',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        '🙌WELCOME TO MY WEBSITE',
        4000,
        '👀 I’m interested in Javascript and React',
        4000,
        
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '2em', display: 'inline-block',direction: 'ltr' }}
      repeat={Infinity}
    /> </h2>
                     <a href=""></a>
                     <Button onClick={()=>dispatch(handelcurrent(1))} variant="contained" color="info" >about me</Button>
                    
               </div>

           

        </>
    )
}
