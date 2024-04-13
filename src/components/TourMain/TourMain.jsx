import React, { useState } from "react";
import style from "./tourMain.css"
import tourData from "../../tourData";
import { useParams } from "react-router-dom";
import Error from "../../pages/Error/Error";
import { CircleMinus, CirclePlus  } from "lucide-react";

export default function TourMain(){
  
  const {categoryInfo ,id} = useParams()
  console.log(id)
  console.log(categoryInfo)

  const tourInfo = tourData.find((item) => item.urlName === categoryInfo).tours[id]
  console.log(tourInfo)
  const tour = () => {
      if(tourInfo) 
        return(
          <div className="tour">
            <div className="tour-img-wrapper">
              <img className="tour-img" src={`/${tourInfo.img}`} alt="" />
            </div>
            <h1 className="tour-header">{tourInfo.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare libero ligula, id elementum elit tristique eget. Etiam et lacinia mi. Cras nec dolor ut nibh tincidunt lacinia ut a lorem. Integer tristique, enim eget faucibus pharetra, dui erat condimentum tellus, ut rutrum metus odio sed lacus. Cras lacinia nec lorem sit amet cursus. Vestibulum ac cursus elit. In aliquet turpis pulvinar nulla fermentum ornare. Nunc nisl felis, ultrices eget ultrices et, tristique vel sapien. Etiam in condimentum magna. Nullam quis massa at enim rhoncus commodo nec non neque. Sed sem orci, imperdiet eu fringilla vel, pharetra vel lorem.</p>
            <div className="tour-specs">
              <div className="tour-includes tour-specs-item">
                <h3>Tour Includes</h3>
                <ul className="tour-specs-list">{tourInfo.includes.map((item) => {
                  return <li className="tour-specs-list-item include">
                      <CirclePlus className="tour-specs-icon plus-icon"/>{item}
                  </li>
                })}</ul>
              </div>
              <div className="tour-excludes tour-specs-item">
                <h3>Tour Excludes</h3>
                <ul className="tour-specs-list">{tourInfo.excludes.map((item) => {
                  return <li className="tour-specs-list-item exclude">
                      <CircleMinus className="tour-specs-icon minus-icon"/>{item}
                  </li>
                })}</ul>
              </div>
            </div>
          </div>
        )
      else{
        return(<Error/>)
      }
  }
  console.log(tour)
 

  return(
    <div className="container">
      {tour()}
    </div>
  )
}