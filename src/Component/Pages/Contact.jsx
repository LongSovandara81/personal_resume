import React from "react";

const Contact = () => {
  return (
    <section className="cont" id="contact">
      <div className="title">
        <span>Contact Me</span>
      </div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">First Name</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Email</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Tel</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea cols="80" rows="8" required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="">Write your message</label>
            <br />
          </div>
        </div>
        <div className="form-row">
          <button className="cta1">
            <span className="hover-underline-animation"> Sumbit </span>
            <svg
              viewBox="0 0 46 16"
              height="15"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
