import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";


function App() {
  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6"></div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
      </div>
    </>
    
  );
}

  export default App;