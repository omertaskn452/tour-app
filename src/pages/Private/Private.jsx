import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import Header from "../../components/Header/Header";
import TourCatalog from "../../components/TourCatalogue/TourCatalog";
import Footer from "../../components/Footer/Footer";
import style from "./private.css"
import tourData from "../../tourData";

export default function Private(){
  
  const privateTours = tourData.find((item) => item.name === "Private Tours") 

  return(
    <>
      <Header/>
      <Navbar/>
      <NavbarMobile/>
      <TourCatalog
        categoryInfo={privateTours}
      />
      <Footer/>
    </>
  )
}