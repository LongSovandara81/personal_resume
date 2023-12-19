import React from "react";

const details = [
  {
    des: "Hello, I am Long Sovandara",
  },
  {
    heads: "I am Web-Design & UX/UI-Design",
  },
  {
    text: "I am a Year3 student majoring in Computer Science at Royal University of Phnom Penh. I am strongly interested in Web-diesign and UX/UI-Design.",
  },
];

const Home = () => {
  return (
    <article className="hero" id="home">
      <div className="grid-1x2 grid-hero">
        <div className="hero-desc text-animation">
          {details.map((detail) => (
            <div>
              <h2>{detail.des}</h2>
              <h1 className="hero-heading typing-text">{detail.heads}</h1>
              <p>{detail.text}</p>
            </div>
          ))}
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
          <button className="cta">
            <span>Learn More</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
        <div className="hero-image text-ani card-inner">
          <img src="images/Hero.png" alt="" />
        </div>
      </div>
    </article>
  );
};

export default Home;
