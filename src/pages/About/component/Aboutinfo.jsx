import Grid from '@mui/material/Grid';
import Ulleft from './Ulleft'
import Ulright from './Ulright'

export default function Aboutinfo() {
    return (
        <div className="myinfo">
            <h3 style={{marginRight:'30px',marginTop:'20px'}}>Education</h3>
            <p style={{marginRight:'30px'}}>Bachelor Civil Engineer <br />
            Kharazmi University 
            </p>
            <Grid container>
                <Grid  xs={11} md={6}  >
                <Ulright/>
                </Grid>
                <Grid  xs={11} md={6} >
                <Ulleft/>
                </Grid>
          </Grid>
            <p style={{direction:'ltr',textAlign:'justify'}}>from the begening of my studies (year 94), i have been interested in working
                in the field of web programing . during my studies Civil engenieering i have 
                worked with php programing language and WordPress Content Management  and done varios projects and work Experience in javascript library such as ( jquery and reactjs)
                 and frameworks such as(redux and nextjs) have also been aded to this colection . i intend to work more in frontrnd
                 section and work more with react. i have alot of talent and Endurance, commitment and service,
                 motivation,enthusiasm,Responsibility and alot of Responsibility for my geowth and capacailities in this field.</p>
        </div>
    )
}
