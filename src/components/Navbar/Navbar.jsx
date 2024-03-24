import React, { useState, useEffect, useRef } from "react";
import style from "./navbar.css"
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import toursData from "../../tourData"

export default function Navbar() {

  const [dropdownInfos, setDropdownInfos] = useState(toursData.categories)

  const toggleIsOpen = (id) => setDropdownInfos(prevState => prevState.map(item => item.id === id ? { ...item, isOpen: !item.isOpen } : item))

  const closeDropdown = (id) => {
    setDropdownInfos(prevState => {
      return prevState.map(item => {
        return item.id === id ? { ...item, isOpen: false } : item
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

  return (
    <div className="navbar hideOnMobile">
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