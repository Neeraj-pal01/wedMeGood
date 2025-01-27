import React from 'react'
import bgImg from '../../assets/Contact/bg.jpg'
import img1 from '../../assets/Gallery/1.jpg'

export default function Gallery() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }} >
        <div className='grid grid-cols-2 py-10'>
          <div className='row-span-2 flex flex-col items-center justify-center px-5 gap-5'>
            <h1 className='text-6xl font-bold text-[#e72e77]'>ShowCasing Our Best Memories</h1>
            <p className='tex-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel magni ex consequatur ullam odio nulla facilis, voluptatum molestiae nesciunt ad deleniti praesentium quasi ducimus obcaecati numquam ipsa adipisci maxime.</p>
            <h2 className='text-2xl text-[#e72e77]'>Upload your story with us</h2>
            <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>Upload Image</button>
            <div className='flex gap-2'>
              <lord-icon classname="lord-icon " src="https://cdn.lordicon.com/wgdqrxxf.json" trigger="loop" delay="1000" colors="primary:#e72e77"></lord-icon>
              <lord-icon src="https://cdn.lordicon.com/fowixcuo.json" trigger="loop" delay="1000" colors="primary:#e72e77"></lord-icon>

            </div>

          </div>
          <div className=''>
            <img src={img1} alt="" />

          </div>
        </div>

      </div>
    </>
  )
}
