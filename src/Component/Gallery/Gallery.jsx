import React from 'react'
import bgImg from '../../assets/Contact/bg.jpg'
import img1 from '../../assets/Gallery/1.jpg'
import img2 from '../../assets/Gallery/2.jpg'
import img3 from '../../assets/Gallery/3.jpg'
import img4 from '../../assets/Gallery/4.jpg'
import img5 from '../../assets/Gallery/5.jpg'
import img6 from '../../assets/Gallery/6.jpg'
import img7 from '../../assets/Gallery/7.jpg'
import img8 from '../../assets/Gallery/8.jpg'
import img9 from '../../assets/Gallery/9.jpg'
import img10 from '../../assets/Gallery/10.jpg'
import img11 from '../../assets/Gallery/11.jpg'
import ImageSlider4 from '../imgSlider/ImageSlider4'

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
        <div className='flex justify-between items-center w-4/5 mx-auto pt-5'>
          <div className='row-span-2 w-1/2 flex flex-col items-start px-5 gap-5'>
            <h1 className='text-6xl font-bold text-[#e72e77]'>ShowCasing Our Best Memories</h1>
            <p className='tex-sm text-[#e72e77] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel magni ex consequatur ullam odio nulla facilis, voluptatum molestiae nesciunt ad deleniti praesentium quasi ducimus obcaecati numquam ipsa adipisci maxime.</p>
            <h2 className='text-2xl font-semibold text-[#e72e77]'>Upload your story with us</h2>
            <button className='p-2 transition-colors duration-300 ease-in-out rounded-full font-medium border border-[#e72e77]  hover:bg-white hover:text-[#e72e77] bg-[#e72e77] text-white'>Upload Image</button>
            <div className='flex gap-4 pl-4'>
              <lord-icon classname="lord-icon " src="https://cdn.lordicon.com/wgdqrxxf.json" trigger="loop" delay="1000" colors="primary:#e72e77"></lord-icon>
              <lord-icon src="https://cdn.lordicon.com/fowixcuo.json" trigger="loop" delay="1000" colors="primary:#e72e77"></lord-icon>

            </div>

          </div>
          <div className='w-1/2 grid grid-cols-2 gap-5 bg-white border-8 border-white'>
            <img className=' col-span-2 object-cover' src={img1} alt="" />
            <img className=' object-cover' src={img2} alt="" />
            <img className=' object-cover' src={img3} alt="" />
          </div>
        </div>

      </div>

      <div className='bg-[#e6f5f0]'>

        <div className='w-[84%] mx-auto  py-8'>
          <div className="grid grid-cols-4  grid-rows-7 p-3 bg-white overflow-hidden *:h-full">
            <img className='col-span-2 row-span-2 h-full object-cover' src={img4} alt="" />
            <img className='object-cover' src={img5} alt="" />
            <img className='object-cover' src={img6} alt="" />
            <img className='object-cover' src={img7} alt="" />
            <img className='object-cover' src={img1} alt="" />
            <img className='row-span-2 pt-3 object-cover' src={img8} alt="" />
            <img className='row-span-2 pt-3 col-span-3 object-cover' src={img9} alt="" />
            <div className='col-span-4'> <ImageSlider4 /></div>
            <img className='row-span-2 pt-3 col-span-3 object-cover' src={img10} alt="" />
            <img className='row-span-2 pt-3 object-cover' src={img11} alt="" />
          </div>
        </div>
      </div>
      <div className='bg-[#d3ebeb]'>
        <div className='w-[80%] mx-auto flex flex-col gap-5  py-16'>
          <h1 className='text-4xl font-bold text-[#e72e77]'>We Created Memories !</h1>
          <p className='w-1/2 font-medium text-[#e72e77] text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odit quis voluptatem natus ratione obcaecati soluta neque at eveniet. Eum nesciunt inventore libero, nobis id exercitationem nam rerum. Facilis, eos.</p>
          <div className='flex gap-4 items-center'>
            <p className='text-xl font-medium text-[#e72e77]'>Upload Your Image :</p>
            <button className='p-3 px-6 transition-colors duration-300 ease-in-out  rounded-full font-medium border border-[#e72e77]  hover:bg-white hover:text-[#e72e77] bg-[#e72e77] text-white'>Choose File</button>
          </div>
        </div>
      </div>

    </>
  )
}
