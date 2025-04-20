import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/AboutPage';
import Home from './pages/HomePage';
import WisataPage from './pages/WisataPage'
import WisataDetail from './pages/WisataDetail'
import 'leaflet/dist/leaflet.css';


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/wisata' element={<WisataPage/>}/>
      <Route path='/wisata/:id' element={<WisataDetail/>}/>
     </Routes>
    </>
  )
}

export default App
