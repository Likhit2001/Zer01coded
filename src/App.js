
import './App.css';
import Navbar from './components/Navbar';


import Footer from './components/Footer';



import {
  BrowserRouter as Router,
  Routes ,
  Route,

} from "react-router-dom";



import React from 'react';
import Home from './components/Home';
import Our_Team from './components/Our_Team';
import Resources from './components/Resources';
import Events_Activities from './components/Events_Activities';
import ScrollToTop from './components/ScrollToTop.js'

 
function App() {


  return (
    <div>
      
      <Router>
      <ScrollToTop/>
      <Navbar/>
          <Routes>
            <Route exact path='/'  element= {<Home  key= "evrythings"/>}/>
            <Route exact  path='/Our_Team'  element= {<Our_Team/>}/>
            <Route exact path ='/Resources' element={<Resources/>}/>
            <Route exact path ='/Events' element={<Events_Activities/>}/>

          </Routes>    
        <Footer/> 
      </Router>
    
    </div>
    
  );
}

export default App;
