import React from "react";
import Home from "./Components/Home/home";
import { Route, Routes } from "react-router-dom";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Me from './Components/Me/me';
import Portfolio from "./Components/Portfolio/portfolio";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path="/me" element={<Me />} />
        </Routes>
    </div>
  );
}

export default App;
