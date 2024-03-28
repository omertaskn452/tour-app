import React, { useRef, useState } from "react";
import style from "./slider.css"
import Showroom from "../Showroom/Showroom";
import toursData from "../../tourData"

export default function Slider() {

  /* const carouselRef = useRef() */

  const [currentSlide, setCurrentSlide] = useState(0)
  const [previousSlide, setPreviousSlide] = useState((toursData.categories.length - 1))
  const [nextSlide, setNextSlide] = useState(1)
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
      handleNextSlide()
    }
    else if(delta < -50){
      handlePreviousSlide()
    }
  }

  const calcSlideIndex = (value) => {
    if(value === 0){
      setPreviousSlide(toursData.categories.length - 1)
    }
    else{
      setPreviousSlide(value - 1)
    }
    if(value === toursData.categories.length - 1){
      setNextSlide(0)
    }
    else{
      setNextSlide(value + 1)
    }
  }

  const handleNextSlide = () => {
    const newSlide = (currentSlide + 1) % toursData.categories.length
    setCurrentSlide(newSlide)
    calcSlideIndex(newSlide)
  }

  const handlePreviousSlide = () => {
    const newSlide = (currentSlide - 1 + toursData.categories.length) % toursData.categories.length
    setCurrentSlide(newSlide)
    calcSlideIndex(newSlide)
  }
/* 
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
  } */


  let sliderItems = toursData.categories.map((item, index) => {
    return <Showroom
      id={item.id}
      key={index}
      index={index}
      currentSlide={currentSlide}
      previousSlide={previousSlide}
      nextSlide={nextSlide}
      handlePreviousSlide={handlePreviousSlide}
      handleNextSlide={handleNextSlide}
      calcSlideIndex={calcSlideIndex}
      tours={toursData.categories}
    />
  })

  return(
      <div className="container">
          <div
            className="slider"
            /* ref={carouselRef} */
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
              {sliderItems}
          </div>
      </div>
  )
}