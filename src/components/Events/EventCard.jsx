import "./Events.css";

export default function EventCard(props) {
  const encodedTitle = encodeURIComponent(props.title);
  return (
    <div className="EventCard-container">
      <h1 className="event-title">{props.title}</h1>
      <div className="event-info">
        <h2 className="event-time">
          {" "}
          <i className="icon-clock"></i> {props.date}
        </h2>
        <h2 className="event-location">
          {" "}
          <i className="icon-location"></i> {props.location}
        </h2>
        <hr className="divider" />
        <p className="event-details">{props.details}</p>
      </div>
      <button className="event-share-button">
        <a href={`/event/${encodedTitle}`}>Learn more</a>
      </button>
    </div>
  );
}
