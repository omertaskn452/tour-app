import React from "react";
import style from "./footer.css"
import FacebookIcon from "../Svg icons/face/FacebookIcon";
import InstagramIcon from "../Svg icons/insta/InstagramIcon";
import WhatsapIcon from "../Svg icons/wp/WhatsappIcon";
import { Link } from "react-router-dom";

export default function Footer(){
  return(
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div className="footer-info">
            <div className="footer-links">
                <ul className="footer-links-list">
                  <li className="footer-links-list-item">
                    <Link><span>Who We Are?</span></Link>
                  </li>
                  <li  className="footer-links-list-item">
                    <Link><span>Contact Us</span></Link>
                  </li>
                  <li  className="footer-links-list-item">
                    <Link><span>Privacy Policy</span></Link>
                  </li>
                  <li  className="footer-links-list-item">
                    <Link><span>Manage Cookies</span></Link>
                  </li>
                </ul>
              </div>
            <div className="footer-icons">
              <ul className="footer-icons-list">
                <li className="footer-icons-list-item">
                  <Link to="#"><FacebookIcon/></Link>
                </li>
                <li className="footer-icons-list-item">
                  <Link className="footer-icon" to="#"><WhatsapIcon/></Link>
                </li>
                <li className="footer-icons-list-item">
                  <Link to="#"><InstagramIcon/></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-text">
            <p>Copyright&copy;2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}