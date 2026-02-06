import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import srinivasLogo from '../../assets/srinivas-university-logo.webp';
import govtLogo from '../../assets/govt-college-logo.png';

const EducationCard = ({ icon, logo, degree, institution, year, score, scoreLabel }) => {
    return (
        <div className="education-card scroll-bottom">
            <div className="education-icon">
                {logo ? <img src={logo} alt={institution} className="education-logo" /> : icon}
            </div>
            <div className="education-content">
                <div className="education-year">{year}</div>
                <h3>{degree}</h3>
                <h4>{institution}</h4>
                <div className="education-score">
                    <span className="score-label">{scoreLabel}:</span>
                    <span className="score-value">{score}</span>
                </div>
            </div>
        </div>
    );
};

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="main-text scroll-scale">
                <span>My Academic Journey</span>
                <h2>Education</h2>
            </div>

            <div className="education-timeline">
                <EducationCard
                    logo={srinivasLogo}
                    degree="B.Tech - Computer Science & Engineering"
                    institution="Srinivas University Institute of Engineering & Technology, Mangalore"
                    year="2026"
                    score="8.84"
                    scoreLabel="CGPA"
                />
                <EducationCard
                    logo={govtLogo}
                    degree="PUC - Science (PCMB)"
                    institution="Govt Pre University College, Brahmavara"
                    year="2022"
                    score="79%"
                    scoreLabel="Percentage"
                />
                <EducationCard
                    logo={govtLogo}
                    degree="SSLC"
                    institution="Govt Pre University College, Brahmavara"
                    year="2020"
                    score="78.56%"
                    scoreLabel="Percentage"
                />
            </div>
        </section>
    );
};

export default Education;
