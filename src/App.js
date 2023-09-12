import './App.css';
import React , {useState} from "react";
import './css/style.css';
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/portfolio/Portfolio';

import Home from './pages/Home';
import { Provider, useSelector } from 'react-redux';





function App() {
  const current = useSelector(state => state)
 
 

  switch (current) {
    case 0:
      
     return(
       <>
      <Nav  />
      <Home />
      </>
     )
     case 1:
      
     return(
       <>
      <Nav  />
      <About />
      </>
     )

     case 2:
      
     return(
       <>
      <Nav  />
      <Portfolio />
      </>
     )
  
    default:
      return(
        <>
       <Nav  />
       <Home />
       </>
      )
  }

}

export default App;
