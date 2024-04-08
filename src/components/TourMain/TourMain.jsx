import React, { useState } from "react";
import style from "./tourMain.css"
import tourData from "../../tourData";
import { useParams, useLocation } from "react-router-dom";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

export default function TourMain(){
  
  const {categoryInfo ,id} = useParams()
  console.log(id)
  console.log(categoryInfo)

  const tourInfo = tourData.find((item) => item.urlName === categoryInfo).tours[id]
  console.log(tourInfo.img)

  return(
    <div className="container">
      <div className="tour-section">
        <p>{tourInfo.name}</p>
        <img src={`/${tourInfo.img}`} alt="" />
      </div>
    </div>
  )
}