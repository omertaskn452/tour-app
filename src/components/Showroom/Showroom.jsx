import React, { useState } from "react";
import style from "./showroom.css"
import {CircleArrowLeft, CircleArrowRight} from "lucide-react";

export default function Showroom({selectedSlide, index, tours, previousSlide, nextSlide}) {


  return(
    <div className="showroom" style={{translate: `${-100 * selectedSlide}%`}}>
      <div className="showroom-img-wrapper">
        <img className="showroom-img" src={tours[index].img} alt="" />
      </div>
      <div className="showroom-info">
        <div className="showroom-info-transition">
          <div onClick={() => previousSlide()} className="showroom-info-transition-btn">
            <CircleArrowLeft className="transition-btn" size={32}/>
            <span className="showroom-trns-btn-text hideOnMobile">Previous Deals</span>
          </div>
          <div onClick={() => nextSlide()} className="showroom-info-transition-btn">
            <span className="showroom-trns-btn-text align-left hideOnMobile">Next Deals</span>
            <CircleArrowRight  className="transition-btn" size={32}/>
          </div>
        </div>
        <div className="showroom-info-text">
          <h1 className="showroom-info-header">{tours[index].name}</h1>
          <p className="hideOnMobile">{tours[index].expo}</p>
        </div>
        <button className="showroom-info-more-btn">More info</button>
      </div>
    </div>
  )
}