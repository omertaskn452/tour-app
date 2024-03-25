import React, { useRef, useState } from "react";
import style from "./slider.css"
import Showroom from "../Showroom/Showroom";
import toursData from "../../tourData"

export default function Slider() {

  const carouselRef = useRef()

  const [count, setCount] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)

  const handleTouchStart = (e) =>{
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX)

  const handleTouchEnd = (e) => {
    if(!touchEndX || !touchStartX) return;
    const delta = touchStartX - touchEndX
    if(delta > 50){
      moveSlider(1)
    }
    else if(delta < -50){
      moveSlider(-1)
    }
  }

  const moveSlider = (delta) => {
    if(!carouselRef.current) return
    
    const width = carouselRef.current.offsetWidth;

    if(count + delta > (toursData.categories.length - 1)){
      setCount(0)
      carouselRef.current.scrollTo(0 ,0)
    }
    else if(count + delta < 0){
      setCount(toursData.categories.length - 1)
      carouselRef.current.scrollTo(carouselRef.current.scrollLeft + width * (toursData.categories.length - 1), 0)
    }
    else{
    setCount(prevState => prevState + delta)
    carouselRef.current.scrollTo(carouselRef.current.scrollLeft + width * delta, 0)
    }
  }

  console.log(count)

  let sliderItems = toursData.categories.map((item, index) => {
    return <Showroom
      id={item.id}
      key={index}
      index={index}
      tours={toursData.categories}
      moveSlider={moveSlider}
    />
  })

  return(
      <div className="container">
        <div 
          className="slider" 
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
            {sliderItems}
        </div>
      </div>
  )
}