import React from "react";
import { Link } from "react-router-dom";
import tourData from "../../tourData"
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import Footer from "../../components/Footer/Footer";
import TourMain from "../../components/TourMain/TourMain";


export default function Tour() {
  return(
    <>
      <Header/>
      <Navbar/>
      <NavbarMobile/>
      <TourMain/>
      <Footer/>
    </>
  )
}