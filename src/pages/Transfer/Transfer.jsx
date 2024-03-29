import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import Footer from "../../components/Footer/Footer";
import Tranport from "../../components/Transport/Transport";

export default function Transfer() {
  return(
    <>
      <Header/>
      <Navbar/>
      <NavbarMobile/>
      <Tranport/>
      <Footer/>
    </>
    
  )
}