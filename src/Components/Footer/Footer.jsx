import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="" alt="" />
                    <p>I'm a FrontEnd developer with 1 year 5 months of experience in company Reliant Vision INC.</p> 
                </div>
                <div className="footer0top-right">
                    <div className="footer-email-input">
                        <img src="" alt=""/>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-bottom">
                <p className="footer-bottom-left">@2023 Manohar. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>

        </div>
    )
}
export default Footer;