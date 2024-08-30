import { home_events } from "./HomeEventsData";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CalendarIcon } from "@radix-ui/react-icons";

const HomeEvents = () => {
  return (
    <Swiper
      // effect={"coverflow"}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      spaceBetween={90}
      slidesPerView={2.5}
      // autoplay={{
      //   delay: 3000
      // }}
      breakpoints={{
        1240: {
          spaceBetween: 250,
        },
        900: {
          spaceBetween: 150,
        },
        769: {
          spaceBetween: 80,
        },
        0: {
          spaceBetween: 40,
          slidesPerView: 1,
        },
      }}
      // coverflowEffect={{
      //   rotate: 0,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: false
      // }}
      pagination={{ dynamicBullets: true, clickable: true }}
      modules={[Pagination, EffectCoverflow, Autoplay]}
      className="swiper_container"
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      {home_events.map((event, index) => (
        <SwiperSlide key={index} className="home-section-swiper-slide">
          <div className="home-event-card">
            <img src={event.image} alt="" className="home-event-image" />
            <h1 className="home-event-title">{event.title}</h1>

            <div className="home-event-time">
              <CalendarIcon /> {event.date}
            </div>
            {/* <div className="event-location">
              <GlobeIcon /> {up.venueOfEvent}
            </div> */}
            <hr className="divider" />
            <p className="upcoming-event-details">{event.desc}</p>
            {/* <button className="event-share-button">Share</button> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeEvents;
