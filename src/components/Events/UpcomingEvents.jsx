import "./Events.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CalendarIcon, GlobeIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const spaceId = import.meta.env.VITE_SPACE_ID;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const UpcomingEvent = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query: `query {
            newEventsCollection {
              items {
                titleOfEvent
                dateAndTimeOfEvent
                venueOfEvent
                descriptionOfEvent
              }
            }
          }`,
        }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setEvents(data.newEventsCollection.items);
      });
  }, []);

  if (!events) {
    return "Loading....";
  }

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      spaceBetween={90}
      slidesPerView={2.5}
      centeredSlides={true}
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
          slidesPerView: 1,
        },
      }}
      coverflowEffect={{
        rotate: 10,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        pauseOnMouseEnter: true,
      }}
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
      {events.map((up, index) => (
        <SwiperSlide key={index}>
          <div className="event-card">
            <h1 className="event-title">{up.titleOfEvent}</h1>
            <div className="event-time">
              <CalendarIcon /> {`${up.dateAndTimeOfEvent.substring(0, 10)}`}
            </div>
            <div className="event-location">
              <GlobeIcon /> {up.venueOfEvent}
            </div>
            <hr className="divider" />
            <p className="upcoming-event-details">{up.descriptionOfEvent}</p>
            {/* <button className="event-share-button">Share</button> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default UpcomingEvent;
