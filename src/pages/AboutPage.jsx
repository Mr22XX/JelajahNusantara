import React from 'react';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 text-gray-800 p-5 dark:text-white transition duration-300">
      <Navbar/>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          Tentang Kami
        </h1>

        <p className="text-lg leading-relaxed mb-10 text-white text-center max-w-3xl mx-auto">
          Website ini dibuat untuk menjadi jendela informasi dan inspirasi bagi siapa saja yang ingin mengenal lebih dalam kekayaan wisata dan budaya Indonesia, khususnya daerah Bengkulu. Kami percaya bahwa pariwisata bukan hanya tentang berlibur, tetapi juga tentang mengenal identitas, sejarah, dan kearifan lokal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-400 dark:bg-blue-950 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">🎯 Misi Kami</h2>
            <p>Menyediakan informasi pariwisata yang akurat, menarik, dan mudah diakses oleh semua kalangan.</p>
          </div>

          <div className="bg-yellow-400 dark:bg-yellow-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">📍 Fokus Wilayah</h2>
            <p>Kami memfokuskan konten pada keunikan destinasi wisata, budaya, dan sejarah di Bengkulu dan sekitarnya.</p>
          </div>

          <div className="bg-green-400 dark:bg-green-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">🤝 Kolaborasi</h2>
            <p>Kami terbuka untuk kolaborasi dengan komunitas, pelaku wisata, dan instansi terkait untuk mempromosikan daerah.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-2 text-blue-500">Bersama Jelajahi Keindahan Nusantara</h3>
          <p className="text-md text-gray-400 dark:text-gray-300">
            Temukan destinasi impianmu, pelajari budayanya, dan rasakan pengalaman yang tak terlupakan.
          </p>
        </div>
      </div>
    </div>
  );
}
