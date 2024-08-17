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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

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
        {/* <div className="library-topbar">
          <Topbar />
        </div> */}
        <section className="library">
          <div className="library-top">
            <h1>Our Library</h1>
            <p>
              Welcome to our Library, <b>The Einstein Library</b> which has few
              but significant books. There are books on Astronomy, Mathematics
              and Physics. It also has a collection of cosmic photographs,
              including both that we have collected and taken ourselves. You are
              welcome to visit the PaAC room and get access to the club library.
              You can also donate books and help us promote the sciences.
              <br />
              <b>Note: </b>We don&apos;t lend books but you can read whatever you want to in the club room.
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
