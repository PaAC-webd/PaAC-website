import { useParams } from "react-router-dom";
import image1 from '../assets/Events/image_9.png'
import image2 from '../assets/Events/image_10.png'
import './DetailedEvents.css'
import Topbar from "../Topbar/Topbar";
import { CalendarIcon } from "@radix-ui/react-icons";

const EventD = () => {
  const { eventName } = useParams();
  const decodedTitle = decodeURIComponent(eventName);

  return (
    <div>
      <div>
        <Topbar/>
      </div>
      <div className="detailed-event">
        <div className="event-top">
          <div><img src={image1} alt="" className="image-1"/></div>
          <div className="event-info">
            <h1 className="event-heading">{decodedTitle}</h1>
            <h5 className="event-schedule">
              <span className="calender-icon"><CalendarIcon/></span>
              <span>17 - 21 August</span>
            </h5>
          </div>
        </div>
        <div className="event-details">
          <p className="desc-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae nihil quae id nesciunt sequi repellendus vero quidem officiis maxime, ad fugit provident animi rerum deserunt, perferendis beatae libero. Perferendis, sapiente placeat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur exercitationem, provident accusantium laboriosam libero? Dicta, quisquam laborum harum, voluptate delectus sapiente eius libero magnam incidunt voluptas reiciendis. Autem nemo minus harum molestiae quasi neque consectetur officia, nulla tempore reprehenderit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores earum aliquid itaque quia nisi porro ipsa a blanditiis, sint sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, totam? Similique fuga odio cumque, laboriosam accusantium reprehenderit doloremque sapiente sed.</p>

          <p className="desc-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, possimus velit deleniti ratione itaque hic laboriosam quia mollitia odio tenetur aliquid? Distinctio quibusdam rem aperiam quae deserunt, ad eligendi eius ipsum quo et, quia nam consequatur cum aliquam illo, dolorum doloremque debitis asperiores at? Officia non id corporis illum ipsa ipsum deleniti? Dolorum magni et quibusdam. Perspiciatis, eveniet aliquam. Sit expedita debitis minus esse labore sint deserunt quibusdam optio quas, qui hic ex dolor laudantium, tempore voluptas reiciendis quia aliquid. Dolore libero cupiditate ducimus soluta deserunt suscipit inventore cum! Voluptatibus odit est fuga enim beatae nostrum at cumque consectetur?</p>

          <p className="desc-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at, architecto quis nobis, quia ratione animi error minima quos obcaecati itaque delectus debitis earum minus sapiente! Magni nulla perspiciatis dicta?</p>

          <div className="desc-2">
            <div>
            <p className="desc-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo facere esse cum veritatis tempore quam deleniti, quaerat ullam vitae accusantium qui amet aperiam, reiciendis aliquam illum explicabo dicta odit veniam quasi placeat. Dolorum, ad! Repudiandae eum labore distinctio perferendis nemo.</p>
            <p className="desc-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo facere esse cum veritatis tempore quam deleniti, quaerat ullam vitae accusantium qui amet aperiam, reiciendis aliquam illum explicabo dicta odit veniam quasi placeat. Dolorum, ad! Repudiandae eum labore distinctio perferendis nemo.</p>
            <p className="desc-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo facere esse cum veritatis tempore quam deleniti, quaerat ullam vitae accusantium qui amet aperiam, reiciendis aliquam illum explicabo dicta odit veniam quasi placeat. Dolorum, ad! Repudiandae eum labore distinctio perferendis nemo.</p>
            </div>
            <img src={image2} alt="" className="image-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventD;
