import React, { useState } from "react";
import "../components/LearningRoadmap.css";
import { useEffect } from "react";

const steps = [
  { 
    id: 1, 
    label: "Step-1", 
    title: "Learn a Programming Language", 
    description: [
      "🌟 Start with Python or JavaScript - great for beginners",
      "📚 Learn fundamentals: variables, loops, functions",
      "💻 Practice daily with coding challenges",
      "",
      "Recommended resources:",
      "• Python Crash Course (book)",
      "• freeCodeCamp (free online)",
      "• Codecademy (interactive learning)",
      "",
      "Pro tip: Build small projects as you learn!"
    ],
    link: "#" 
  },
  { 
    id: 2, 
    label: "Step-2", 
    title: "Understand Data Structures", 
    description: [
      "🧱 Essential data structures to master:",
      "• Arrays & Linked Lists",
      "• Stacks & Queues",
      "• Hash Tables",
      "• Trees & Graphs",
      "",
      "⏱️ Learn Big O notation for efficiency",
      "🛠️ Practice implementing each structure",
      "",
      "Book recommendation:",
      "📖 Data Structures Made Easy"
    ],
    link: "#" 
  },
  { 
    id: 3, 
    label: "Step-3", 
    title: "Learn Algorithms", 
    description: [
      "🔍 Key algorithms to study:",
      "• Sorting algorithms (QuickSort, MergeSort)",
      "• Search algorithms (Binary Search)",
      "• Recursion techniques",
      "• Dynamic programming",
      "",
      "🏆 Practice platforms:",
      "• LeetCode",
      "• HackerRank",
      "• Codeforces",
      "",
      "Daily challenge: Solve at least 1 problem/day"
    ],
    link: "#" 
  },
  { 
    id: 4, 
    label: "Step-4", 
    title: "Master OOP Concepts", 
    description: [
      "🎯 Four pillars of OOP:",
      "1. Encapsulation",
      "2. Abstraction",
      "3. Inheritance",
      "4. Polymorphism",
      "",
      "🛠️ Design patterns to learn:",
      "• Singleton",
      "• Factory",
      "• Observer",
      "",
      "Book recommendation:",
      "📖 Head First Design Patterns",
      "",
      "Pro tip: Implement these in your projects!"
    ],
    link: "#" 
  },
  { 
    id: 5, 
    label: "Step-5", 
    title: "Build Projects", 
    description: [
      "🚀 Project ideas by difficulty:",
      "",
      "Beginner:",
      "• Calculator app",
      "• To-do list",
      "",
      "Intermediate:",
      "• Weather app (with API)",
      "• Blog platform",
      "",
      "Advanced:",
      "• E-commerce site",
      "• Social media clone",
      "",
      "💡 Tip: Build a portfolio!",
      "🌐 Host on GitHub Pages",
      "🎨 Showcase your best work"
    ],
    link: "#" 
  },
];

const LearningRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  useEffect(() => {
    if (activeStep !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [activeStep]);

  return (
    <div className="roadmap-container">
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="step-block">
              <div 
                className={`step-label ${activeStep === index ? 'active' : ''}`}
                onClick={() => toggleStep(index)}
              >
                {step.label}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="arrow">
                <span className="desktop-arrow">→</span>
                <span className="mobile-arrow">↓</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {activeStep !== null && (
        <>
          <div className="popup-overlay" onClick={() => setActiveStep(null)}></div>
          <div className="popup-container">
            <div className="popup-content">
              <div className="popup-header">
                <div className="step-badge">{steps[activeStep].label}</div>
                <h3>{steps[activeStep].title}</h3>
                <button className="close-btn" onClick={() => setActiveStep(null)}>
                  ×
                </button>
              </div>
              <div className="popup-body checklist-design">
                {steps[activeStep].description.map((item, i) => {
                  if (item === "") return <div key={i} className="spacer"></div>;
                  
                  if (item.startsWith("• ")) {
                    return (
                      <div key={i} className="checklist-item">
                        <div className="checkbox"></div>
                        <div className="checklist-content">{item.replace("• ", "")}</div>
                      </div>
                    );
                  }
                  
                  if (item.match(/^[🌟📚🧱🔍🎯🚀]/)) {
                    return (
                      <div key={i} className="checklist-section-header">
                        <span className="section-emoji">{item.charAt(0)}</span>
                        <span className="section-text">{item.slice(1)}</span>
                      </div>
                    );
                  }
                  
                  if (item.match(/^\d\./)) {
                    return (
                      <div key={i} className="numbered-checklist-item">
                        <div className="number-circle">{item.split('.')[0]}</div>
                        <div className="numbered-content">{item.split('.').slice(1).join('.')}</div>
                      </div>
                    );
                  }
                  
                  return (
                    <div key={i} className="checklist-text">
                      {item}
                    </div>
                  );
                })}
              </div>
              <div className="popup-footer">
                <a
                  href={steps[activeStep].link}
                  className="resource-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn-icon">📚</span>
                  View Resources
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LearningRoadmap;