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
        <Works />
      </section>
    </div>
  );
}

export default App;
