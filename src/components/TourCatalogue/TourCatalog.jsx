import React from "react";
import style from "./tourCatalog.css"
import TourCard from "../TourCard/TourCard";
import tourData from "../../tourData";

export default function TourCatalog() {
  
  let tours = tourData.tours.map((item, index) => {
    return <TourCard
      id={item.id}
      urlOrder={index}
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
    </div>
  )
}