import React, {useState} from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import style from "./navbarMobile.css"
import {Menu, X} from "lucide-react";
import tourData from "../../tourData"

export default function NavbarMobile(){
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [toursInfo, setToursInfo] = useState(tourData.categories)

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  const toggleIsOpen = (id) => {
    setToursInfo(prevState => {
      return prevState.map((item) => {
        return item.id === id ? {...item, isOpen: !item.isOpen} : item
      })
    })
  }

  const closeDropdown = (id) => {
    setToursInfo(prevState => {
      return prevState.map((item) => {
        return item.id === id ? {...item, isOpen: false} : item
      })
    })
  }

  let dropdownItems = toursInfo.map((item) => {
    if(Object.hasOwn(item, "tours")){return <DropdownMenu
      id={item.id}
      key={item.id}
      name={item.name}
      tours={item.tours}
      isOpen={item.isOpen}
      toggleIsOpen={toggleIsOpen}
      closeDropdown={closeDropdown}
    />}
  })

  return(
    <div className="navbar-mobile">
      <div className="container">
        <div className="navbar-mobile-wrapper">
          <a href="#"><h2>Qu-Travel</h2></a>
          {isMenuOpen ? <X size={40} onClick={()=>toggleIsMenuOpen()}/> : <Menu size={40} onClick={()=>toggleIsMenuOpen()}/>}
        </div>
        {isMenuOpen && <div className={isMenuOpen ? "hamburger-menu" : "hidden"}>
            <ul className="hamburger-menu-list">
              {dropdownItems}
              <li className="hamburger-menu-list-item"><a href="tour1">Airport Transfer</a></li>
              <li className="hamburger-menu-list-item"><a href="tour1">Rent House</a></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}