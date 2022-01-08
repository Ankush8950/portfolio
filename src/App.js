import React from 'react'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';

const  App = () => {
  return (
    <>
     <Navbar/>
     <Home />
     <Portfolio />
     <Resume />
    </>
  )
}

export default App;
