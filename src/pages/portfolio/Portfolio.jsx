import React from 'react'
import Nav from '../../components/Nav'
import Item from './components/Item'
import Container from '@mui/material/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import color from '../../img/portfolio/color.png'
import slider from '../../img/portfolio/slider.jpg'
import card from '../../img/portfolio/card.jpg'
import P4 from '../../img/portfolio/P4.jpg'
import P3 from '../../img/portfolio/P3.jpg'
import login from '../../img/portfolio/login.png'
import P1 from '../../img/portfolio/P1.jpg'
import quiz from '../../img/portfolio/quiz.png'
import P5 from '../../img/portfolio/P5.jpg'
import calculatur from '../../img/portfolio/calculatur.png'
import weather from '../../img/portfolio/weather.jpg'
import bascket from '../../img/portfolio/bascket.jpg'


export default function Portfolio() {
    return (
        <>
           
            <div className='portfolio-top'>
               <h1>portfolio</h1>
            </div>
            
            
        <Container fixed >
        <Grid style={{textAlign:'center'}}  alignItems="center" container spacing={1} >

        <Grid item  xs={12} md={6} lg={4}>
                <Item title='HOTELS' href='https://delightful-smoke-06e40e81e.1.azurestaticapps.net/'  > <img src={P1} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='KENKO' href='https://victorious-bush-090fcec10.1.azurestaticapps.net/'  > <img src={P3} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='HEALING' href='https://gray-sea-05b034a1e.1.azurestaticapps.net/'  > <img src={P4} alt="" /></Item>
               
            </Grid>
            
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='EXPRESS ESTATE' href='https://express-front-dev.azurewebsites.net/'  > <img src={P5} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='bascket' href='https://javadamindehghan.github.io/bascket/'  > <img src={bascket} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='Authentication' href='https://javadamindehghan.github.io/login/'  > <img src={login} alt="" /></Item>
               
            </Grid>
            <Grid item  xs={12} md={6} lg={4}>
                <Item title='calculatur' href='https://javadamindehghan.github.io/calculatur/' > <img src={calculatur} alt="" /></Item>
               
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
                <Item title='quiz app' href='https://javadamindehghan.github.io/quiz/' > <img src={quiz} alt="" /></Item>
               
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
                <Item title='weather' href='https://javadamindehghan.github.io/weather/' > <img src={weather} alt="" /></Item>
               
            </Grid>
            
            
        </Grid>

        </Container>

      
        
           
        </>
    )
}
