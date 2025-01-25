import React from 'react'
import bannerImg from '../../assets/banner.png';

export default function Header() {
  return (
    <>
      <div className='relative'>
        <img src={bannerImg} alt="bannerImg" className='h-[35vh] lg:h-[70vh] w-full object-cover contrast-more:' />        
        <div className='flex flex-col items-center justify-center absolute bottom-0 w-full h-1/2 mx-auto text-gray-50 gap-2 bg-gradient-to-b from-transparent from-2% to-black/80 to-100%'>
          <h1 className='text-3xl lg:text-5xl font-semibold pt-2'>Your Wedding Your way</h1>
          <p className=' hidden md:block text-base lg:text-xl'>Find the best wedding vendors with thousands of trusted reviews</p>
          <div className='hidden md:flex border lg:w-1/2 border-[#b4245d]'>
            <input className=' lg:w-[42%] px-1 border-r-2 border-[#b4245d]' type="text" placeholder='Search Venue' />
            <input className=' lg:w-[42%] px-1' type="text" placeholder='Search City' />
            <button className='lg:w-[16%] p-2 lg:py-3 bg-[#e72e77] text-white text-nowrap'>Get Started</button>
          </div>
          <p className='text-sm hidden lg:block'>Popular Searches: Wedding Photographers in India | Bridal Makeup Artists in IndiaWedding | Cards in India | Wedding Venues in India</p>
        </div>
      </div>
    </>
  )
}
