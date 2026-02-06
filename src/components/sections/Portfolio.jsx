import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import photo1 from '../../assets/photo_1.jpg';
import photo2 from '../../assets/photo_2.png';
import photo3 from '../../assets/Photo_3.jpg';
import photo4 from '../../assets/photo4.jpg';
import photo5 from '../../assets/photo_4.jpeg';

const projects = [
    {
        id: 1,
        title: "Food-Ordering-System",
        desc: "A responsive shopping website built using HTML, CSS5, and JavaScript. Features user authentication, cart-items, menu, and order summary.",
        img: photo1,
        link: "https://github.com/NIKHILMACHARYA/Food-Ordering-System",
        categories: ["product", "web"]
    },
    {
        id: 2,
        title: "Chat/Video-Conference-Web-App",
        desc: "A modern and animated portfolio to showcase skills, projects, and services. Built with HTML, CSS, JavaScript, and GSAP for scroll-based animations.",
        img: photo2, // Using photo_2.png as per original
        link: "https://github.com/NIKHILMACHARYA/Video-Conference-Web-App",
        categories: ["product"]
    },
    {
        id: 3,
        title: "Sci-Fi Galactic Warfare",
        desc: "A fully immersive, action-packed 2D space shooter 🚀, built from the ground up using Python and Pygame where design meets logic.",
        img: photo3,
        link: "https://github.com/NIKHILMACHARYA/Sci-Fi-Galactic-Warfare",
        categories: ["interact"]
    },
    {
        id: 4,
        title: "Shopping-Mart",
        desc: "Designed a complete UI/UX case study for a Shopping app using HTML, CSS5, and JavaScript. Focused on clean navigation, and accessibility.",
        img: photo4,
        link: "https://github.com/NIKHILMACHARYA/Shopping-Mart",
        categories: ["interact"]
    },
    {
        id: 5,
        title: "CycleHub",
        desc: "CycleHub is a fast, modern web application built with Next.js and Tailwind CSS to provide a smooth and stylish user experience for cycling enthusiasts.",
        img: photo5,
        link: "https://9000-firebase-studio-1767590672297.cluster-cd3bsnf6r5bemwki2bxljme5as.cloudworkstations.dev/?monospaceUid=419462",
        categories: ["web"]
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.categories.includes(filter.replace('.', '')));

    return (
        <section id="portfolio" className="portfolio">
            <div className="main-text scroll-scale">
                <span>What I will do for you ?</span>
                <h2>Latest Projects</h2>
            </div>

            <div className="container scroll-bottom">
                <div className="fillter-buttons">
                    <button className={`button ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`button ${filter === 'product' ? 'active' : ''}`} onClick={() => setFilter('product')}>Product</button>
                    <button className={`button ${filter === 'interact' ? 'active' : ''}`} onClick={() => setFilter('interact')}>Interacting</button>
                    <button className={`button ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web App</button>
                </div>

                <div className="portfolio-gallery">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="port-box">
                            <div className="port-image">
                                <img src={project.img} alt={project.title} />
                            </div>
                            <div className="port-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
