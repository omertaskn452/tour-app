import React, { useState } from "react";
import style from "./showroom.css"
import { Link } from "react-router-dom";
import {CircleArrowLeft, CircleArrowRight, ChevronLeft, ChevronRight} from "lucide-react";

export default function Showroom({currentSlide, previousSlide, nextSlide, index, tours, handlePreviousSlide, handleNextSlide, calcSlideIndex}) {

  const calcIndex = () => {  
    if(currentSlide === index){
      return "active"
    }
    else if(previousSlide === index){
      return "previous"
    }
    else if(nextSlide === index){
      return "next"
    }
    return ""
  }

  return(
    <div className={`showroom ${calcIndex()}`}>
      <div className="showroom-img-wrapper">
        <img className="showroom-img" src={tours[index].img} alt="" />
      </div>
      <div className="showroom-info">
        <div className="showroom-info-transition">
          <div onClick={() => handlePreviousSlide()} className="showroom-info-transition-btn">
            <ChevronLeft className="transition-btn"/>
            <span className="showroom-trns-btn-text hideOnTablet">Previous Deals</span>
          </div>
          <div onClick={() => handleNextSlide()} className="showroom-info-transition-btn">
            <span className="showroom-trns-btn-text align-left hideOnTablet">Next Deals</span>
            <ChevronRight  className="transition-btn"/>
          </div>
        </div>
        <div className="showroom-info-text">
          <h1 className="showroom-info-header">{tours[index].name}</h1>
          <p className="hideOnTablet">{tours[index].expo}</p>
        </div>
        <Link to={`/${tours[index].urlName}`}><button className="showroom-info-more-btn">More info</button></Link>
      </div>
    </div>
  )
}