import Footer from "../Footer/Footer";
import "./home.css";
import Ellipse from "../assets/Primary.png";
import Planet from "../assets/Planet.png";
import { NavLink } from "react-router-dom";
import HomeEvents from "./HomeEvents";
import Gp from "../assets/group_photo.webp";
import { useEffect} from "react" ;

// import Logo from "./Logo";
import Newsletter from "./Newsletter";
import Achievement from "../Achievement/Achievement";

export default function Home() {

  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })


  return (
    <>
      {/* //   <div className="logo-div">
    //     <Logo></Logo>
    //   </div> */}
      <div className="home-container">
        {/* <div className="home-topbar">
          <Topbar />
        </div> */}
        <div className="home-info">
          <img src={Ellipse} className="ellipse" alt=""></img>
          <div className="home-title">
            <h1 className="club">Physics and Astronomy Club</h1>
            <h3 className="iitr">Indian Institute of Technology Roorkee </h3>
          </div>
          <img src={Planet} className="planet" alt="" height="50vw"></img>
        </div>
        <div className="home-body">
          <div className="newsletter-container">
            <Newsletter />
          </div>
          <div className="know-paac-container">
            <div className="know-paac-header">
              <NavLink to="/people">
                <h1 className="know-header">What do we do at PaAC?</h1>
              </NavLink>
            </div>
            <div className="know-paac-body">
              <div className="paac-desc">
                <p className="know-body">
                  Formerly known as the Star-gazing section, our group directly
                  operates under STC-IITR and the office of Dean-SRIC. The group
                  has a core executive team but volunteering and membership is
                  open to all students. While we primarily focus on the topics
                  of Physics, Mathematics and Astronomy through discussions,
                  lectures, open projects and competitions, our primary goal
                  remains to be at the forefront of all scientific pursuits on
                  campus!
                </p>
              </div>
              <div className="paac-gp">
                <img src={Gp} type="image/webp"></img>
              </div>
            </div>
          </div>
          <div className="home-achievement">
            <Achievement />
          </div>

          {/* ---------Home Events------------ */}
          <div className="home-events-section">
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
    </>
  );
}
