import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  date,
  description,
  compressedLink,
  duration,
  image,
}) => {
  return (
    <a href={compressedLink} target="_blank" rel="noreferrer">
      <div className="project-card">
        <img src={image.url} alt="" className="project-image" />
        <h2 className="project-title">{title}</h2>
        <p className="project-date">
          <CalendarIcon /> {date.substring(0, 10)}
        </p>
        <p className="project-date">
          <TimerIcon /> {duration} weeks
        </p>

        {/* <p className="project-details">{description}</p> */}
        <a
          href={compressedLink}
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Learn more
        </a>
      </div>
    </a>
  );
};

export default ProjectCard;
