import React from "react"
import "./expend.css"

function Expend({headline, text, text2, image}){
  return(
    <div className="expend">
        <div>{image}</div>
        <h2>{headline}</h2>
        <p>{text}</p>
        <p className="text2"> {text2}</p>
    </div>
  )
}

export default Expend