import { useState } from "react";
import "./People.css";
import Footer from "../Footer/Footer";
import Card from "./Card";
import { useEffect } from "react";


const spaceId = import.meta.env.VITE_SPACE_ID;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export default function People() {
  const [years , setYear] = useState(2);
  const [secy , setsecy ] = useState([]) ;
  const [head , sethead ] = useState([]) ;
  const [member , setmember ] = useState([]) ;

  useEffect(() => {
      window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            query: `query {
              membersCollection {
                items {
                  name
                  profilePhoto {
                    url
                  }
                  por
                  year
                  linkedIn
                  email
                  blurhash
                  }
              }
            }`
,
          }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
          if (errors) {
            console.error(errors);
          }
          const all =  data.membersCollection.items ;
          const secys = all.filter((member) => member.por === ( "Secretary" | "Additional Secretary" | "Joint Secretary" )) ;
          const mem = all.filter((member) => member.por === "Member") ;
          const heds = all.filter((member) => member.por === "Head of Design" | "Head of Web Development" | "Head of Astrophotography") ;
          setsecy(secys) ;
          setmember(mem) ;
          sethead(heds) ;
        });
    }, []);

    

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
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
            Have you ever looked at the stars in your search for meaning and turned
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
          {secy.map((value) => (
            <Card
            key={value.name}
              id={value.name}
              name={value.name}
              img={value.profilePhoto}
              position={value.por}
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
          {head.map((value) => (
            <Card
            key={value.name}
              id={value.name}
              name={value.name}
              img={value.profilePhoto}
              position={value.por}
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
            className={"members-btn-year " + (years === 2 ? "active-year" : "")}
            onClick={() => setYear(2)}
          >
            2nd Y
          </button>
          <button
            className={"members-btn-year " + (years === 3 ? "active-year" : "")}
            onClick={() => setYear(3)}
          >
            3rd Y
          </button>
          <button
            className={"members-btn-year " + (years === 4 ? "active-year" : "")}
            onClick={() => setYear(4)}
          >
            4th Y
          </button>
          <button
            className={"members-btn-year " + (years === 5 ? "active-year" : "")}
            onClick={() => setYear(5)}
          >
            5th Y
          </button>
        </div>
        <div className="members-members">
          {member.map((value) => {
            if (value.year === years) {
              return (
                <Card
                key={value.name}
                  id={value.name}
                  name={value.name}
                  img={value.profilePhoto}
                  position={value.por}
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
