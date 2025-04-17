import React, { useState } from "react";
import LearningRoadmap from "./LearningRoadmap";
import "./CourseSelector.css";

const CourseSelector = () => {
  const [step, setStep] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false); // 👈 New

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
    setShowRoadmap(false); // 👈 reset roadmap view
    setStep(1);
  };

  return (
    <div className="course-selector-container">
  

      <div className="page-intro">
  <p className="intro-description">
    Select your course and semester to get a personalized learning roadmap. Whether you're just starting out or halfway through, we’ve got the resources to guide your journey!
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
          <button className="back-button" onClick={() => setStep(1)}>← Back to Courses</button>
          <h2>{selectedCourse}</h2>
          <h3>Select a Semester</h3>
          <div className="options-grid">
            {semesters.map((semester) => (
              <button key={semester} className="option-button" onClick={() => handleSemesterSelect(semester)}>
                Semester {semester}
              </button>
            ))}
          </div>
        </div>
      )}

      {!showRoadmap && step === 3 && (
        <div className="selection-step">
          <button className="back-button" onClick={() => setStep(2)}>← Back to Semesters</button>
          <h2>
            {selectedCourse} - Semester {selectedSemester}
          </h2>
          <button className="option-button" onClick={() => setShowRoadmap(true)}>
            View Roadmap
          </button>
        </div>
      )}

      {showRoadmap && (
        <div className="roadmap-display">
          <button className="back-button" onClick={() => setShowRoadmap(false)}>← Back to Semester</button>
          <h2>
            {selectedCourse} - Semester {selectedSemester} Roadmap
          </h2>
          <LearningRoadmap degree={selectedCourse} semester={selectedSemester} />
        </div>
      )}
    </div>
  );
};

export default CourseSelector;
