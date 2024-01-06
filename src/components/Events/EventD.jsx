import { useParams } from "react-router-dom";
import "./DetailedEvents.css";
import Topbar from "../Topbar/Topbar";
import { CalendarIcon } from "@radix-ui/react-icons";
import Footer from "../Footer/Footer";
import { detailed } from "./EventsData";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";

const EventD = () => {
  const { eventName } = useParams();
  const decodedTitle = decodeURIComponent(eventName);

  const event = detailed.find((event) => event.title === decodedTitle);
  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div className="detailed-event">
        <div className="event-info">
          <h1 className="event-heading">{event.title}</h1>
          <h5 className="event-schedule">
            <span className="calender-icon">
              <CalendarIcon />
            </span>
            <span>{event.date}</span>
          </h5>
          <div className="event-details-d">
            <p className="desc-para">{event.description}</p>
          </div>
          <div className="event-gallery">
            <LightGallery speed={500} plugins={[lgThumbnail]}>
              {event.images.map((image, index) => (
                <a key={index} href={image}>
                  <img src={image} />
                </a>
              ))}
            </LightGallery>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default EventD;
