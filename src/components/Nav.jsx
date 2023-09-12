import { Grid } from "@mui/material";
import {useState, useRef ,useEffect } from "react"
import Linav from "./Linav";
import Linknav from "./Linknav";
import Myname from "./Myname";
export default function Nav( {cur}) {
    //['HOME','ABOUT','PROTOFILE','CONTACT']
    const [nav, setnav] = useState([{name:'HOME',link:'home',id:0},
    {name:'ABOUT',link:'about',id:1},
    {name:'PROTOFILE',link:'portofilo',id:2},
])
   
   

  
   
   

    const LInknav =nav.map((nav, index)=> <Linknav
     key={index} 
     
     nav={nav}
    
    
      /> )
   
    return (
        <div   className="header">
            <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
    
   
<Grid  xs={12}  md={2}>
            <Myname/>
            
        </Grid>

            <Grid  xs={12}  md={10}>
             <Linav LInknav={LInknav} />
        

            </Grid>

     
       
        </Grid>
      
          
        </div>
        
    )
}
