import React ,{useEffect, useState, useRef} from "react";
import style from "./dropdownMenu.css"

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

  return(
    <li
      className="dropdown-item" 
      ref={dropdownRef}
      onClick={()=>props.toggleIsOpen(props.id)}>
      {props.name}
      {props.isOpen && <div onClick={(e)=> {e.stopPropagation()}} className="rectangle"></div>}
    </li>
  )
}