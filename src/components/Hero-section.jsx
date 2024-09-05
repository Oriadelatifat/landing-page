import React from "react";
import Header from "./Header";
import "./hero-section.css"
import "../fonts.css"

function Hero (){
    return(
        
        <div className="hero">
            <section className="hero-section">
                <div className="header"><Header/></div>
                <div className="hero-content">
                    <h1> Exclusive Deals of <br />Furniture Collection</h1>
                    <h1 className="mobile"> Exclusive Deals <br /> of Furniture <br /> Collection</h1>
                    <p>Explore different categories. Find the best deals</p>
                    <p className="p-mobile">Explore different categories. Find <br /> the best deals</p>
                    <button>Shop Now</button>
                </div>

            </section>
        </div>
    
    )
}

export default Hero