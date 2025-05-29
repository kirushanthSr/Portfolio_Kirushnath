import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown } from 'react-icons/fa';

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: 'radial-gradient(ellipse at top, #0f0f23 0%, #000000 100%)' 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme === 'dark'
      ? 'linear-gradient(45deg, rgba(100, 108, 255, 0.05) 0%, rgba(255, 100, 200, 0.05) 100%)'
      : 'linear-gradient(45deg, rgba(100, 108, 255, 0.03) 0%, rgba(255, 100, 200, 0.03) 100%)'};
    z-index: -1;
  }
  
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.variant === 'primary' 
    ? 'linear-gradient(135deg, var(--primary), var(--accent), #ff6b6b)'
    : 'linear-gradient(225deg, var(--accent), var(--primary), #4ecdc4)'};
  filter: blur(120px);
  opacity: ${props => props.theme === 'dark' ? '0.2' : '0.15'};
  z-index: -1;
  animation: pulse 8s ease-in-out infinite alternate;
  
  @keyframes pulse {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.2) rotate(180deg); }
  }
`;

const BackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(rgba(100, 108, 255, 0.15) 1px, transparent 1px),
    radial-gradient(rgba(255, 100, 200, 0.1) 1px, transparent 1px);
  background-size: 40px 40px, 60px 60px;
  background-position: 0 0, 20px 20px;
  z-index: -2;
  opacity: 0.6;
  animation: gridMove 20s linear infinite;
  
  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-40px, -40px); }
  }
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 1;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  
  @media (min-width: 768px) {
    padding-right: 2rem;
  }
`;

const Greeting = styled(motion.p)`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: 0.5px;
  
  &:before {
    content: '';
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--accent), transparent);
    display: inline-block;
    border-radius: 2px;
    animation: shimmer 2s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const Name = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  
  span {
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, #ff6b6b 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    animation: gradientShift 4s ease-in-out infinite;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      border-radius: 2px;
      opacity: 0.7;
    }
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;


const Title = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'};
  position: relative;
  
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -20px;
    width: 8px;
    height: 8px;
    background: var(--accent);
    border-radius: 50%;
    box-shadow: 
      20px 20px 0 var(--primary),
      40px 0px 0 rgba(255, 107, 107, 0.5);
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 650px;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  font-weight: 400;
  letter-spacing: 0.3px;
  
  &::first-letter {
    font-size: 1.4em;
    font-weight: 700;
    color: var(--primary);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background: ${props => props.theme === 'dark' 
    ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.05))'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1a1a1a'};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-8px) scale(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  svg {
    font-size: 1.2rem;
    z-index: 1;
  }
`;


const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 50%, var(--accent) 100%);
  background-size: 200% 200%;
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  letter-spacing: 0.5px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgb(255, 255, 255), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    background-position: 100% 0;
    color: white;
    
    
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  font-size: 0.9rem;
  font-weight: 500;
  
  p {
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 30px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, #ff6b6b 100%);
  background-size: 200% 200%;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  animation: gradientRotate 6s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, var(--primary), var(--accent), #ff6b6b, var(--primary));
    background-size: 300% 300%;
    border-radius: 32px;
    z-index: -1;
    animation: borderGlow 2s linear infinite;
  }
  
  &::after {
    content: 'SK';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 7rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.1em;
  }
  
  @keyframes gradientRotate {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes borderGlow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    
    &::after {
      font-size: 5rem;
    }
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
  }
  
  &::before {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &::after {
    bottom: 30%;
    right: 15%;
    animation-delay: 2s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
    50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
  }
`;

const Home = ({ theme }) => {
  return (
    <HomeContainer id="home">
      <BackgroundGrid />
      <BackgroundShape 
        initial={{ top: '10%', left: '20%', width: 300, height: 300 }}
        animate={{ 
          x: [0, 30, 0], 
          y: [0, 50, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: 'easeInOut' 
        }}
      />
      <BackgroundShape 
        initial={{ bottom: '10%', right: '20%', width: 400, height: 400 }}
        animate={{ 
          x: [0, -40, 0], 
          y: [0, -30, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 25,
          ease: 'easeInOut' 
        }}
      />
      
      <Content>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </Greeting>
          
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>Selvaratnam</span> Kirushanth
          </Name>
          
          <Title 
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Computer Science Student & Developer
          </Title>
          
          <Description
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Passionate Computer Science enthusiast eager to dive into the real world of technology. 
            Currently honing my skills at Informatics Institute of Technology, affiliated with the 
            University of Westminster. Seeking an industry placement to apply my technical knowledge 
            and problem-solving abilities to real-world challenges.
          </Description>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {[
              { href: "https://github.com/kirushanth1", icon: <FaGithub /> },
              { href: "https://www.linkedin.com/in/kirushanthsr/", icon: <FaLinkedin /> },
              { href: "mailto:kirushanth0611@gmail.com", icon: <FaEnvelope /> },
              { href: "tel:+94764202229", icon: <FaPhone /> }
            ].map((social, index) => (
              <SocialLink 
                key={social.href}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                theme={theme}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
              >
                {social.icon}
              </SocialLink>
            ))}
          </SocialLinks>
          
          <CTAButton
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </CTAButton>
        </TextContent>
        
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ProfileImage 
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="animate-float"
          />
        </ImageContainer>
      </Content>
      
      <ScrollIndicator
        theme={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.p>Scroll Down</motion.p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown />
        </motion.div>
      </ScrollIndicator>
    </HomeContainer>
  );
};

export default Home;