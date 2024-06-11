import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../assets/logo.png";
import "./logo.css";

export default function Logo() {

  return (
    <NavLink to="/">
      <div className="logo-container">
        <img src={LogoImg} className="logo" alt=""></img>

        <svg id="rotatingText" width="100%" height="100%">
          <defs>
            <path
              id="circle"
              d="M 100, 100
        m -75, 0
        a 75, 75 0 1, 0 150, 0
        a 75, 75 0 1, 0 -150, 0
        "
            ></path>
          </defs>
          <text>
            <textPath
              alignmentBaseline="top"
              href="#circle"
              className="text"
              stroke="none"
              fill="white"
            >
              PHYSICS AND ASTRONOMY CLUB IIT ROORKEE 
            </textPath>
          </text>
        </svg>
      </div>
    </NavLink>
  );
}
