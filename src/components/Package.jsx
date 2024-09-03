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
                    <div><Icon icon="vector"/></div>
                    <div className="title">
                        <div className="frame-title">
                            <p>Larkin Wood Full Set</p>
                            <Vector2/>
                            <h2>$729.99</h2>
                        </div>
                        <div className="cart"> 
                            <p>Add to carts </p>  
                            <Icon icon="cart"/>
                        </div>
                    </div> 
                    
                </div>
                <div className="frame2">
                    <div className="first-frame">
                        <h2>Description</h2>
                        <h3>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to <br /> your outdoor space, this cast Aluminum Chaise Lounge combines the <br /> appearance, function and quality all together, offering you with the best <br /> experience.</h3>
                    </div>
                    <div className="more">
                        <p className="more-text">See More</p>
                        <Icon icon="downarrow"/>
                    </div>
                    <div className="block">
                        <div className="block-image"><img src={image} height={220} alt="" /></div>
                        <div className="packages-block"> 
                            <div className="block-div1">
                                <p className="block-text">Living room family set</p>
                                <Vector2/>
                                <p className="more-text">See details</p>
                            </div>
                            <h2>$229.99</h2>
                            </div>
                    </div>
                    <div className="block2">
                        <div>    
                            <div className="block">
                                <div className="block-image"><img src={image} height={220} alt="" /></div>
                                <div className="packages-block"> 
                                    <div className="block-div">
                                        <p className="block-text">Living Room Special Set</p>
                                        <Vector2/>
                                        <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur <br />  adipiscing elit.</p>
                                        <p className="more-text">See More</p>
                                    </div>
                                    <h2>$329.99</h2>
                                </div>
                            </div>
                            <div className="block">
                                <div className="block-image"><img src={image} height={220} alt="" /></div>
                                <div className="packages-block"> 
                                    <div className="block-div"> 
                                        <p className="block-text">Living Room Special Set</p>
                                        <Vector2/>
                                        <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                                        <p className="more-text"> See more</p>
                                    </div>
                                    <h2>$587.99</h2>
                                </div>
                            </div>
                        </div>
                        <div className="slider-option">
                            <Icon icon="slider2"/>
                            <Icon icon="up-arrow-side2"/>
                            <Icon icon="down-arrow-side2"/> 
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Package