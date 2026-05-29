import React, { useState } from 'react';
import Typography from './Typography';
import './Faq.css';
import faqimg from '../assets/images/faq.png';

const faqs = [
    { num: "01", question: "Who is Gautam Maneck?", answer: "Gautam Maneck is a specialized jewelry design, sourcing, and manufacturing consultant with over 12 years of experience." },
    { num: "02", question: "What does Gautam Maneck do?", answer: "He manages the entire jewelry creation process from initial concept to final visual production for brands and individuals." },
    {
        num: "03",
        question: "What is a jewelry design, sourcing, and manufacturing consultant?",
        answer: "Someone who handles the full production process so the brief does not change hands between five different people and come out looking like it was designed by a committee. Design concept, stone sourcing, CAD/CAM, manufacturing, quality control, all with one person. When that same person also handles the visual production for the finished collection, you go from idea to market without briefing anyone twice."
    },
    { num: "04", question: "What is a GIA-certified gemologist?", answer: "A professional credentialed by the Gemological Institute of America to accurately identify and grade diamonds and colored stones." },
    { num: "05", question: "What is GIA-certified CAD/CAM for jewelry?", answer: "Computer-Aided Design and Computer-Aided Manufacturing specifically trained for jewelry creation, ensuring precise 3D modeling." },
    { num: "06", question: "Can an individual commission a single custom piece?", answer: "Yes, personal commissions for bespoke, one-of-a-kind pieces are welcome." },
    { num: "07", question: "Can a brand commission an entire product line?", answer: "Absolutely. Full collection development from design language to final manufacturing is available for brands." },
    { num: "08", question: "Do you handle visual production and imagery for jewelry brands?", answer: "Yes, through Ziu Creative Studio, high-quality, AI-powered visual imagery is provided to bring the collection to market." },
    { num: "09", question: "How long does a custom jewelry project take?", answer: "Timelines vary by complexity, but generally range from 4 to 8 weeks after the design is finalized." },
    { num: "10", question: "Do you work with jewelry brands in the US, UK, Europe, and UAE?", answer: "Yes, global collaborations are a core part of the business, coordinating production and delivery internationally." },
    { num: "11", question: "What is the difference between working with Gautam Maneck and hiring separately?", answer: "A seamless, single-point-of-contact experience. No details are lost in translation between designer, sourcer, manufacturer, and photographer." },
    { num: "12", question: "What gemstones does Gautam Maneck source?", answer: "Diamonds (natural and lab-grown), colored precious stones, and pearls, all sourced strictly to serve the design." },
    { num: "13", question: "Is Gautam Maneck open to new projects?", answer: "Yes, new brand partnerships and personal commissions are currently being accepted." },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(2); // Default to 3rd item open like the design

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-header">
                <Typography variant="h2" weight="bold" className="faq-title">
                    FAQ
                </Typography>
                <div>
                    <Typography variant="p" color="muted" className="faq-subtitle" style={{ margin: "auto", fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}>
                        Everything you may want to know before starting a custom piece, collection,
                        or <strong>long-term partnership</strong>. Projects are scoped and quoted after an initial
                        conversation.
                    </Typography>
                </div>

            </div>

            <div className="faq-container">
                {/* LEFT SIDE: STICKY */}
                <div className="faq-left">
                    <div className="faq-images">
                        <img src={faqimg} alt="" />
                    </div>

                    <Typography variant="h2" weight="bold" className="faq-left-title">
                        ALL THE<br />
                        DETAILS,<br />
                        EXPLAINED
                    </Typography>
                </div>

                {/* RIGHT SIDE: ACCORDION LIST */}
                <div className="faq-right">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div className="faq-item" key={i}>
                                <div
                                    className="faq-question-row"
                                    onClick={() => toggleFaq(i)}
                                >
                                    <span className="faq-num" style={{ color: '#231F20', fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}>{faq.num}</span>
                                    <h4 style={{ color: isOpen ? '#888888' : '#231F20', fontFamily: "'Poppins', sans-serif", fontSize: "12px" }} className={`faq-question ${isOpen ? 'active' : ''}`}>
                                        {faq.question}
                                    </h4>
                                    <span className="faq-icon">
                                        {isOpen ? 'x' : '+'}
                                    </span>
                                </div>

                                <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
                                    <div className="faq-answer">
                                        <Typography variant="p" color="muted" style={{ paddingBottom: '1.5rem', maxWidth: '650px', fontSize: '12px', fontFamily: "'Poppins', sans-serif", color: '#231F20', letterSpacing: "2%", lineHeight: "20px" }}>
                                            {faq.answer}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
