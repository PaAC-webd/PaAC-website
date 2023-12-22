import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import "./home.css";
import Ellipse from "../assets/Primary.png";
import Planet from "../assets/Planet.png";
import { NavLink } from "react-router-dom";
import Achievement from "../Achievement/Achievement";
import HomeEvents from "./HomeEvents";

// import Logo from "./Logo";
import Newsletter from "./Newsletter";


export default function Home() {

  return (
    <div>
    {/* //   <div className="logo-div">
    //     <Logo></Logo>
    //   </div> */}
      <div className="home-container">
        <div className="home-topbar">
          <Topbar />
        </div>
        <div className="home-info">
          <img
            src={Ellipse}
            className="ellipse"
            alt=""
          ></img>
          <div
            className="home-title"
          >
           <h1 className="club">Physics and Astronomy Club</h1>
            <h3 className="iitr">Indian Institute of Technology Roorkee </h3>
          </div>
          <img
            src={Planet}
            className="planet"
            alt=""
            height="50vw"
          ></img>
        </div>
        <div className="home-body">
          <div className="newsletter-container">
            <Newsletter/>
          </div>
          <div className="know-paac-container">
            <div
              className="paac-desc"
            >
              <NavLink to="/about-us">
                <h1 className="know-header">What do we do at PaAC?</h1>
              </NavLink>
              {/* <p className="know-body">
              Formerly known as the Star-gazing section, our group directly
              operates under the Student Technical Council of IITR and Office of
              Dean-sponsored research and industrial consultancy. The group is a
              student club that has a core executive team. However volunteering
              and even membership is open to all UG, PG, and Ph.D. students.
              Every year, we engage in several physics and astronomy outreach
              events and short and long-term technical projects. The club as its
              normal functioning engages in various activities, A Physics and
              Astronomy Journal Club is also a subset of our group. This Journal
              club frequently engages in research paper discussions and also in
              open informal group discussions on various mathematical and
              physical science topics.
            </p> */}
            </div>
            <div
              className="paac-gp"
            >
            </div>
          </div>
          <div
            className="home-achievement"
          >
            <Achievement />
          </div>

          {/* ---------Home Events------------ */}
          <div
            className="home-events-section"
          >
            <div className="home-events-heading-container">
              <NavLink to="/events" className="home-events-link">
                <h1 className="home-events-heading">
                  Exploring the Cosmos: Engaging events conducted by PaAC
                </h1>
              </NavLink>
            </div>

            <div className="home-events-carousel">
              <HomeEvents />
            </div>
          </div>
          {/* ------------Home Events Finishes------------ */}
          <Footer />
        </div>
      </div>
      
    </div>
  );
}