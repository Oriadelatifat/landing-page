import React from "react";
import Quote from "../assets/Quote.svg"
import Icon from "./Icons"

function Testimonial(){
    return(
        <div className="testimonial">
            <div className="testimonial-heading">
                <h1>Testimonials</h1>
                 <p>Over 15,000 happy customers.</p>
            </div>   
            <div className="testimonial-block">
                <img src={Quote} alt="" />
                <div className= "text-image"></div>
                <div className="testimonial-content">
                    <p>
                    “My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing experience, the
                    newsletter.Thank you.”
                    </p>
                    <p><span>Leona Paul</span> <br />CEO of Floatcom</p>
                    <div>
                        <Icon icon="up-arrow-side"/>
                        <Icon icon="down-arrow-side"/> 
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Testimonial