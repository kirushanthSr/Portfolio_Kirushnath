import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#f5f5f5'};
  padding: 3rem 2rem 2rem;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1a1a1a'};
  
  span {
    color: #646cff;
  }
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
  margin-bottom: 1.5rem;
  max-width: 600px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme === 'dark' ? '#333333' : '#e0e0e0'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1a1a1a'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #646cff;
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #646cff;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
`;

const ScrollToTop = styled(motion.button)`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #646cff;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #535bf2;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Footer = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer theme={theme}>
      <FooterContent>
        <Logo theme={theme}><span>K</span>irushanth</Logo>
        
        <FooterText theme={theme}>
          Computer Science student passionate about technology and software development.
          Looking for opportunities to apply my skills and knowledge in real-world projects.
        </FooterText>
        
        <SocialLinks>
          <SocialLink href="https://github.com/kirushanth1" target="_blank" rel="noopener noreferrer" theme={theme}>
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/kirushanthsr/" target="_blank" rel="noopener noreferrer" theme={theme}>
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:kirushanth0611@gmail.com" theme={theme}>
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        
        <FooterLinks>
          <FooterLink href="/" theme={theme}>Home</FooterLink>
          <FooterLink href="/about" theme={theme}>About</FooterLink>
          <FooterLink href="/education" theme={theme}>Education</FooterLink>
          <FooterLink href="/projects" theme={theme}>Projects</FooterLink>
          <FooterLink href="/contact" theme={theme}>Contact</FooterLink>
        </FooterLinks>
        
        <Copyright theme={theme}>
          © {new Date().getFullYear()} Selvaratnam Kirushanth. All rights reserved.
        </Copyright>
      </FooterContent>
      
      <ScrollToTop 
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </ScrollToTop>
    </FooterContainer>
  );
};

export default Footer;