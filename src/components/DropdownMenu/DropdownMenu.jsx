import React ,{useEffect, useState, useRef} from "react";
import style from "./dropdownMenu.css"
import { Link } from "react-router-dom";

export default function DropdownMenu(props) {

  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
        props.closeDropdown(props.id)
      }
    }
    if(props.isOpen){
      window.addEventListener("click", handleClickOutside)
    }
    
    return () => {
      window.removeEventListener("click", handleClickOutside)
    } 
},[props.isOpen, props.closeDropdown, props.id])

  let tours = props.tours.map((item) => {
    return <li className="dropdown-menu-list-item">
      <Link className="dropdown-menu-link" to="/tour1">{item}</Link>
    </li>
  })

  return(
    <li
      className="dropdown-item" 
      ref={dropdownRef}
      onClick={()=>props.toggleIsOpen(props.id)}>
      {props.name}
      {props.isOpen && 
        <div onClick={(e)=> {e.stopPropagation()}} className="dropdown-menu">
          <ul className="dropdown-menu-list">
             {tours}
          </ul>
        </div>}
    </li>
  )
}