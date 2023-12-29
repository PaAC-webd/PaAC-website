import { CalendarIcon, GlobeIcon } from "@radix-ui/react-icons";
import "./Events.css";

export default function EventCard(props) {
  // const encodedTitle = encodeURIComponent(props.title);
  return (
    <div className="recent-event">
      <div>
        <h2 className="recent-event-time">
          <CalendarIcon /> {props.date}
        </h2>
        <img src={props.image} alt="" className="recent-event-image" />
        <h1 className="recent-event-title">{props.title}</h1>
        <div className="recent-divider" />
      </div>
      {/* <h2 className="event-location">
          <GlobeIcon/> {props.location}
        </h2> */}
      <div>
        <p className="recent-event-details">{props.details}</p>
        <button className="recent-event-share-button">
          {/* <a href={`/event/${props.title}`}>Learn more</a> */}
          Details
        </button>
      </div>
    </div>
  );
}
