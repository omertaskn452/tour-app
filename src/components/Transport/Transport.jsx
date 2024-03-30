import React, {useState} from "react";
import style from "./transport.css"
import {nanoid} from "nanoid"
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Tranport(){
  
  const [faqItems, setFaqItems] = useState([
    {id: nanoid(), isOpen: false},
    {id: nanoid(), isOpen: false},
    {id: nanoid(), isOpen: false}
  ])

  const toggleIsOpen = (id) => {
    setFaqItems(prevState => {
      return prevState.map((item) => {
        return item.id === id ? {...item, isOpen: !item.isOpen} : item
      })
    })
  }

  let faqElements = faqItems.map((item) => {
    return <div 
      key={item.id}
      onClick={()=>toggleIsOpen(item.id)}
      className={`transport-faq-list ${item.isOpen ? "active" : ""}`}
      >
        <div className="transport-faq-question">
          {item.isOpen ? <ChevronDown></ChevronDown> : <ChevronRight></ChevronRight>}
          <p>Lorem ipsum dolor sit amet?</p>
        </div>
        <div className="transport-faq-expo">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ex et odio fringilla, ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ex et odio fringilla, ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ex et odio fringilla, ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ex et odio fringilla, ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ex et odio fringilla, ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ex et odio fringilla, ut.
          </p>
          <p className="second-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ex et odio fringilla, ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ex et odio fringilla, ut.
          </p>
        </div>
    </div>
  })

  console.log(faqItems)

  return(
    <div className="container">
      <div className="transport">
        <div className="transport-img-wrapper">
          <img className="transport-img" src="/img/stock/transport.jpg" alt="" />
        </div>
        <div className="transport-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mi eget sem ultricies, et finibus ex ultricies. Integer egestas eu odio eget gravida. Nullam ultricies ornare libero mattis sodales. Proin vitae lacus ut ipsum tincidunt commodo. Nullam ac tempus felis. Etiam vitae ultrices quam. Praesent libero sem, lacinia quis venenatis vel, dictum vitae arcu. Cras viverra egestas magna sed viverra. </p>
          <p>Nam vestibulum vestibulum aliquam. Etiam fermentum, ante nec iaculis laoreet, ex sapien interdum nisi, vel aliquam nulla ipsum sed justo. Nunc ac urna finibus justo ultricies imperdiet id sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. .</p>
          <h2>Header 1</h2>
          <p>Nam vestibulum vestibulum aliquam. Etiam fermentum, ante nec iaculis laoreet, ex sapien interdum nisi, vel aliquam nulla ipsum sed justo. Nunc ac urna finibus justo ultricies imperdiet id sit amet dui. </p>
          <h2>Header 2</h2>
          <p>Nam vestibulum vestibulum aliquam. Etiam fermentum, ante nec iaculis laoreet, ex sapien interdum nisi, vel aliquam nulla ipsum sed justo. Nunc ac urna finibus justo ultricies imperdiet id sit amet dui.</p>
        </div>
        <div className="transport-faq">
          <h2>FAQ</h2>
          {faqElements}
        </div>
      </div>
    </div>
  )
}