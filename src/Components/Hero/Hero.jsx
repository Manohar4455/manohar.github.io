import React from "react";
import "./Hero.css"
import image from "../../assets/hero.jpg"

import AnchorLink from "react-anchor-link-smooth-scroll"

const Hero = () => {
  return(
    <div id="hero" className="hero">
        <img src={image} alt=" "/>
        <h1><span>Hi, I'm Manohar</span></h1>
        <p> I'm a FrontEnd developer with 1 year 5 months of experience using React and JS. Reach out if you'd like to learn more.. </p>
      <div className="hero-action">
       <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}
export default Hero;