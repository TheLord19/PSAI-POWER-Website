'use client';
import React, { useState } from 'react';
import styles from '@/styles/ContactUs.module.css'; 

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<{ message: string, type: 'success' | 'error' | 'info' } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus({ message: 'Please fill in all fields.', type: 'error' });
            return;
        }
        setStatus({ message: 'Sending...', type: 'info' });
        setTimeout(() => {
            console.log('Form Submitted', formData);
            setStatus({ message: 'Thank you for your message! We will get back to you soon.', type: 'success' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className={styles.pageContainer}>
            {/* Hero Section */}
            <section
                className={styles.hero}
                style={{ backgroundImage: `url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
            >
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                    <p className={styles.heroSubtitle}>
                        We're here to help. Reach out to us for any inquiries or to discuss your next project.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentGrid}>
                    
                    {/* Contact Info */}
                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>Get In Touch</h2>
                        <div className={styles.infoGroup}>
                            {/* Location */}
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div className={styles.infoText}>
                                    <h3 className={styles.infoTitle}>Our Location</h3>
                                    <p className={styles.infoDetail}>123 Power Grid Ave, Suite 100<br/>Electra City, EC 54321</p>
                                </div>
                            </div>
                             {/* Phone */}
                             <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div className={styles.infoText}>
                                    <h3 className={styles.infoTitle}>Phone Number</h3>
                                    <p className={styles.infoDetail}>+1 (555) 123-4567</p>
                                </div>
                            </div>
                             {/* Email */}
                             <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div className={styles.infoText}>
                                    <h3 className={styles.infoTitle}>Email Address</h3>
                                    <p className={styles.infoDetail}>contact@psaipower.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formCard}>
                        <h2 className={styles.cardTitle}>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} noValidate className={styles.form}>
                            <div>
                                <label htmlFor="name" className={styles.label}>Full Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.input} required />
                            </div>
                            <div>
                                <label htmlFor="email" className={styles.label}>Email Address</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} required />
                            </div>
                            <div>
                                <label htmlFor="subject" className={styles.label}>Subject</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={styles.input} required />
                            </div>
                            <div>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={styles.textarea} required></textarea>
                            </div>
                            <div>
                                <button type="submit" className={styles.button}>
                                    Send Message
                                </button>
                            </div>
                             {status && (
                                <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;

