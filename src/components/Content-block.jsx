import React from "react";
import "./content-block.css"
import Icon from "./Icons"

function Contentblock(){
    return(
        <div className="container">
            
                <div className= "div" id="div1">
                    <h2>Our <br />Own Creation</h2>
                    <p>Designed in our studio</p>
                    <div className="down">
                        <p>More</p>
                        <div className="slider-option">
                            <Icon icon="slider3"/>
                        </div>
                        <Icon className="arrow" id="up" icon="up-arrow2"/>
                        <Icon className="arrow" id="down" icon="down-arrow2"/> 
                    </div>
                </div>
                <div className= "div" id="div2"></div>
                <div className= "div" id="div3"></div>
                <div className= "div" id="div3"></div>
                <div className= "div" id="div3"></div>
    
            
        </div>
    )

}

export default Contentblock