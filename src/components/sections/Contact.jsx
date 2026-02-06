import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState({});

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        const SERVICE_ID = 'service_tyfyzwu';
        const TEMPLATE_ID = 'template_6yn9tzd';
        const PUBLIC_KEY = 'uApbhiUianMCcKyqJ';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setLoading(false);
                form.current.reset();
                setFocused({});
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setLoading(false);
            });
    };

    const handleFocus = (field) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field, e) => {
        if (!e.target.value) {
            setFocused({ ...focused, [field]: false });
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="main-text scroll-scale">
                <span>Get In Touch</span>
                <h2>Contact Me</h2>
            </div>

            <div className="contact-container scroll-bottom">
                <div className="contact-info">
                    <div className="info-item">
                        <div className="info-icon">
                            <FaEnvelope />
                        </div>
                        <div className="info-content">
                            <h4>Email</h4>
                            <p>nikhilmacharya@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <FaPhone />
                        </div>
                        <div className="info-content">
                            <h4>Phone</h4>
                            <p>+91-8792284412</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="info-content">
                            <h4>Location</h4>
                            <p>India</p>
                        </div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact-form-modern">
                    <div className="form-row">
                        <div className={`input-field ${focused.name || form.current?.from_name?.value ? 'active' : ''}`}>
                            <input
                                type="text"
                                name="from_name"
                                required
                                onFocus={() => handleFocus('name')}
                                onBlur={(e) => handleBlur('name', e)}
                            />
                            <label>Your Name</label>
                            <span className="focus-border"></span>
                        </div>

                        <div className={`input-field ${focused.email || form.current?.user_email?.value ? 'active' : ''}`}>
                            <input
                                type="email"
                                name="user_email"
                                required
                                onFocus={() => handleFocus('email')}
                                onBlur={(e) => handleBlur('email', e)}
                            />
                            <label>Your Email</label>
                            <span className="focus-border"></span>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className={`input-field ${focused.subject || form.current?.subject?.value ? 'active' : ''}`}>
                            <input
                                type="text"
                                name="subject"
                                required
                                onFocus={() => handleFocus('subject')}
                                onBlur={(e) => handleBlur('subject', e)}
                            />
                            <label>Subject</label>
                            <span className="focus-border"></span>
                        </div>

                        <div className={`input-field ${focused.phone || form.current?.phone_number?.value ? 'active' : ''}`}>
                            <input
                                type="text"
                                name="phone_number"
                                required
                                onFocus={() => handleFocus('phone')}
                                onBlur={(e) => handleBlur('phone', e)}
                            />
                            <label>Phone Number</label>
                            <span className="focus-border"></span>
                        </div>
                    </div>

                    <div className={`input-field full-width ${focused.message || form.current?.message?.value ? 'active' : ''}`}>
                        <textarea
                            name="message"
                            rows="6"
                            required
                            onFocus={() => handleFocus('message')}
                            onBlur={(e) => handleBlur('message', e)}
                        ></textarea>
                        <label>Your Message</label>
                        <span className="focus-border"></span>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-modern" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <FaPaperPlane />
                                </>
                            )}
                        </button>
                    </div>

                    {status === 'success' && (
                        <div className="status-message msg-success">
                            <FaCheckCircle />
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="status-message msg-error">
                            <FaExclamationCircle />
                            Oops! Something went wrong. Please try again.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
