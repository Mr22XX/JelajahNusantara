import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';  // Import Leaflet
import dataBudaya from '../dataBudaya';

export default function BudayaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const Budaya = dataBudaya.find(item => item.id === parseInt(id));

  if (!Budaya) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-600">Wisata tidak ditemukan 😢</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Gambar Header */}
      <div className="relative h-[60vh] w-full">
        <img
          src={Budaya.image}
          alt={Budaya.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{Budaya.title}</h1>
        </div>
      </div>

      {/* Deskripsi */}
      <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-white">Tentang {Budaya.title}</h2>
        <p className="text-lg leading-relaxed text-gray-400 my-2">
          {Budaya.deskripsi || 'Deskripsi lengkap tentang destinasi wisata ini akan ditampilkan di sini.'}
        </p>


        {/* Kembali */}
        <div className="mt-10">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
          >
            ← Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
