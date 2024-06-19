import { useState } from "react";
import "./People.css";
import Footer from "../Footer/Footer";
import { Secy, Head, Member } from "./Data.js";
import Card from "./Card";
import { useEffect } from "react";

export default function People() {
  const [year, setYear] = useState(2);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })
  return (
    <div className="about-container">
      {/* <div className="about-topbar">
        <Topbar />
      </div> */}
      <div className="our-philo">
        <div className="philo-title">
          <h1 >Our Philosophy</h1>
        </div>
        <div className="philo-body">
          <p className="philo-body-text">
            Have you ever looked at the stars in your search meaning and turned
            to science forever? Then welcome to PaAC! A vibrant hub fostering
            scientific discourse and academic dialogue for the campus community.
            While our primary focus spans Physics, Mathematics, and Astronomy,
            we invite discussions aligned with the scientific method. As an
            inclusive club, we thrive on student-driven initiatives. Your
            suggestions for events are not just welcome; they are encouraged.
            Whether you envision a lecture, workshop, or any academic endeavor,
            reach out, and we will collaborate to make it happen! If you are
            enthusiastic about science and academia and are willing to commit
            yourself to organising and the behind-the-scenes work, join us on
            our endeavours through space and time.
          </p>
        </div>
      </div>
      <div className="about-heading">
        <h1 className="about-heading-text">Meet our team</h1>
      </div>

      <div className="members">
        <div className="members-secys">
          {Secy.map((value) => (
            <Card
            key={value.name}
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
            key={value.name}
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
                key={value.name}
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
