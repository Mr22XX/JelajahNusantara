import React from 'react';
import CardWisata from '../components/CardWisata';
import Navbar from '../components/Navbar';
import dataWisata from '../dataWisata';



export default function WisataPage() {
  return (
      <div className="min-h-screen   bg-gray-900 p-5">
          <Navbar/>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Destinasi Wisata Bengkulu</h1>
      <div className="grid grid-cols-1 py-8 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dataWisata.map((item) => (
            <CardWisata key={item.id} title={item.title} image={item.image} id={item.id} />
        ))}
      </div>
    </div>
  );
}
