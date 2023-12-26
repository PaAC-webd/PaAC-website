import "./OpenProjects.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import {openProjects} from './OpenData'
import ProjectCard from "./Card";

export default function Events() {
  return (
    <div className="projects-container">
      <div className="projects-topbar">
        <Topbar />
      </div>
      <section className="open-projects">
        <h1>Open Projects</h1>
        <div className="projects">
            {
                openProjects.map((project) => {
                    return (
                        <ProjectCard {...project} />
                    )
                })
            }
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
