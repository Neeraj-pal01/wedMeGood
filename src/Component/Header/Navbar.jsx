import React from 'react'
import '../../App.css'
import logo from '../../assets/logo.png'


export default function Navbar() {
    return (
        <>
            <nav className='text-white bg-[#e72e77]  h-16 flex  items-center'>
                <div className='flex justify-between lg:justify-around items-center w-full px-2 lg:px-0'>
                    <div className='flex md:hidden'>
                        <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <div className='w-32 lg:w-48'> <img src={logo} alt="logo" /></div>
                    <div className='hidden md:flex ' >
                        <ul className='flex justify-evenly list-none gap-7 lg:gap-20 text-base lg:text-lg'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Venues</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className=' flex items-center justify-self-end gap-5'>
                        <span className='rounded-full p-2 lg:p-3 border border-[#b4245d] hover:border-white hover:bg-[#e72e77] bg-[#b4245d] transition-colors duration-300 cursor-pointer'>
                            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </span>
                        <button className='rounded-full border border-[#b4245d] hover:border-white hover:bg-[#e72e77] bg-[#b4245d] transition-colors duration-300 py-1 lg:py-2 px-4 lg:px-9 cursor-pointer'>Login</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
