import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";  // gabungan resume + portfolio
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="works">
      <Works skills={skills} projects={projects} />
      </section>
    </div>
  );
}

  const skills = [
    { name: "VSCode", level: 50 },
    { name: "Illustrator", level: 50 },
    { name: "Canva", level: 70 },
    { name: "Blender", level: 20 },
  ];

  const projects = [
    { title: "Project Kelompok Web", img: "src/assets/1.png" },
    { title: "GAPAKSI V", img: "src/assets/2.jpg" },
    { title: "PORSIMAPTAR", img: "src/assets/3.jpg" },
    { title: "Sertifikat", img: "src/assets/4.png" },
    { title: "Sertifikat", img: "src/assets/5.png" },
    { title: "LOPTASIKU 8", img: "src/assets/6.jpg" },
  ];




export default App;
