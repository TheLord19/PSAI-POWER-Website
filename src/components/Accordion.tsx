'use client';
import React, { useState } from "react";
import "../styles/Accordion.css";

interface AccordionProps {
  title: string;
  content: React.ReactNode;  // Accept JSX or strings
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div
        className="accordion__header"
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen);
          }
        }}
      >
        <h3 className="accordion__title">{title}</h3>
        <span className={`accordion__icon ${isOpen ? "rotate" : ""}`}>⌄</span>
      </div>

      <div
        className="accordion__content"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? "1" : "0",
        }}
      >
        {/* Render JSX content directly */}
        {content}
      </div>
    </div>
  );
}
