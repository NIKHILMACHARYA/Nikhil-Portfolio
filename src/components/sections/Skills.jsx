import { useEffect, useRef, useState } from 'react';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger animation when section is 20% visible
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the section is visible
                rootMargin: '0px'
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, [isVisible]);

    return (
        <section id="skills" className={`skills ${isVisible ? 'animate' : ''}`} ref={skillsRef}>
            <div className="main-text scroll-scale">
                <span>Technical and Professional</span>
                <h2>My Skills</h2>
            </div>

            <div className="skill-main">
                <div className="skill-left">
                    <h3>Technical Skills</h3>

                    <div className="skill-bar">
                        <div className="info">
                            <p>HTML</p>
                            <p>80%</p>
                        </div>
                        <div className="bar"><span className="html"></span></div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>CSS</p>
                            <p>60%</p>
                        </div>
                        <div className="bar"><span className="css"></span></div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>JavaScript</p>
                            <p>70%</p>
                        </div>
                        <div className="bar"><span className="javascript"></span></div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>Figma</p>
                            <p>75%</p>
                        </div>
                        <div className="bar"><span className="figma"></span></div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>Java</p>
                            <p>70%</p>
                        </div>
                        <div className="bar"><span className="java"></span></div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>Data Bases</p>
                            <p>60%</p>
                        </div>
                        <div className="bar"><span className="databases"></span></div>
                    </div>
                </div>

                <div className="skill-right">
                    <h3>Professional Skills</h3>
                    {/* 
            The circular progress bars use 'data-dots' and 'data-percent' in the original JS to generate divs.
            We should implement this generation logic in React.
          */}
                    <div className="professional">
                        <SkillCircle percentage={90} label="Team Work" isVisible={isVisible} />
                        <SkillCircle percentage={70} label="Creativity" isVisible={isVisible} />
                        <SkillCircle percentage={75} label="Project Management" isVisible={isVisible} />
                        <SkillCircle percentage={80} label="Communication" isVisible={isVisible} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCircle = ({ percentage, label, isVisible }) => {
    const dots = 80; // Total dots
    const marked = Math.floor((dots * percentage) / 100);
    const rotate = 360 / dots;
    const pointsArray = Array.from({ length: dots });

    return (
        <div className="box">
            <div className="circle">
                {pointsArray.map((_, i) => (
                    <div
                        key={i}
                        className={`points ${isVisible && i < marked ? 'marked' : ''}`}
                        style={{ '--i': i, '--rot': `${rotate}deg` }}
                    ></div>
                ))}
            </div>
            <div className="text">
                <big>{percentage}%</big>
                <small>{label}</small>
            </div>
        </div>
    );
};

export default Skills;
