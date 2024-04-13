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
  const privateTours = tourData.find((item) => item.name === "Private Tours")
  const excursions = tourData.find((item) => item.name === "Excursions")

  return(
    <>
      <Header/>
      <Navbar/>
      <NavbarMobile/>
      <Slider/>
      <TourCatalog
        categoryInfo={recommendedTours}
      />
      <TourCatalog
        categoryInfo={privateTours}
      />
      <TourCatalog
        categoryInfo={excursions}
      />
      <Footer/>
    </>
    
  )
}