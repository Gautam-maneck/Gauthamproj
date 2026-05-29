import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "./Typography";
import "./Testimonial.css";
import signatureImg from "../assets/images/hero/Logo.png";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    { name: "Serhiy Hipskyy", role: "CEO Universal", text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.", avatar: "https://i.pravatar.cc/100?img=11" },
    { name: "Justus Menke", role: "CEO Eronaman", text: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.", avatar: "https://i.pravatar.cc/100?img=12" },
    { name: "Arjun Mehta", role: "Founder", text: "Precision and clarity in every detail. The craftsmanship exceeds all our expectations.", avatar: "https://i.pravatar.cc/100?img=13" },
    { name: "Karan Shah", role: "Director", text: "Exceptional craftsmanship and delivery. The partnership has been incredibly valuable.", avatar: "https://i.pravatar.cc/100?img=14" },
    { name: "Rahul Jain", role: "Brand Owner", text: "A truly collaborative experience. The final pieces consistently capture our vision.", avatar: "https://i.pravatar.cc/100?img=15" },
    { name: "Vikram Patel", role: "Entrepreneur", text: "Execution at the highest level. I highly recommend their expertise for custom manufacturing.", avatar: "https://i.pravatar.cc/100?img=16" },
];

export default function TestimonialSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = gsap.utils.toArray(".card");

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1500", // 🔥 Reduced scroll length so the pin doesn't feel stuck
                    scrub: 1,
                    pin: true,
                },
            });

            // Set initial state
            gsap.set(cards, { y: 150, autoAlpha: 0 });

            // Animate cards in pairs (0 & 1, then 2 & 3, etc.)
            for (let i = 0; i < cards.length; i += 2) {
                const pair = [cards[i], cards[i + 1]].filter(Boolean);

                tl.to(pair, {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out"
                }).to(pair, {
                    y: -150,
                    autoAlpha: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.in"
                }, "+=0.8"); // Hold on screen briefly before exiting
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="testimonial" ref={sectionRef}>

            {/* BACKGROUND SIGNATURE */}
            <div className="bg-signature">
                <img src={signatureImg} alt="Gautam Maneck Signature" />
            </div>

            {/* CENTER TEXT */}
            <div className="center">
                <Typography variant="h2" weight="bold" className="title">
                    TESTIMONIAL
                </Typography>
                <div>
                    <Typography variant="p" color="muted" className="subtitle" style={{ margin: "auto" }}>
                        <strong>Trusted by jewelry brands and founders</strong> for precision-led design, sourcing, and manufacturing delivered with clarity and consistency.
                    </Typography>
                </div>
            </div>

            {/* CARDS */}
            <div className="cards">
                {testimonials.map((t, i) => (
                    <div className={`card ${i % 2 === 0 ? 'card-left' : 'card-right'}`} key={i}>
                        <div className="quote">“</div>
                        <div className="stars">★★★★★</div>
                        <Typography variant="p" color="muted">
                            {t.text}
                        </Typography>
                        <div className="user">
                            <div className="avatar" style={{ backgroundImage: `url(${t.avatar})` }} />
                            <div>
                                <Typography variant="span" weight="medium" style={{ display: 'block' }}>
                                    {t.name}
                                </Typography>
                                <Typography variant="p" color="muted" style={{ fontSize: '0.85rem', marginTop: '2px' }}>
                                    {t.role}
                                </Typography>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}