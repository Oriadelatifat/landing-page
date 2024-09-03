import React from "react"
import "../fonts.css"
import "./category.css"
import Icon from "./Icons"


function Category(){
    return(
        <div className="category">
            <div className="headline"><p>Explore by Category</p></div>
            <div className="main-block">
                <div className="side-menu">
                    <div className="search-bar">
                        <Icon className="search-icon" icon="search2"/>
                        <input className="search-bar-input" type="search"   placeholder="Search" /></div>
                    <div className="menu-box">

                        <div className="menu-text">
                             <p>Bedroom</p>
                             <p>Dinning Room</p>
                             <p>Meeting Room</p>
                             <p>Workspace</p>
                             <p>Living Room</p>
                             <p>Kitchen</p>
                             <p>Living Space</p>
                        </div>
                        <div className="slider-option">
                             <Icon icon="slider"/>
                             <Icon icon="up-arrow-side"/>
                             <Icon icon="down-arrow-side"/> 
                        </div>
                    </div>
                        <div className="all-category">
                            <button>All categories </button>
                            <Icon icon="Arrow2"/>
                        </div>
                        
                       
                </div>
                <div className="grid-container">
                    <div className="grid-item" id="item1">
                        <h1 className="header1">Bedroom</h1>
                        <button>Explore</button>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                </div>

            </div>
        

        </div>
    )
}

export default Category
