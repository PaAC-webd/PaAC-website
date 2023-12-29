import { useParams } from "react-router-dom";

const EventD = () => {
  const { eventName } = useParams();
  const decodedTitle = decodeURIComponent(eventName);

  return <div>hi {decodedTitle}</div>;
};

export default EventD;
