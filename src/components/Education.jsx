import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaBook } from 'react-icons/fa';

const EducationContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  
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

const TimelineContainer = styled(motion.div)`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #646cff;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  
  &:nth-of-type(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    left: 50%;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 15px;
    right: -6px;
    width: 12px;
    height: 12px;
    background-color: #646cff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(100, 108, 255, 0.2);
  }
  
  &:nth-of-type(even):before {
    right: auto;
    left: -6px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 50px;
    padding-right: 0;
    
    &:nth-of-type(even) {
      left: 0;
      padding-left: 50px;
    }
    
    &:before {
      left: 14px;
      right: auto;
    }
    
    &:nth-of-type(even):before {
      left: 14px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const TimelineDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #646cff;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #646cff;
  }
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
`;

const TimelineText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
`;

const CourseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.8rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CourseItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  background-color: ${props => props.theme === 'dark' ? '#333333' : '#ffffff'};
  padding: 0.6rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #646cff;
    color: white;
  }
  
  svg {
    color: #646cff;
    min-width: 16px;
  }
  
  &:hover svg {
    color: white;
  }
`;

const Education = ({ theme }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <EducationContainer id="education">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </SectionTitle>
      
      <SectionSubtitle 
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My academic journey and qualifications
      </SectionSubtitle>
      
      <TimelineContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TimelineItem variants={itemVariants}>
          <TimelineContent theme={theme}>
            <TimelineDate>
              <FaCalendarAlt /> Jan 2024 – Present
            </TimelineDate>
            <TimelineTitle>
              <FaGraduationCap /> University of Westminster
            </TimelineTitle>
            <TimelineSubtitle theme={theme}>
              Bachelor (Hons) of Computer Science
            </TimelineSubtitle>
            <TimelineText theme={theme}>
              Currently pursuing a Bachelor's degree in Computer Science, focusing on developing strong technical skills and theoretical knowledge in various computing disciplines.
            </TimelineText>
            <CourseList>
              <CourseItem theme={theme}>
                <FaBook /> Software Development
              </CourseItem>
              <CourseItem theme={theme}>
                <FaBook /> Mathematics for Computing
              </CourseItem>
              <CourseItem theme={theme}>
                <FaBook /> Trends in Computer Science
              </CourseItem>
              <CourseItem theme={theme}>
                <FaBook /> Computer Systems Fundamentals
              </CourseItem>
              <CourseItem theme={theme}>
                <FaBook /> Web Design and Development
              </CourseItem>
              <CourseItem theme={theme}>
                <FaBook /> Object Oriented Programming
              </CourseItem>
              <CourseItem theme={theme}>
                <FaBook /> Machine Learning
              </CourseItem>
              <CourseItem theme={theme}>
                <FaBook /> Algorithms: Theory, Design and Implementation
              </CourseItem>
              <CourseItem theme={theme}>
                <FaBook /> Database Systems
              </CourseItem>
            </CourseList>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem variants={itemVariants}>
          <TimelineContent theme={theme}>
            <TimelineDate>
              <FaCalendarAlt /> May 2023 – Dec 2023
            </TimelineDate>
            <TimelineTitle>
              <FaGraduationCap /> Informatics Institute of Technology
            </TimelineTitle>
            <TimelineSubtitle theme={theme}>
              Foundation Certificate in Higher Education
            </TimelineSubtitle>
            <TimelineText theme={theme}>
              Completed a foundation program in higher education with Merit, establishing a strong base for further studies in Computer Science.
            </TimelineText>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem variants={itemVariants}>
          <TimelineContent theme={theme}>
            <TimelineDate>
              <FaCalendarAlt /> 2021
            </TimelineDate>
            <TimelineTitle>
              <FaGraduationCap /> BD/ Saraswathi Central College
            </TimelineTitle>
            <TimelineSubtitle theme={theme}>
              Advanced Level (Physical Science)
            </TimelineSubtitle>
            <TimelineText theme={theme}>
              Completed Advanced Level education with a focus on Physical Science, developing a strong foundation in scientific principles and analytical thinking.
            </TimelineText>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem variants={itemVariants}>
          <TimelineContent theme={theme}>
            <TimelineDate>
              <FaCalendarAlt /> 2018
            </TimelineDate>
            <TimelineTitle>
              <FaGraduationCap /> BD/ Uva Science College
            </TimelineTitle>
            <TimelineSubtitle theme={theme}>
              Ordinary Level
            </TimelineSubtitle>
            <TimelineText theme={theme}>
              Successfully completed Ordinary Level education, establishing a solid academic foundation for higher studies.
            </TimelineText>
          </TimelineContent>
        </TimelineItem>
      </TimelineContainer>
    </EducationContainer>
  );
};

export default Education;