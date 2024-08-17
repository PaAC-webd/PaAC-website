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


  return (
    <div className="projects-container">
      {/* <div className="projects-topbar">
        <Topbar />
      </div> */}
      <section className="open-projects">
        <h1>Open Projects</h1>
        <section className="faq">
          {/* <h1>FAQ</h1> */}
          <Faq />
        </section>
        <div className="projects">
          {projects.map((project) => {
            return <ProjectCard {...project} key={project.title} />;
          })}
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
