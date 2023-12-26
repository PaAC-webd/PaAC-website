import Topbar from "../Topbar/Topbar";
import "./Library.css";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import BookCard from "./Card";
const spaceId = import.meta.env.VITE_SPACE_ID;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

const Library = () => {
  const [subject, setSubject] = useState("ALL");
  const [page, setPage] = useState(null);

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
            booksCollection {
              items {
                bookName
                bookEdition
                authorName
                bookSubject
                bookAvailable
                bookImage{
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
        setPage(data.booksCollection.items);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <>
      <div className="library-container">
        <div className="library-topbar">
          <Topbar />
        </div>
        <section className="library">
          <div className="library-top">
            <h1>Our Library</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores provident nisi, nemo corrupti, ab commodi sint maxime
              natus rem ut praesentium soluta alias cupiditate neque consectetur
              ex quibusdam, in vero. Quisquam, laudantium! Vero consequatur
              aspernatur molestias maiores quam tempora sunt, veniam magni!
              Numquam laudantium ea provident similique eius minus quidem.
            </p>
          </div>
          <div className="library-bottom">
            <div className="filter">
              <span>Showing {subject} Books</span>
              <div className="filter-menu">
                <span className="">Sort By:</span>
                <span className="filter-options">Physics</span>
                <span className="filter-options">Mathematics</span>
                <span className="filter-options">Astronomy</span>
              </div>
            </div>
            <div className="books-container">
              {page.map((book) => {
                return <BookCard {...book} key={book.bookName} />;
              })}
            </div>
          </div>
        </section>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Library;
