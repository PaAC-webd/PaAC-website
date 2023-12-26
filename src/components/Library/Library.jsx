import Topbar from "../Topbar/Topbar";
import "./Library.css";
import Footer from "../Footer/Footer";
import {books as allBooks} from "./Data";
import { useState } from "react";
import BookCard from "../Gallery/Card";


const Library = () => {
  const [subject, setSubject] = useState('ALL')
  const [books, setBooks] = useState(allBooks)

  return (
    <>
      <div className="library-container">
        <div className="library-topbar">
          <Topbar />
        </div>
        <section className="library">
          <div className="library-top">
            <h1>Library</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores provident nisi, nemo corrupti, ab commodi sint maxime natus rem ut praesentium soluta alias cupiditate neque consectetur ex quibusdam, in vero. Quisquam, laudantium! Vero consequatur aspernatur molestias maiores quam tempora sunt, veniam magni! Numquam laudantium ea provident similique eius minus quidem.</p>
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
              {
                books.map((book) => {
                  return (
                    <BookCard {...book}/>
                  )
                })
              }
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
