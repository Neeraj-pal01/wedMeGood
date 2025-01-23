import React from 'react'
import ImageSlider from '../imgSlider/ImageSlider'

export default function Home() {

  

  return (
    <>
    <section className='bg-[#e6f5f0] '>

      <div className='w-4/5 mx-auto py-10 flex flex-col gap-10'>
      <div className='flex flex-col gap-4'>

        <h2 className='text-2xl text-gray-600 font-medium'>Popular Vanue Search</h2>
        <ImageSlider />
      </div>
      <div>

        <h2 className='text-2xl pt-  text-gray-600 font-medium'>Popular Vanue Search</h2>
      </div>
      </div>
    </section>
    </>
  )
}
