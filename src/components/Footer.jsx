import React from 'react';
import Typography from './Typography';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-left">
                    <Typography variant="h2" weight="bold" className="footer-title">
                        IT STARTS
                        HERE
                    </Typography>
                    <Typography variant="p" color="muted" className="footer-desc">
                        Established or just getting started. A full collection or a single piece. One stage or all
                        of them. It all starts with one conversation.
                    </Typography>
                </div>

                <div className="footer-right">
                    <Typography variant="p" className="footer-phone">
                        +91 75062 62812
                    </Typography>
                    <Typography variant="h3" weight="bold" className="footer-email">
                        MANECKGAUTAM@GMAIL.COM
                    </Typography>
                    <div className="footer-info">
                        <span>Gautam Maneck</span>
                        <span className="dot">•</span>
                        <span>Ziu Creative Studio</span>
                        <span className="dot">•</span>
                        <span>India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
