import "./Events.css";

import { Upcoming } from "./EventsData.js";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CalendarIcon, GlobeIcon } from "@radix-ui/react-icons";


const UpcomingEvent = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      // centeredSlides={true}
      loop={true}
      spaceBetween={90}
      slidesPerView={2.5}
      autoplay={{
        delay: 3000,
      }}
      breakpoints={{
        830: {
          spaceBetween: 90,
        },
        750: {
          spaceBetween: 40,
          slidesPerView: 2.5,
        },
        0: {
          spaceBetween: 20,
          slidesPerView: 0.8,
        },
      }}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ dynamicBullets: true }}
      modules={[Pagination, EffectCoverflow, Autoplay]}
      className="swiper_container"
    >
      {Upcoming.map((up) => (
        <SwiperSlide>
          <div className="event-card">
            <h1 className="event-title">
              {up.title} {up.id}
            </h1>
            <div className="event-time">
              <CalendarIcon /> {up.date}
            </div>
            <div className="event-location">
              <GlobeIcon /> {up.location}
            </div>
            <hr className="divider" />
            <p className="event-details">{up.details}</p>
            <button className="event-share-button">Share</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default UpcomingEvent;
