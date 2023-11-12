import React, { useEffect , useState } from 'react'

import '../css of components/Activites_responsivs.css'
import Activity from '../components/Activity.js'

import { db } from '../firebase.js';
import Code_Hunt from '../activites images/Code_Hunt.jpeg'
import Kahoot_Quiz from '../activites images/Kahoot_Quiz.jpeg'
import Decode_July from "../activites images/Decode_July.jpeg"
import Bloggenix from "../activites images/Bloggenix.jpg"
import Juniors_Interaction from "../activites images/Juniors_Interaction.jpeg"

const javascipts = async () => {
  let j = 1
  var slides = document.querySelectorAll(".slide")
  var btns = document.querySelectorAll(".btn")
  let currentSlide = 1

  var manualNav = function (manual) {
    slides.forEach((slide) => {
      slide.classList.remove('active');

      btns.forEach((btn) => {
        btn.classList.remove('active');
      })
    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
  }

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      manualNav(i);
      currentSlide = i;
      j = i
    })
  });


  var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');

    var repeater = async () => {
      setTimeout(function () {

        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active')
        })
        slides[j].classList.add('active');
        btns[j].classList.add('active');
        j++;

        if (slides.length == j) {
          j = 0;
        }
        if (j >= slides.length) {
          return;
        }
        repeater();
      }, 6000);
    }
    repeater();
  }

  repeat();

}





export default function Activites() {

  const [Events, setevents] = useState([]);

  useEffect(() => {
    
    const subcribe = db
      .collection("Events")
      .onSnapshot(snapshot => {
        setevents(snapshot.docs.map(doc => ({
          id: doc.id,    
          event: doc.data()

        }
        
        )))
        
      })

      console.log("this is a new era");
     
       

      return () => {
        
        subcribe();
      }
  }, [])
   

  

  return (
    <div>
      <>

        <div className="activities resonsive_activites">
          <h1>Events</h1>
          <div id="activities-underline"></div>
          <div className="activities-slider" >
            <div className="img-slider"  >
            
            {/* {
              Events.map(({ id, event }) => (
                <Activity 
                  key={id}
                  Activity_Link={event.Activity_Link}
                  Activity_Name={event.Activity_Name}
                  Activity_text={event.Activity_text}
                  Activity_Image={event.Activity_Image} />
              ))
            } */}
            
            <Activity 
                 
                  Activity_Link=""
                  Activity_Name="Code Hunt"
                  Activity_text= "Coming Soon.. Stay Tuned..!"
                  Activity_Image={Code_Hunt}/>


            <Activity 
                 
                  Activity_Link=""
                  Activity_Name="Kahoot Quiz"
                  Activity_text="Kahoot is a fun compact competitive event conducted by Zer01coded club. This consists of mostly MCQs and students are graded based on their accuracy as well as the speed of answering. It's the Fastest Finger First here!!"
                  Activity_Image={Kahoot_Quiz} />

            <Activity 
                 
                  Activity_Link=""
                  Activity_Name="Decode July"
                  Activity_text="Decode is a monthly competitive coding event conducted by the Zer01coded club. The main idea behind conducting this competition is to expose students to a variety of questions. This helps the students to flourish their logic and problem-solving skills."
                  Activity_Image={Decode_July}/>

             <Activity 
                 
                  Activity_Link=""
                  Activity_Name="Bloggenix"
                  Activity_text="A fun blog-making event. This event was focused on the budding web developers who got to experiment with making their first website. This was also a platform to showcase their creativity in the design of the website."
                  Activity_Image={Bloggenix} />           

              <Activity 
                
                  Activity_Link=""
                  Activity_Name="Juniors Interaction"
                  Activity_text="The newly recruited coders of the club were given a wide viewpoint of the expertise field of the IT firms by our faculty coordinator Sanjay the students came up with the idea of following up on multiple domains yet to be explored by the institute"
                  Activity_Image={Juniors_Interaction} />


            
            </div>
          </div>
          <div className="navigation">
            <div className="btn active" onClick={javascipts}></div>
            <div className="btn" onClick={javascipts}></div>
            <div className="btn" onClick={javascipts}></div>
            <div className="btn" onClick={javascipts}></div>
            <div className="btn" onClick={javascipts}></div>
          </div>

        </div>
      </>
    </div>





  )
}
