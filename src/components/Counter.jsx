import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './Counter.css';

const CounterItem = ({ target, suffix = "", label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, target, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (value) => setCount(Math.floor(value))
            });
            return () => controls.stop();
        }
    }, [isInView, target]);

    return (
        <div className="counter-item" ref={ref}>
            <div className="counter-number">
                {count}{suffix}
            </div>
            <p className="counter-label">{label}</p>
        </div>
    );
};

const Counter = () => {
    const stats = [
        { target: 12, suffix: "+", label: "Years of Experience" },
        { target: 30, suffix: "+", label: "Year Family Legacy" },
        { target: 2, suffix: "", label: "GIA - Certificate's" },
        { target: 1, suffix: "", label: "Person - Design to Delivery" }
    ];

    return (
        <section className="counter-section">
            <div className="counter-container">
                {stats.map((stat, index) => (
                    <CounterItem key={index} {...stat} />
                ))}
            </div>
        </section>
    );
};

export default Counter;
