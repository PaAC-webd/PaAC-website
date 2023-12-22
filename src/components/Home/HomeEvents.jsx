import { home_events } from "./HomeEventsData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "./home.css";
import { CalendarIcon } from "@radix-ui/react-icons";
// add a better ease function for the hover effect
// and the movement animation
const HomeEvents = () => {
  return (
    <>
      <Splide
        options={{
          type: "loop",
          width: "100vw",
          perPage: 3,
          breakpoints: {
            1060: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          },
          gap: "3rem",
          autoScroll: {
            speed: 2,
            pauseOnFocus: false,
          },
          arrows: false,
          pagination: false,
        }}
        extensions={{ AutoScroll }}
      >
        {home_events.map((home_event) => (
          <SplideSlide>
            <div className="home-event-card">
              <h1 className="home-event-title">{home_event.title}</h1>
              <h2 className="home-event-time">
                <CalendarIcon /> {home_event.date}
              </h2>
              <h2 className="home-event-location">
                {" "}
                <i className="icon-location"></i>
                {home_event.location}
              </h2>
              <div className="home-events-photo-container">
                <img
                  className="home-events-photo"
                  src={home_event.image}
                  alt=""
                />
              </div>
              {/* <hr className="divide" /> */}
              <p className="home-event-description">{home_event.desc}</p>
              <button className="home-event-share-button">Details</button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default HomeEvents;
