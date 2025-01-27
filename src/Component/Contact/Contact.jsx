import React from 'react'
import bgImg from '../../assets/Contact/bg.jpg'
import '../../App.css'


export default function Contact() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }} >

        <div className='flex w-full h-full items-center justify-evenly'>
          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <h1 className='text-xl md:text-3xl lg:text-5xl text-pink-600 font-semibold text-nowrap'>Feel Free To Contact</h1>
            <form action="" className='pt-10 flex flex-col gap-y-4 ps-8'>
              <input className='' type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <div className='flex gap-2 '>
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="City" />
              </div>

              <textarea className=' placeholder:text-pink-400 rounded-lg p-2 outline-none' placeholder='Message' name="Message" cols="30" rows="10" id=""></textarea>

              <div className='flex justify-center'>
                <button className='p-2 px-10 rounded-full font-medium border hover:border-[#e72e77] hover:text-[#e72e77] bg-[#e72e77] hover:bg-white text-white'>Submit</button>
              </div>
            </form>
          </div>
          <div className='w-1/2 hidden md:flex h-full  items-center justify-center'><lord-icon style={{  width: "60%", height: "70%" }} className="  lord-icon" src="https://cdn.lordicon.com/egmlnyku.json" trigger="loop" delay="1000" colors="primary:#b4b4b4,secondary:#30c9e8,tertiary:#f49cc8,quaternary:#66d7ee"></lord-icon></div>
        </div>
      </div>
    </>
  )
}
