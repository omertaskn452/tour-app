import React from "react";
import style from "./tourCard.css"
import { Link } from "react-router-dom";

export default function TourCard({id, name, img, expo, price, urlOrder, categoryUrl}) {
  return(
    <div className="tour-card">
       <Link to={`/${categoryUrl}/${urlOrder}`}> 
        <div className="tour-card-img-wrapper tour-card-flex-item">
          <img className="tour-card-img" src={img} alt="" />
        </div>
       </Link>
      <div className="tour-card-text tour-card-flex-item">
        <h3>{name}</h3>
        <p>{expo}</p>
      </div>
      <div className="tour-card-infos tour-card-flex-item">
        <button className="tour-card-btn">More info</button>
        <span className="tour-card-price">{price}</span>
      </div>
    </div>
  )
}