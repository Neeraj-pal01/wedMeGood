import React from 'react'
import bannerImg from '../../assets/banner.png';

export default function Header() {
  return (
    <>
      <div className='relative'>
        <img src={bannerImg} alt="bannerImg" className='h-[70vh] w-full object-cover contrast-more:' />        
        <div className='flex flex-col items-center justify-center absolute bottom-0 w-full h-1/2 mx-auto text-gray-50 gap-2 bg-gradient-to-b from-transparent from-2% to-black/80 to-100%'>
          <h1 className='text-5xl font-semibold pt-2'>Your Wedding Your way</h1>
          <p className='text-xl'>Find the best wedding vendors with thousands of trusted reviews</p>
          <div className='flex border w-1/2 border-[#b4245d]'>
            <input className='w-[42%] px-2 border-r-2 border-[#b4245d]' type="text" placeholder='Search Venue' />
            <input className='w-[42%] px-2' type="text" placeholder='Search City' />
            <button className='w-[16%]  py-3 bg-[#e72e77] text-white'>Get Started</button>
          </div>
          <p className='text-sm'>Popular Searches: Wedding Photographers in India | Bridal Makeup Artists in IndiaWedding | Cards in India | Wedding Venues in India</p>
        </div>
      </div>
    </>
  )
}
