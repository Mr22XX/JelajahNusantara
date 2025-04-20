import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div className='h-screen bg-gradient-to-tl from-gray-800 to-gray-900'>
      <header className="h-[60%] w-full bg-[url('/public/images/bg.jpg')] bg-cover bg-center brightness-75 bg-no-repeat ">
        <div className='h-full flex flex-col p-5 w-full text-white '>
          <Navbar/>
            <div className='h-full w-full flex justify-center items-center text-5xl font-bold tracking-widest'>
                BENGKULU
            </div>
        </div>
      </header>
      <div className='h-[40%] w-full text-white flex p-10  '>
            <div className='h-full w-full flex flex-col justify-center gap-2'>
                <h1 className='text-yellow-500 font-semibold '>
                    Bengkulu
                </h1>
                <h2 className='text-white text-2xl text-balance'>
                "Bengkulu, Harmoni Alam dan Budaya"
                </h2>
                <p className='w-full text-justify'>
                Bengkulu adalah sebuah provinsi di Pulau Sumatra, Indonesia, yang terkenal dengan keindahan alamnya, sejarah yang kaya, serta budaya yang beragam.
                </p>
            </div>
      </div>
    </div>
  )
}
