import { useEffect, useState } from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaDribbble } from 'react-icons/fa';
import photo from '../../assets/Nikhil 2.png';
import resume from '../../assets/Nikhil_M_Acharya-Resume.pdf';

const Home = () => {
    // Typing effect logic
    const words = ["Java Developer", "Fullstack Developer", "Graphic Designer", "UI/UX Designer", "Web Developer", "Cloud Enthusiast"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // To trigger animation restart

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setIsAnimating(false);
            }, 300); // Wait for out animation
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section id="home" className="home">
            <div className="home-content scroll-scale">
                <h1>Hi! I'm Nikhil M Acharya</h1>
                <div className="change-text">
                    <h3>And I'm&nbsp;</h3>
                    <h3>
                        {/* Simplified typing effect for React matching the CSS style if possible, 
                 or we can use the original structure which relies on CSS opacity/transform. 
                 Let's stick to the original DOM structure for 'word' classes to reuse CSS.
             */}
                        {words.map((word, index) => (
                            <span key={index} className="word" style={{
                                display: index === currentWordIndex ? 'flex' : 'none',
                                opacity: index === currentWordIndex ? 1 : 0,
                                position: 'relative' // Override absolute to flow naturally, or keep absolute if using the CSS animation
                            }}>
                                {/* Character splitting for the CSS animation if we want to keep it exact. 
                        The original JS split text into spans. Let's do that.
                    */}
                                {word.split('').map((char, charIndex) => (
                                    <span key={charIndex} className="letter in" style={{ animationDelay: `${charIndex * 0.05}s` }}>
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))}
                            </span>
                        ))}
                        {/* 
                Actually, the original CSS/JS logic is complex (rotating letters). 
                Ideally in React we'd use Framer Motion for this to be "Advanced". 
                Let's use a simpler but robust approach or just render the current word.
                For now, let's render the Current Word with a key to trigger re-render animation.
              */}

                    </h3>
                </div>
                <p>
                    Full-Stack developer and Designer working in EyeQ DotNet Pvt Ltd. Specialised in
                    Web development, Cloud, UI/UX, Game, Animation, Branding and digital designs.
                </p>

                <div className="info-box">
                    <div className="email-info">
                        <h5>Email :</h5>
                        <span>nikhilmacharya@gmail.com</span>
                    </div>

                    <div className="email-info">
                        <h5>Phone :</h5>
                        <span>+91-8792284412</span>
                    </div>
                </div>

                <div className="btn-box">
                    <a href={resume} className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
                    <a href="#contact" className="btn">Hire me </a>
                </div>

                <div className="social-icons">
                    <a href="https://github.com/NIKHILMACHARYA"><FaGithub /></a>
                    <a href="https://www.facebook.com/nikhil%20m%20acharya"><FaFacebook /></a>
                    <a href="https://instagram.com/_nikhil___28__"><FaInstagram /></a>
                    <a href="https://twitter.com/nikhil28acharya"><FaTwitter /></a>
                    <a href="https://www.leetcode.com/nikhil028"><FaDribbble /></a>
                </div>
            </div>

            <div className="home-image scroll-scale">
                <div className="image-box">
                    <img src={photo} alt="Nikhil" />
                </div>
                <div className="liquid-shape">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                        <path fill="rgb(1, 221, 250)">
                            <animate attributeName="d" dur="30000ms" repeatCount="indefinite" values="
                        M423,306Q383,362,335.5,415Q288,468,219,445.5Q150,423,88.5,377Q27,331,36.5,253.5Q46,176,88.5,109.5Q131,43,204,69Q277,95,353,97.5Q429,100,446,175Q463,250,423,306Z;
                        M412,306Q384,362,331,385.5Q278,409,221,403.5Q164,398,106,361Q48,324,53,252Q58,180,101.5,123.5Q145,67,217.5,44Q290,21,332,83.5Q374,146,407,198Q440,250,412,306Z;
                        M396.5,306.5Q384,363,338,424Q292,485,223.5,450Q155,415,110,366Q65,317,61.5,248.5Q58,180,115,147Q172,114,231,67.5Q290,21,362.5,58Q435,95,422,172.5Q409,250,396.5,306.5Z;
                        M426,304Q379,358,332.5,407Q286,456,216,443Q146,430,82.5,382Q19,334,57,264Q95,194,125,139.5Q155,85,215.5,92.5Q276,100,323.5,124.5Q371,149,422,199.5Q473,250,426,304Z;
                        M433,326Q431,402,359.5,433.5Q288,465,210,459.5Q132,454,79.5,392.5Q27,331,67,264.5Q107,198,123,127.5Q139,57,212.5,51Q286,45,356.5,73.5Q427,102,431,176Q435,250,433,326Z;
                        M426,304Q379,358,332.5,407Q286,456,216,443Q146,430,82.5,382Q19,334,57,264Q95,194,125,139.5Q155,85,215.5,92.5Q276,100,323.5,124.5Q371,149,422,199.5Q473,250,426,304Z;
                        M396.5,306.5Q384,363,338,424Q292,485,223.5,450Q155,415,110,366Q65,317,61.5,248.5Q58,180,115,147Q172,114,231,67.5Q290,21,362.5,58Q435,95,422,172.5Q409,250,396.5,306.5Z;
                        M412,306Q384,362,331,385.5Q278,409,221,403.5Q164,398,106,361Q48,324,53,252Q58,180,101.5,123.5Q145,67,217.5,44Q290,21,332,83.5Q374,146,407,198Q440,250,412,306Z;
                        M423,306Q383,362,335.5,415Q288,468,219,445.5Q150,423,88.5,377Q27,331,36.5,253.5Q46,176,88.5,109.5Q131,43,204,69Q277,95,353,97.5Q429,100,446,175Q463,250,423,306Z;
                    "></animate>
                        </path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Home;
