import { Blocks } from "lucide-react";
import React from "react";

const Service = () => {
  return (
    <section className="services" id="services">
      <div className="content">
        <div className="title">
          <span>My Services</span>
        </div>
        <div className="box1">
          <div className="boxs">
            <img className="img" src="images/react.jpg" alt="" />
            <button className="cta1">
              <span className="hover-underline-animation"> Web-Design </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
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
          <div className="boxs">
            <img className="img" src="images/offlice.jpg" alt="" />
            <button className="cta1">
              <span className="hover-underline-animation">
                {" "}
                Microsoft-Office{" "}
              </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
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
          <div className="boxs">
            <img className="img" src="images/ux.jpg" alt="" />
            <button className="cta1">
              <span className="hover-underline-animation"> UX/UI-Design </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
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
        </div>
      </div>
    </section>
  );
};

export default Service;
