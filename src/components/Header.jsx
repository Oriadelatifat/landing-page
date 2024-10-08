import React from "react";
import InwoodLogo from "/Logo 1.svg"
import "./header.css"
import Icon from "./Icons";
import "../fonts.css"
import dropdown from "../assets/Icon color.svg"


function Header () {
    return(
        <>
        <header>
            <nav className="header-nav">
                <div className="logo"><a href="http://www.w3.org/2000/svg" ><img src={InwoodLogo} className="logo" alt="Vite logo" /></a></div>
                <ul className="menu">
                   <li><span><strong>Home</strong></span></li>
                   <li>Products</li>
                   <li>Categories</li>
                   <li>About</li>
                   <li>Contact Us </li>
                </ul>
                <div className="dropdown"><img src={dropdown} alt="" /></div>
                <div className="header-icons">
                    <Icon icon="icon"/>
                    <Icon icon="icon2"/>
                    <Icon icon="icon1"/>
                </div>
            </nav>    
        </header>
        </>
    )
}

export default Header