import Topbar from "../Topbar/Topbar";
import "./Library.css";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import BookCard from "./Card";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
const spaceId = import.meta.env.VITE_SPACE_ID;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

const Library = () => {
  const [subject, setSubject] = useState("All");
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
  
  const filteredBooks = page.filter((book) => {
    if (subject === "All") {
      return true;
    } else {
      return book.bookSubject === subject;
    }
  });

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
              <p>Showing {subject} Books</p>
              <Select.Root value={subject} onValueChange={setSubject}>
                <Select.Trigger className="SelectTrigger" aria-label="Subject">
                  <Select.Value aria-label={subject}>{subject}</Select.Value>
                  <Select.Icon className="SelectIcon">
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="SelectContent">
                    <Select.ScrollUpButton className="SelectScrollButton">
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="SelectViewport">
                      <Select.Group>
                        <Select.Label className="SelectLabel">
                          Subjects
                        </Select.Label>
                        <Select.Item className="SelectItem" value="All">
                          <Select.ItemText>All</Select.ItemText>
                          <Select.ItemIndicator className="SelectItemIndicator">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item className="SelectItem" value="Physics">
                          <Select.ItemText>Physics</Select.ItemText>
                          <Select.ItemIndicator className="SelectItemIndicator">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item className="SelectItem" value="Maths">
                          <Select.ItemText>Maths</Select.ItemText>
                          <Select.ItemIndicator className="SelectItemIndicator">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item className="SelectItem" value="Astronomy">
                          <Select.ItemText>Astronomy</Select.ItemText>
                          <Select.ItemIndicator className="SelectItemIndicator">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                      </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="SelectScrollButton">
                      <ChevronDownIcon />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
            <div className="books-container">
              {filteredBooks.length === 0 ? (
                <p>Empty</p>
              ) : (
                filteredBooks.map((book) => (
                  <BookCard {...book} key={book.bookName} />
                ))
              )}
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
