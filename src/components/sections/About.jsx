import { useState } from 'react';
import photo from '../../assets/Nikhil_1.jpeg';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="about" className="about">
            <div className="img-about scroll-scale">
                <img src={photo} alt="" />
                <div className="info-about1">
                    <span>3+</span>
                    <p>Years of experience</p>
                </div>
                <div className="info-about2">
                    <span>25+</span>
                    <p>Mini Project </p>
                </div>
                <div className="info-about3">
                    <span>15+</span>
                    <p>Happy Clients</p>
                </div>
            </div>

            <div className="about-content scroll-scale">
                <span>Let me introduce myself</span>
                <h2>About me</h2>
                <h3>A Story of good</h3>
                <p>
                    Software Developer and Java Enthusiast with a strong passion for UI/UX design and innovative web
                    development. My focus is on building user-friendly and scalable applications that enhance
                    connectivity and digital experiences.
                    <br /><br />
                    I’m a passionate web developer focused on turning ideas into real-world digital experiences. I design and build modern, responsive, and scalable applications with clean code and thoughtful user interfaces. With a strong foundation in full-stack development, I enjoy solving real problems and continuously learning new technologies to create meaningful and impactful solutions.
                </p>

                {showMore && (
                    <p className="more-text">
                        I have worked with over 15+ clients on various types of websites including e-commerce, portfolios,
                        dashboards, and more. My expertise lies in building accessible and mobile-first interfaces, and I’m
                        constantly exploring new technologies like React, Node.js, and AI integration.
                    </p>
                )}

                <div className="btn-box">
                    <button className="btn" onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'Read Less' : 'Read More!'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
