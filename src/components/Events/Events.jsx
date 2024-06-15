import "./Events.css";
import Footer from "../Footer/Footer";
import { Recent } from "./EventsData.js";
import EventCard from "./EventCard";
import UpcomingEvents from "./UpcomingEvents.jsx";
import { useEffect } from "react";
export default function Events() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })

  return (
    <div className="events-container">
      {/* <div className="events-topbar">
        <Topbar />
      </div> */}
      <div className="upcoming-events-container">
        <h1 className="events-heading-title">Upcoming</h1>
        <div className="upcoming-events">
          <UpcomingEvents />
        </div>
      </div>
      <div className="recent-events-container">
        <h1 className="events-heading-title">Recent</h1>
        <div className="events-recent">
          {Recent.map((data) => (
            <EventCard
              key={data.id}
              title={data.title}
              date={data.date}
              location={data.location}
              details={data.details}
              image={data.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
