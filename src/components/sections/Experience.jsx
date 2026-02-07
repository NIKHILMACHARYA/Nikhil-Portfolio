import { useState } from 'react';
import { FaBriefcase, FaCode, FaLaptopCode, FaMapMarkerAlt, FaCalendarAlt, FaUserTie } from 'react-icons/fa';

const ExperienceCard = ({ icon, title, company, companyLogo, location, period, responsibilities, technologies, isLeft }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
            <div className="timeline-dot">
                <div className="timeline-icon">{icon}</div>
            </div>
            <div className="timeline-content">
                <div className="timeline-card">
                    <div className="card-header">
                        <div className="title-with-icon">
                            {companyLogo ? (
                                <img src={companyLogo} alt={`${company} logo`} className="company-logo" />
                            ) : (
                                icon
                            )}
                            <h3 className="job-title">{title}</h3>
                        </div>
                        <span className="company-badge">{company}</span>
                    </div>
                    
                    <div className="card-meta">
                        <div className="meta-item">
                            <FaCalendarAlt className="meta-icon" />
                            <span>{period}</span>
                        </div>
                        <div className="meta-item">
                            <FaMapMarkerAlt className="meta-icon" />
                            <span>{location}</span>
                        </div>
                    </div>

                    <div className="card-body">
                        <h4 className="section-title">Key Responsibilities</h4>
                        <ul className="responsibilities-list">
                            {responsibilities.slice(0, isExpanded ? responsibilities.length : 2).map((resp, idx) => (
                                <li key={idx}>{resp}</li>
                            ))}
                        </ul>

                        {isExpanded && (
                            <div className="technologies-section">
                                <h4 className="section-title">Technologies Used</h4>
                                <div className="tech-tags">
                                    {technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {responsibilities.length > 2 && (
                            <button 
                                className="expand-btn" 
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? '− Show Less' : '+ Show More'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            icon: <FaBriefcase />,
            title: "Full Stack Development Intern",
            company: "Eye Q Dot Net Pvt Ltd",
            companyLogo: "", // Add your company logo path here
            location: "Mangalore, Karnataka",
            period: "Jan 2024 - Present",
            responsibilities: [
                'Developing a full-stack Capture-The-Flag (CTF) competition platform using React, Vite, Node.js, and PostgreSQL with Supabase integration',
                'Implemented JWT authentication, role-based access control, and real-time leaderboard functionality',
                'Built secure backend API with rate limiting and Row-Level Security (RLS) policies',
                'Developed user authentication, challenge management, and leaderboard tracking systems',
            ],
            technologies: ["React", "Vite", "Node.js", "PostgreSQL", "Supabase", "JWT", "RLS", "Git",]
        },
        {
            icon: <FaCode />,
            title: "MERN Stack Development Intern",
            company: "Softionik Solutions Pvt Ltd",
            companyLogo: "", // Add your company logo path here
            location: "Mangalore, Karnataka",
            period: "May 2025 - June 2025",
            responsibilities: [
                'Developed Employee & Student Management System using MERN stack with responsive UI and real-time dashboard',
                'Built and tested 25+ RESTful API endpoints using Node.js and Express.js, streamlining data flow and frontend-backend integration',
                'Optimized MongoDB queries using indexing and query restructuring, improving database performance by 30%',
                'Implemented secure file upload system, user authentication, and CRUD operations for multiple entities',
            ],
            technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API', "GitHub", "JWT", "Mongoose","Postman"]
        },
        
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="main-text scroll-scale">
                <span>My Professional Journey</span>
                <h2>Work Experience</h2>
            </div>

            <div className="timeline-container scroll-bottom">
                <div className="timeline-line"></div>
                {experiences.map((exp, idx) => (
                    <ExperienceCard 
                        key={idx}
                        {...exp}
                        isLeft={idx % 2 === 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
