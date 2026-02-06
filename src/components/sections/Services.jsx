import { useState } from 'react';
import { FaLayerGroup, FaDesktop, FaCode } from 'react-icons/fa';

const ServiceBox = ({ icon, title, desc, extraDesc }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="service-box">
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            {showMore && <p className="extra-service-info">{extraDesc}</p>}
            <div className="btn-box service-btn">
                <button className="btn" onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Read less' : 'Read more'}
                </button>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="main-text scroll-scale">
                <span>What I will do for you</span>
                <h2>Our Services</h2>
            </div>

            <div className="section-services scroll-bottom">
                <ServiceBox
                    icon={<FaLayerGroup />}
                    title="Web Design"
                    desc="I design visually stunning and user-focused websites using modern UI/UX principles and responsive layouts, I ensure a seamless user experience across devices."
                    extraDesc="My design process includes wireframing, prototyping, accessibility testing, and responsive layout building using CSS Grid, Flexbox, and media queries to ensure a smooth experience on all devices."
                />
                <ServiceBox
                    icon={<FaDesktop />}
                    title="Animation"
                    desc="Turn your ideas into engaging digital products, using ElevenLabs for clear, professional voice narration and Adobe tools to create smooth, visually compelling animations."
                    extraDesc="I deliver animated experiences that improve storytelling, loading transitions, and user interaction feedback."
                />
                <ServiceBox
                    icon={<FaCode />}
                    title="Development"
                    desc="I build full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js), and also develop REST APIs with performance and scalability in mind."
                    extraDesc="I work with the MERN stack (MongoDB, Express, React, Node.js), REST APIs, and responsive design patterns to create fast and reliable web applications."
                />
            </div>
        </section>
    );
};

export default Services;
