import React from 'react'
import '../css of components/About_the_club_wave.css'

import webdevelopment from '../domain images/webdevelopment.png';
import appdevelopment from '../domain images/appdevelopment.png';
import Java from '../domain images/Java.png';
import python from '../domain images/python.png';
import competitiveprogramming from '../domain images/competitiveprogramming.png';

import '../css of components/domain.css';
import '../css of components/domain_heading.css'



export default function Domains(props) {
  return (

    // the below is used to give waves to the background
    <div>
         <div className="about-the-club-top-waves">
                <section>
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                </section>
            </div>


      <div className="domains domains_responsive">
        <h1>Domains</h1>
        <div id="domains-underline"></div>

        <ul className="honeycomb">
          <a href={props.Domain_Link_Of_Web_Development} style={{textDecoration :'none'}}>
            <li className="honeycomb-cell">
              <img className="honeycomb-cell_img" src={webdevelopment}/>
              <div className="honeycomb-cell_title" >Web Development</div>
            </li>
          </a>
          <a href={props.Domain_Link_Of_Competitive_Programming} style={{textDecoration :'none'}}>
            <li className="honeycomb-cell">
              <img className="honeycomb-cell_img" src={competitiveprogramming} />
              <div className="honeycomb-cell_title">Competitive Programming</div>
            </li>
          </a>
          <a href={props.Domain_Link_Of_App_development} style={{textDecoration :'none'}}>
          <li className="honeycomb-cell">
             <img className="honeycomb-cell_img" src={appdevelopment} />
              <div className="honeycomb-cell_title"><span className="hehe">App Development</span></div>
            </li>
          </a>
          <a href={props.Domain_Link_Of_Python_Programming} style={{textDecoration :'none'}}>
          <li className="honeycomb-cell">
            <img className="honeycomb-cell_img" src={python} />
              <div className="honeycomb-cell_title">Python Programming</div>
            </li>
          </a>
          <a href={props.Domain_Link_Of_Java_Programming} style={{textDecoration :'none'}}>
          <li className="honeycomb-cell">
            <img className="honeycomb-cell_img" src={Java} />
              <div className="honeycomb-cell_title">Java  Programming</div>
            </li>
          </a>
          <li className="honeycomb-cell honeycomb_Hidden">
          </li>

         
        </ul>





        <br />
      </div>
    </div>
  )
}
