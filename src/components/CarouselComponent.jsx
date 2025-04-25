import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./carousel.css";
import "./hackathonCarousel.css";

const hackathons = [
  // {
  //   title: "HackMIT",
  //   location: "USA",
  //   type: "global",
  //   organizer: "MIT",
  //   audience: "Global, top student hackers",
  //   reputation: "One of the most prestigious university hackathons",
  //   timing: "September annually",
  //   description: "One of the world's top university hackathons organized by MIT.",
  //   imageUrl: "/images/hackmit.jpg",
  //   link: "https://hackmit.org/"
  // },
  {
    title: "Smart India Hackathon",
    location: "India",
    type: "india",
    organizer: "Ministry of Education, AICTE",
    reputation: "Government-backed, nationwide",
    focus: "Government & industrial problem statements",
    timing: "Software (Aug–Sept), Hardware (Oct–Nov)",
    description: "Nationwide initiative to provide students a platform to solve pressing problems.",
    imageUrl: "src/images/smartindiahackathon.jpeg",
    link: "/src/images/outreachy.png"
  },
  // {
  //   title: "ETHGlobal Hackathons",
  //   location: "Global",
  //   type: "global",
  //   organizer: "ETHGlobal",
  //   focus: "Blockchain, Web3",
  //   reputation: "Top platform for Web3 hackers",
  //   timing: "Multiple times a year",
  //   description: "Global Web3 innovation hackathons organized by ETHGlobal.",
  //   imageUrl: "/images/ethglobal.jpg",
  //   link: "https://ethglobal.com/"
  // },
  {
    title: "Facebook Hacker Cup",
    location: "Global",
    type: "global",
    organizer: "Meta",
    focus: "Competitive programming",
    reputation: "Facebook's global coding competition",
    timing: "Mid-year annually",
    description: "Annual programming competition held by Facebook.",
    imageUrl: "src/images/facebookcup.jpeg",
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
    imageUrl: "src/images/flipcartgrid.jpeg",
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
    imageUrl: "src/images/solutionchallenge.png",
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
    imageUrl: "src/images/hackinout.jpeg",
    link: "https://hackinout.co/"
  },
  // {
  //   title: "Junction",
  //   location: "Finland",
  //   type: "global",
  //   organizer: "Junction",
  //   audience: "International participants",
  //   timing: "November",
  //   description: "Europe's leading hackathon bringing together tech enthusiasts.",
  //   imageUrl: "/images/junction.jpg",
  //   link: "https://www.hackjunction.com/"
  // }
];

const HackathonCarousel = () => {
  return (
    <div className="hackathon-carousel-container">
      <h2 className="carousel-title">🌍 Global & 🇮🇳 Indian Hackathons</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={hackathons.length < 3 ? hackathons.length : "auto"}
        loop={hackathons.length >= 3}
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
        className="hackathon-swiper"
      >
        {hackathons.map((hackathon, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img src={hackathon.imageUrl} alt={hackathon.title} className="slide-image" />
              <div className="event-overlay">
                <div className="event-text">
                  <h3>
                    {hackathon.title} 
                    <span className={`hackathon-badge ${hackathon.type}`}>
                      {hackathon.type === "global" ? "🌍 Global" : "🇮🇳 India"}
                    </span>
                  </h3>
                  <p><strong>Location:</strong> {hackathon.location}</p>
                  <p><strong>Organizer:</strong> {hackathon.organizer}</p>
                  {hackathon.audience && <p><strong>Audience:</strong> {hackathon.audience}</p>}
                  <p><strong>Timing:</strong> {hackathon.timing}</p>
                  {hackathon.reputation && <p><em>{hackathon.reputation}</em></p>}
                </div>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HackathonCarousel;