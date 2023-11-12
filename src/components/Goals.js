import React from 'react'
import '../css of components/Goals_headings.css'

export default function Goals(props) {
  return (
    <div>
      <div className="goals">
        <h1>Goals</h1>
        <div id="goals-underline"></div>
        <p  id='goals_p'style={{ color: '#906de9', padding: '0rem 5rem', fontweight: '200'}}>
          {props.Goals_Of_The_Club}
        </p>
        <br />
      </div>
    </div>
  )
}

