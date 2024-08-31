import React from "react";
import "./package.css"
import Icon from "./Icons"
import Vector2 from "./Vector";
import image from "../assets/Container.svg"
function Package(){
    return(
        <div className="package">
            <h1 className="special"> Special Packages</h1>
            <div className="frame">
                <div className="frame1" >
                    <div className="frame1-div"></div>
                    <div className="vector"><Icon icon="vector"/></div>
                    <div className="title">
                        <div className="frame-title">
                            <p>Larkin Wood Full Set</p>
                            <Vector2/>
                            <span className="price">$729.99</span>
                        </div>
                        <div className="cart"> 
                            <p>Add to carts </p>  
                            <Icon icon="cart"/>
                        </div>
                    </div> 
                    
                </div>
                <div className="frame2">
                    <div className="first-frame">
                        <h1>Description</h1>
                        <p>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.</p>
                    </div>
                    <div className="more">
                            <h3>See more </h3>
                            <Icon icon="downarrow"/>
                    </div>
                    <div>
                        <div className="block">
                            <div className="block-image"><img src={image}alt="" /></div>
                            <div className="packages-block"> 
                                <div className="block-div">
                                    <p className="block-text">Living room family set</p>
                                    <Vector2/>
                                    <p className="more-text">See details</p>
                                </div>
                                <span>$229.99</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-image"><img src={image} alt="" /></div>
                            <div className="pakages-block"> 
                                <div className="block-div">
                                    <p className="block-text">Living Room Special Set</p>
                                    <Vector2/>
                                    <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="more-text">See more</p>
                                </div>
                                <span>$329.99</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-image"><img src={image} alt="" /></div>
                            <div className="pakages-block"> 
                                <div className="block-div"> 
                                    <p className="block-text">Living Room Special Set</p>
                                    <Vector2/>
                                    <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="more-text"> See more</p>
                                </div>
                                <span>$587.99</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Package