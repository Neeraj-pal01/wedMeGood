import React from 'react'
import ImageSlider from '../imgSlider/ImageSlider'
import ImageSlider2 from '../imgSlider/ImageSlider2'
import img1 from '../../assets/weddingCategory/1.jpg'
import img2 from '../../assets/weddingCategory/2.jpg'
import img3 from '../../assets/weddingCategory/3.jpg'
import img4 from '../../assets/weddingCategory/4.jpg'
import img5 from '../../assets/weddingCategory/5.jpg'
import vmgImg1 from '../../assets/VmgSection/1.jpg'
import vmgImg2 from '../../assets/VmgSection/2.jpg'
import vmgImg3 from '../../assets/VmgSection/3.jpg'
import vmgImg4 from '../../assets/VmgSection/4.jpg'
import mobileImg from '../../assets/mobile.png'
import ImageSlider3 from '../imgSlider/ImageSlider3'

export default function Home() {

  const img = [
    {
      img: img1,
      title: "Venues",
      details: " Banquet Hall | Farmhouse | Lawn",
      bg: "bg-[#d8dffc]"
    },
    {
      img: img2,
      title: " Bridal Wear",
      details: "Bridal Lehengas | Kanjeevaram | Saree",
      bg: "bg-[#f4d5c2]"
    },
    {
      img: img3,
      title: "Wedding Makeup",
      details: "Bridal Lehengas | Kanjeevaram | Saree",
      bg: 'bg-[#dfb2ad]'
    },
    {
      img: img4,
      title: "Photography",
      details: "Bridal Lehengas | Kanjeevaram | Saree",
      bg: "bg-[#d8dffc]"
    },
    {
      img: img5,
      title: "Wedding Planner",
      details: "Bridal Lehengas | Kanjeevaram | Saree",
      bg: 'bg-[#f6b896]'
    },
    {
      img: img1,
      title: "Marriage Hall",
      details: "Bridal Lehengas | Kanjeevaram | Saree",
      bg: 'bg-[#cfcdb8]'
    }
  ]



  return (
    <>

      <div className='flex flex-col gap-20'>
      {/* Popular Vanue Search & Best Ceremonies */}
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

      {/* Wedding Category Section  */}
      <section className='w-4/5 mx-auto'>
        <div>
          <h2 className='text-2xl text-gray-600 font-medium py-2'>Wedding Categories</h2>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {img.map((i) => (
            <div key={i.title} className={` flex justify-between items-center ${i.bg} shadow-2xl group`}>
              <div className='flex flex-col  justify-center pl-5 text-gray-700'>
                <h3 className='text-xl font-medium'>{i.title}</h3>
                <p className='text-md'>{i.details}</p>
              </div>
              <div className='rounded-s-full overflow-hidden'>
                <img className='group-hover:scale-110 transition-transform duration-300 ease-in-out' src={i.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WMG Inhouse Services section  */}
      <section className='w-4/5 mx-auto'>
        <div>
          <h2 className='text-2xl text-gray-600 font-medium py-2'>WMG Inhouse Services</h2>
        </div>

        <div className='grid grid-cols-2 gap-3 gap-y-5'>


          <div className='flex flex-col p-2 justify-between h-96 border-[0.5px] border-gray-300 rounded-xl group shadow-xl'>
            <div className='h-auto w-full overflow-hidden rounded-xl relative flex items-center'>
              <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black/75 group-hover:flex h-80 transition-colors duration-300 ease-in-out z-10"></div>
              <img className='group-hover:scale-110 transition-transform ease-in-out duration-300' src={vmgImg1} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 pb-8'>
              <h3 className='text-2xl font-medium text-[#e72e77] '>Wedsta</h3>
              <p>WMG At Home, Family Makeup Services</p>
              <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>KNOW MORE</button>
            </div>
          </div>


          <div className='flex flex-col p-2 justify-between h-96 border-[0.5px] border-gray-300 rounded-xl group shadow-xl'>
            <div className='h-auto w-full overflow-hidden rounded-xl relative flex items-center'>
              <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black/75 group-hover:flex h-80 transition-colors duration-300 ease-in-out z-10"></div>
              <img className='group-hover:scale-110 transition-transform ease-in-out duration-300' src={vmgImg2} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 pb-8'>
              <h3 className='text-2xl font-medium text-[#e72e77] '>Wedsta</h3>
              <p>WMG At Home, Family Makeup Services</p>
              <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>KNOW MORE</button>
            </div>
          </div>


          <div className='flex flex-col p-2 justify-between h-96 border-[0.5px] border-gray-300 rounded-xl group shadow-xl'>
            <div className='h-auto w-full overflow-hidden rounded-xl relative flex items-center'>
              <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black/75 group-hover:flex h-80 transition-colors duration-300 ease-in-out z-10"></div>
              <img className='group-hover:scale-110 transition-transform ease-in-out duration-300' src={vmgImg3} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 pb-8'>
              <h3 className='text-2xl font-medium text-[#e72e77] '>Wedsta</h3>
              <p>WMG At Home, Family Makeup Services</p>
              <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>KNOW MORE</button>
            </div>
          </div>


          <div className='flex flex-col p-2 justify-between h-96 border-[0.5px] border-gray-300 rounded-xl group shadow-xl'>
            <div className='h-auto w-full overflow-hidden rounded-xl relative flex items-center'>
              <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black/75 group-hover:flex h-80 transition-colors duration-300 ease-in-out z-10"></div>
              <img className='group-hover:scale-110 transition-transform ease-in-out duration-300' src={vmgImg4} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 pb-8'>
              <h3 className='text-2xl font-medium text-[#e72e77] '>Wedsta</h3>
              <p>WMG At Home, Family Makeup Services</p>
              <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>KNOW MORE</button>
            </div>
          </div>

        </div>
      </section>

      {/* App Download Section */}
      <section className='w-4/5 mx-auto bg-[#ffebe8] rounded-xl '>
        <div className='flex justify-around py-10 '>
          <div className='flex flex-col items-center gap-7 justify-center'>
            <h2 className='text-2xl font-medium text-[#b4245d]'>Download The WedMeGood Mobile App Today!</h2>
            <div className='flex list-none gap-5 font-medium text-[#e72e77]'>
              <li>Save Wedding Ideas</li>
              <li>Shortlisted Vendors</li>
              <li>Get Free Wedding Checklist</li>
            </div>
            <p className='text-[#b4245d] font-semibold'>You will receive an SMS with a link to download the App</p>
            <div className='flex text-[#e72e77] text-xl font-medium gap-2'>
              <span>+91</span>
              <input className='px-2 outline-none bg-inherit border-b border-[#e72e77]' type="text" name="" id="" />
            </div>
            <button className='p-3 rounded-full text-xl font-medium border border-[#e72e77] hover:text-[#e72e77] bg-[#e72e77] text-white hover:bg-white'>Download App</button>

          </div>
          <div>
            <img className=' h-96' src={mobileImg} alt="" />
          </div>
        </div>

      </section>

      {/* Fake Wedding Stories Section  */}
      <section className='w-4/5 mx-auto'>
          <div className='py-2'>
            <h2 className='text-2xl text-gray-600 font-medium py-2'>Fake Wedding Stories</h2>
          </div>
            <ImageSlider3 />
      </section>
      </div>
    </>
  )
}
