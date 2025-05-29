import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaLaptopCode, FaMapMarkerAlt } from 'react-icons/fa';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 768px) {
    padding: 8rem 4rem 4rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #646cff;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
  margin-bottom: 3rem;
  max-width: 600px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoContainer = styled(motion.div)`
  flex: 1;
`;

const InfoCard = styled(motion.div)`
  background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #646cff;
  }
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #646cff;
    min-width: 16px;
  }
`;

const SkillsContainer = styled(motion.div)`
  flex: 1;
`;

const SkillsCard = styled(motion.div)`
  background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SkillsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #646cff;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#333333' : '#ffffff'};
  border-radius: 5px;
  padding: 0.8rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    background-color: #646cff;
    color: white;
  }
`;

const About = ({ theme }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <AboutContainer id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </SectionTitle>
      
      <SectionSubtitle 
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get to know more about me, my background, and what I do
      </SectionSubtitle>
      
      <Content>
        <InfoContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <InfoCard variants={itemVariants} theme={theme}>
            <InfoTitle><FaUser /> Professional Summary</InfoTitle>
            <InfoText theme={theme}>
              Passionate Computer Science enthusiast eager to dive into the real world of technology. 
              Currently honing my skills at Informatics Institute of Technology, affiliated with the 
              University of Westminster. Seeking an industry placement to apply my technical knowledge 
              and problem-solving abilities to real-world challenges.
            </InfoText>
          </InfoCard>
          
          <InfoCard variants={itemVariants} theme={theme}>
            <InfoTitle><FaGraduationCap /> Education Background</InfoTitle>
            <InfoList>
              <InfoItem>
                <FaGraduationCap />
                <div>
                  <strong>University of Westminster</strong>
                  <p>Bachelor (Hons) of Computer Science (Jan 2024 – Present)</p>
                </div>
              </InfoItem>
              <InfoItem>
                <FaGraduationCap />
                <div>
                  <strong>Informatics Institute of Technology</strong>
                  <p>Foundation Certificate in Higher Education (May 2023 – Dec 2023)</p>
                  <p>Passed with Merit</p>
                </div>
              </InfoItem>
              <InfoItem>
                <FaGraduationCap />
                <div>
                  <strong>BD/ Saraswathi Central College</strong>
                  <p>Advance level (Physical Science) (2021)</p>
                </div>
              </InfoItem>
              <InfoItem>
                <FaGraduationCap />
                <div>
                  <strong>BD/ Uva Science College</strong>
                  <p>Ordinary Level (2018)</p>
                </div>
              </InfoItem>
            </InfoList>
          </InfoCard>
          
          <InfoCard variants={itemVariants} theme={theme}>
            <InfoTitle><FaMapMarkerAlt /> Location</InfoTitle>
            <InfoText theme={theme}>
              No.320/29, Passara Road, Badulla, Sri Lanka
            </InfoText>
          </InfoCard>
        </InfoContainer>
        
        <SkillsContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SkillsCard variants={itemVariants} theme={theme}>
            <SkillsTitle><FaLaptopCode /> Technical Skills</SkillsTitle>
            
            <h4 style={{ marginBottom: '1rem' }}>Programming Languages</h4>
            <SkillsGrid>
              <SkillItem theme={theme}>Java</SkillItem>
              <SkillItem theme={theme}>Python</SkillItem>
            
            </SkillsGrid>
            
            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Web Development</h4>
            <SkillsGrid>
              <SkillItem theme={theme}>HTML</SkillItem>
              <SkillItem theme={theme}>CSS</SkillItem>
              <SkillItem theme={theme}>JavaScript</SkillItem>
              <SkillItem theme={theme}>React</SkillItem>
            </SkillsGrid>
            
            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Data Management</h4>
            <SkillsGrid>
              <SkillItem theme={theme}>JSON</SkillItem>
              <SkillItem theme={theme}>SQL</SkillItem>
            </SkillsGrid>
            
            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Version Control</h4>
            <SkillsGrid>
              <SkillItem theme={theme}>Git</SkillItem>
              <SkillItem theme={theme}>GitHub</SkillItem>
            </SkillsGrid>
            
            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Design Tools</h4>
            <SkillsGrid>
              <SkillItem theme={theme}>Figma</SkillItem>
              <SkillItem theme={theme}>GIMP</SkillItem>
            </SkillsGrid>
            
            <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Soft Skills</h4>
            <SkillsGrid>
              <SkillItem theme={theme}>Problem Solving</SkillItem>
              <SkillItem theme={theme}>Critical Thinking</SkillItem>
              <SkillItem theme={theme}>Teamwork</SkillItem>
              <SkillItem theme={theme}>Collaboration</SkillItem>
            </SkillsGrid>
          </SkillsCard>
        </SkillsContainer>
      </Content>
    </AboutContainer>
  );
};

export default About;