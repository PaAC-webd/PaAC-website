import Logo from "../assets/iitr_logo.webp";
import { useState, useEffect } from "react";
import "./People.css";
import { Blurhash } from "react-blurhash";
import { LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function Card(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = props.img;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [props.img]);

  return (
    <div className="card-container">
      {!imageLoaded && props.img !== "" ? (
        <Blurhash className="blur-image" hash={props.blurhash} punch={1} />
      ) : (
        <img
          className="card-image"
          loading="lazy"
          src={props.img || Logo}
          alt=""
        ></img>
      )}
      {/* <img className="card-image" loading="lazy" src={props.img || Logo} alt=""></img> */}
      <h1 className="card-name">{props.name}</h1>
      <h2 className="card-position">({props.position})</h2>
      <div className="card-contacts">
        <a href={props.linkedIn}>
          <LinkedInLogoIcon/>
        </a>
        <a href={props.email}>
          <EnvelopeClosedIcon />
        </a>
      </div>
    </div>
  );
}
