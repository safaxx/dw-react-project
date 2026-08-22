import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import ProjectOne from "./components/Projects/ProjectOne";
import GitHub from "./components/GitHub";



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:projectId" element={<ProjectOne />} />
        <Route path="/github" element={<GitHub />} /> 
      </Routes>
    </Router>
  );
}

export default App;
