import React from 'react'

export default function Activity1(props) {
  return (
    <div>   <a href={props.Activity_Link}>
      <div className="slide active" key={props.id}>
        <img src={props.Activity_Image} alt="" />
        <div className="info">
          <h2>{props.Activity_Name}</h2>
          <div className="activity-underline"></div>
          <p>{props.Activity_text}</p>
        </div>


      </div>
    </a>
    </div>
  )
}
