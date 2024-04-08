import React from "react";
import style from "./tourCatalog.css"
import TourCard from "../TourCard/TourCard";

export default function TourCatalog({categoryInfo}) {

  const tours = categoryInfo.tours.map((item, index) => {
    {return <TourCard
      key={item.id}
      id={item.id}
      urlOrder={index}
      name={item.name}
      expo={item.expo}
      img={item.img}
      price={item.price}
      categoryUrl={categoryInfo.urlName}
    />}
  })

  return(
    <div className="container">
      <h1 className="tour-catalog-header">{categoryInfo.name}</h1>
      <div className="tour-grid">
        {tours}
      </div>
    </div>
  )
}