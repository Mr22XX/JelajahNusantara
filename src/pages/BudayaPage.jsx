import React from 'react';
import Navbar from '../components/Navbar';
import dataBudaya from '../dataBudaya';
import CardBudaya from '../components/CardBudaya';



export default function BudayaPage() {
  return (
      <div className="min-h-screen   bg-gray-900 p-5">
          <Navbar/>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Budaya Bengkulu</h1>
      <div className="grid grid-cols-1 py-8 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dataBudaya.map((item) => (
            <CardBudaya key={item.id} title={item.title} image={item.image} id={item.id} />
        ))}
      </div>
    </div>
  );
}
