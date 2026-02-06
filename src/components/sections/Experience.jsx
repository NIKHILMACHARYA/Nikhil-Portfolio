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
            title: "Full Stack Developer",
            company: "Tech Solutions Inc.",
            companyLogo: "", // Add your company logo path here
            location: "Remote",
            period: "Jan 2024 - Present",
            responsibilities: [
                "Architected and developed scalable web applications using MERN stack, serving 50K+ active users",
                "Implemented microservices architecture reducing server response time by 40%",
                "Led a team of 3 developers and conducted code reviews ensuring best practices",
                "Integrated third-party APIs and payment gateways for e-commerce platforms",
                "Established CI/CD pipelines with Docker and Jenkins, improving deployment efficiency by 60%"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "AWS", "Docker", "Redis", "TypeScript"]
        },
        {
            icon: <FaCode />,
            title: "Frontend Developer",
            company: "Digital Innovations Ltd.",
            companyLogo: "", // Add your company logo path here
            location: "Bangalore, India",
            period: "Jun 2023 - Dec 2023",
            responsibilities: [
                "Developed responsive SPAs using React.js with Redux for state management",
                "Optimized application performance achieving 95+ Lighthouse scores",
                "Collaborated with UX team to implement pixel-perfect designs from Figma",
                "Implemented lazy loading and code splitting reducing initial load time by 50%",
                "Mentored junior developers and conducted weekly knowledge sharing sessions"
            ],
            technologies: ["React", "Redux", "JavaScript", "SASS", "Webpack", "Jest", "Figma", "Git"]
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
