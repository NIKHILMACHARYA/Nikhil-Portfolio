import { useState, useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ChatWidget = ({ isOpen, setIsOpen }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getDummyReply = (text) => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes("hello") || lowerText.includes("hi")) return "Hello there! How can I help you today?";
        if (lowerText.includes("how are you")) return "I'm doing great, thank you! How can I assist you today?";
        if (lowerText.includes("about")) return "I'm a passionate developer with experience in building modern, responsive websites and web apps. We make Graphic designs, Animation, Content creation, amd Project Builds,";
        if (lowerText.includes("skills")) return "My skills include HTML, CSS, JavaScript, React, Node.js, and UI/UX design.";
        if (lowerText.includes("education") || lowerText.includes("degree") || lowerText.includes("study")) return "I'm pursuing B.Tech in Computer Science & Engineering from Srinivas University Institute of Engineering & Technology, Mangalore with a CGPA of 8.84. Check out the Education section for more details!";
        if (lowerText.includes("certification") || lowerText.includes("certificate")) return "I have certifications in AI (IBM), SQL & Databases, AWS Cloud Foundations, E-Commerce (Java/OOPs), and Generative AI (Udemy). Check out the Certifications section to see all my credentials!";
        if (lowerText.includes("portfolio")) return "You can explore my projects in the Portfolio section of this site.";
        if (lowerText.includes("home")) return "You can return to the home page by clicking 'Home' in the navbar.";
        if (lowerText.includes("experience") || lowerText.includes("work history")) return "Check out my Work Experience section to see my professional journey and past roles!";
        if (lowerText.includes("contact") || lowerText.includes("email")) return "You can reach out via the Contact page or email me at example@example.com.";
        if (lowerText.includes("project") || lowerText.includes("work")) return "I'd love to hear about your project! Let me know what you're working on.";
        if (lowerText.includes("location")) return "I'm based in India, but I work with clients globally.";
        if (lowerText.includes("thank")) return "You're very welcome! 😊 Let me know if you have more questions.";
        if (lowerText.includes("bye") || lowerText.includes("goodbye")) return "Goodbye! Looking forward to connecting again soon.";
        return "I'm here to help! Try asking about skills, portfolio, pricing, or how to contact me.";
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMessages = [...messages, { sender: 'You', text: inputValue }];
        setMessages(newMessages);
        setInputValue("");

        setTimeout(() => {
            const reply = getDummyReply(inputValue);
            setMessages(prev => [...prev, { sender: 'AI', text: reply }]);
        }, 700);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    if (!isOpen) return null;

    return (
        <section id="chatSection" className="" style={{ display: 'block' }}> {/* Using existing CSS classes if they match, or inline given the structure */}
            <div id="chatBox">
                <div id="chatHeader">
                    <h3>Ask AI Assistant</h3>
                    <button id="closeChat" className="close-btn" onClick={() => setIsOpen(false)}><FaTimes /></button>
                </div>
                <div id="chatMessages">
                    {messages.map((msg, idx) => (
                        <div key={idx}><strong>{msg.sender}:</strong> {msg.text}</div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div id="chatInputArea">
                    <input
                        type="text"
                        id="userInput"
                        placeholder="Type your question..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button id="sendBtn" onClick={handleSend}>Send</button>
                </div>
            </div>
        </section>
    );
};

export default ChatWidget;
