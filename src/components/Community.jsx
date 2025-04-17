import React from 'react';
import './Community.css';

const communities = [
  {
    name: 'Google Developer Group',
    description: 'Connect with developers around the world, attend meetups, and access exclusive tech events by Google.',
    link: 'https://developers.google.com/community/gdg',
    image: '/src/images/gdg.jpg'
  },
  {
    name: 'Rewriting the Code (RTC)',
    description: 'A global community for women in tech offering mentorship, career support, and internships.',
    link: 'https://rewritingthecode.org/',
    image: '/src/images/rtc.png'
  },
  {
    name: 'AWS Community Builders',
    description: 'Join builders passionate about AWS and cloud technologies. Get access to resources and events.',
    link: 'https://aws.amazon.com/developer/community/community-builders/',
    image: '/src/images/AWS.jpg'
  },
  {
    name: 'Figma Community',
    description: 'Explore and connect with designers and developers using Figma. Share, remix and explore UI kits and plugins.',
    link: 'https://www.figma.com/community',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
  },
  {
    name: 'Microsoft Learn Student Ambassadors',
    description: 'Join a global group of student leaders focused on technology and community impact through Microsoft.',
    link: 'https://studentambassadors.microsoft.com/',
    image: 'https://learn.microsoft.com/en-us/media/learn/student-ambassadors/student-ambassadors-hero.png'
  },
  {
    name: 'Hack Club',
    description: 'A worldwide network of high school coding clubs where students learn to code through hands-on projects.',
    link: 'https://hackclub.com/',
    image: 'https://assets-global.website-files.com/5d9bc5c00eaedba00e1c6d9a/5f1f3e364ab2f853c8d7b80a_Hack%20Club%20Flag%20Logo.png'
  }
];

const Community = () => {
  return (
    <div className="community-container">
      {/* <h1 className="community-title">Join a Community</h1> */}
      <p className="community-subtitle">Explore amazing tech communities and start your journey of learning and networking!</p>
      <div className="community-cards">
        {communities.map((community, index) => (
          <div className="community-card" key={index}>
            <img src={community.image} alt={community.name} className="community-logo" />
            <h3>{community.name}</h3>
            <p>{community.description}</p>
            <a href={community.link} target="_blank" rel="noopener noreferrer">
              <button className="join-btn">Join Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
