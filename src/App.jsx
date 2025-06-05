import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';
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
  padding-top: 60px; // To account for the fixed navbar
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
`;

// Layout component that includes the navbar and footer
function Layout({ theme, toggleTheme }) {
  return (
    <AppContainer theme={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <MainContent>
        <Outlet /> {/* This is the key change - use Outlet instead of children */}
      </MainContent>
      <Footer theme={theme} />
    </AppContainer>
  );
}

// Page components that wrap each section
function HomePage({ theme }) {
  return <Home theme={theme} id="home" />;
}

function AboutPage({ theme }) {
  return <About theme={theme} id="about" />;
}

function EducationPage({ theme }) {
  return <Education theme={theme} id="education" />;
}

function ProjectsPage({ theme }) {
  return <Projects theme={theme} id="projects" />;
}

function SkillsPage({ theme }) {
  return <Skills theme={theme} id="skills" />;
}

function ContactPage({ theme }) {
  return <Contact theme={theme} id="contact" />;
}

function App() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
    
    // Apply theme to document body
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
      <Route path="/" element={<HomePage theme={theme} />} />
      <Route path="/about" element={<AboutPage theme={theme} />} />
      <Route path="/education" element={<EducationPage theme={theme} />} />
      <Route path="/projects" element={<ProjectsPage theme={theme} />} />
      <Route path="/skills" element={<SkillsPage theme={theme} />} />
      <Route path="/contact" element={<ContactPage theme={theme} />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Route>
  ),
  {
    basename: "/Portfolio_Kirushnath",
  }
);

  return <RouterProvider router={router} />;
}

export default App
