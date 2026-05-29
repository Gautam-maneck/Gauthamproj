import React, { useState, useRef } from 'react';
import Typography from './Typography';
import './Contact.css';
import necklace_img from '../assets/images/neck_chain.png';

const API_URL = 'https://gautam-portfolio.raajux.com/mail.php';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [attachment, setAttachment] = useState(null);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [statusMsg, setStatusMsg] = useState('');
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setAttachment(file);
    };

    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemoveFile = () => {
        setAttachment(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error');
            setStatusMsg('Please fill in all fields.');
            return;
        }

        setStatus('sending');
        setStatusMsg('');

        try {
            const payload = new FormData();
            payload.append('name', formData.name);
            payload.append('email', formData.email);
            payload.append('message', formData.message);
            if (attachment) {
                payload.append('attachment', attachment);
            }

            const res = await fetch(API_URL, {
                method: 'POST',
                body: payload,
            });

            if (res.ok) {
                setStatus('success');
                setStatusMsg('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setAttachment(null);
                if (fileInputRef.current) fileInputRef.current.value = '';

                // Reset status after 5 seconds
                setTimeout(() => {
                    setStatus('idle');
                    setStatusMsg('');
                }, 5000);
            } else {
                throw new Error(`Server responded with ${res.status}`);
            }
        } catch (err) {
            setStatus('error');
            setStatusMsg('Failed to send message. Please try again.');
            console.error('Mail error:', err);
        }
    };

    const isDisabled = status === 'sending';

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* LEFT SIDE */}
                <div className="contact-left">
                    <div>
                        <Typography variant="h2" weight="bold" className="contact-title">
                            REACH OUT
                        </Typography>

                        <Typography variant="p" color="muted" className="contact-desc">
                            Many of our strongest partnerships began with a single conversation and grew through <strong>trust, precision, and consistently exceptional results.</strong>
                        </Typography>
                    </div>

                    <div className="contact-image-wrapper">
                        <img src={necklace_img} alt="Jewelry on neck" className="contact-image" />
                    </div>
                </div>

                {/* RIGHT SIDE (FORM) */}
                <div className="contact-right">
                    <div className="contact-form-card">
                        <Typography variant="h3" weight="medium" className="form-title">
                            HAVE SOMETHING IN MIND? LET'S TALK
                        </Typography>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="NAME"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isDisabled}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="EMAIL"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isDisabled}
                                    />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <input
                                    type="text"
                                    id="message"
                                    name="message"
                                    placeholder="MESSAGE"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={isDisabled}
                                />
                            </div>

                            <div className="form-actions">
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp"
                                />
                                <button type="button" className="attach-btn" onClick={handleAttachClick} disabled={isDisabled}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                    </svg>
                                    {attachment ? attachment.name : 'ATTACH FILE'}
                                </button>

                                {/* Remove file button */}
                                {attachment && (
                                    <button type="button" className="remove-file-btn" onClick={handleRemoveFile} disabled={isDisabled} title="Remove file">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {/* Status message */}
                            {statusMsg && (
                                <div className={`form-status ${status === 'success' ? 'form-status--success' : 'form-status--error'}`}>
                                    {status === 'success' && (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                    {status === 'error' && (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="15" y1="9" x2="9" y2="15" />
                                            <line x1="9" y1="9" x2="15" y2="15" />
                                        </svg>
                                    )}
                                    {statusMsg}
                                </div>
                            )}

                            <button type="submit" className="submit-btn" disabled={isDisabled}>
                                {status === 'sending' ? (
                                    <>
                                        <span className="submit-spinner" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Submit now
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
