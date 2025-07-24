import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.section`
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
  margin-bottom: 1.5rem;
  max-width: 600px;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  border: none;
  background-color: ${props => 
    props.active 
      ? '#646cff' 
      : props.theme === 'dark' ? '#2a2a2a' : '#f0f0f0'
  };
  color: ${props => 
    props.active 
      ? 'white' 
      : props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
  };
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#535bf2' : '#646cff'};
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #646cff;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '${props => props.projectName || "Project"}'; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-align: center;
    padding: 0 1rem;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #646cff;
  margin-bottom: 0.8rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background-color: ${props => props.theme === 'dark' ? '#333333' : '#e6e6e6'};
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #646cff;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #535bf2;
    transform: translateY(-2px);
  }
`;

const Projects = ({ theme }) => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'SKANNJ Smart Waste Management System Website',
      date: 'Jan 2025 – Feb 2025',
      description: 'Developed a responsive web application promoting smart waste management awareness and showcasing SKANNJ\'s features including smart bins, automated sorting, live monitoring, and contact integration. Built as an educational platform encouraging sustainability.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/kirushanthSr/SKANNJ',
      live: 'https://kirushanthsr.github.io/SKANNJ/index.html'
    },
    {
      id: 2,
      title: 'E-commerce Website',
      date: 'Sep 2024 – Oct 2024',
      description: 'Created a fully responsive e-commerce platform with dynamic catalog, product pages, cart functionality, and smooth user interface.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/kirushanthSr/Ecommerce-Website.git',
      live: 'https://kirushanthsr.github.io/Ecommerce-Website/'
    },
    {
      id: 3,
      title: 'Developer Portfolio Website',
      date: 'Dec 2024 – Jan 2025',
      description: 'Designed and launched a modern portfolio website to showcase projects, skills, and resume. Used Vite for fast build and Tailwind CSS for component styling.',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      category: 'web',
      github: 'https://github.com/kirushanthSr/Portfolio_Kirushnath',
      live: 'https://kirushanthsr.github.io/Portfolio_Kirushnath/'
    },
    {
      id: 4,
      title: 'SKANNJ Smart Waste Management Dashboard',
      date: 'Mar 2025 – Apr 2025',
      description: 'Built a real-time dashboard for monitoring and managing smart bins, featuring live data updates, analytics, and scheduling to optimize waste collection. Integrated Socket.IO and REST APIs.',
      technologies: ['React', 'Material-UI', 'Socket.IO', 'REST API'],
      category: 'web',
      github: 'https://github.com/kirushanthSr/SKANNJ-DashBoard'
    },
    {
      id: 5,
      title: 'Bookstore REST API',
      date: 'Apr 2024 – May 2024',
      description: 'Developed a RESTful API for managing books, customers, and orders in a bookstore system. Structured using JAX-RS, Maven, and in-memory data storage.',
      technologies: ['Java', 'JAX-RS', 'REST API', 'Maven'],
      category: 'api',
      github: 'https://github.com/kirushanthSr/BookStoreAPI'
    },
    {
      id: 6,
      title: 'Flow Optimizer – Network Flow Simulation Tool',
      date: 'Feb 2024 – Mar 2024',
      description: 'Created a simulation tool for optimizing flow distribution in directed networks using advanced algorithms. Useful for logistics and transport networks.',
      technologies: ['Java', 'OOP', 'Algorithms', 'File Parsing'],
      category: 'desktop',
      github: 'https://github.com/kirushanthSr/Flow-Optimizer.git'
    },
    {
      id: 7,
      title: 'Ticket Management System',
      date: 'Nov 2023 – Jan 2024',
      description: 'Built a Java desktop application for managing support tickets between customers and vendors. Features include ticket creation, vendor assignment, and threaded communication.',
      technologies: ['Java', 'OOP'],
      category: 'desktop',
      github: 'https://github.com/kirushanthSr/TicketManagementSystem.git'
    }
  ];

  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <ProjectsContainer id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </SectionTitle>
      
      <SectionSubtitle 
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Check out some of my recent work
      </SectionSubtitle>
      
      <FilterContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FilterButton 
          theme={theme} 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton 
          theme={theme} 
          active={filter === 'web'} 
          onClick={() => setFilter('web')}
        >
          Web Development
        </FilterButton>
        <FilterButton 
          theme={theme} 
          active={filter === 'desktop'} 
          onClick={() => setFilter('desktop')}
        >
          Desktop Applications
        </FilterButton>
      </FilterContainer>
      
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            theme={theme}
            variants={itemVariants}
          >
            <ProjectImage projectName={project.title} />
            <ProjectContent>
              <ProjectDate>
                <FaCalendarAlt /> {project.date}
              </ProjectDate>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription theme={theme}>
                {project.description}
              </ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, index) => (
                  <TechTag key={index} theme={theme}>
                    <FaCode style={{ marginRight: '5px', fontSize: '0.7rem' }} />
                    {tech}
                  </TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                {project.github && (
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                )}
                {project.live && (
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;