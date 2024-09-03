import React from "react"
import "./products.css"
import image1 from "../assets/chair 1.svg"
import image2 from "../assets/chair 2.svg"
import image3 from "../assets/chair 3.svg"
import image4 from "../assets/chair 4.svg"
import image5 from "../assets/background-image.svg"
import Icon from "./Icons"

function Products (){
    return(
        <div className="products">
            <h1>Popular Products</h1>
            <div className="image-container">
                <div className="background-image"><img src={image1} alt="" /></div>
                <div className="images">
                    <div className="image" id="image1">
                        <img src={image2} alt="" />
                        <div className="detail">
                            <h1 className="details">Arms chair</h1>
                            <p className="details">light single chair</p>
                            <span className="details">$145</span>
                        </div>
                    </div>
                    <div className="image" id="image2"><img src={image3} alt="" />
                    <div className="detail">
                            <h1 className="details">Arms chair</h1>
                            <p className="details">light single chair</p>
                            <span className="details" >$145</span>
                        </div>
                    </div>
                    <div className="image" id="image3"><img src={image4} alt="" />
                        <div className="detail">
                            <h1 className="details">Arms chair</h1>
                            <p className="details">light single chair</p>
                            <span className="details">$145</span>
                        </div>
                    </div>
                    <div className="image" id="image4"><img src={image5} alt="" />
                        <div className="detail">
                            <h1 className="details">Arm chair</h1>
                            <p className="details">light single chair</p>
                            <span className="details">$145</span>
                        </div>
                    </div>
                 </div>
                
           </div>
                <div className="line-adjust">
                    <Icon icon="line"/>
                    <div className="arrow">
                        <Icon icon="up-arrow"/>
                        <Icon icon="down-arrow"/>
                    </div>    
                </div>

                <button className="item"> 
                    <p>Explore all items </p>  
                    <Icon icon="Arrow"/>
                </button>
                

        </div>
    )
}

export default Products