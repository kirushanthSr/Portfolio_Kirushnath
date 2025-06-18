import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
// import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#242424' : '#ffffff'};
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#213547'};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const MainContent = styled.main`
  padding-top: 60px; // To offset fixed navbar
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`;

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');

    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppContainer theme={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <MainContent>
        <section id="home"><Home theme={theme} /></section>
        <section id="about"><About theme={theme} /></section>
        <section id="education"><Education theme={theme} /></section>
        <section id="projects"><Projects theme={theme} /></section>
        {/* <section id="skills"><Skills theme={theme} /></section> */}
        <section id="contact"><Contact theme={theme} /></section>
      </MainContent>
      <Footer theme={theme} />
    </AppContainer>
  );
}

export default App;
