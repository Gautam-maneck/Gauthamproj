import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "./Typography";
import "./DetailsSection.css";
import signature from "../assets/images/hero/logo.png"

gsap.registerPlugin(ScrollTrigger);

export default function DetailsSection() {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth <= 768) {

            gsap.set(scrollRef.current, {
                clearProps: "all",
            });

            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

            return;
        }

        const ctx = gsap.context(() => {
            const el = scrollRef.current;
            console.log(el, '..................el');
            gsap.to(el, {
                x: () => -(el.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${el.scrollWidth - window.innerWidth}`,
                    scrub: 0.6,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                },
            });

            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, []);

    return (
        <div style={{ background: "#f5f5f3" }}>
            <div className="canvas-top">
                <Typography
                    variant="h1"
                    weight="semi-bold"
                    className=""
                    style={{ fontWeight: 600, color: "#1A253D", letterSpacing: "8%", maxWidth: "1320px", fontFamily: 'Poppins', fontSize: '3.5rem', margin: 'auto', fontFamily: "'Poppins', sans-serif" }}
                >
                    THE DETAILS, ACCORDING TO GAUTAM
                </Typography>


            </div>
            <section className="details" ref={containerRef}>

                <div className="scroll-wrapper" ref={scrollRef}>
                    <div className="canvas">

                        {/* ══════════════════════════════════
                        TOP ROW — title + far-right quote
                    ══════════════════════════════════ */}


                        {/* ══════════════════════════════════
                        CONTENT ROW — four columns
                    ══════════════════════════════════ */}
                        <div className="canvas-content">
                            <div className="col-empty">

                            </div>

                            {/* ── Col 1 : narrow left ──────── */}
                            <div className="col-1">
                                <p className="dt">
                                    12 years in this industry teaches you that the things
                                    nobody mentions are usually the things{" "}
                                    <strong>that matter most.</strong>
                                </p>
                                <div className="img img-jewelry" />
                            </div>

                            {/* ── Col 2 : wide center ──────── */}
                            <div className="col-2" style={{ paddingTop: '150px' }}>
                                <p className="dt">
                                    The shade consistency between two stones sitting next to
                                    each other. The finish on the inside of a band. The way a
                                    setting looks from the side, not just the front. These are
                                    not the things that come up in a brief. They are the things
                                    that determine whether the{" "}
                                    <strong>final piece feels right</strong> or just looks fine.
                                </p>
                                <div className="img img-diamond" />
                            </div>

                            {/* ── Col 3 : signature + copy ─── */}
                            <div className="col-3">
                                <div className="signature-wrap">
                                    <img src={signature} alt="" className="sign-img" width={265} />
                                </div>

                                <p className="dt">
                                    Knowing where to look for them comes from being present
                                    at <strong>every stage</strong> long enough to understand
                                    how one decision affects the next. A stone chosen without
                                    the <strong>final image in mind.</strong> A setting confirmed
                                    without thinking about how it will catch light. A finish
                                    signed off without checking the parts that face away from
                                    the camera. Each one small. Together, they are the
                                    difference between a piece that is finished and a piece
                                    that is finished right.
                                </p>

                                <p className="dt">
                                    One point of view, from the{" "}
                                    <strong>start to the finish</strong>. Thinking about the
                                    stone while reading the brief.
                                </p>

                                <p className="dt">
                                    Thinking about the image while checking the CAD. Thinking
                                    about the client while standing on the factory floor.
                                    Nothing gets handed off.{" "}
                                    <strong>Nothing gets lost.</strong>
                                </p>
                            </div>

                            {/* ── Col 4 : craftsman image ───── */}
                            <div className="col-4">
                                <p className="dt right-quote">
                                    That is what twelve years in every part of this process
                                    looks like. And that is what <strong>you always get.</strong>
                                </p>
                                <div className="img img-craftsman" />
                            </div>

                        </div>{/* /canvas-content */}
                    </div>{/* /canvas */}
                </div>{/* /scroll-wrapper */}
            </section >
        </div>
    );
}