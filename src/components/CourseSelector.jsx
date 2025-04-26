import React, { useState, useEffect } from "react";
import "./CourseSelector.css";

const steps = [
  {
    id: 1,
    label: "Step-1",
    title: "Learn a Programming Language",
    description: [
     "Start with these powerful languages:",
      "• Java - Enterprise-grade, object-oriented language",
      "• C++ - High-performance systems programming",
      "",
      "Fundamental concepts to master:",
      "• Variables, data types, and operators",
      "• Control structures (loops, conditionals)",
      "• Functions/methods and scope",
      "• Memory management (especially in C++)",
      "",
      " Recommended resources:",
      "• 'Java: The Complete Reference' by Herbert Schildt",
      "• 'C++ Primer' by Stanley Lippman",
      "• GeeksforGeeks Java/C++ tutorials",
      "• Codecademy's Java/C++ courses",
      "",
      "Pro tip: Build console applications to practice core concepts!"
    ],
    link: "#"
  },
  {
    id: 2,
    label: "Step-2",
    title: "Understand Data Structures",
    description: [
      "Essential data structures with Java/C++ implementations:",
      "",
      " Linear Structures:",
      "• Arrays and ArrayLists (Java)/Vectors (C++)",
      "• Linked Lists (Singly/Doubly)",
      "• Stacks (LIFO) and Queues (FIFO)",
      "",
      " Non-linear Structures:",
      "• Hash Tables (HashMaps in Java, unordered_map in C++)",
      "• Trees (Binary, AVL, Red-Black)",
      "• Graphs (Adjacency List/Matrix)",
      "",
      "⏱Time/Space Complexity Analysis:",
      "• Big-O notation mastery",
      "• Best/worst case scenarios",
      "",
      " Practice implementing each structure from scratch",
      "",
      " Recommended book:",
      "'Data Structures and Algorithms in Java' by Robert Lafore",
      "'Data Structures Using C++' by D.S. Malik"
    ],
    link: "#"
  },
  {
    id: 3,
    label: "Step-3",
    title: "Learn Algorithms",
    description: [
      " Core algorithms to implement in Java/C++:",
      "",
      " Sorting Algorithms:",
      "• QuickSort (partition-exchange)",
      "• MergeSort (divide-and-conquer)",
      "• HeapSort (binary heap)",
      "",
      "🔎 Search Algorithms:",
      "• Binary Search",
      "• Depth/Breadth First Search",
      "• Dijkstra's Algorithm",
      "",
      "🧩 Problem Solving Techniques:",
      "• Recursion and backtracking",
      "• Dynamic programming",
      "• Greedy algorithms",
      "",
      "🏆 Competitive Programming:",
      "• LeetCode (filter by Java/C++)",
      "• CodeChef (practice contests)",
      "• HackerRank (algorithm tracks)",
      "",
      "🎯 Daily goal: Solve 2 medium-difficulty problems"
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
  }
];

const CourseSelector = () => {
  const [step, setStep] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [activeStep, setActiveStep] = useState(null);

  const courses = ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Bcom", "BBA", "BCA"];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setStep(2);
  };

  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester);
    setStep(3);
  };

  const resetSelection = () => {
    setSelectedCourse("");
    setSelectedSemester("");
    setShowRoadmap(false);
    setStep(1);
    setActiveStep(null);
  };

  useEffect(() => {
    document.body.style.overflow = activeStep !== null ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeStep]);

  return (
    <div className="course-selector-container">
      <div className="page-intro">
        <p className="intro-description">
          Select your course and semester to get a personalized learning roadmap.
        </p>
      </div>

      {!showRoadmap && step === 1 && (
        <div className="selection-step">
          <h2>Select a Course</h2>
          <div className="options-grid">
            {courses.map((course) => (
              <button key={course} className="option-button" onClick={() => handleCourseSelect(course)}>
                {course}
              </button>
            ))}
          </div>
        </div>
      )}

      {!showRoadmap && step === 2 && (
        <div className="selection-step">
          <button className="back-button" onClick={() => setStep(1)}>← Back</button>
          <h2>{selectedCourse}</h2>
          <h3>Select a Semester</h3>
          <div className="options-grid">
            {semesters.map((sem) => (
              <button key={sem} className="option-button" onClick={() => handleSemesterSelect(sem)}>
                Semester {sem}
              </button>
            ))}
          </div>
        </div>
      )}

      {!showRoadmap && step === 3 && (
        <div className="selection-step">
          <button className="back-button" onClick={() => setStep(2)}>← Back</button>
          <h2>{selectedCourse} - Semester {selectedSemester}</h2>
          <button className="option-button" onClick={() => setShowRoadmap(true)}>View Roadmap</button>
        </div>
      )}

      {showRoadmap && (
        <div className="roadmap-display">
          <button className="back-button" onClick={() => setShowRoadmap(false)}>← Back</button>
          <h2>{selectedCourse} - Semester {selectedSemester} Roadmap</h2>

          <div className="steps-wrapper">
            {steps.map((step, index) => (
              <div key={step.id} className="step-block">
                <div
                  className={`step-label ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                >
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeStep !== null && (
        <>
          <div className="popup-overlay" onClick={() => setActiveStep(null)}></div>
          <div className="popup-container">
            <div className="popup-content">
              <div className="popup-header">
                <div className="step-badge">{steps[activeStep].label}</div>
                <h3>{steps[activeStep].title}</h3>
                <button className="close-btn" onClick={() => setActiveStep(null)}>×</button>
              </div>
              <div className="popup-body">
                {steps[activeStep].description.map((item, i) => (
                  <p key={i} className={item.startsWith("• ") ? "bullet" : item === "" ? "spacer" : ""}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="popup-footer">
                <a href={steps[activeStep].link} target="_blank" rel="noreferrer">📚 View Resources →</a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseSelector;
