// src/components/Card.jsx
import React from "react";

function Card({ title, subtitle, description, link }) {
  return (
    <div className="w-full max-w-md p-5 border rounded-2xl shadow-lg hover:shadow-xl transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
      <p className="mt-2 text-gray-700">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-blue-600 hover:underline"
        >
          View More →
        </a>
      )}
    </div>
  );
}

export default Card;
