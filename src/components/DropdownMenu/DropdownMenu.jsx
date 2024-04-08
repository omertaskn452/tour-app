import React ,{useEffect, useState, useRef} from "react";
import style from "./dropdownMenu.css"
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { nanoid } from "nanoid";

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

  let tours = props.tours.map((item, index) => {
    return <li 
      key={nanoid()}
      className="dropdown-menu-list-item">
      <Link className="dropdown-menu-link" to={`/${props.urlName}/${index}`}>{item.name}</Link>
    </li>
  })

  return(
    <li
      className="dropdown-item" 
      ref={dropdownRef}
      onClick={()=>props.toggleIsOpen(props.id)}>
      <div className="dropdown-item-name">
        {props.name}
        <ChevronDown></ChevronDown>
      </div>
        <div onClick={(e)=> {e.stopPropagation()}} className={`dropdown-menu ${props.isOpen ? "active" : ""}`}>
          <ul className="dropdown-menu-list">
             {tours}
          </ul>
        </div>
    </li>
  )
}