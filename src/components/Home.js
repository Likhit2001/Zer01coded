
import React from "react";

// // Import Domains style sheet
// import '../domain.css';


// // Import of auto type comand promt 
// import '../styleOf_Autotype.css';

import Activites from "./Activites";
import Auto_type from "./Auto_type";
import About_the_club from "./About_the_club";
import Domains from "./Domains";
import Goals from "./Goals";



export default function Home(props) {
  return (


    <div>

      The comand promt for Auto-type
      <Auto_type/>
      {/* about the club component */}
      <About_the_club 
      About_The_Club="Zer01coded is the first technical club of NITPY that solely focuses on providing a strong platform for the students to work and display their strong coding chops for various events and future placements. 
      It was the begining of October of 2021 when the months leading up to the fruition of the Zero1coded club finally arrived. Accompanying our zealous faculty, the student-led club of NITPY became the perfect training ground for the like minded blue light goggle wearers to learn, grow and adapt to the forever changing technological landscape of our society. We as a club strongly believes anyone can code, all they need is the right platform which we are happy to say this club is the right starting point.
      "/>
      {/* activites of the club  component  */}
      <Activites key="new"/>
      {/* Domain in the club component  */}
      <Domains
      // Domain_Link_Of_Web_development="https://drive.google.com/drive/folders/1WBTFzHrwUDL--e0qF7XShfn9nZnCIJc-?usp=sharing"
      // Domain_Link_Of_Competitive_Programming="https://drive.google.com/drive/folders/1n9u7sY6fLm7r8IR187ii8J0Z8U_sO6A_?usp=sharing"
      // Domain_Link_Of_App_development="https://drive.google.com/drive/folders/1xkzLrrtDUbgL8fUmP2rbNSu5nwNQlNS9?usp=sharing"
      // Domain_Link_Of_Python_Programming="https://drive.google.com/drive/folders/1s_gnB35_e7v5i2MhOZyxDz8Tw9sZzCmh?usp=sharing"
      // Domain_Link_Of_Java_Programming="https://drive.google.com/drive/folders/1lQmUhIHLk7yzMeNc42lKA3BH0FUUtpZ_?usp=sharing"
      />
      {/* Goals Of the CLub Component */}
      <Goals 
      Goals_Of_The_Club="The goals of the zero1coded club tap into the power of students' minds in the geeky world of programming.
      in the ever-growing paradigm shift of technologies growing at a fast pace, the club provides a powerful platform for students to find their field of interest.
      it also provides the students the opportunity to nurture their young minds by participating, experiencing, and contributing to the sphere of professional programmers
      steadily they pace towards unknown opportunities which will bring out innovation and surf through the unexplored domains without a hassle."/>


    </div>
  )
}
