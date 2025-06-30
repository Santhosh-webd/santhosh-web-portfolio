import React, { useEffect, useRef } from 'react';
import { Aboutus } from './Aboutus';
import './App.css';
import { Contact } from './Contact';
import { Education } from './Education';
import { Footer } from './Footer';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Projects } from './Projects';
import { Skills } from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
 
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}
      />

      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><Aboutus /></div>
      <Education />
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
