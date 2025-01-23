import React from 'react'
import ImageSlider from '../imgSlider/ImageSlider'
import ImageSlider2 from '../imgSlider/ImageSlider2'

export default function Home() {



  return (
    <>
      <section className='bg-[#e6f5f0] '>

        <div className='w-4/5 mx-auto py-10 flex flex-col gap-10'>
          <div className='flex flex-col gap-5'>

            <h2 className='text-2xl text-gray-600 font-medium'>Popular Vanue Search</h2>
            <ImageSlider />
          </div>
          <div className='flex flex-col gap-5 pt-5'>
            <h2 className='text-2xl  text-gray-600 font-medium'>Best Ceremonies</h2>
            <ImageSlider2 />
          </div>
        </div>
      </section>
      <section className='w-4/5 mx-auto'>

      </section>
    </>
  )
}
