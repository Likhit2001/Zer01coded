import React from 'react'
import "../css of components/About_the_club.css"
import "../css of components/About_the_club_wave.css"
export default function About_the_club(props) {
    return (
        <div>
            <div className="about-the-club-top-waves">
                <section>
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                </section>
            </div>

            <div className="about_the_club responsive" style={{font : 'Raleway, sans-serif'}}>
                <h1>ABOUT THE CLUB</h1>
                <div id="about_the_club-underline"></div>
                <p id='about_the_club-text'>
                 
                {props.About_The_Club}
                </p>
            </div>
        </div>
    )
}
