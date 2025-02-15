import React from 'react'
import '../../App.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'



export default function Navbar() {
    const [show, setShow] = React.useState(false)
    return (
        <>
            <nav className='text-white bg-[#e72e77] py-4  md:h-18 flex  items-center'>
                <div className='md:flex md:justify-between lg:justify-around items-center w-full px-2 md:px-0 '>
                    <div className='flex justify-between items-center px-1 relative md:static'>
                        <NavLink to='/'><div className='w-32 lg:w-48'><img src={logo} alt="logo" /></div></NavLink>

                        <span
                            tabIndex={0}
                            onClick={() => setShow(!show)}
                            onBlur={() => { setTimeout(() => setShow(false), 0) }}
                        >
                            <svg className=" md:hidden h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>

                    </div>
                    <div className={` ${show ? 'opacity-100' : 'opacity-0'} md:opacity-100 transition-opacity ease-in duration-300  absolute left-0  w-full md:w-auto bg-[#e72e77] md:static z-10`} >
                        <ul className='flex flex-col pl-3 md:flex-row justify-evenly list-none py-5 md:py-0 gap-7 lg:gap-20 text-base lg:text-lg '>
                            <span className='flex items-center justify-between'> <NavLink to="/"> <li>Home</li></NavLink>
                                <NavLink to='/login'> <button className='md:hidden mr-2 rounded-full border border-[#b4245d] hover:border-white hover:bg-[#e72e77] bg-[#b4245d] transition-colors duration-300 py-1 px-3 cursor-pointer'>Login</button></NavLink>
                            </span>
                            <NavLink to="/about"> <li>About Us</li></NavLink>
                            <NavLink to='/venues'> <li>Venues</li></NavLink>
                            <NavLink to="/gallery"> <li>Gallery</li></NavLink>
                            <NavLink to="/contact"> <li>Contact Us</li></NavLink>
                        </ul>
                    </div>
                    <div className='hidden  md:flex items-center justify-self-end gap-5 '>
                        <span className='rounded-full p-1 lg:p-2 flex items-center justify-center border border-[#b4245d] hover:border-white hover:bg-[#e72e77] bg-[#b4245d] transition-colors duration-300 cursor-pointer'>
                            <lord-icon src="https://cdn.lordicon.com/kkvxgpti.json" trigger="loop" delay="1000" colors="primary:#ffffff" ></lord-icon>
                        </span>
                        <NavLink to='/login'><button className='rounded-full border border-[#b4245d] hover:border-white hover:bg-[#e72e77] bg-[#b4245d] transition-colors duration-300 py-1 lg:py-2 px-4 lg:px-9 cursor-pointer'>Login</button></NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
