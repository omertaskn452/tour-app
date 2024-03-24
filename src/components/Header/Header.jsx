import React from "react";
import style from "./header.css"
import FacebookIcon from "../Svg icons/face/FacebookIcon";
import InstagramIcon from "../Svg icons/insta/InstagramIcon";
import WhatsapIcon from "../Svg icons/wp/WhatsappIcon";


export default function Header() {
  return(
    <div className="header hideOnMobile">
      <div className="container">
        <div className="header-wrapper">
            <a href="/"><h1 className="header-logo">Qu-Travel</h1></a>
            <div className="header-link">
              <ul className="header-social">
                <li className="header-social-item"><a className="header-social-icon" href=""><FacebookIcon/></a></li>
                <li className="header-social-item"><a className="header-social-icon" href=""><InstagramIcon/></a></li>
                <li className="header-social-item"><a className="header-social-icon" href=""><WhatsapIcon/></a></li>
              </ul>
              <a href=""><button className="header-link-contact-btn">Contact Us</button></a>
            </div>
        </div>
      </div>
    </div>
  )
}