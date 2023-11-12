import React  from 'react'
import Typewriter from 'typewriter-effect' ;
import '../css of components/styleOf_Autotype&&Activites.css'
export default function Auto_type() {
  return (
    <>
    
        <div className="autotype">
        <div className="auto-type-div" >
          <div id="auto-type" className='responsive_autotype'>
            <p>zer01coded</p>
            
            <div className="auto-type-buttons">
              <span className="circle" id="circle-green"></span>
              <span className="circle" id="circle-yellow"></span>
              <span className="circle" id="circle-red"></span>
            </div>
            <br />
            <div className="auto-type-text1">
              <div id="lt"><Typewriter
              onInit={(typewriter) =>{
                  typewriter
                    .typeString(" > Hello Welcome to the coding club!")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(" > Let's Code")
                    .start();
                    
                  
              }}/></div>
            </div>

          </div>
        </div>


      </div>
      
      </>
  )
}
