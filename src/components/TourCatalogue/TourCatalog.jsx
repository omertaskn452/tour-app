import React from "react";
import style from "./tourCatalog.css"
import TourCard from "../TourCard/TourCard";
import tourData from "../../tourData";

export default function TourCatalog() {
  
  let tours = tourData.tours.map((item) => {
    return <TourCard
      id={item.id}
      name={item.name}
      expo={item.expo}
      img={item.img}
      price={item.price}
    />
  })

  return(
    <div className="container">
      <h1 className="tour-catalog-header">Popular Tours</h1>
      <div className="tour-grid">
        {tours}
      </div>
      <h1>Best Choices</h1>
      <div className="tour-grid sliding-grid">
        {tours}
      </div>
    </div>
  )
}