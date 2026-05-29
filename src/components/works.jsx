import React, { useRef, useState, useEffect, useCallback } from 'react';
import Typography from "./Typography";
import "./FeaturedWorks.css";
import high1 from "../assets/images/high/h_img1.png"
import high2 from "../assets/images/high/h_img2.png"
import high3 from "../assets/images/high/h_img3.png"
import high4 from "../assets/images/high/h_img4.png"
import high5 from "../assets/images/high/h_img5.png"
import high6 from "../assets/images/high/h_img6.png"
// import high7 from "../assets/images/high/h_img7.png"
import high7 from "../assets/images/featured_image1.png"
import high8 from "../assets/images/high/h_img8.png"
import high9 from "../assets/images/high/h_img9.png"
import high10 from "../assets/images/high/h_img10.png"
import high11 from "../assets/images/high/h_img11.png"
import { text } from 'framer-motion/m';

const slides = [
    { id: 1, src: high1, alt: "Pearls" },
    { id: 2, src: high2, alt: "Round necklace" },
    { id: 3, src: high3, alt: "Sapphire" },
    { id: 4, src: high4, alt: "Blueprint" },
    { id: 5, src: high5, alt: "Ear" },
    { id: 6, src: high6, alt: "Arm bracelet" },
    { id: 7, src: high7, alt: "Ruby necklace" },
    { id: 8, src: high8, alt: "Hand ring" },
    { id: 9, src: high9, alt: "Yellow ring" },
    { id: 10, src: high10, alt: "Ribbed gold bracelet" },
    { id: 11, src: high11, alt: "Two stone ring" },
];

const items = [
    { id: 1, src: high1, alt: "Pearls" },
    { id: 2, src: high2, alt: "Round necklace" },
    { id: 3, src: high3, alt: "Sapphire" },
    { id: 4, src: high4, alt: "Blueprint" },
    { id: 5, src: high5, alt: "Ear" },
    { id: 6, src: high6, alt: "Arm bracelet" },
    { id: 7, src: high7, alt: "Ruby necklace" },
    { id: 8, src: high8, alt: "Hand ring" },
    { id: 9, src: high9, alt: "Yellow ring" },
    { id: 10, src: high10, alt: "Ribbed gold bracelet" },
    { id: 11, src: high11, alt: "Two stone ring" },
];


