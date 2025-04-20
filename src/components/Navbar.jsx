import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4  text-white flex justify-between items-center z-50">
      <NavLink to="/" className="text-xl font-bold font-mono hover:text-yellow-300 cursor-pointer">
            Jelajah Nusantara
      </NavLink>
      <div className="flex gap-6 text-sm">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/wisata"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300'
          }
        >
          Wisata
        </NavLink>
        <NavLink
          to="/budaya"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-300'
          }
        >
          Budaya
        </NavLink>
      </div>
    </nav>
  );
}
