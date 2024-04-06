import React from "react";
import style from "./tourCat.css"
import tourData from "../../tourData";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile";
import Footer from "../../components/Footer/Footer";
import {useParams} from "react-router-dom"
import { toBeRequired } from "@testing-library/jest-dom/matchers";

export default function TourCat(){
 
  const {categoryId} = useParams()

  const item = tourData.categories.filter((item) => item.urlName === categoryId)

  return(
    <>
      <Header/>
      <Navbar/>
      <NavbarMobile/>
      <div className="container">
        <img src={`/${item[0].img}`} alt="" />
        <p>{item[0].name}</p>
      </div>
      <Footer/>
    </>
  )
}