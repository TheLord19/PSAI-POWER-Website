// src/components/ui/Card.tsx
interface CardProps {
  title: string;
  description: string;
  className?: string;
}

export default function Card({ title, description, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}