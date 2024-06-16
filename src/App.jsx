// import { useState } from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
