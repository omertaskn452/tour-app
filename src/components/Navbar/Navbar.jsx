import React, {useState, useEffect, useRef} from "react";
import style from "./navbar.css"
import { nanoid } from "nanoid";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function Navbar() {
  
  const [dropdownInfos, setDropdownInfos] = useState([
    {
      name: "Recommended Tours",
      id: nanoid(),
      isOpen: false
    },
    {
      name: "Private Tours",
      id: nanoid(),
      isOpen: false
    },
    {
      name: "Excursions",
      id: nanoid(),
      isOpen: false
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
          <li className="navbar-link-item"><a href="#">Airport Transfer</a></li>
          <li className="navbar-link-item"><a href="#">Rent House</a></li>
        </ul>
      </div>
    </div>
  )
}