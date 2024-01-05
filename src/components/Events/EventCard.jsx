import { CalendarIcon } from "@radix-ui/react-icons";
import "./Events.css";

export default function EventCard(props) {
  const encodedTitle = encodeURIComponent(props.title);
  return (
    <div className="recent-event">
      <div className="recent-top">
        <h1 className="recent-event-title">{props.title}</h1>
        <img src={props.image} alt="" className="recent-event-image" />
        <h2 className="recent-event-time">
          <CalendarIcon /> {props.date}
        </h2>
      </div>

      <div className="recent-divider" />
      <div className="recent-bottom">
        <p className="recent-event-details">{props.details}</p>
        <button className="recent-event-share-button">
          <a href={`/event/${encodedTitle}`}>Learn more</a>
        </button>
      </div>
    </div>
  );
}
