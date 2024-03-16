import React, { useState } from "react";
import style from "./slider.css"
import Showroom from "../Showroom/Showroom";
import toursData from "../../tourData"

export default function Slider() {

  const [selectedSlide, setSelectedSlide] = useState(0)

  const nextSlide = () => {
    selectedSlide === toursData.length - 1 ? setSelectedSlide(0) : setSelectedSlide(prevState => prevState + 1) 
  }

  const previousSlide = () => {
    selectedSlide === 0 ? setSelectedSlide((toursData.length - 1)) : setSelectedSlide(prevState => prevState - 1)
  }

  let sliderItems = toursData.map((item, index) => {
    return <Showroom
      id={item.id}
      key={index}
      index={index}
      name={item.name}
      expo={item.expo}
      img={item.img}
      selectedSlide={selectedSlide}
      nextSlide={nextSlide}
      previousSlide={previousSlide}
    />
  })

  return(
    <div className="slider-wrapper">
      <div className="container">
        <div className="slider">
          {sliderItems}
        </div>
      </div>
    </div>
  )
}