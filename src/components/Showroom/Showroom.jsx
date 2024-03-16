import React, { useState } from "react";
import style from "./showroom.css"

export default function Showroom({selectedSlide, index, name, expo, img, previousSlide, nextSlide}) {


  return(
    <div className={selectedSlide === index ? "showroom" : "showroom-hidden"}>
      <div className="showroom-img-wrapper">
        <img className="showroom-img" src={img} alt="" />
      </div>
      <div className="showroom-info">
        <div className="showroom-info-transition">
          <button onClick={() => previousSlide()} className="showroom-info-transition-btn">Previous Category</button>
          <button onClick={() => nextSlide()}className="showroom-info-transition-btn">Next Category</button>
        </div>
        <div className="showroom-info-text">
          <h1>{name}</h1>
          <p>{expo}</p>
        </div>
        <button className="showroom-info-more-btn">More info</button>
      </div>
    </div>
  )
}