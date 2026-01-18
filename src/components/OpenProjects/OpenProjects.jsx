import "./OpenProjects.css";
import Footer from "../Footer/Footer";
import ProjectCard from "./Card";
const spaceId = import.meta.env.VITE_SPACE_ID;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
import { useState, useEffect } from "react";
import Faq from "./Faq";

export default function Events() {
  const [projects, setProjects] = useState(null);

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
            projectsCollection {
              items {
                title
                description  
                date
                compressedLink
                duration
                status
                image {
                  url
                }
              }
            }
          }`,
        }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setProjects(data.projectsCollection.items);
      });
  }, []);
  

   useEffect(() => {
     window.scrollTo({
       top: 0,
       left: 0,
       behavior: "smooth",
     });
   });

  if (!projects) {
    return "Loading...";
  }
  const ongoingProjects = projects.filter(
    (project) => project.status === "ongoing"
  );

  const pastProjects = projects.filter(
    (project) => project.status === "past"
  );


  return (
    <div className="projects-container">
      {/* <div className="projects-topbar">
        <Topbar />
      </div> */}
      <section className="open-projects">
        <h1>Ongoing Projects</h1>
          <div className="projects">
            {ongoingProjects.length === 0 && <p>No ongoing projects</p>}
            {ongoingProjects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>

          <h1>Previous Projects</h1>
          <div className="projects">
            {pastProjects.length === 0 && <p>No previous projects</p>}
            {pastProjects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
