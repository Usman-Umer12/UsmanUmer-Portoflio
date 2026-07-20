import { Routes, Route } from "react-router-dom";

import Navbar from "./Componenets/Navber";
import Home from "./Componenets/Home";
import About from "./Componenets/About";
import Skills from "./Componenets/Skills";
import Project from "./Componenets/Project";
import Expertise from "./Componenets/Expertise";
import Testimonial from "./Componenets/Testimonial";
import Contact from "./Componenets/Contact";
import AboutPage from "./Pages/AboutPage";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Project />
      <Expertise />
      <Testimonial />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-[#000919] min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </div>
  );
}