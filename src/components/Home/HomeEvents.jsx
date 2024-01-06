import { home_events } from "./HomeEventsData";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

import { CalendarIcon } from "@radix-ui/react-icons";
// add a better ease function for the hover effect
// and the movement animation
const HomeEvents = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      spaceBetween={90}
      slidesPerView={2.5}
      autoplay={{
        delay: 3000,
      }}
      breakpoints={{
        1240: {
          spaceBetween: 250,
        },
        900: {
          spaceBetween: 150
        },
        769: {
          spaceBetween: 80,
          // slidesPerView: 2.5,
        },
        0: {
          spaceBetween: 40,
          slidesPerView: .8,
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
      {home_events.map((event) => (
        <SwiperSlide>
          <div className="home-event-card">
            <h1 className="home-event-title">{event.title}</h1>
            <img src={event.image} alt="" className="home-event-image"/>
            <div className="home-event-time">
              <CalendarIcon />{" "}
              {event.date}
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
