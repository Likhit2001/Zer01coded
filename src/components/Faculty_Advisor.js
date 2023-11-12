import React from 'react'
import '../css of components/Ourteam.css'
import '../css of components/team_img_Style.css'
import '../css of components/headings_page2(2).css'
import '../css of components/Image_Rotate.css'
export default function Faculty_Advisor(props) {
    return (
        <div>
            <div className="team-boxed faculty">

                <div className="container">
                    <div className="intro">
                        <h1 className="text-center factadv h1_of_page22 teampage_responsive" style={{ paddingtop: '14px' ,  }}>FACULTY ADVISOR</h1>
                        <div className="Page2-underline2"></div>

                    </div>
                    <div className="row people ">
                        <div className="col-md-6 col-lg-6 item tcard">
                            <div className="box container">
                                <div className="image-container ">
                                    <div className="outer">
                                        <div className="inner">
                                        <img className="rounded-circle" src={props.Faculty_Advisor_1_Photo} />
                                        </div>
                                    </div>
                                    <svg>
                                        <circle cx="135" cy="135" r="110" strokeLinecap="round" />
                                    </svg>
                                </div>
                                

                                <h3 className="name text-white">{props.Faculty_Advisor_1_name}</h3>

                                <p className="description" style={{fontsize : '10px'}}>{props.Faculty_Advisor_1_About} <br /> Department of Computer Science & Engineering <br /> National Institute of Technology Puducherry </p>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 item tcard">
                            <div className="box container">
                            <div className="image-container ">
                                    <div className="outer">
                                        <div className="inner">
                                        <img className="rounded-circle" src={props.Faculty_Advisor_2_Photo} />
                                        </div>
                                    </div>
                                    <svg>
                                        <circle  id="Rotate90 "cx="135" cy="135" r="110" strokeLinecap="round"/>
                                    </svg>
                                </div>

                                
                                <h3 className="name text-white">{props.Faculty_Advisor_2_name}</h3>

                                <p className="description">{props.Faculty_Advisor_2_About} <br /> Department of Computer Science & Engineering <br /> National Institute of Technology Puducherry </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
