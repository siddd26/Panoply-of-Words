import "./App.css";
import "./style.css";
// import BasicExample from './Components/BasicExample';
import Home from "./Home/Home.js";
import About from "./AboutUs/About.js";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./Components/Nav";
import Dictionary from "./Services/Dictionary/Dictionary.js";
import WordGame from "./Services/WordGame/WordGame.js";
import Notes from "./Services/Notes/Notes.js";
import Translator from "./Services/Translator/Translator.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/WordGame" element={<WordGame />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Translator" element={<Translator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
