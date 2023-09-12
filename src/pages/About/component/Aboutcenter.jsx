import Aboutimg from './Aboutimg'
import Aboutinfo from './Aboutinfo'
import Grid from '@mui/material/Grid';

export default function Aboutcenter() {
    return (
        <Grid container spacing={2}>
           
           
            <Grid  md={4} xs= {12} >
               <Aboutimg/>
            </Grid>
            <Grid  md={8} xs={12}  >
              <Aboutinfo/>
            </Grid>
        </Grid>
    )
}
