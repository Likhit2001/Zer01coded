import React from 'react'
import photo from '../Team images/Member1.jpg'
import '../css of components/Ourteam.css'
import "../css of components/About_the_club_wave.css"
import '../css of components/headings_page2.css'
import '../css of components/Image_Rotate2.css'
import president from '../Team images/president.jpg'


export default function Club_Official(props) {
    return (
        <div>
            <div className="team-boxed cluboff">

                <div className="about-the-club-top-waves">
                    <section>
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                        <div className="wave wave4"></div>
                    </section>
                </div>

                <div className="container">
                    <div className="intro">
                        <h1 className="text-center cloff h1_of_page2">CLUB OFFICIALS</h1>
                        <div className="Page2-underline"></div>

                    </div>
                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item tcard">
                            <div className="box container">
                                <div className="image-container" style={{ width: '316px', background: '#906de9' }}>
                                    <div className="outer">
                                        <div className="inner">
                                            <img className="rounded-circle" src={props.Club_Official_Photo_Of_President} />
                                        </div>
                                    </div>
                                    <svg>
                                        <circle cx="135" cy="135" r="110" strokeLinecap="round" style={{ stroke: '#171D20' }} />
                                    </svg>
                                </div>
                                <h3 className="name text-dark">{props.Club_Official_Name_Of_President}</h3>
                                <div className="boxpadd">
                                    <p className="title text-white clubdesgn" >P R E S I D E N T</p>
                                </div>



                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item tcard">
                            <div className="box container">
                                <div className="image-container" style={{ width: '316px', background: '#906de9' }}>
                                    <div className="outer">
                                        <div className="inner">
                                            <img className="rounded-circle" src={props.Club_Official_Photo_Of_Secretary} />
                                        </div>
                                    </div>
                                    <svg>
                                        <circle cx="135" cy="135" r="110" strokeLinecap="round" style={{ stroke: '#171D20', transform: [{ rotate: '90deg' }] }} />
                                    </svg>
                                </div>
                                <h3 className="name text-dark">{props.Club_Official_Name_Of_Secretary}</h3>
                                <div className="boxpadd-vp">
                                    <p className="title text-white clubdesgn"  >S E C R E T A R Y</p>
                                </div>



                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item tcard">
                            <div className="box container">
                                <div className="image-container" style={{ width: '316px', background: '#906de9' }}>
                                    <div className="outer">
                                        <div className="inner">
                                            <img className="rounded-circle" src={props.Club_Official_Photo_Of_Admin} />
                                        </div>
                                    </div>
                                    <svg>
                                        <circle cx="135" cy="135" r="110" strokeLinecap="round" style={{ stroke: '#171D20', transform: [{ rotate: '180deg' }] }} />
                                    </svg>
                                </div>
                                <h3 className="name text-dark">{props.Club_Official_Name_Of_Admin}</h3>
                                <div className="boxpadd">
                                    <p className="title text-white clubdesgn">A D M I N</p>
                                </div>



                            </div>
                        </div>

                        
                                <div className="row people ">
                                    <div className="col-md-6 col-lg-6 item tcard over_two1">
                                        <div className="box container">
                                            <div className="image-container "  style={{ background: '#906de9' }}>
                                                <div className="outer">
                                                    <div className="inner">
                                                        <img className="rounded-circle" src={props.Club_Official_Photo_Of_Socialmedia_Manager} />
                                                    </div>
                                                </div>
                                                <svg>
                                                    <circle cx="135" cy="135" r="110" strokeLinecap="round"  style={{ stroke: '#171D20' }} />
                                                </svg>
                                            </div>


                                            <h3 className="name text-dark">{props.Club_Official_Name_Of_Socialmedia_Manager}</h3>
                                        <div className="boxpadd">
                                            <p className="title text-white clubdesgn "  >S O C I A L S</p>
                                        </div>





                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 item tcard over_two2">
                                        <div className="box container">
                                            <div className="image-container  " style={{ background: '#906de9' }}>
                                                <div className="outer">
                                                    <div className="inner">
                                                        <img className="rounded-circle" src={props.Club_Official_Photo_Of_Treasurer} />
                                                    </div>                             
                                                </div>
                                                <svg>
                                                    <circle id="Rotate90 " cx="135" cy="135" r="110" strokeLinecap="round" style={{ stroke: '#171D20' }} />
                                                </svg>
                                            </div>


                                            <h3 className="name text-dark">{props.Club_Official_Name_Of_Treasurer}</h3>
                                        <div className="boxpadd">
                                            <p className="title text-white clubdesgn">T R E A S U R E R</p>
                                        </div>


                                        </div>
                                    </div>
                                </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
