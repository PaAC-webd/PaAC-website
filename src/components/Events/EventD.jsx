import { useParams } from "react-router-dom";
import "./DetailedEvents.css";
import Topbar from "../Topbar/Topbar";
import { CalendarIcon } from "@radix-ui/react-icons";
import Footer from "../Footer/Footer";
import Slideshow from "./Slideshow";

const EventD = () => {
  const { eventName } = useParams();
  const decodedTitle = decodeURIComponent(eventName);

  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div className="detailed-event">
        <Slideshow />
        <div className="event-info">
          <h1 className="event-heading">{decodedTitle}</h1>
          <h5 className="event-schedule">
            <span className="calender-icon">
              <CalendarIcon />
            </span>
            <span>17 - 21 August</span>
          </h5>
          <div className="event-details-d">
            <p className="desc-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              molestiae nihil quae id nesciunt sequi repellendus vero quidem
              officiis maxime, ad fugit provident animi rerum deserunt,
              perferendis beatae libero. Perferendis, sapiente placeat? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consectetur exercitationem, provident accusantium laboriosam
              libero? Dicta, quisquam laborum harum, voluptate delectus sapiente
              eius libero magnam incidunt voluptas reiciendis. Autem nemo minus
              harum molestiae quasi neque consectetur officia, nulla tempore
              reprehenderit! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolores earum aliquid itaque quia nisi porro ipsa a
              blanditiis, sint sequi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quidem, totam? Similique fuga odio cumque,
              laboriosam accusantium reprehenderit doloremque sapiente sed.
            </p>
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
