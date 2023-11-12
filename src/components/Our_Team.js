import React from 'react'
import Club_Official from './Club_Official'
import Faculty_Advisor from './Faculty_Advisor'
import Team_Leads from './Team_Leads'
import photo from '../Team images/Member1.jpg'
import Faculty_Advisor_1 from '../Team images/Faculty_Advisor_1.jpeg'
import Faculty_Advisor_2 from '../Team images/Faculty_Advisor_2.jpeg'
import president from '../Team images/president.jpg'
import Secretary from '../Team images/Secretary.jpg'
import Treasurer from '../Team images/Treasurer.jpeg'
import SocialMediaManager from '../Team images/SocialMediaManager.jpeg'
import Team_lead_1 from '../Team images/Team_Lead_1.jpeg'
import Team_lead_2 from '../Team images/team_lead2.jpeg'
import Admin from '../Team images/admin.jpeg'
export default function Our_team() {
  return (
    <div>
        <Faculty_Advisor 
        Faculty_Advisor_1_name = "Dr. Ansuman Mahapatra"
        Faculty_Advisor_1_About ="Assistant Professor"
        Faculty_Advisor_1_Photo ={Faculty_Advisor_1}
        Faculty_Advisor_2_name = "Dr. Sanjay Bankapur"
        Faculty_Advisor_2_About ="Assistant Professor"
        Faculty_Advisor_2_Photo ={Faculty_Advisor_2}
        />
        <Club_Official
        Club_Official_Name_Of_President="Bhomesh"
        Club_Official_Photo_Of_President={president}

        Club_Official_Name_Of_Secretary="Jubin"
        Club_Official_Photo_Of_Secretary={Secretary}
      
        Club_Official_Name_Of_Treasurer="Ankush"
        Club_Official_Photo_Of_Treasurer={Treasurer}

        Club_Official_Name_Of_Socialmedia_Manager="Akshita"
        Club_Official_Photo_Of_Socialmedia_Manager={SocialMediaManager}

        Club_Official_Name_Of_Admin="Tejus"
        Club_Official_Photo_Of_Admin={Admin}
        />
        <Team_Leads
        Team_Lead_Name_Of_Team_lead_1="Likhit"
        Team_Lead_Photo_Of_Team_lead_1={Team_lead_1}

        Team_Lead_Name_Of_Team_lead_2="Shiv"
        Team_Lead_Photo_Of_Team_lead_2={Team_lead_2}   
        />
    </div>
  )
}
