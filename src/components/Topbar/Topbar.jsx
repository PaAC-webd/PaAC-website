import { NavLink } from "react-router-dom";
import Logo from "../assets/iitr_logo.webp";
import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import DropMenu from "./DropMenu";

export default function Topbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="topbar-container">
      <div className="topbar-top">
        <NavLink to="/">
          <img src={Logo} className="small-screen-logo" alt=""></img>
        </NavLink>
      </div>
      {windowWidth > 768 ? <NavMenu /> : <DropMenu />}
    </div>
  );
}
