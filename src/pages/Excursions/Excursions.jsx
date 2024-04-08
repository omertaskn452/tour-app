import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import Header from "../../components/Header/Header";
import TourCatalog from "../../components/TourCatalogue/TourCatalog";
import Footer from "../../components/Footer/Footer";
import style from "./excursions.css"
import tourData from "../../tourData";

export default function Excursions(){
  
  const excursions = tourData.find((item) => item.name === "Excursions") 

  return(
    <>
      <Header/>
      <Navbar/>
      <NavbarMobile/>
      <TourCatalog
        categoryInfo={excursions}
      />
      <Footer/>
    </>
  )
}