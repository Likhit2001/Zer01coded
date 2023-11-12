import React from 'react'

import '../style.css'

import "../css of components/Footer_wave.css"
export default function Footer() {
  return (
    <div>

      <div className="footer-top-waves">
        <section>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>NAVIGATION</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Our_Team">Our Team</a></li>
                <li><a href="/Resources">Resources</a></li>
                <li><a href="/Events">Events</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>JOIN US</h4>
              <ul>

                <li><a href="https://forms.gle/HP6cbg1zykRdQn9u9">Feedback Form</a></li>


              


                
              </ul>
            </div>
            <div className="footer-col">
              <h4>EVENTS</h4>
              <ul>
                {/* link of the different events in the club */}
                <li><a href="/" >Code Hunt</a> </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>FOLLOW US</h4>
              <div className="social-links">
                {/* <a href="#"><i className="fab fa-facebook-f"></i></a>  */}
                <a href="https://discord.gg/FwNefYqM6H"><i className="fab fa-discord"></i></a>
                <a href="https://instagram.com/zero1coded?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram"></i></a>
              
              </div>
            </div>
          </div>
        </div>
        {/* <hr> */}
        {/* <!--FOOTER END-->
          <!-- Copyright start--> */}
        <div className="text-center p-3" style={{ color: 'white' }}>
          {/* <!---working on making copyright 
               similar to figma UI.... */}

          <div className="footer-col">
            <ul className="row justify-content-around">

            </ul>
          </div>
          <a href='/' style={{ color: 'white' , textDecoration: 'None' }}>© 2022  &nbsp; ZerO1coded &nbsp;&nbsp;&nbsp;
            Made with &#9825; by ZerO1coded</a>
        </div>
        {/* <!-- Copyright end--> */}
      </footer>
    </div>
  )
}
