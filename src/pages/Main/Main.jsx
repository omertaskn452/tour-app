import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import TourCatalog from "../../components/TourCatalogue/TourCatalog";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import Footer from "../../components/Footer/Footer";

export default function Main() {
  return(
    <>
      <Header/>
      <Navbar/>
      <NavbarMobile/>
      <Slider/>
      <TourCatalog/>
      <Footer/>
    </>
    
  )
}