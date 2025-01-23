import React from 'react'
import '../../App.css'
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <>
            <nav className='text-white bg-[#e72e77]  h-16 flex  items-center'>
                <div className='flex justify-around items-center w-full'>
                    <div className='text-2xl'> <img src={logo} alt="logo" /></div>
                    <div className=' ' >
                        <ul className='flex justify-evenly list-none gap-20 text-lg'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Venues</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className=' flex items-center justify-self-end gap-5'>
                        <span className='rounded-full p-3 border border-[#b4245d] hover:border-white hover:bg-[#e72e77] bg-[#b4245d] transition-colors duration-300 cursor-pointer'>
                            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </span>
                        <button className='rounded-full border border-[#b4245d] hover:border-white hover:bg-[#e72e77] bg-[#b4245d] transition-colors duration-300  py-2 px-9 cursor-pointer'>Login</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
