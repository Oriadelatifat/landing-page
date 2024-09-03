import React from "react";
import Quote from "../assets/Quote.svg"
import Icon from "./Icons"
import "./testimonial.css"
import line from "../assets/Line.svg"
import uparrow from "../assets/Up arrow.svg"
import downarrow from "../assets/Down arrow.svg"

function Testimonial(){
    return(
        <div className="testimonial">
            <div className="testimonial-heading">
                <h1>Testimonials</h1>
                 <p>Over 15,000 happy customers.</p>
            </div>   
            <div className="testimonial-block">
                
                <div className= "text-image"></div>
                <img className="quote" src={Quote} alt="quote-image" />
                <div className="testimonial-content">
                    <p>
                    “My experience with Mark is a complete <br /> sucess, from customer service, wide range of <br /> products, clean store, purchasing experience, the <br />
                    newsletter.Thank you.”
                    </p>
                    <p className="float"><span><strong>Leona Paul</strong></span> <br />CEO of Floatcom</p>
                </div>
                <div className="arrow-image">
                    <img src={uparrow}alt="" /> 
                    <img src={downarrow} alt="" />
                </div>
                
            </div> 
            <div className="foot">
                <img src={line} width={800} alt="" />
                <p>See all review</p>
                <Icon icon="Arrow2"/> 
                
            </div>
        </div>
    )
}

export default Testimonial