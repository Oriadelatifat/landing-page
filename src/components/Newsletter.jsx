import React from "react";
import "./newsletter.css"

function Newsletter(){
    return(
        <div className="newsletter">
            <div className="first-container"></div>
            <div className="second-container">
                <p className="news">Join Our <br /> <strong>Newsletter</strong></p>
                <p className="letter">Receive exclusive deals, discounts and many offers.</p>
                <input className="email-input" type="input"   placeholder="Enter your email" />
                <button className="btn"><p className= "btn-text"> Subscribe</p></button>
            </div>
        </div>
    )
}

export default Newsletter