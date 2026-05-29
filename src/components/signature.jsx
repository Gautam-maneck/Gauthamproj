import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import img1 from "../assets/images/signature_img1.png";
import img2 from "../assets/images/signature_img2.png";
import img3 from "../assets/images/signature_img3.png";
import img4 from "../assets/images/signature_img4.png";
import img5 from "../assets/images/signature_img5.png";

const images = [img1, img2, img3, img4, img5];

export default function SpiralGallery() {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {

        // ❌ Disable helix animation on mobile
        if (isMobile) return;

        const items = itemsRef.current;
        const total = items.length;

        const radius = 280;
        const angleStep = 360 / total;
        const verticalGap = 140;
        const horizontalGap = 60;

        let scrollData = { progress: 0 };

        function map(value, inMin, inMax, outMin, outMax) {
            return (
                ((value - inMin) * (outMax - outMin)) /
                (inMax - inMin) +
                outMin
            );
        }

        function updateAll() {
            const p = scrollData.progress;

            items.forEach((el, i) => {
                if (!el) return;

                const offset = i - p;

                const rotateY = offset * angleStep;
                const y = offset * verticalGap;

                const rad = (rotateY * Math.PI) / 180;
                const z = Math.cos(rad) * radius;

                // Depth effects
                const scale = map(z, -radius, radius, 0.75, 1.25);
                const blur = map(z, -radius, radius, 6, 0);
                const opacity = map(z, -radius, radius, 0.3, 1);

                const xOffset = Math.sin(rad) * 40;

                el.style.transform = `
                    translate(-0%, -0%)
                    rotateY(${rotateY}deg)
                    translateZ(${radius + horizontalGap}px)
                    translateX(${xOffset}px)
                    translateY(${y}px)
                    scale(${scale})
                `;

                el.style.filter = `blur(${blur}px)`;
                el.style.opacity = opacity;
            });
        }

        const tween = gsap.to(scrollData, {
            progress: total - 1,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            onUpdate: updateAll,
        });

        updateAll();

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };

    }, [isMobile]);

    return (
        <>
            {/* HEADER */}
            <div
                style={{
                    textAlign: "center",
                    padding: "40px 20px 0px",
                    background: "#fff",
                }}
            >
                <h2
                    style={{
                        fontSize: isMobile ? "38px" : "64px",
                        marginBottom: "16px",
                        fontWeight: "400",
                        fontFamily: "'Poppins', sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: '8%',
                        marginTop: "0px"
                    }}
                >
                    Signature Crafts
                </h2>

                <p
                    style={{
                        fontSize: isMobile ? "16px" : "18px",
                        color: "#555",
                        fontFamily: "'Poppins', sans-serif",
                    }}
                >
                    <b>Design, making, presentation.</b> Each piece here got all three.
                </p>
            </div>

            {/* MAIN SECTION */}
            <section
                style={{
                    height: isMobile ? "auto" : "250vh",
                    background: "#fff",
                }}
            >
                <div
                    ref={containerRef}
                    style={{
                        position: isMobile ? "relative" : "sticky",
                        top: 0,
                        height: isMobile ? "auto" : "100vh",
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "center",
                        overflow: "hidden",
                        marginTop: isMobile ? "0px" : "100px",
                    }}
                >

                    {/* =========================
                        DESKTOP HELIX
                    ========================== */}
                    {!isMobile ? (
                        <div
                            style={{
                                perspective: "1400px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    transformStyle: "preserve-3d",
                                    width: "600px",
                                    height: "400px",
                                }}
                            >
                                {images.map((src, i) => (
                                    <div
                                        key={i}
                                        ref={(el) => (itemsRef.current[i] = el)}
                                        style={{
                                            position: "absolute",
                                            width: "320px",
                                            left: "50%",
                                            top: "50%",
                                            margin: "-90px 0 0 -160px",
                                            borderRadius: "18px",
                                            overflow: "hidden",
                                            willChange: "transform",
                                            boxShadow:
                                                "0 20px 60px rgba(0,0,0,0.12)",
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt=""
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (

                        /* =========================
                            MOBILE STACK
                        ========================== */
                        <div
                            style={{
                                width: "100%",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "28px",
                            }}
                        >
                            {images.map((src, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: "100%",
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        transform: `translateY(${i * 10}px)`,
                                        boxShadow:
                                            "0 12px 40px rgba(0,0,0,0.08)",
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            display: "block",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}