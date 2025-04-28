import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./hackathonCarousel.css";

const hackathons = [
  {
    title: "Smart India Hackathon",
    location: "India",
    type: "india",
    organizer: "Ministry of Education, AICTE",
    reputation: "Government-backed, nationwide",
    focus: "Government & industrial problem statements",
    timing: "Software (Aug–Sept), Hardware (Oct–Nov)",
    description: "Nationwide initiative to provide students a platform to solve pressing problems.",
    link: "https://www.sih.gov.in/"
  },
  {
    title: "Facebook Hacker Cup",
    location: "Global",
    type: "global",
    organizer: "Meta",
    focus: "Competitive programming",
    reputation: "Facebook's global coding competition",
    timing: "Mid-year annually",
    description: "Annual programming competition held by Facebook.",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup"
  },
  {
    title: "Flipkart Grid Challenge",
    location: "India",
    type: "india",
    organizer: "Flipkart",
    audience: "Students across India",
    focus: "Tech + business case challenges",
    timing: "May–August",
    description: "Flipkart's annual tech challenge for students across India.",
    link: "https://unstop.com/competitions/flipkart-grid-50-software-development-track-flipkart-838557"
  },
  {
    title: "Google Solution Challenge",
    location: "Global",
    type: "global",
    organizer: "Google Developer Student Clubs",
    focus: "UN Sustainable Development Goals",
    timing: "January–April",
    description: "Create tech-based solutions for the UN SDGs with GDSC.",
    link: "https://developers.google.com/community/gdsc-solution-challenge"
  },
  {
    title: "HackInOut",
    location: "India",
    type: "india",
    organizer: "Developer Community",
    reputation: "India's largest invite-only hackathon",
    timing: "Annually",
    description: "Premier invite-only hackathon for top developers in India.",
    link: "https://hackinout.co/"
  }
];

const HackathonCard = ({ hackathon }) => {
  const getCardColor = () => {
    return hackathon.type === "global" 
      ? "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)" 
      : "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)";
  };

  const getIcon = () => {
    return hackathon.type === "global" ? "🌍" : "🇮🇳";
  };

  return (
    <div 
      className="hackathon-card"
      style={{ background: getCardColor() }}
    >
      <div className="card-header">
        <h3>
          {hackathon.title}
          <span className="hackathon-icon">{getIcon()}</span>
        </h3>
      </div>
      <div className="card-body">
        <div className="card-detail">
          <span className="detail-label">Location:</span>
          <span className="detail-value">{hackathon.location}</span>
        </div>
        <div className="card-detail">
          <span className="detail-label">Organizer:</span>
          <span className="detail-value">{hackathon.organizer}</span>
        </div>
        {hackathon.audience && (
          <div className="card-detail">
            <span className="detail-label">Audience:</span>
            <span className="detail-value">{hackathon.audience}</span>
          </div>
        )}
        <div className="card-detail">
          <span className="detail-label">Timing:</span>
          <span className="detail-value">{hackathon.timing}</span>
        </div>
        {hackathon.reputation && (
          <div className="card-reputation">
            <em>{hackathon.reputation}</em>
          </div>
        )}
        <div className="card-description">
          <p>{hackathon.description}</p>
        </div>
      </div>
      <div className="card-footer">
        <a 
          href={hackathon.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="register-btn"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const HackathonCarousel = () => {
  return (
    <div className="hackathon-carousel-container">
      <h2 className="carousel-title">Featured Hackathons</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={hackathons.length < 3 ? hackathons.length : "auto"}
        loop={hackathons.length >= 3}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="hackathon-swiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: hackathons.length < 3 ? hackathons.length : 3,
          },
        }}
      >
        {hackathons.map((hackathon, index) => (
          <SwiperSlide key={index}>
            <HackathonCard hackathon={hackathon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HackathonCarousel;