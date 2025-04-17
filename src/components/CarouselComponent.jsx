import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import axios from "axios";
import "../components/carousel.css"; // Ensure this exists

const BASE_URL = "http://localhost:8080"; // Adjust if different

const CarouselComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/events`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={events.length < 3 ? events.length : "auto"} // Avoid loop issue
      loop={events.length >= 3} // Loop only if there are enough slides
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Navigation, Pagination]}
      className="mySwiper"
    >
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <div className="slide-container">
            <img
              src={event.imageUrl ? event.imageUrl : "/placeholder.jpg"} // ✅ Fixed: Uses `imageUrl`
              alt={event.title}
              className="slide-image"
            />
            <div className="event-overlay">
              <div className="event-text">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              <a href={event.link} className="register-btn">
                Register Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
