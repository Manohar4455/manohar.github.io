import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll"


const Navbar = () => {

  const [menu,setMenu] = useState("home")
  return(
    <div className="navbar"> 
     <img src={logo} alt=" " className="image" />
     <ul className="nav-menu">
        <li><AnchorLink className="anchor-link"  href="/hero"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src="" alt="" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="/about"><p onClick={()=>setMenu("about me")}>About me</p></AnchorLink>{menu==="about me"?<img src="" alt="" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="/services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src="" alt="" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href=""><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src="" alt="" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="/contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src="" alt="" />:<></>}</li>

       
     </ul>
     <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}
export default Navbar;
