import "./OpenProjects.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import { openProjects } from "./OpenData";
import ProjectCard from "./Card";

export default function Events() {
  return (
    <div className="projects-container">
      <div className="projects-topbar">
        <Topbar />
      </div>
      <section className="open-projects">
        <h1>Open Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ea
          reprehenderit, iste facere veniam expedita alias vero autem dolor
          asperiores assumenda tempora odit blanditiis quae architecto quasi ad
          facilis beatae. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Illum, ea reprehenderit, iste facere veniam expedita alias vero
          autem dolor asperiores assumenda tempora odit blanditiis quae
          architecto quasi ad facilis beatae.
        </p>
        <div className="projects">
          {openProjects.map((project) => {
            return <ProjectCard {...project} key={project.id} />;
          })}
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
