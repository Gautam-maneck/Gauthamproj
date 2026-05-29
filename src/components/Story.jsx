import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Story.css';
import logo from '../assets/images/GM_story.png';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth <= 768) {

            gsap.set(imageRef.current, {
                clearProps: "all",
            });

            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

            return;
        }
        // Refresh ScrollTrigger to recalculate layout for pinned/animated sections below.
        // We use a small timeout to ensure the DOM has updated with the expanded text first.
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const ctx = gsap.context(() => {
            // Sticky Slow Parallax Reveal
            gsap.fromTo(imageRef.current,
                { y: 60 },
                {
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom center",
                        scrub: 0.4
                    }
                }
            );
        }, containerRef);

        return () => {
            clearTimeout(timeout);
            ctx.revert();
        };
    }, [isExpanded]);

    return (
        <section className="story-section">
            <div className="story-container" ref={containerRef}>
                <div
                    className="story-left"
                    ref={imageRef}
                    style={{
                        position: isExpanded ? 'sticky' : 'relative',
                        top: isExpanded ? '120px' : 'auto',
                        height: 'max-content'
                    }}
                >
                    <img src={logo} alt="Gautam Maneck Logo" className="story-logo" />
                </div>
                <div className="story-right">
                    <h2 className="story-heading">IT STARTED WITH HIS MOTHER.</h2>
                    <div className="story-content">
                        <p>
                            And two words that changed everything. Fresh out of his gemology course at GIA in
                            Carlsbad, California, Gautam sat down to design a bracelet for her. He showed her
                            everything. Tennis bracelets, thin solid bands, slightly broader ones, different finishes,
                            different weights. She looked at all of them and gave him her brief.
                        </p>
                        <p className="story-highlight">Daily wear.</p>
                        <p>
                            No sketch. No reference. No further explanation. Just two words and a look that said
                            figure it out.
                        </p>
                        {isExpanded && (
                            <>
                                <p>He almost got it wrong. He nearly went back with another set of options. But something made him stop. Instead of going back to the designs, he went back to her. What does her day actually look like? How does she dress? What is already on her wrist when she is in the kitchen, stepping out, at a family dinner? What does daily wear mean for this specific woman, with this specific life?</p>
                                <p>That was the moment. Not the bracelet. The question.</p>
                                <p>
                                    Clients rarely have the words for what they want. They give you fragments. Daily wear. Something elegant. Not too heavy. Take those fragments at face value and you will always come back with something that is almost right.
                                </p>
                                <p>
                                    Almost right is the most expensive place to be in this business. It costs time, it costs trust, and it costs the moment when someone opens a box and their eyes change before their brain has caught up.
                                </p>
                                <p>
                                    Gautam has watched that moment happen enough times to build his entire process around it.
                                </p>
                                <p>
                                    Twelve years across design direction, gemstone sourcing, CAD/CAM, manufacturing, and quality control. And through Ziu Creative Studio, the visuals and imagery that introduce a finished collection to the people who need to see it. The brief does not change hands. What gets decided at the start is what gets made and shown to the world.
                                </p>
                                <p>
                                    For brands, that means one number to call at every stage, from the first sketch to the images that sell it. For the individual with one piece in mind, the same applies. The questions just get a little more personal. If you have something in mind, it is always worth a conversation.
                                </p>
                            </>
                        )}
                        <span className="read-more" onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>{isExpanded ? 'Read less' : 'Read more'}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
