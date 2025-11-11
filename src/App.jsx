import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './css/style.css';
import './css/utilities.css';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
