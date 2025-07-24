import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactContainer = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactCard = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #646cff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactType = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const ContactValue = styled.p`
  font-size: 1rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
`;

const ContactLink = styled.a`
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #646cff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme === 'dark' ? '#333333' : '#f0f0f0'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1a1a1a'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #646cff;
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f5f5f5'};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid ${props => props.theme === 'dark' ? '#444444' : '#e0e0e0'};
  background-color: ${props => props.theme === 'dark' ? '#333333' : '#ffffff'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1a1a1a'};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #646cff;
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: 1px solid ${props => props.theme === 'dark' ? '#444444' : '#e0e0e0'};
  background-color: ${props => props.theme === 'dark' ? '#333333' : '#ffffff'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1a1a1a'};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #646cff;
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #535bf2;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: ${props => props.theme === 'dark' ? '#444444' : '#cccccc'};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(46, 213, 115, 0.2);
  color: #2ed573;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  

const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message
  };

  emailjs.send('service_x9hpijf', 'template_1p7ikuh', templateParams, 'ebNTVmKdK2z9Exj6A')
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    });
};


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
    <ContactContainer id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </SectionTitle>
      
      <SectionSubtitle 
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get in touch with me for any questions or opportunities
      </SectionSubtitle>
      
      <ContactContent>
        <ContactInfo
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactCard theme={theme} as={motion.div} variants={itemVariants}>
            <IconContainer>
              <FaEnvelope />
            </IconContainer>
            <ContactDetails>
              <ContactType>Email</ContactType>
              <ContactValue theme={theme}>
                <ContactLink href="mailto:kirushanth0611@gmail.com" theme={theme}>
                  kirushanth0611@gmail.com
                </ContactLink>
              </ContactValue>
            </ContactDetails>
          </ContactCard>
          
          <ContactCard theme={theme} as={motion.div} variants={itemVariants}>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            <ContactDetails>
              <ContactType>Phone</ContactType>
              <ContactValue theme={theme}>
                <ContactLink href="tel:+94764202229" theme={theme}>
                  +94 764 202 229
                </ContactLink>
              </ContactValue>
            </ContactDetails>
          </ContactCard>
          
          <ContactCard theme={theme} as={motion.div} variants={itemVariants}>
            <IconContainer>
              <FaMapMarkerAlt />
            </IconContainer>
            <ContactDetails>
              <ContactType>Location</ContactType>
              <ContactValue theme={theme}>
                No.28, circular Road, Mt.lavinia, Colombo.
              </ContactValue>
            </ContactDetails>
          </ContactCard>
          
          <motion.div variants={itemVariants}>
            <ContactType style={{ marginBottom: '0.8rem' }}>Social Profiles</ContactType>
            <SocialLinks>
              <SocialLink href="https://github.com/kirushanthSr" target="_blank" rel="noopener noreferrer" theme={theme}>
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/kirushanthsr/" target="_blank" rel="noopener noreferrer" theme={theme}>
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </ContactInfo>
        
        <ContactForm 
          onSubmit={handleSubmit}
          theme={theme}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {isSubmitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Your message has been sent successfully!
            </SuccessMessage>
          )}
          
          <FormGroup>
            <FormLabel theme={theme}>Your Name</FormLabel>
            <FormInput 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
              theme={theme}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel theme={theme}>Your Email</FormLabel>
            <FormInput 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
              theme={theme}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel theme={theme}>Subject</FormLabel>
            <FormInput 
              type="text" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required
              theme={theme}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel theme={theme}>Your Message</FormLabel>
            <FormTextarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
              theme={theme}
            />
          </FormGroup>
          
          <SubmitButton 
            type="submit" 
            disabled={isSubmitting}
            theme={theme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;