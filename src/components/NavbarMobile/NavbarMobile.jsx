import React, {useState} from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import style from "./navbarMobile.css"
import {Menu, X} from "lucide-react";
import { Link } from "react-router-dom";
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
          <Link to="/"><h2>Qu-Travel</h2></Link>
          {isMenuOpen ? <X className="hamburger-menu-icon" size={40} onClick={()=>toggleIsMenuOpen()}/> : <Menu className="hamburger-menu-icon" size={40} onClick={()=>toggleIsMenuOpen()}/>}
        </div>
        {isMenuOpen && <div className={isMenuOpen ? "hamburger-menu" : "hidden"}>
            <ul className="hamburger-menu-list">
              {dropdownItems}
              <li className="hamburger-menu-list-item"><Link to="transfer" className="hamburger-menu-link">Airport Transfer</Link></li>
              <li className="hamburger-menu-list-item"><Link className="hamburger-menu-link">Rent House</Link></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}