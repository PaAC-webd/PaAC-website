import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";

const ProjectCard = ({
  title,
  date,
  description,
  compressedLink,
  duration,
  image,
}) => {
  return (
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
      <button className="button">
        <a href={compressedLink} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </button>
    </div>
  );
};

export default ProjectCard;
