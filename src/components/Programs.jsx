import React from 'react';
import './Programs.css';

const programs = [
  {
    title: "Google Arcade",
    description: "Gamified platform by Google to learn tech with challenges and rewards.",
    link: "https://arcade.withgoogle.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    title: "Microsoft Imagine Cup",
    description: "Global student tech competition by Microsoft.",
    link: "https://imaginecup.microsoft.com/",
    image: "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png"
  },
  {
    title: "UN Online Volunteering",
    description: "Contribute to global causes from home through the UN volunteering portal.",
    link: "https://www.onlinevolunteering.org/en",
    image: "/src/images/unvolunters.png"
  },
  {
    title: "AWS Educate",
    description: "Free cloud computing learning platform for students to build skills with AWS technologies.",
    link: "https://aws.amazon.com/education/awseducate/",
    image: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
  },

  {
    title: "MLH Fellowship",
    description: "Global remote internship program for aspiring software engineers, data scientists, and designers.",
    link: "https://fellowship.mlh.io/",
    image: "/src/images/mlhfellowship.jpg"
  },

  {
    title: "Harvard CS50",
    description: "Free online introductory course on Computer Science from Harvard University.",
    link: "https://cs50.harvard.edu/x/",
    image: "/src/images/harvardcs50.jpg"
  },

  {
    title: "Hack Club",
    description: "A worldwide community of high school hackers creating amazing tech projects and learning together.",
    link: "https://hackclub.com/",
    image: "/src/images/harvardcs50.jpg"
  },

  {
    title: "LinkedIn Learning for Students",
    description: "Free access to premium courses for students to learn business, creative, and tech skills.",
    link: "https://learning.linkedin.com/",
    image: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
  },

  {
    title: "Codecademy Learn Paths",
    description: "Guided coding paths to learn web development, data science, and more interactively.",
    link: "https://www.codecademy.com/catalog",
    image: "/src/images/codecademy.avif"
    
  },

  {
    title: "Internshala Trainings",
    description: "Practical, project-based online training in tech, business, and design for students.",
    link: "https://trainings.internshala.com/",
    image: "https://internshala.com/static/images/common/new_internshala_logo.svg"
  },

  {
    title: "Outreachy Internships",
    description: "Paid remote internships supporting open source for underrepresented communities.",
    link: "https://www.outreachy.org/",
    image: "/src/images/outreachy.png"
  },

  {
    title: "GitHub Campus Program",
    description: "Free GitHub Pro, tools, and learning resources for students to build and ship projects.",
    link: "https://education.github.com/pack",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  }
  // Add more program cards here
];

const Programs = () => {
  return (
    <div className="programs-container">
      {/* <h1 className="programs-header">Explore Skill-Building Opportunities</h1> */}
      <p className="programs-subheading">
      Discover programs that help you build new skills, gain practical experience, and explore exciting career opportunities. Whether you're interested in tech, business, or volunteering, there's something for you!
      </p>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <img src={program.image} alt={program.title} className="program-image" />
            <h2 className="program-title">{program.title}</h2>
            <p className="program-description">{program.description}</p>
            <a href={program.link} target="_blank" rel="noopener noreferrer">
              <button className="visit-button">Visit</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
