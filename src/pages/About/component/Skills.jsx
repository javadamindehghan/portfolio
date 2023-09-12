import { Grid } from "@mui/material";
import Percentage from "./Percentage";



export default function Skills({active}) {

    


    
    return (
        <div className="aboutskills" >
            <h1>SkILS</h1>
            <Grid container spacing={2}>
                <Grid xs ={12} md={6}> <Percentage type={active} skill="html" Percentage='80'/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="css" Percentage="80"/></Grid>
                <Grid xs ={12} md={6}> <Percentage type={active} skill="React" Percentage='80'/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="javascript" Percentage="70"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="es6" Percentage="70"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="bootstrap" Percentage="80"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="mui" Percentage="80"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="git" Percentage="80"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="redux, react-redux" Percentage="70"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="php,mysql" Percentage="70"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="wordpress" Percentage="80"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="restful API" Percentage="80"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="react query" Percentage="80"/></Grid>
                <Grid xs= {12} md={6}><Percentage type={active}  skill="next js" Percentage="60"/></Grid>
                
               
                
            </Grid>

       </div>
    )
}
