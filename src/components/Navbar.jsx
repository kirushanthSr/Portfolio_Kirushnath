import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${props => props.theme === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(248, 250, 252, 0.8)'};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1e293b'};
  span {
    background: linear-gradient(45deg, var(--primary), var(--accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background-color: ${props => props.theme === 'dark' ? 'rgba(30, 41, 59, 0.95)' : 'rgba(248, 250, 252, 0.95)'};
    backdrop-filter: blur(10px);
    padding: 5rem 2rem;
    transition: all 0.3s ease;
    align-items: center;
    justify-content: flex-start;
    box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1e293b'};
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, var(--primary), var(--accent));
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1e293b'};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
    transform: rotate(15deg);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1e293b'};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavContainer
      theme={theme}
      style={{
        backgroundColor: isScrolled
          ? theme === 'dark' ? 'rgba(30,41,59,0.9)' : 'rgba(248,250,252,0.9)'
          : theme === 'dark' ? 'rgba(30,41,59,0.7)' : 'rgba(248,250,252,0.7)'
      }}
    >
      <Logo theme={theme}>
        <span>K</span>irushanth
      </Logo>

      <MobileMenuButton theme={theme} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      <NavLinks theme={theme} isOpen={isMenuOpen}>
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#education", label: "Education" },
          { href: "#projects", label: "Projects" },
          // { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ].map((link, i) => (
          <NavLink
            key={link.href}
            theme={theme}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.label}
          </NavLink>
        ))}

        {/* <ThemeToggle
          theme={theme}
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </ThemeToggle> */}
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
