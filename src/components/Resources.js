import React from 'react'
import Resources_items from './Resources_items'
import '../css of components/Resources.css'
import wd_resouces from '../resources images/wd_resouces.png';
import appdev_resources from '../resources images/appdev_resources.png';
import java_resources from '../resources images/java_resources.png';
import python_resources from '../resources images/python_resources.png';
import cp_resources from '../resources images/cp_resources.png';
export default function Resources() {
  return (
    <div>
       <div class="d-flex justify-content-center margin_flex responsive_card ">
        <Resources_items 
        Resources_image= {wd_resouces} 
        Resources_name="Web Development"
        Resources_link="https://drive.google.com/drive/folders/1WBTFzHrwUDL--e0qF7XShfn9nZnCIJc-?usp=sharing"
        about_resources="Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management." />


        <Resources_items 
        Resources_image= {appdev_resources} 
        Resources_name="App Development"
        Resources_link="https://drive.google.com/drive/folders/1xkzLrrtDUbgL8fUmP2rbNSu5nwNQlNS9?usp=sharing"
        about_resources="Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. "/>

       </div>
       
       <div class="d-flex justify-content-center margin_flex responsive_card">

        <Resources_items  
        Resources_image= {python_resources} 
        Resources_name="Python"
        Resources_link="https://drive.google.com/drive/folders/1s_gnB35_e7v5i2MhOZyxDz8Tw9sZzCmh?usp=sharing"
        about_resources="Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."/>

        <Resources_items  
        Resources_image= {java_resources} 
        Resources_name="Java" 
        Resources_link="https://drive.google.com/drive/folders/1lQmUhIHLk7yzMeNc42lKA3BH0FUUtpZ_?usp=sharing"
        about_resources="
        Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language ."/>

       </div>

       <div class="d-flex justify-content-center margin_flex responsive_card">

        <Resources_items 
        Resources_image= {cp_resources} 
        Resources_name="Competitive Programming"
        Resources_link="https://drive.google.com/drive/folders/1n9u7sY6fLm7r8IR187ii8J0Z8U_sO6A_?usp=sharing"
        about_resources="Competitive Programming is a mental sport which enables you to code a given problem under provided constraints."/>

       </div>
    </div>
  )
}
