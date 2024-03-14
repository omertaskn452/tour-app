import React, {useState, useEffect, useRef} from "react";
import style from "./navbar.css"
import { nanoid } from "nanoid";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function Navbar() {
  
  const [dropdownInfos, setDropdownInfos] = useState([
    {
      name: "Recommended Tours",
      id: nanoid(),
      isOpen: false,
      tours: [
        "Muğla - Dalaman",
        "Muğla - Bodrum",
        "Muğla - Fethiye",
        "Muğla - Ölüdeniz",
        "Muğla - Akyaka"
      ]
    },
    {
      name: "Private Tours",
      id: nanoid(),
      isOpen: false,
      tours: [
        "Antalya - Kemer",
        "Antalya - Konyaaltı",
        "Antalya - Alanya",
        "Antalya - Kaleiçi",
        "Antalya - Olymposs Ancient City"
      ]
    },
    {
      name: "Excursions",
      id: nanoid(),
      isOpen: false,
      tours: [
        "Knidos Ancient City",
        "Bodrum Amphitheater",
        "Dalyan River",
        "Ölüdeniz",
        "Düden Waterfalls",
        "Kaleiçi",
        "Konyaaltı Beach",
        "Sapadere Canyon"
      ]
    }
  ])

  const toggleIsOpen = (id) => {
    setDropdownInfos(prevState => {
      return prevState.map(item => {
        return item.id === id ? {...item, isOpen: !item.isOpen} : item
      })
    })
  }

  const closeDropdown = (id) => {
    setDropdownInfos(prevState => {
      return prevState.map(item => {
        return item.id === id ? {...item, isOpen: false} : item
      })
    })
  }

  let dropdownItems = dropdownInfos.map((item) => {
   return <DropdownMenu
      id={item.id}
      key={item.id}
      name={item.name}
      tours={item.tours}
      isOpen={item.isOpen}
      toggleIsOpen={toggleIsOpen}
      closeDropdown={closeDropdown}
    />
  })

  console.log(dropdownInfos)

  return(
    <div className="navbar">
      <div className="container">
        <ul className="navbar-link">
          {dropdownItems}
          <li className="navbar-link-item"><a href="tour1">Airport Transfer</a></li>
          <li className="navbar-link-item"><a href="#">Rent House</a></li>
        </ul>
      </div>
    </div>
  )
}