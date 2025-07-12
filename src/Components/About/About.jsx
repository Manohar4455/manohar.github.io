import React from "react";
import "./About.css";
import image from "../../assets/profile.jpg"
import image1 from "../../assets/logo1.jpg"


const About = () => {
  return(
   <div id="about" className="about">
    <div className="about-title">
        <h1>About me</h1>
        <img src={image1} alt=" " />
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={image} alt=""/> 
        </div>
        <div className="about-right">
            <div className="about-para">
                <p> Enthusiastic and detail-oriented Junior Frontend Web Developer with 1 year and 5 months of hands-on experience building responsive and dynamic web applications using JavaScript,React,HTML and CSS.Strong understanding of UI/UX principles, component-based architecture and modren development workflows. </p>
                <p>Demonstrated ability to translate business needs into technical solutions through effective collaboration,communication and attention to detail</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML </p><hr style={{width:"50%"}}></hr></div>
                 <div className="about-skill"><p> CSS & Tailwind CSS</p><hr style={{width:"50%"}}></hr></div>
                 <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}></hr></div>
                  <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}></hr></div>
                  
            </div>
        </div>
    </div>
    
    <div className="about-achievements">
        
         <div className="about-achievement">
            
            <h4> Won a Silver medal in All India Senior Nationals Kho-Kho Championship </h4>
            <p>(Delhi, 2021)</p>
            
            </div>
          
        <div className="about-achievement">
            <h4>Participated in SouthZone Inter-Universities VolleyBall Championship </h4>
            <p>(Andhra Pradesh 2023)</p>
            
            </div>
            
           
            
             <div className="about-achievement">
            <h4>Participated in SouthZone Inter-Universities kho-kho Championship </h4>
            <p>(Banglore 2022)</p>
             
            </div>
             
    </div>
   </div>

  )
}
export default About;