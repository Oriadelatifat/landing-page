import React from "react";
import Socials  from "../assets/icon.svg"
import InwoodLogo from "/Logo 1.svg"
import "./footer.css"

function Footer(){
    return(
        <div className="footer">
            <div className="company-details">
                <img src={InwoodLogo} alt="" />
                <div className="socials">
                    <img className="socials" src={Socials} alt="" />
                    <p className="socials-text"> Address<br /> +123 654 987 <br />+123 654 987 <br /> 14568, USA</p>
                </div>
            </div>
            <div className="footer-data">
                <h1>My Account</h1>
                <p>Sign in <br /> Register <br /> Order status</p>
            </div>
            <div className="footer-data">
                <h1>Help</h1>
                <p>Shipping <br />Returns <br />Sizing</p>
            </div>
            <div className="footer-data">
                <h1>Shop</h1>
                <p>All Products <br />Bedroom <br />Dinning Room</p>
            </div>
            <div className="footer-data">
                <h1>Legal Stuff</h1>
                <p>Shipping & Delivery <br />Terms & Conditions <br />Privacy & Policy</p>
            </div>
            <p>Copyright ©2020 INWOOD. All Rights Reserved</p>
        </div>
    )
}

export default Footer