export default function FeaturedWorks() {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        const index = Number(entry.target.dataset.index);
                        setActiveIndex(index);
                    }
                });
            },
            { root: track, threshold: 0.5 }
        );

        const slideEls = track.querySelectorAll('.highlights-slide');
        slideEls.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // ── Drag-to-scroll (mouse) ────────────────────────────
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = useCallback((e) => {
        isDragging.current = true;
        startX.current = e.pageX - trackRef.current.offsetLeft;
        scrollLeft.current = trackRef.current.scrollLeft;
    }, []);

    const onMouseMove = useCallback((e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - trackRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.2;
        trackRef.current.scrollLeft = scrollLeft.current - walk;
    }, []);

    const stopDrag = useCallback(() => {
        isDragging.current = false;
    }, []);

    // ── Dot click: snap to slide ──────────────────────────
    const scrollToSlide = (index) => {
        const track = trackRef.current;
        if (!track) return;
        const slide = track.querySelectorAll('.highlights-slide')[index];
        if (slide) {
            track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
        }
    };
    return (
        <section className="featured" id="work">

            {/* HEADER */}
            <div className="header-wrap">
                <Typography variant="h2" weight="semibold" className="title">
                    FEATURED WORKS
                </Typography>

                <Typography variant="p" color="muted" className="subtitle">
                    A selection of <strong style={{color: "#fff"}}>work across brand partnerships</strong> and personal commissions.
                    Photography and video to follow.
                </Typography>
            </div>

            {/* TOP SECTION */}
            <div className="top-section">

                {/* LEFT BIG BLOCK */}
                <div className="left-block">
                    <div className="img img-left" />

                    <div className="text-block">
                        <Typography variant="h3" weight="medium" style={{ fontFamily: "'Poppins', sans-serif", marginBottom: '24px', fontSize: "16px", lineHeight: "22px", letterSpacing: "2%",textTransform: "uppercase" }}>
                            Private Swiss Atelier | DESIGN TO DELIVERY TO VISUALS FOR MARKET | ONGOING
                        </Typography>

                        <Typography variant="p" color="muted" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", lineHeight: "1.8", letterSpacing: "2%" }}>
                            Came in at the design stage and stayed all the way through to launch. Contributed to the creative direction first, then independently led stone sourcing, CAD/CAM, production, and quality control across the full collection. A complete collaboration that helped bring a new jewelry brand to market from the ground up.
                        </Typography>
                        <Typography variant="p" color="muted" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", lineHeight: "1.8", letterSpacing: "2%" }}>
                            Collection design | Diamond sourcing | CAD/CAM | Manufacturing | QC | Visual Product
                        </Typography>
                    </div>
                </div>

                {/* RIGHT BLOCK */}
                <div className="right-block">
                    <div className="img img-right" />

                    <div className="text-block">
                        <Typography variant="h3" weight="medium" style={{ fontFamily: "'Poppins', sans-serif", marginBottom: '24px', fontSize: "16px", lineHeight: "22px", letterSpacing: "2%" }}>
                            PRIVATE LABEL - DR VINAYA REDNAM | SOURCING AND PRODUCTION | LIVE
                        </Typography>

                        <Typography variant="p" color="muted" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", lineHeight: "1.8", letterSpacing: "2%" }}>
                            Brought in to source and produce a collection for a private label brand. Stone selection, manufacturing coordination, and quality sign-off across the board. Every call made to the client's brief and delivered to their timeline with liberty to take creative direction.
                        </Typography>
                        <Typography variant="p" color="muted" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", lineHeight: "1.8", letterSpacing: "2%" }}>
                            Gemstone sourcing | Manufacturing | QC
                        </Typography>
                    </div>
                </div>

            </div>

            {/* HIGHLIGHTS */}
            <div className="highlights">

                <div className="highlight-header">
                    <Typography variant="h2" weight="semibold" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "8%",fontSize: "3.5rem", lineHeight: "4rem",marginBottom: "0px",fontWeight: "400" }}>
                        HIGHLIGHTS
                    </Typography>

                    <Typography variant="p" color="muted" className='hignlights-subtitle'>
                    <strong>Trusted by jewelry brands and founders</strong> for precision-led design, sourcing, and manufacturing delivered with clarity and consistency.
                    </Typography>
                </div>

                {/* TRUE MASONRY GRID */}
                <div className="highlights-section">

                    {/* ════════════════════════════════════════
                DESKTOP MASONRY GRID
                nth-child positions defined in CSS
            ════════════════════════════════════════ */}
                    <div className="masonry">

                        {/* ROW 1 — col 1 */}
                        <div className="item">
                            {/* img 1 — Pearl V-necklace */}
                            {items[0].src && <img src={items[0].src} alt={items[0].alt} />}
                        </div>

                        {/* ROW 1 — col 2 */}
                        <div className="item">
                            {/* img 2 — Round diamond necklace */}
                            {items[1].src && <img src={items[1].src} alt={items[1].alt} />}
                        </div>

                        {/* ROW 1 — cols 3–4 (large) */}
                        <div className="item">
                            {/* img 3 — Sapphire tassel necklace */}
                            {items[2].src && <img src={items[2].src} alt={items[2].alt} />}
                        </div>

                        {/* ROW 2 — cols 1–2 (wide, short blueprint row) */}
                        <div className="item">
                            {/* img 4 — Blueprint earrings */}
                            {items[3].src && <img src={items[3].src} alt={items[3].alt} />}
                        </div>

                        {/* ROW 3 — col 1 (ear) */}
                        <div className="item">
                            {/* img 5 — Ear crawler */}
                            {items[4].src && <img src={items[4].src} alt={items[4].alt} />}
                        </div>

                        {/* ROW 3 — col 2 (arm bracelet) */}
                        <div className="item">
                            {/* img 6 — Arm bracelet */}
                            {items[5].src && <img src={items[5].src} alt={items[5].alt} />}
                        </div>

                        {/* ROWS 2–3 — cols 3–4 (ruby, spans blueprint + ear rows) */}
                        <div className="item">
                            {/* img 7 — Ruby necklace */}
                            {items[6].src && <img src={items[6].src} alt={items[6].alt} />}
                        </div>

                        {/* BOTTOM ROW — col 1 */}
                        <div className="item">
                            {/* img 8 — Hand ring */}
                            {items[7].src && <img src={items[7].src} alt={items[7].alt} />}
                        </div>

                        {/* BOTTOM ROW — col 2 */}
                        <div className="item">
                            {/* img 9 — Yellow diamond ring */}
                            {items[8].src && <img src={items[8].src} alt={items[8].alt} />}
                        </div>

                        {/* BOTTOM ROW — col 3 */}
                        <div className="item">
                            {/* img 10 — Ribbed gold bracelet */}
                            {items[9].src && <img src={items[9].src} alt={items[9].alt} />}
                        </div>

                        {/* BOTTOM ROW — col 4 */}
                        <div className="item">
                            {/* img 11 — Two stone ring */}
                            {items[10].src && <img src={items[10].src} alt={items[10].alt} />}
                        </div>

                    </div>

                    {/* ════════════════════════════════════════
                MOBILE SNAP-SCROLL SLIDER
                Shows flat list; count adjusts via CSS
            ════════════════════════════════════════ */}
                    <div className="highlights-slider-wrapper">
                        <div
                            className="highlights-slider-track"
                            ref={trackRef}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={stopDrag}
                            onMouseLeave={stopDrag}
                        >
                            {items.map((item, i) => (
                                <div
                                    key={item.id}
                                    className="highlights-slide"
                                    data-index={i}
                                >
                                    {item.src && (
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            draggable="false"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Dot indicator */}
                        <div className="slider-dots" role="tablist" aria-label="Highlights navigation">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    className={`slider-dot${activeIndex === i ? ' active' : ''}`}
                                    onClick={() => scrollToSlide(i)}
                                    role="tab"
                                    aria-selected={activeIndex === i}
                                    aria-label={`Slide ${i + 1} of ${items.length}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}