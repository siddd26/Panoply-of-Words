import React from "react";
import "./Home.css";
import Slideshow from "./section1/Slideshow";
import HDic from "./section2/H-Dictionary";
import HNotes from "./section2/H-Notes";
import HTran from "./section2/H-Translator";
import Knowledge from "./section3/marquee";

function Home() {
  return (
    <div class="container">
      <h1>Home</h1>
      <Slideshow />
      <HDic />
      <HNotes />
      <HTran />
      <Knowledge />
    </div>
  );
}

export default Home;
