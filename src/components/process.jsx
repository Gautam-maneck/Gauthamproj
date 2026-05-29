import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from './Typography';
import image1 from '../assets/images/process1.png';
import image2 from '../assets/images/process2.png';
import line from '../assets/images/line_divider.png';
import './ProcessSection.css';

gsap.registerPlugin(ScrollTrigger);

const JewelryProcess = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const ctx = gsap.context(() => {
            // Slight fade in for the text content
            gsap.fromTo(textRef.current,
                { opacity: 0.7, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 95%",
                        end: "top 75%",
                        scrub: 1.5 // Smoother scrub
                    }
                }
            );

            // Parallax scroll for left images – smooth upward motion (float effect)
            gsap.fromTo(imageRef.current,
                { y: 0 },
                {
                    y: -120,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.8
                    }
                }
            );


        }, containerRef);

        return () => {
            clearTimeout(timeout);
            ctx.revert();
        };
    }, []);
    const processSteps = [
        {
            number: '01',
            title: 'BRIEF',
            content: 'Everything <strong>starts with a conversation</strong>. What you want, what you have in mind, what you are working with. This is where the direction gets set and where most of the <strong>important decisions</strong> actually <strong>happen</strong>.'
        },
        {
            number: '02',
            title: 'DESIGN',
            content: 'Once the brief is clear, the <strong>idea starts taking shape</strong>. Sketches, references, direction, worked through until the design feels resolved and ready to move. Nothing moves forward until it <strong>genuinely feels right</strong>.'
        },
        {
            number: '03',
            title: 'SOURCING',
            content: 'With the <strong>design</strong> confirmed and the budget agreed, the right stones get found. <strong>Diamonds, coloured stones, or pearls</strong>, each one selected by a GIA-certified gemologist with the specific piece in mind. The stone is <strong>always chosen to serve</strong> the design. Never the other way around.'
        },
        {
            number: '04',
            title: 'CAD/CAM',
            content: 'The design moves to the computer. As a GIA-certified CAD/CAM jewelry designer, <strong>every dimension</strong> is locked and every <strong>detail</strong> is <strong>finalised before production begins</strong>. Nothing is left to interpretation. This is where the piece stops being an idea and the actual making begins.'
        },
        {
            number: '05',
            title: 'FINISHED PIECE',
            content: 'The jewelry is made while it is <strong>being checked. Every stage of production</strong>, not just the last one. The standard is not finishing the piece. The <strong>standard is finishing it right</strong>. That distinction is what makes the difference between something that is fine and something that is <strong>exceptional</strong>.'
        },
        {
            number: '06',
            title: 'VISUAL PRODUCT',
            content: 'The piece is done. Now it needs to be seen. Through <strong>Ziu Creative Studio</strong>, imagery and video are produced for the collection. <strong>AI-powered visuals</strong> built with the same attention to the product as the production process itself. Every image checked against the actual piece. <strong>No generic backdrops. No stock-photo energy</strong>.'
        }
    ];

    return (
        <div className="process-section">
            {/* Header Section */}
            <div className="process-section__header">
                <Typography
                    variant="h1"
                    weight="regular"
                    className="process-section__subtitle"
                    style={{
                        fontSize: '3.5rem',
                        letterSpacing: '8%',
                        marginBottom: '20px',
                        color: '#1a1a1a',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '400',
                    }}
                >
                    HOW IT WORKS
                </Typography>
                <Typography
                    variant="p"
                    weight="regular"
                    className="process-section__desc"
                    style={{
                        fontSize: '12px',
                        lineHeight: '1.8',
                        letterSpacing: "2%",
                        color: '#231F20',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontFamily: "'Poppins', sans-serif",
                    }}
                >
                    Whether it's a full collection or a single piece for someone specific — it starts the same way. One piece or a hundred. <strong>The brief gets the same attention</strong>.
                </Typography>
            </div>

            {/* Main Content */}
            <div className="process-section__content">
                {/* <Typography
                    variant="h2"
                    weight="bold"
                    className="process-section__main-title"
                >
                    THE PROCESS
                </Typography> */}

                <div
                    ref={containerRef}
                    className="process-section__grid"
                >
                    {/* Left Image Column */}
                    <div
                        ref={imageRef}
                        className="process-section__images"
                    >
                        <div className="process-section__img-wrap">
                            <img
                                src={image1}
                                alt="Jewelry sketches and pearl bracelet"
                                className="process-section__img process-section__img--top"
                            />
                        </div>
                        <div className="process-section__img-wrap">
                            <img
                                src={image2}
                                alt="Rose gold bracelet with diamonds"
                                className="process-section__img process-section__img--bottom"
                            />
                        </div>
                    </div>

                    {/* Right Content Column */}
                    <div
                        ref={textRef}
                        className="process-section__steps"
                    >
                        {processSteps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`process-section__step${index < processSteps.length - 1 ? ' process-section__step--spaced' : ''}`}
                                >
                                    {/* Number */}
                                    <Typography
                                        variant="span"
                                        weight="regular"
                                        className="process-section__number"
                                    >
                                        {step.number}
                                    </Typography>

                                    {/* Title */}
                                    <Typography
                                        variant="span"
                                        weight="regular"
                                        className="process-section__step-title"
                                    >
                                        {step.title}
                                    </Typography>

                                    {/* Content */}
                                    <Typography
                                        variant="p"
                                        weight="regular"
                                        className="process-section__step-content"
                                        dangerouslySetInnerHTML={{
                                            __html: step.content
                                        }}

                                    />
                                </div>
                                {index < processSteps.length - 1 && <img src={line} alt="Line" className="process-section__line-divider" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JewelryProcess;