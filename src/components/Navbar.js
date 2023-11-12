import React from 'react'
import '../style.css'
import logo_Of_Club from '../club_logo/club_logo.jpeg'

import '../css of components/Navbar_resonpsive.css'
import '../components/Auto_type.js'
import { useState } from "react";





export default function Navbar() {

  const [space, setspace] = useState(0);

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark static-top fixed-top" style={{background:"#181d21"}}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo_Of_Club} alt="..." height="36"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setspace()}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <a className="nav-link " aria-current="page" href="/">Home</a>
                  <div className="nav-underline"></div>
                </li>
              
                <li className="nav-item">
                  <a className="nav-link" href="/Resources">Resources</a>
                  <div className="nav-underline"></div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Events">Events</a>
                  <div className="nav-underline"></div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Our_Team">Our Team</a>
                  <div className="nav-underline"></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>  
    
  );




}
