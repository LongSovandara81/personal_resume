import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="conte">
        <div className="top">
          <div className="logo-details">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="media-icons">
            <a href="https://web.facebook.com/ra.hunter.37">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://t.me/SovanDara81">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://instagram.com/sovandara_long?utm_source=qr">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/long-sovandara-003930287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Portfolio</li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#know">Knowledges</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Knowledges</li>
            <li>
              <a href="#know">Programmming Languages</a>
            </li>
            <li>
              <a href="#know">English</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Services</li>
            <li>
              <a href="#services">Microsoft Office</a>
            </li>
            <li>
              <a href="#services">Web Design</a>
            </li>
            <li>
              <a href="#services">UX/UI Design</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2023 <a href="#">Design | Long Sovandara</a>All rights
            reserved
          </span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
