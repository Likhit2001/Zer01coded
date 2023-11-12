import React from 'react'
import '../css of components/Under_Constrution.css'
import construction from '../under_construction.svg'
export default function Under_construction() {
  return (
    <div>

<div className="uc__wrapper">
        <div className="uc__details">
            <h1 className="title">Coming Soon!</h1>
            <h3 className="intro">
                We are working hard to give you a better experience.
            </h3>
            <p className="uc__description">
                We are working hard on it & the site may go live very soon. We promise, it will be worth the wait!
            </p>
        
        </div>
        <div className="uc__art">
            <img src={construction} alt=""/>
        </div>
    </div>
    </div>
  )
}
