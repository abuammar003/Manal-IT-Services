
import {
  TbWorld, TbBrandReact, TbBrandNodejs, TbStack2, TbBrandDocker, TbDeviceMobile, TbPalette, TbBrandWordpress, TbBook } from 'react-icons/tb';

import { FaUsers, FaVideo, FaUserTie, FaTools, FaStar, FaBriefcase, FaBookOpen, FaProjectDiagram, FaHandsHelping,
  FaClock, FaChartLine } from "react-icons/fa";

import { FcBusinessman } from "react-icons/fc";




export const COMPANY_INFO = {
  name: 'Manal IT',
  tagline: 'Learn. Build. Grow.',
  description: 'Professional IT training and education institute providing industry-relevant skills and career guidance.',
  email: 'admin@manalit.com',
  phone: '+91-7066-178278',
  address: 'Apna Super Market, Old Agra Road, Malegaon - 423203, Dist - Nashik',
  // year_founded: 2020,
  studentCount: '200+',
  courseCount: '6+',
  instructorCount: '100+' 
}


export const COURSES = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    category: 'Web Development',
    description: 'Build responsive websites using HTML, CSS, JavaScript and modern web development techniques.',
    level: 'Beginner',
    duration: '8 weeks',
    price: '9,999',
    // icon: '🌐',
    icon: TbWorld,
    highlights: ['HTML', 'CSS3 (Cascading Stylesheet)', 'BootStrap', 'JavaScript ES6+', 'React.js', 'Responsive Design', 'Git & GitHub' ,'Project Based Learning']
  },
  {
    id: 2,
    title: 'React.js Mastery',
    category: 'Frontend',
    description: 'Master React.js and build modern interactive applications using components, hooks and APIs.',
    level: 'Intermediate',
    duration: '10 weeks',
    price: '14,999',
    // icon: '⚛️',
    icon: TbBrandReact,
    highlights: ['Component Patterns', 'Hooks & Context', 'Context API', 'React Router', 'Performance Optimization', 'Git & GitHub', 'REST APIs','Real Projects', 'Deployment']
  },
  {
    id: 3,
    title: 'Node.js & Express.js',
    category: 'Backend',
    description: 'Learn backend development by building APIs, authentication systems and scalable server applications.',
    level: 'Intermediate',
    duration: '10 weeks',
    price: '14,999',
    // icon: '🟢',
    icon: TbBrandNodejs,
    highlights: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Middleware', 'Database Integration',
      'API Projects', 'Deployment']
  },
  {
    id: 4,
    title: 'Full Stack Development',
    category: 'Full Stack',
    description: 'Build complete web applications by combining frontend, backend, databases and deployment skills.',
    level: 'Advanced',
    duration: '16 weeks',
    price: '24,999',
    // icon: '🚀',
    icon: TbStack2,
    highlights: [  'MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Full Stack Project']
  },
  {
    id: 5,
    title: 'Dimploma in DevOps Basics',
    category: 'DevOps',
    description: 'Learn DevOps tools and practices for automation, deployment, CI/CD and modern application delivery. ',
    level: 'Beginner',
    duration: '12 weeks',
    price: '16,999',
    // icon: '🐍',
    icon: TbBrandDocker,
    highlights: [ 'Linux Basics', 'Git & GitHub', 'Docker', 'CI/CD', 'Jenkins', 'Cloud Basics', 'Deployment']
  },
  {
    id: 6,
    title: 'Mobile App Development',
    category: 'Mobile',
    description: 'Learn to create modern cross-platform mobile applications with practical development projects.',
    level: 'Intermediate',
    duration: '14 weeks',
    price: '19,999',
    // icon: '📱',
    icon: TbDeviceMobile,
    highlights: [ 'React Native', 'Mobile UI', 'Navigation', 'API Integration', 'State Management', 'Testing',
      'App Deployment']
  },
  {
    id: 7,
    title: 'Diploma in Graphic & Animation Designing',
    category: 'Graphic & Animation',
    description: 'Develop creative skills in graphic design, animation, visual communication and digital media.',
    level: 'Intermediate',
    duration: '14 weeks',
    price: '19,999',
    // icon: '📱',
    icon: TbPalette,
    highlights: ['Graphic Design', 'Typography', 'Branding', 'UI Visuals', 'Motion Graphics', 'Animation',
      'Creative Projects']
  },
  {
    id: 8,
    title: 'Wordpress & Drupal Certification',
    category: 'Web Development',
    description: 'Learn to create, manage and customize professional websites using popular CMS platforms.',
    level: 'Intermediate',
    duration: '14 weeks',
    price: '19,999',
    // icon: '📱',
    icon:   TbBrandWordpress,
    highlights: ['WordPress', 'Drupal','Themes', 'Plugins', 'CMS Management', 'Website Customization',
      'Live Projects']
  },
  {
    id: 9,
    title: 'Courses Available on Demand',
    category: 'Others',
    description: 'Learn specialized technology and creative skills through courses tailored to your learning goals.',
    level: 'Intermediate',
    duration: '14 weeks',
    price: '19,999',
    // icon: '📱',
    icon: TbBook,
    highlights: [  'Flexible Topics', 'Custom Learning', 'Expert Guidance', 'Practical Training', 'Flexible Schedule', 'Project Support', 'Career Guidance']
  },

]

