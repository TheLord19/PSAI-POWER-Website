'use client';

import React from 'react';
import styles from '/styles/Card.css';

type CardProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

export default function Card({ title, description, onClick }: CardProps) {
  return (
    <article
      className="card"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-pressed="false"
    >
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
}
