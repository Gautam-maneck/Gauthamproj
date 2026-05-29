import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Hero Assets
import heroLogo from '../assets/images/hero/hero_GM_Signature.png';
import earImg from '../assets/images/hero/hero_img3.jpeg';
import braceletImg from '../assets/images/hero/hero_img1.jpeg';
import necklesImg from '../assets/images/hero/hero_img4.jpeg';
import pendantImg from '../assets/images/hero/hero_img2.jpeg';
import whatsapp from '../assets/images/whatsapp.png'; 

// Side logo
import sideLogo from '../assets/images/GM_logo_v3.png';

const navItems = ['Jewelry Design', 'Sourcing', 'Manufacturing', 'Visual Consultant'];

const heroImages = [
    { src: braceletImg, alt: 'Diamond Bracelet' },
    { src: pendantImg, alt: 'Pearl Pendant' },
    { src: earImg, alt: 'Diamond Earrings' },
    { src: necklesImg, alt: 'Emerald Necklace' },
];

const sidebarLinks = [
    { label: 'ABOUT', targetId: 'about' },
    { label: 'WORK', targetId: 'work' },
    { label: 'FAQ', targetId: 'faq' },
];

const Hero = () => {
    const [activeSection, setActiveSection] = useState('about');
    const isClickScrolling = useRef(false);

    // Scroll to section on click
    const handleNavClick = (targetId) => {
        const el = document.getElementById(targetId);
        if (!el) return;

        isClickScrolling.current = true;
        setActiveSection(targetId);

        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Wait for smooth scroll to finish before re-enabling observer updates
        setTimeout(() => {
            isClickScrolling.current = false;
        }, 1000);
    };

    // IntersectionObserver scroll spy
    useEffect(() => {
        const sectionIds = sidebarLinks.map((link) => link.targetId);
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return;

                // Find the entry with the highest intersection ratio
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: [0, 0.1, 0.2, 0.3, 0.5],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <section className="hero" id="hero">
            {/* ─── Top Navigation ─── */}
            <nav className="hero-nav" aria-label="Services">
                <ul className="hero-nav__list">
                    {navItems.map((item, i) => (
                        <React.Fragment key={item}>
                            {i > 0 && <li className="hero-nav__dot" aria-hidden="true">•</li>}
                            <li className="hero-nav__item" style={{ cursor: "default" }}>{item}</li>
                        </React.Fragment>
                    ))}
                </ul>
            </nav>

            {/* ─── Signature Logo ─── */}
            <motion.div
                className="hero-logo"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            >
                <img src={heroLogo} alt="Gautam Maneck" className="hero-logo__img" />
            </motion.div>

            {/* ─── Tagline ─── */}
            <motion.p
                className="hero-tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
                Gold, diamonds, colour stones, silver. Every material sourced and selected personally. The design

                gets the same attention. Every time.
            </motion.p>

            {/* ─── Image Gallery ─── */}
            <div className="hero-gallery">
                {heroImages.map((img, i) => (
                    <motion.div
                        className="hero-gallery__item"
                        key={img.alt}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9 + i * 0.15, ease: 'easeOut' }}
                    >
                        <img src={img.src} alt={img.alt} className="hero-gallery__img" />
                    </motion.div>
                ))}
            </div>

            {/* ─── Sidebar: Card with Logo + Menu ─── */}
            <aside className="hero-sidebar" aria-label="Quick Navigation">
                <div className="hero-sidebar__card">
                    <div className="hero-sidebar__logo">
                        <img src={sideLogo} alt="GM Logo" />
                    </div>
                    <nav className="hero-sidebar__menu">
                        {sidebarLinks.map((link) => (
                            <button
                                key={link.targetId}
                                className={`hero-sidebar__link${activeSection === link.targetId ? ' active' : ''}`}
                                onClick={() => handleNavClick(link.targetId)}
                            >
                                {link.label} <span className="hero-sidebar__bullet">●</span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* ─── Separate Social Icons Card ─── */}
                <div className="hero-sidebar__socials-card">
                    <a className="hero-sidebar__social hero-sidebar__social--whatsapp" href="https://wa.me/917506262812?utm_source=chatgpt.com" aria-label="WhatsApp">
                        <img src={whatsapp} alt="WhatsApp" style={{ width: '48px', height: '48px' }}/>
                    </a>
                </div>
            </aside>
        </section>
    );
};

export default Hero;

