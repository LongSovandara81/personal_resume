import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="content">
        <div className="title text-left-animation">
          <span>About Me</span>
        </div>
        <div className="about-details">
          <div className="left text-animation">
            <img src="images/pic1.jpg" alt="" />
          </div>
          <div className="right text-animation">
            <div className="topic">My name's Long Sovandara</div>
            <p>
              I am passionate about learning new things and constantly seeking
              to expand my knowledge and skills. I am a creative thinker and
              enjoy expressing myself through reading, football, and music. I am
              also a compassionate and empathetic person, always striving to
              understand and connect with others on a deeper level. I value
              honesty, integrity, and authenticity in both myself and those
              around me. Overall, I am someone who is constantly evolving and
              growing, embracing the journey of self-discovery and personal
              development.
            </p>
            <div className="flex">
              <button className="btn1">
                <a href="https://drive.google.com/file/d/1-02QAdroFYL1uopMcao7RZuTVAMnamvG/view?usp=sharing">
                  View CV
                </a>
              </button>
              <button className="btn1">
                <a href="https://drive.google.com/file/d/1-02QAdroFYL1uopMcao7RZuTVAMnamvG/view?usp=sharing">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
