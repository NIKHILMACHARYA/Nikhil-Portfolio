import { FaCertificate, FaAws, FaDatabase, FaBrain, FaJava, FaRobot } from 'react-icons/fa';

import ibmAiImg from '../../assets/certifications/ibm-ai.png';
import sqlDbImg from '../../assets/certifications/sql-db.png';
import awsCloudImg from '../../assets/certifications/aws-cloud.png';
import javaBootcampImg from '../../assets/certifications/java-bootcamp.png';
import udemyGenAiImg from '../../assets/certifications/udemy-genai.jpg';

const CertificationCard = ({ icon, title, issuer, date, credentialId, credentialUrl, skills, image }) => {
    return (
        <div className="cert-card scroll-bottom">
            {image && <img src={image} alt={title} className="cert-img" />}
            <div className="cert-content">
                <h3>{title}</h3>
                <h4>{issuer}</h4>
                <div className="cert-date">{date}</div>
                {skills && (
                    <div className="cert-skills">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                )}
                {credentialUrl && (
                    <a href={credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                        View Certificate
                    </a>
                )}
                {credentialId && !credentialUrl && (
                    <div className="cert-id">ID: {credentialId}</div>
                )}
            </div>
        </div>
    );
};

const Certifications = () => {
    return (
        <section id="certifications" className="certifications">
            <div className="main-text scroll-scale">
                <span>Professional Achievements</span>
                <h2>Certifications</h2>
            </div>

            <div className="certifications-grid">
                <CertificationCard
                    icon={<FaBrain />}
                    title="Getting Started with Artificial Intelligence"
                    issuer="IBM"
                    date="August 2025"
                    credentialUrl="https://www.credly.com/badges/a1f941a4-6cb5-4bab-9870-a0815d4b3208/linked_in_profile"
                    skills={["Artificial Intelligence"]}
                    image={ibmAiImg}
                />
                <CertificationCard
                    icon={<FaDatabase />}
                    title="SQL and Relational Databases 101"
                    issuer="Cognitive Class"
                    date="February 2025"
                    credentialId="e8814cd6e4854a0d8609fa899f33d593"
                    credentialUrl="https://courses.cognitiveclass.ai/certificates/e8814cd6e4854a0d8609fa899f33d593"
                    skills={["SQL", "Databases"]}
                    image={sqlDbImg}
                />
                <CertificationCard
                    icon={<FaAws />}
                    title="AWS Academy Graduate - AWS Academy Cloud Foundations"
                    issuer="Amazon Web Services (AWS)"
                    date="January 2025"
                    credentialUrl="https://www.credly.com/badges/b750dcf5-3ea5-4857-8b65-5c8f9fb4008e/linked_in_profile"
                    skills={["AWS", "Cloud Computing"]}
                    image={awsCloudImg}
                />
                <CertificationCard
                    icon={<FaJava />}
                    title="Java Bootcamp"
                    issuer="LetsUpgrade"
                    date="February 2025"
                    credentialUrl="https://verify.letsupgrade.in/certificate/LUEJAVAJAN1252967"
                    skills={["Java", "OOPs"]}
                    image={javaBootcampImg}
                />
                <CertificationCard
                    icon={<FaRobot />}
                    title="Generative AI"
                    issuer="Udemy"
                    date="October 2025"
                    credentialUrl="https://ude.my/UC-957579b3-7e2b-407d-956f-77a7cae008ee"
                    skills={["AI", "Machine Learning"]}
                    image={udemyGenAiImg}
                />
            </div>
        </section>
    );
};

export default Certifications;
