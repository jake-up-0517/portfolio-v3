import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1E1C1C] text-[#E0DFDF]">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
