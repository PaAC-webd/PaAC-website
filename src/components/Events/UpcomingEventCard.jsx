import "./Events.css";

import {Upcoming} from "./EventsData.js"


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


export default function UpcomingEventCard(){
    return( <>

<Swiper
effect={'coverflow'}
grabCursor={true}
centeredSlides={true}
loop={true}
slidesPerView={Upcoming.length}
Keyboard={{enabled: true}}
coverflowEffect={{
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2.5,
  breakpoints: {
    1024: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1
    }
  },
}}
pagination={{ clickable: true }}
navigation={{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  clickable: true,
}}
modules={[Keyboard, EffectCoverflow, Pagination, Navigation]}
className="swiper_container"
> 
 {Upcoming.map((up) => ( 
 <SwiperSlide>   

        <div className="EventCard-container">
            <h1 className="event-title">{up.title} {up.id}</h1>
            <div className="event-info">
            <h2 className="event-time">  <i className="icon-clock"></i> {up.date}</h2>
            <h2 className="event-location">  <i className="icon-location"></i> {up.location}</h2>
            <hr className="divider" />
            <p className="event-details">{up.details}</p>
        </div>
        <button className="event-share-button">Share</button>
        </div>

        </SwiperSlide>))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        </Swiper> 

        </>
    );
}