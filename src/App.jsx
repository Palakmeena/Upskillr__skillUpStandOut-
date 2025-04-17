import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./app.css";

import SignUp from './components/SignUp';
import Explore from "./components/Explore";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Community from "./components/Community";
import Internship from "./components/Internship";
import CarouselComponent from "./components/CarouselComponent";
import CourseSelector from "./components/CourseSelector";
import AllResources from "./components/AllResources";
import Dashboard from "./components/Dashboard";
import Programs from "./components/Programs";
import EventSearch from "./components/EventSearch";


// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Internship" element={<Internship />} />
        <Route path="CarouselComponent" element={<EventSearch/>} />
        <Route path="/roadmaps" element={<CourseSelector />} />
        <Route path="/resources" element={<AllResources />} />
        <Route path="/Programs" element={<Programs/>}/>
        <Route path="/profile" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} /> {/* Optional */}


      </Routes>
    </Router>


  );
}
