import React from "react";
import "./expendiency.css"
import Expend from "./Expend";
import payment from "../assets/payment-method 1.svg"
import group from "../assets/Group.svg"
import group23 from "../assets/Group 23.svg"


function Expendiency(){
    const expendiency =[
        { image: <img className="payment" src={payment} alt="" /> ,headline:"Payment Method", text:"We offer flexible payment ", text2:"options, to make easier."},
        { image: <img className="group" src={group} alt="" />, headline:"Return Policy", text:"You can return a product", text2:" within 30 days."},
        {image: <img className="group23" src={group23} alt="" />,  headline:"Customer Support", text:"Our customer support ", text2: "is 24/7."},
    ]
    return(
        <div className="expendience"> 
            <h2 className="benefits"> Benefits For Your Expendiency</h2>
                <div className="expendiency" >
                    {expendiency.map((expendiencies)=>(
                    <Expend
                    image={expendiencies.image}
                    headline={expendiencies.headline}
                    text={expendiencies.text}
                    text2={expendiencies.text2}/>
                    ))
                
                    }
            
                </div>
        </div>
        
    )
}
export default Expendiency

