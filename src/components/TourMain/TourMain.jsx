import React, { useState } from "react";
import style from "./tourMain.css"
import tourData from "../../tourData";
import { useParams } from "react-router-dom";

export default function TourMain(){
  
  const {id} = useParams()

  console.log(id)
  console.log(tourData.tours[id].img)

  return(
    <div className="container">
      <div className="tour-section">
        <img src={`/${tourData.tours[id].img}`} alt />
        <p>I'm tour {id}</p>
      </div>
    </div>
  )
}