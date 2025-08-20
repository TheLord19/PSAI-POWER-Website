import React, { useState } from "react";
import "../styles/Accordion.css";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion__header" onClick={() => setIsOpen(!isOpen)}>
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
        <p>{content}</p>
      </div>
    </div>
  );
}
