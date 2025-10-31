// src/app/contact-us/page.tsx
'use client';
import React from 'react'; // Removed useState import

const ContactUsPage = () => {
    return (
        <div className="min-h-screen bg-white text-slate-800">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center text-white py-28 px-4"
                style={{ backgroundImage: `url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
            >
                <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto text-slate-200">
                        We're here to help. Reach out to us for any inquiries or to discuss your next project.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-24 bg-slate-50 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
                        <div className="space-y-8">
                            {/* Location */}
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">Our Location</h3>
                                    <p className="text-slate-600">1099 Gordon Avenue, Unit 3<br/>Sudbury, ON P3A 2V5<br/>Canada</p>
                                </div>
                            </div>
                            
                            {/* Phone */}
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">Phone Number</h3>
                                    <p className="text-slate-600">+1 (705) 970-6244</p>
                                </div>
                            </div>
                            
                            {/* Email */}
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">Email Address</h3>
                                    <p className="text-slate-600">info@psaipowerinc.ca</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Send Us a Message</h2>
                        <form 
                            action="https://formspree.io/f/xldopklg" 
                            method="POST"
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={5} 
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;