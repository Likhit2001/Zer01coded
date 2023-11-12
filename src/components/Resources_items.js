import React from 'react'

export default function Resources_items(props) {
    return (
        
            <div class="card card-hover" style={{margin:'0px 35px' , background : '#906de9' ,  width: '49%'}}>
                <p class="hover-underline-animation"></p>
                <a href="#" style={{ textDecoration : 'none' , margin: "auto"}}>
                <img src={props.Resources_image} style={{ height:"200px" , margin: "auto"}} class="card-img-top" alt="..."/>
                </a>
                <a href={props.Resources_link} style={{ textDecoration : 'none' , margin: "auto"}}>
                    <div class="card-body">
                        <p class="hover-underline-animation">
                        <h3 style={{color : "black" , font : 'Raleway, sans-serif' }} >{props.Resources_name}</h3>
                        </p>
                        <p class="card-text" style={{color : "black" , font : 'Raleway, sans-serif' }}>{props.about_resources}</p>
                    </div>
                </a>       
            </div>
        
    )
}
