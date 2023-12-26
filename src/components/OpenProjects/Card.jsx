import { CalendarIcon } from "@radix-ui/react-icons"

const ProjectCard = ({title, date, image, details}) => {
  return (
    <div className="project-card">
        <img src={image} alt="" className="project-image"/>
        <h2 className="project-title">{title}</h2>
        <p className="project-details">{details}</p>
        <p className="data"><CalendarIcon/>{date}</p>
        <button className="button">Details</button>
    </div>
  )
}

export default ProjectCard