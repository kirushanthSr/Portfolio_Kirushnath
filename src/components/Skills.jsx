// import styled from '@emotion/styled';
// import { motion } from 'framer-motion';
// import { FaCode, FaDatabase, FaGit, FaPalette, FaUsers } from 'react-icons/fa';

// const SkillsContainer = styled.section`
//   min-height: 100vh;
//   padding: 6rem 2rem 4rem;
  
//   @media (min-width: 768px) {
//     padding: 8rem 4rem 4rem;
//   }
// `;

// const SectionTitle = styled(motion.h2)`
//   font-size: 2rem;
//   font-weight: 700;
//   margin-bottom: 1rem;
//   position: relative;
//   display: inline-block;
  
//   &:after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 0;
//     width: 50px;
//     height: 3px;
//     background-color: #646cff;
//   }
// `;

// const SectionSubtitle = styled(motion.p)`
//   font-size: 1.1rem;
//   color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
//   margin-bottom: 3rem;
//   max-width: 600px;
// `;

// const SkillsGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 2rem;
  
//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const SkillCategory = styled(motion.div)`
//   background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
//   border-radius: 10px;
//   padding: 2rem;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CategoryTitle = styled.h3`
//   font-size: 1.3rem;
//   font-weight: 600;
//   margin-bottom: 1.5rem;
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
  
//   svg {
//     color: #646cff;
//   }
// `;

// const SkillsContainer2 = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
// `;

// const SkillItem = styled.div`
//   background-color: ${props => props.theme === 'dark' ? '#333333' : '#ffffff'};
//   border-radius: 8px;
//   padding: 1rem;
//   flex: 1 0 calc(33.333% - 1rem);
//   min-width: 100px;
//   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
//     background-color: #646cff;
//     color: white;
//   }
  
//   @media (max-width: 768px) {
//     flex: 1 0 calc(50% - 1rem);
//   }
// `;

// const SkillName = styled.h4`
//   font-size: 1rem;
//   font-weight: 500;
//   margin-top: 0.5rem;
// `;

// const SkillIcon = styled.div`
//   font-size: 1.8rem;
//   color: #646cff;
//   margin-bottom: 0.5rem;
  
//   ${SkillItem}:hover & {
//     color: white;
//   }
// `;

// const CertificationsContainer = styled(motion.div)`
//   margin-top: 3rem;
// `;

// const CertificationCard = styled(motion.div)`
//   background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
//   border-radius: 10px;
//   padding: 2rem;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
//   margin-bottom: 2rem;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CertificationTitle = styled.h3`
//   font-size: 1.3rem;
//   font-weight: 600;
//   margin-bottom: 1.5rem;
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
  
//   svg {
//     color: #646cff;
//   }
// `;

// const CertificationItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   padding: 1rem;
//   background-color: ${props => props.theme === 'dark' ? '#333333' : '#ffffff'};
//   border-radius: 8px;
//   margin-bottom: 1rem;
//   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CertificationLogo = styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background-color: #646cff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: 700;
//   font-size: 1.2rem;
// `;

// const CertificationInfo = styled.div`
//   flex: 1;
// `;

// const CertificationName = styled.h4`
//   font-size: 1.1rem;
//   font-weight: 500;
//   margin-bottom: 0.3rem;
// `;

// const CertificationDate = styled.p`
//   font-size: 0.9rem;
//   color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
// `;

// const Skills = ({ theme }) => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       } 
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
//   };

//   return (
//     <SkillsContainer id="skills">
//       <SectionTitle
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Skills & Certifications
//       </SectionTitle>
      
//       <SectionSubtitle 
//         theme={theme}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         My technical skills and professional certifications
//       </SectionSubtitle>
      
//       <SkillsGrid>
//         <SkillCategory 
//           theme={theme}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <CategoryTitle><FaCode /> Programming Languages</CategoryTitle>
//           <SkillsContainer2>
//             <SkillItem theme={theme}>
//               <SkillIcon>J</SkillIcon>
//               <SkillName>Java</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>Py</SkillIcon>
//               <SkillName>Python</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>JS</SkillIcon>
//               <SkillName>JavaScript</SkillName>
//             </SkillItem>
//           </SkillsContainer2>
//         </SkillCategory>
        
//         <SkillCategory 
//           theme={theme}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <CategoryTitle><FaCode /> Web Development</CategoryTitle>
//           <SkillsContainer2>
//             <SkillItem theme={theme}>
//               <SkillIcon>H</SkillIcon>
//               <SkillName>HTML</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>C</SkillIcon>
//               <SkillName>CSS</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>JS</SkillIcon>
//               <SkillName>JavaScript</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>R</SkillIcon>
//               <SkillName>React</SkillName>
//             </SkillItem>
//           </SkillsContainer2>
//         </SkillCategory>
        
//         <SkillCategory 
//           theme={theme}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//         >
//           <CategoryTitle><FaDatabase /> Data Management</CategoryTitle>
//           <SkillsContainer2>
//             <SkillItem theme={theme}>
//               <SkillIcon>JSON</SkillIcon>
//               <SkillName>JSON</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>SQL</SkillIcon>
//               <SkillName>SQL</SkillName>
//             </SkillItem>
//           </SkillsContainer2>
//         </SkillCategory>
        
//         <SkillCategory 
//           theme={theme}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <CategoryTitle><FaGit /> Version Control</CategoryTitle>
//           <SkillsContainer2>
//             <SkillItem theme={theme}>
//               <SkillIcon>Git</SkillIcon>
//               <SkillName>Git</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>GH</SkillIcon>
//               <SkillName>GitHub</SkillName>
//             </SkillItem>
//           </SkillsContainer2>
//         </SkillCategory>
        
//         <SkillCategory 
//           theme={theme}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//         >
//           <CategoryTitle><FaPalette /> Design Tools</CategoryTitle>
//           <SkillsContainer2>
//             <SkillItem theme={theme}>
//               <SkillIcon>F</SkillIcon>
//               <SkillName>Figma</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>G</SkillIcon>
//               <SkillName>GIMP</SkillName>
//             </SkillItem>
//           </SkillsContainer2>
//         </SkillCategory>
        
//         <SkillCategory 
//           theme={theme}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <CategoryTitle><FaUsers /> Soft Skills</CategoryTitle>
//           <SkillsContainer2>
//             <SkillItem theme={theme}>
//               <SkillIcon>PS</SkillIcon>
//               <SkillName>Problem Solving</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>CT</SkillIcon>
//               <SkillName>Critical Thinking</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>TW</SkillIcon>
//               <SkillName>Teamwork</SkillName>
//             </SkillItem>
//             <SkillItem theme={theme}>
//               <SkillIcon>C</SkillIcon>
//               <SkillName>Collaboration</SkillName>
//             </SkillItem>
//           </SkillsContainer2>
//         </SkillCategory>
//       </SkillsGrid>
      
//       <CertificationsContainer
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <CertificationCard theme={theme} variants={itemVariants}>
//           <CertificationTitle>
//             <FaCode /> Certifications
//           </CertificationTitle>
          
//           <CertificationItem theme={theme}>
//             <CertificationLogo>LI</CertificationLogo>
//             <CertificationInfo>
//               <CertificationName>Java Object-Oriented Programming – LinkedIn Learning</CertificationName>
//               <CertificationDate theme={theme}>Dec 2024</CertificationDate>
//             </CertificationInfo>
//           </CertificationItem>
//         </CertificationCard>
//       </CertificationsContainer>
//     </SkillsContainer>
//   );
// };

// export default Skills;