export const SERVICES = [
  {
    id: 1,
    title: 'Live Training',
    description: 'Interactive live classes with experienced instructors and hands-on projects',
    icon: FaUsers,
    features: ['Interactive Sessions', 'Real-time Q&A', 'Peer Learning', 'Certificate']
  },
  {
    id: 2,
    title: 'Self-Paced Learning',
    description: 'Access to recorded video lectures and resources available 24/7',
    icon: FaVideo,
    features: ['Video Lectures', 'Downloadable Resources', 'Lifetime Access', 'Self Schedule']
  },
  {
    id: 3,
    title: 'Mentorship Program',
    description: 'One-on-one guidance from industry professionals and senior developers',
    icon: FaUserTie,
    features: ['Career Guidance', 'Portfolio Building', 'Interview Prep', 'Industry Insights']
  },
  {
    id: 4,
    title: 'Project-Based Learning',
    description: 'Build real-world projects that demonstrate your skills to employers',
    icon: FaTools,
    features: ['Real Projects', 'GitHub Portfolio', 'Code Reviews', 'Industry Standards']
  },
  {
    id: 5,
    title: 'Internship Program',
    description: 'Gain practical experience through our partner network of tech companies',
    icon: FaStar,
    features: ['Paid Internships', 'Industry Exposure', 'Networking', 'Job Placement']
  },
  {
    id: 6,
    title: 'Job Placement Support',
    description: 'Resume building, interview coaching, and placement assistance',
    icon: FaBriefcase,
    features: ['Resume Workshop', 'Mock Interviews', 'Job Board Access', 'Company Connections']
  }
]

