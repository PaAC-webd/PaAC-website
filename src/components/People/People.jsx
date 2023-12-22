import { useState } from "react";
import "./People.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import { Secy, Head, Member } from "./Data.js";
import Card from "./Card";

export default function People() {
  const [year, setYear] = useState(2);
  return (
    <div className="about-container">
      <div className="about-topbar">
        <Topbar />
      </div>

      <div className="members">
        <div className="members-secys">
          {Secy.map((value) => (
            <Card
              id={value.name}
              name={value.name}
              img={value.image}
              position={value.position}
              linkedIn={value.linkedIn}
              email={value.email}
              blurhash={value.blurhash}
            />
          ))}
        </div>
        <div className="line-container">
          <div className="horizontal-line"></div>
        </div>
        <div className="members-heads">
          {Head.map((value) => (
            <Card
              id={value.name}
              name={value.name}
              img={value.image}
              position={value.position}
              linkedIn={value.linkedIn}
              email={value.email}
              blurhash={value.blurhash}
            />
          ))}
        </div>
        <div className="line-container">
          <div className="horizontal-line"></div>
        </div>
        <div className="members-btn">
          <button
            className={"members-btn-year " + (year === 2 ? "active-year" : "")}
            onClick={() => setYear(2)}
          >
            2nd Y
          </button>
          <button
            className={"members-btn-year " + (year === 3 ? "active-year" : "")}
            onClick={() => setYear(3)}
          >
            3rd Y
          </button>
          <button
            className={"members-btn-year " + (year === 4 ? "active-year" : "")}
            onClick={() => setYear(4)}
          >
            4th Y
          </button>
          <button
            className={"members-btn-year " + (year === 5 ? "active-year" : "")}
            onClick={() => setYear(5)}
          >
            5th Y
          </button>
        </div>
        <div className="members-members">
          {Member.map((value) => {
            if (value.year === year) {
              return (
                <Card
                  id={value.name}
                  name={value.name}
                  img={value.image}
                  position={value.position}
                  linkedIn={value.linkedIn}
                  email={value.email}
                  blurhash={value.blurhash}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="line-container">
          <div className="horizontal-line"></div>
        </div>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}
