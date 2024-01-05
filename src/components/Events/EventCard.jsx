import { CalendarIcon } from "@radix-ui/react-icons";
import "./Events.css";

export default function EventCard(props) {
  const encodedTitle = encodeURIComponent(props.title);
  return (
    <a
      href={`/event/${encodedTitle}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="recent-event">
        <div className="recent-top">
          <img src={props.image} alt="" className="recent-event-image" />
          <h1 className="recent-event-title">{props.title}</h1>
          <h2 className="recent-event-time">
            <CalendarIcon /> {props.date}
          </h2>
        </div>
        <div className="recent-divider" />
        <div className="recent-bottom">
          <p className="recent-event-details">{props.details}</p>
        </div>
        <a href={`/event/${encodedTitle}`} className="learn-button">
          Learn more
        </a>
      </div>
    </a>
  );
}
