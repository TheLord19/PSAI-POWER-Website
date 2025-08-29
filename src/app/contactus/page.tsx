// 'use client';
// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import styles from '@/styles/ContactUs.module.css';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactUs: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thanks for reaching out! We\'ll contact you soon.');
//   };

//   return (
//     <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
//       <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//         <h1 style={{ fontSize: '2.5rem', color: '#003366', marginBottom: '1rem' }}>Contact Us</h1>
//         <p style={{ fontSize: '1.2rem', color: '#666' }}>Get in touch for energy efficiency solutions—no office visit needed.</p>
//       </div>

//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
//         {/* Left Column: Form */}
//         <div>
//           <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//             <div>
//               <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 style={{ 
//                   width: '100%', 
//                   padding: '1rem', 
//                   border: '2px solid #ddd', 
//                   borderRadius: '8px',
//                   fontSize: '1rem',
//                   transition: 'border-color 0.3s ease'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#0078d4'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 style={{ 
//                   width: '100%', 
//                   padding: '1rem', 
//                   border: '2px solid #ddd', 
//                   borderRadius: '8px',
//                   fontSize: '1rem',
//                   transition: 'border-color 0.3s ease'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#0078d4'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </div>

//             <div>
//               <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={5}
//                 required
//                 style={{ 
//                   width: '100%', 
//                   padding: '1rem', 
//                   border: '2px solid #ddd', 
//                   borderRadius: '8px',
//                   fontSize: '1rem',
//                   resize: 'vertical',
//                   minHeight: '120px',
//                   transition: 'border-color 0.3s ease'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#0078d4'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               ></textarea>
//             </div>

//             <button 
//               type="submit" 
//               style={{ 
//                 padding: '1.2rem 2rem', 
//                 background: '#0078d4', 
//                 color: 'white', 
//                 border: 'none', 
//                 borderRadius: '8px', 
//                 cursor: 'pointer',
//                 fontSize: '1.1rem',
//                 fontWeight: '600',
//                 transition: 'background-color 0.3s ease'
//               }}
//               onMouseOver={(e) => e.target.style.background = '#005a9e'}
//               onMouseOut={(e) => e.target.style.background = '#0078d4'}
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Right Column: Contact Info */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
//             <div style={{ fontSize: '2.5rem', width: '60px', textAlign: 'center' }}>📞</div>
//             <div>
//               <h3 style={{ margin: '0 0 0.5rem 0', color: '#003366' }}>Phone</h3>
//               <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>+1 (123) 456-7890</p>
//             </div>
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
//             <div style={{ fontSize: '2.5rem', width: '60px', textAlign: 'center' }}>✉️</div>
//             <div>
//               <h3 style={{ margin: '0 0 0.5rem 0', color: '#003366' }}>Email</h3>
//               <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>contact@psaipower.com</p>
//             </div>
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
//             <div style={{ fontSize: '2.5rem', width: '60px', textAlign: 'center' }}>🕒</div>
//             <div>
//               <h3 style={{ margin: '0 0 0.5rem 0', color: '#003366' }}>Hours</h3>
//               <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>Mon-Fri: 9AM-5PM</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
// app/contactus/page.tsx

'use client';
export default function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>
    </div>
  );
}
