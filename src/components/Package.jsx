import React from "react";
import "./package.css"
import Icon from "./Icons"
import image from "../assets/Container.svg"
import vector2 from "../assets/stars.svg"
function Package(){
    return(
        <div className="package">
            <h1 className="special"> Special Packages</h1>
            <div className="frame">
                <div className="frame1" >
                    <div className="frame1-div"></div>
                    <div><Icon className="vector" icon="vector"/></div>
                    <div className="title">
                        <div className="frame-title">
                            <p>Larkin Wood Full Set</p>
                            <div className="stars">
                                <Icon icon="vector2"/>
                                <Icon icon="vector2"/>
                                <Icon icon="vector2"/>
                                <Icon icon="vector2"/>
                                <Icon icon="vector2"/>
                            </div>
                            
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
                        <div className="block-image1"><img src={image} height={183} width={288} alt="" /></div>
                        <div className="packages-block1"> 
                            <div className="block-div1">
                                <div className="line1">
                                <p className="block-text1">Living room family set</p>
                                <h2>$229.99</h2></div>
                                <div className="stars">
                                    <img src={vector2} height={17.6} width={17.6} alt="" />
                                    <img src={vector2} height={17.6} width={17.6} alt="" />
                                    <img src={vector2} height={17.6} width={17.6} alt="" />
                                    <img src={vector2} height={17.6} width={17.6} alt="" />
                                    <img src={vector2} height={17.6} width={17.6} alt="" />
                                </div>
                                <p className="more-text">See details</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="block2">
                        <div>    
                            <div className="block">
                                <div className="block-image" id="block-image"></div>
                                <div className="packages-block"> 
                                    <div className="block-div">
                                        <div className="line1" id="line2">
                                            <p className="block-text">Living Room Special Set</p>
                                            <h2>$329.99</h2></div>
                                        <div className="second">
                                            <div className="stars"> 
                                                <img src={vector2} height={16.9} width={16.9} alt="" />
                                                <img src={vector2} height={16.9} width={16.9} alt="" />
                                                <img src={vector2} height={16.9} width={16.9} alt="" />
                                                <img src={vector2} height={16.9} width={16.9} alt="" />
                                                <img src={vector2} height={16.9} width={16.9} alt="" />
                                            </div>
                                            <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur <br />  adipiscing elit.</p>
                                            <p className="more-text">See More</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="block">
                                <div className="block-image"></div>
                                <div className="packages-block"> 
                                    <div className="block-div"> 
                                        <div className="line1" id="line2">
                                            <p className="block-text">Living Room Special Set</p>
                                            <h2>$587.99</h2></div>
                                            <div className="second">
                                                <div className="stars"> 
                                                    <img src={vector2} height={16.9} width={16.9} alt="" />
                                                    <img src={vector2} height={16.9} width={16.9} alt="" />
                                                    <img src={vector2} height={16.9} width={16.9} alt="" />
                                                    <img src={vector2} height={16.9} width={16.9} alt="" />
                                                    <img src={vector2} height={16.9} width={16.9} alt="" />
                                                </div>
                                                <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur <br />  adipiscing elit.</p>
                                                <p className="more-text">See More</p>
                                            <div />    
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="slider-option">
                            <Icon icon="slider2"/>
                            <Icon className="up-arrow" icon="up-arrow-side2"/>
                            <Icon icon="down-arrow-side2"/> 
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Package