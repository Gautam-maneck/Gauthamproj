import React from 'react';
import './About.css';
import aboutProfile from '../assets/images/about/about_prof.jpeg';

const About = () => {
    const services = [
        "Jewelry Design",
        "Sourcing",
        "Manufacturing",
        "Visual Consultant"
    ];

    // Duplicate services for marquee
    const marqueeItems = [...services, ...services, ...services, ...services];

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-content">
                    {/* Profile Image Card */}
                    <div className="about-image-card">
                        <img src={aboutProfile} alt="Gautam Maneck" className="about-profile-img" />
                    </div>

                    {/* Text Description */}
                    <div className="about-text">
                        <p className="about-description">
                            <span className="name-highlight">GAUTAM MANECK</span> is a GIA-certified gemologist and GIA-certified CAD/CAM jewelry designer with 12 years inside the full process of fine jewelry and what comes after. Design, sourcing, CAD/CAM, manufacturing, quality control. Then the visuals and imagery that take it to the right buyers. With one person. Based in Chennai & Works with brands and individuals globally.
                        </p>
                    </div>
                </div>

            </div>

            {/* Marquee Strip - Outside container to allow 100% width */}
            <div className="marquee-strip">
                <div className="marquee-content">
                    {marqueeItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="marquee-item">{item}</span>
                            <span className="marquee-dot">•</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
