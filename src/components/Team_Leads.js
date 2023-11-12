import React from 'react'
import photo from '../Team images/Member1.jpg'
import '../css of components/Ourteam.css'
import '../css of components/headings_page2(2).css'
import '../css of components/Image_Rotate.css'

export default function Team_Leads(props) {
  return (
    <div>
      <div className="team-boxed teamleads">
        <div className="container">
          <div className="intro">
            <h1 className="text-center tlead h1_of_page22">TEAM LEADS</h1>
            <div className="Page2-underline2"></div>

          </div>

          <div className="row people ">
            <div className="col-md-6 col-lg-6 item tcard">
              <div className="box container">
                <div className="image-container ">
                  <div className="outer">
                    <div className="inner">
                      <img className="rounded-circle" src={props.Team_Lead_Photo_Of_Team_lead_1} />
                    </div>
                  </div>
                  <svg>
                    <circle cx="135" cy="135" r="110" strokeLinecap="round" />
                  </svg>
                </div>


                <h3 className="name text-white">{props.Team_Lead_Name_Of_Team_lead_1}</h3>
                <div className="boxpadd">
                  <p className="title text-white teaml-desgn">W E B</p>
                </div>





              </div>
            </div>
            <div className="col-md-6 col-lg-6 item tcard">
              <div className="box container">
                <div className="image-container ">
                  <div className="outer">
                    <div className="inner">
                      <img className="rounded-circle" src={props.Team_Lead_Photo_Of_Team_lead_2} />
                    </div>
                  </div>
                  <svg>
                    <circle id="Rotate90 " cx="135" cy="135" r="110" strokeLinecap="round" />
                  </svg>
                </div>


                <h3 className="name text-white">{props.Team_Lead_Name_Of_Team_lead_2}</h3>
                <div className="boxpadd">
                  <p className="title text-white teaml-desgn">C P</p>
                </div>



              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}


