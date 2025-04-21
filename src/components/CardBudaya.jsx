import React from 'react';
import { Link } from 'react-router-dom';

export default function CardBudaya({ title, image, id }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>

      <div className="absolute bottom-0 p-5 w-full text-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Link
          to={`/budaya/${id}`}
          className="inline-block mt-2 text-sm text-white  px-4 py-2 rounded underline transition"
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
}
