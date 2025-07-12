import React from "react";
import "./Services.css"

const Services = () => {
  return(
   <div id="services" className="services">
    <div className="services-title">
        <h1>My Services</h1>
        <img src="" alt=""/>
    </div>
    <div className="services-container">
        <h2>Website Development</h2>
        <p>
            Custom Static or dynamic websites,Responsive and mobile-friendly design,Landing pages,personal websites,portfolio sites.
        </p>
    </div>
    <div className="services-container">
        <h2>WebApp Interface Development</h2>
        <p>
            Creating user interfaces for web applications using React,Single Page Applications(SPAs).
        </p>
    </div>
    <div className="services-container">
        <h2>UI/UX </h2>
        <p>
            Pixel-perfect implementation of UI/UX designs and Optimized layouts for better experience.
        </p>
    </div>
    <div className="services-container">
        <h2> Performance Optimization</h2>
        <p>
            Code splitting and lazy loading,Image and asset optimization .
        </p>
    </div>
    <div className="services-container">
        <h2> Frontqend Maintenance & Updates</h2>
        <p>
          Small UI Changes adding new features or pages and keeping up with tech stack upgrades.
        </p>
    </div>




   </div>
  )
}
export default Services;