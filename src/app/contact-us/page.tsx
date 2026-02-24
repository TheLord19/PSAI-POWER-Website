// src/app/contact-us/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
    const { t } = useTranslation();
    const [formStatus, setFormStatus] = useState<null | 'success' | 'error' | 'loading'>(null);

    const slideshowImages = [
        {
            src: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            caption: "Killarney Provincial Park, Ontario"
        },
        {
            src: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            caption: "Northern Ontario Wilderness"
        },
        {
            src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            caption: "Lake Landscape, Ontario"
        },
        {
            src: "https://images.pexels.com/photos/1006121/pexels-photo-1006121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            caption: "Forest Path, Northern Ontario"
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slideshowImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slideshowImages.length]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('loading');

        try {
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch('https://formspree.io/f/info@psaipowerinc.ca', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('error');
        } finally {
            setTimeout(() => setFormStatus(null), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden text-white py-32 px-4">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero/about.jpg"
                        alt="Contact Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0B1120]/80 backdrop-blur-[2px]"></div>
                </div>

                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        {t('contact-hero-title')}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                        {t('contact-hero-subtitle')}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">{t('contact-info-title')}</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 mb-1">{t('contact-location-title')}</h4>
                                            <p className="text-slate-600 leading-relaxed">
                                                1099 Gordon Avenue, Unit 3<br />
                                                Sudbury, ON P3A 2V5<br />
                                                Canada
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 mb-1">{t('contact-phone-title')}</h4>
                                            <p className="text-slate-600">
                                                <a href="tel:+17059706244" className="hover:text-blue-600 transition-colors">+1 (705) 970-6244</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 mb-1">{t('contact-email-title')}</h4>
                                            <p className="text-slate-600">
                                                <a href="mailto:info@psaipowerinc.ca" className="hover:text-blue-600 transition-colors">info@psaipowerinc.ca</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scenic Ontario Slideshow */}
                            <div className="rounded-2xl overflow-hidden h-[320px] w-full relative shadow-lg">
                                {slideshowImages.map((slide, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        <Image
                                            src={slide.src}
                                            alt={slide.caption}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                            <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                                                {slide.caption}
                                            </span>
                                            <div className="flex gap-1">
                                                {slideshowImages.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() => setCurrentSlide(dotIdx)}
                                                        className={`w-2 h-2 rounded-full transition-all ${dotIdx === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-slate-900 mb-2">{t('contact-form-title')}</h3>
                                <p className="text-slate-500 mb-8">{"We usually respond within 24 hours."}</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">{t('contact-label-name')}</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">{t('contact-label-email')}</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-semibold text-slate-700">{t('contact-label-subject')}</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">{t('contact-label-message')}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none bg-slate-50 focus:bg-white"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    {formStatus === 'success' && (
                                        <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-3 border border-green-100">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                            <span className="text-sm font-medium">{t('contact-status-success')}</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'loading' || formStatus === 'success'}
                                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === 'loading' ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <span>{t('contact-button-submit')}</span>
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
