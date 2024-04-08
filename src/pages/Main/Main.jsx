import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import TourCatalog from "../../components/TourCatalogue/TourCatalog";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import Footer from "../../components/Footer/Footer";
import tourData from "../../tourData";

export default function Main() {
  
  const recommendedTours = tourData.find((item) => item.name === "Recommended Tours")
  console.log(recommendedTours)

  return(
    <>
      <Header/>
      <Navbar/>
      <NavbarMobile/>
      <Slider/>
      <TourCatalog
        categoryInfo={recommendedTours}
      />
      <Footer/>
    </>
    
  )
}