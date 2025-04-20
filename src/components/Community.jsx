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
  },

  {
    name: 'Women Who Code',
    description: 'A global community for women in technology, offering events, resources, and networking opportunities.',
    link: 'https://www.womenwhocode.com/',
    image: '/src/images/womenwhocode.png'
  },
  {
    name: 'Dev.to',
    description: 'A community of developers writing about programming, coding, and tech in a supportive and inclusive environment.',
    link: 'https://dev.to/',
    image: '/src/images/dev.png'
  },
  {
    name: 'CodeNewbie',
    description: 'A supportive community for people learning to code, providing resources, podcasts, and events.',
    link: 'https://www.codenewbie.org/',
    image: '/src/images/codenewb.png'
  },
  {
    name: 'GitHub Education Community',
    description: 'A platform for students and educators to share projects, connect with others, and learn through code.',
    link: 'https://education.github.com/',
    image: '/src/images/githubeducation.png'
  },
  {
    name: 'Reactiflux',
    description: 'A community of developers who use React, offering discussions, support, and resources.',
    link: 'https://www.reactiflux.com/',
    image: '/src/images/reactiflux.png'
  },
  {
    name: 'FreeCodeCamp',
    description: 'A community for learning to code, with a vast curriculum, certifications, and an active forum for support.',
    link: 'https://www.freecodecamp.org/',
    image: '/src/images/freecodecamp.png'
  },
  {
    name: 'Techstars Community',
    description: 'A global network of entrepreneurs, investors, and innovators collaborating to build successful startups.',
    link: 'https://www.techstars.com/communities',
    image: '/src/images/techstars.png'
  },
  {
    name: 'Open Source Design',
    description: 'A community for designers who are passionate about open-source projects, offering resources and networking opportunities.',
    link: 'https://opensourcedesign.net/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Open_Source_Design_logo.png'
  },
  {
    name: 'Serverless Community',
    description: 'A community for developers building serverless applications, with events, meetups, and discussions about serverless technologies.',
    link: 'https://www.serverless.com/community/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Serverless_Logo.png'
  },
  {
    name: 'Vue.js Community',
    description: 'A community of developers who use Vue.js, offering resources, events, and discussions about building with Vue.',
    link: 'https://vuejs.org/community/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
  },
  {
    name: 'Node.js Foundation',
    description: 'A community of developers focused on the Node.js runtime, offering resources, events, and support for building applications.',
    link: 'https://nodejs.org/en/community/',
    image: '/src/images/nodejsfoundation.png'
  },
  {
    name: 'The Pragmatic Programmer Community',
    description: 'A community for developers to share knowledge, resources, and experiences, focusing on personal and professional growth.',
    link: 'https://pragprog.com/',
    image: '/src/images/pragmatic.jpeg'
  },
  {
    name: 'Designers Hangout',
    description: 'A community for designers to connect, share ideas, and learn from each other in a collaborative environment.',
    link: 'https://designershangout.co/',
    image: '/src/designhangout.png'
  },
  {
    name: 'ClojureScript Community',
    description: 'A community for developers using ClojureScript, an innovative functional programming language.',
    link: 'https://clojurescript.org/community',
    image: '/src/images/clojurescript.png'
  },
  {
    name: 'Google Developer Experts',
    description: 'A global network of experts who share their knowledge and expertise through speaking, writing, and mentoring.',
    link: 'https://developers.google.com/programs/experts',
    image: '/src/images/gdgexperts.png'
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
