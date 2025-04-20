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
  },

  {
    title: "Google Summer of Code",
    description: "An annual program sponsored by Google that offers stipends to university students for working on open-source projects.",
    link: "https://summerofcode.withgoogle.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Google_Summer_of_Code_logo.svg"
  },
  {
    title: "IBM SkillsBuild",
    description: "A free platform to help students develop career skills with resources for cloud computing, data science, cybersecurity, and more.",
    link: "https://skillsbuild.org/",
    image: "https://www.ibm.com/blog/wp-content/uploads/2019/10/skillsbuild-logo.svg"
  },
  {
    title: "Udemy Free Courses for Students",
    description: "Udemy offers a collection of free courses for students on topics such as programming, data science, and business.",
    link: "https://www.udemy.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Udemy_logo_2018.svg"
  },
  {
    title: "Kaggle Learn",
    description: "Kaggle offers free micro-courses to learn data science and machine learning through practical projects.",
    link: "https://www.kaggle.com/learn",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kaggle_logo.png"
  },
  {
    title: "Mozilla Open Leaders Program",
    description: "A program by Mozilla to help students and professionals contribute to open source software and leadership skills.",
    link: "https://foundation.mozilla.org/en/initiatives/open-leaders/",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mozilla_logo_2017.svg"
  },
  {
    title: "Turing Fellowship",
    description: "A fellowship program providing remote internships for talented students interested in artificial intelligence and software development.",
    link: "https://www.turing.com/fellowship",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Turing_logo.png"
  },
  {
    title: "Coursera for Students",
    description: "Coursera offers free and discounted access to its courses for students, covering various tech, business, and personal development topics.",
    link: "https://www.coursera.org/",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Coursera_Logo.svg"
  },
  {
    title: "Google AI Residency Program",
    description: "A 12-month research training role designed to jumpstart careers in AI research.",
    link: "https://ai.google/education/ai-residency/",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Google_AI_logo.svg"
  },
  {
    title: "AWS Activate for Startups",
    description: "AWS Activate provides startups with the resources they need to scale and grow with AWS credits, training, and support.",
    link: "https://aws.amazon.com/activate/",
    image: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
  },
  {
    title: "Facebook Developer Circles",
    description: "Join a community of developers to collaborate on projects, learn new skills, and connect with other developers globally.",
    link: "https://developers.facebook.com/developercircles/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Facebook_Developer_Circles_logo.png"
  },
  {
    title: "Codewars",
    description: "A community-driven platform for learning programming through challenges and coding kata.",
    link: "https://www.codewars.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Codewars_logo.svg"
  },
  {
    title: "Women Who Code",
    description: "A global community that inspires women to excel in technology careers with events, resources, and networking opportunities.",
    link: "https://www.womenwhocode.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Women_Who_Code_logo.svg"
  },
  {
    title: "Techstars Startup Programs",
    description: "Mentorship-driven accelerator programs to help startups succeed by connecting them with investors, mentors, and partners.",
    link: "https://www.techstars.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Techstars_logo.svg"
  },
  {
    title: "OpenAI Fellowship",
    description: "A fellowship that aims to support underrepresented groups in AI by providing them with opportunities to advance in the field.",
    link: "https://openai.com/research/fellowship",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/OpenAI_Logo_2020.svg"
  },
  {
    title: "Stack Overflow for Teams",
    description: "A collaboration tool for teams to share knowledge, manage questions, and answer technical queries within their organization.",
    link: "https://stackoverflow.com/teams",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Stack_Overflow_logo.svg"
  },
  {
    title: "Mozilla Developer Network (MDN) Web Docs",
    description: "Free and open documentation for web developers, covering HTML, CSS, JavaScript, and more.",
    link: "https://developer.mozilla.org/",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/MDN_Web_docs_logo.svg"
  },
  {
    title: "Leetcode",
    description: "A platform for preparing for coding interviews through algorithm challenges and problems.",
    link: "https://leetcode.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/LeetCode_logo_2021.svg"
  },
  {
    title: "AI for Good",
    description: "A global movement that brings together individuals, organizations, and tech innovators to apply AI to solve societal challenges.",
    link: "https://www.ai4good.org/",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/AI_for_Good_logo.png"
  },
  {
    title: "GitLab for Education",
    description: "Free access to GitLab’s premium features for students and educators to foster collaboration and version control for software projects.",
    link: "https://about.gitlab.com/education/",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/GitLab_Logo.svg"
  },
  {
    title: "Devpost",
    description: "A platform for participating in hackathons, coding competitions, and discovering new tech projects.",
    link: "https://devpost.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Devpost_logo.svg"
  },
  {
    title: "Code for America Fellowship",
    description: "A paid fellowship program for technologists to work with local governments to improve public services using tech.",
    link: "https://www.codeforamerica.org/fellowship",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Code_for_America_logo.svg"
  },
  {
    title: "MIT OpenCourseWare",
    description: "Free online courses from MIT, offering video lectures, assignments, and more on various topics in computer science and other fields.",
    link: "https://ocw.mit.edu/",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/MIT_Logo.svg"
  },
  {
    title: "Startup Grind Global Conference",
    description: "A global conference for entrepreneurs to network, learn, and share knowledge on growing startups and building businesses.",
    link: "https://www.startupgrind.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Startup_Grind_Logo.svg"
  },
  {
    title: "UNESCO Open Education",
    description: "A platform providing free resources for global learning in education, focusing on making quality education accessible to all.",
    link: "https://en.unesco.org/themes/open-education",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/UNESCO_logo_2017.svg"
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