export const FEATURES = [
  {
    title: 'Expert Instructors',
    description: '100+ experienced professionals from top companies',
    // icon: '👨‍💼'
    icon: FaUserTie
  },
  {
    title: 'Industry-Relevant Curriculum',
    description: 'Updated courses based on current industry demands',
    // icon: '📚'
    icon: FaBookOpen
  },
  {
    title: 'Hands-On Projects',
    description: 'Build real applications and strengthen your portfolio',
    // icon: '⚙️'
    icon: FaProjectDiagram
  },
  {
    title: 'Lifetime Support',
    description: 'Access to resources and community even after course completion',
    // icon: '🤝'
    icon: FaHandsHelping
  },
  {
    title: 'Flexible Learning',
    description: 'Learn at your own pace with live and recorded options',
    // icon: '⏱️'
    icon: FaClock
  },
  {
    title: 'Career Growth',
    description: 'From training to job placement and career advancement',
    // icon: '📈'
    icon: FaChartLine
  }
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Noman Shah',
    role: 'Full Stack Developer ',
    company: 'TechCorp Solutions',
    text: 'Manal IT transformed my career! The instructors were incredibly knowledgeable and the practical approach made learning enjoyable. I got a job within 3 months of completing the course.',
    avatar: FcBusinessman,
    rating: 5
  },
  {
    id: 2,
    name: 'Ejaz Deshmukh',
    role: 'Frontend Developer at StartupXYZ',
    company: 'StartupXYZ',
    text: 'The React course was exceptional. The project-based learning approach gave me the confidence to build real applications. Highly recommended for anyone serious about web development.',
    avatar: FcBusinessman,
    rating: 5
  },
  {
    id: 3,
    name: 'Mustaqeem Shaikh',
    role: 'Data Scientist at DataHub',
    company: 'DataHub Analytics',
    text: 'Great curriculum, supportive community, and excellent mentorship. The instructors are always available to help. Best investment I made for my career.',
    avatar: FcBusinessman,
    rating: 5
  },
  {
    id: 4,
    name: 'Noorul Huda',
    role: 'Mobile Developer at AppStudio',
    company: 'AppStudio',
    text: 'The mobile development course covered everything I needed. The internship program connected me with real clients and helped me build my portfolio.',
    avatar: FcBusinessman,
    rating: 5
  },
    {
    id: 5,
    name: 'Shahrukh Khan',
    role: 'Full Stack Developer ',
    company: 'TechCorp Solutions',
    text: 'Manal IT transformed my career! The instructors were incredibly knowledgeable and the practical approach made learning enjoyable. I got a job within 3 months of completing the course.',
    avatar: FcBusinessman,
    rating: 5
  },
  {
    id: 6,
    name: 'Abu Ammar',
    role: 'Frontend Developer at StartupXYZ',
    company: 'StartupXYZ',
    text: 'The React course was exceptional. The project-based learning approach gave me the confidence to build real applications. Highly recommended for anyone serious about web development.',
    avatar: FcBusinessman,
    rating: 5
  },
  {
    id: 7,
    name: 'Ali Raza',
    role: 'Data Scientist at DataHub',
    company: 'DataHub Analytics',
    text: 'Great curriculum, supportive community, and excellent mentorship. The instructors are always available to help. Best investment I made for my career.',
    avatar: FcBusinessman,
    rating: 5
  },
  {
    id: 8,
    name: 'Fardeen Ahmed',
    role: 'Mobile Developer at AppStudio',
    company: 'AppStudio',
    text: 'The mobile development course covered everything I needed. The internship program connected me with real clients and helped me build my portfolio.',
    avatar: FcBusinessman,
    rating: 5
  }
]

export const STATS = [
  {
    number: '500+',
    label: 'Students Trained',
    icon: '👥'
  },
  {
    number: '10+',
    label: 'Courses Offered',
    icon: '📚'
  },
  {
    number: '95%',
    label: 'Job Placement Rate',
    icon: '💼'
  },
  {
    number: '4.9/5',
    label: 'Average Rating',
    icon: '⭐'
  }
]

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
  { name: 'YouTube', url: 'https://youtube.com', icon: '🎥' }
]

export const FAQ = [
  {
    question: 'Do I need prior programming experience?',
    answer: 'No, we have beginner-friendly courses. However, basic computer literacy is helpful. Our instructors will guide you through fundamentals.'
  },
  {
    question: 'What is the job placement rate?',
    answer: 'We have a 95% job placement rate for course graduates. Our placement support includes resume building, interview prep, and direct connections with companies.'
  },
  {
    question: 'Are the certificates recognized by industry?',
    answer: 'Yes, our certificates are recognized by leading tech companies and are valuable for your career. Many of our graduates credit their certificates in getting hired.'
  },
  {
    question: 'Can I get a refund if I am not satisfied?',
    answer: 'Yes, we offer a 7-day money-back guarantee. If you are not satisfied with the course within 7 days, we will refund your full payment.'
  },
  {
    question: 'Is there payment plan available?',
    answer: 'Yes, we offer flexible payment plans. You can pay in installments with zero interest. Contact us for customized payment options.'
  },
  {
    question: 'Will I get a job after completing the course?',
    answer: 'We guarantee job placement support, but employment depends on your effort and the market. We provide mentorship, interview prep, and job opportunities through our network.'
  }
]
