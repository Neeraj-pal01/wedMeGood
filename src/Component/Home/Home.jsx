import React, { useEffect, useState } from 'react'
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
import '../../App.css'
import Header from '../Header/Header'
import Download from '../AppDownload/Download'





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
  const [sliceCount, setSliceCount] = useState(3);

  useEffect(() => {
    // Function to update slice count based on screen size
    const updateSliceCount = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setSliceCount(3); // Large screens
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setSliceCount(2); // Medium screens
      } else {
        setSliceCount(1); // Small screens
      }
    };

    // Call on component mount and screen resize
    updateSliceCount();
    window.addEventListener('resize', updateSliceCount);

    return () => window.removeEventListener('resize', updateSliceCount);
  }, []);



  return (
    <>

      <Header/>
      <div className='flex flex-col gap-20'>
        {/* Popular Vanue Search & Best Ceremonies */}
        <section className='bg-[#e6f5f0] '>

          <div className='w-4/5 mx-auto py-10 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>

              <h2 className='text-2xl text-gray-600 font-medium'>Popular Vanue Search</h2>
              <ImageSlider {...{ sliceCount }} />
            </div>
            <div className='flex flex-col gap-5 pt-5'>
              <h2 className='text-2xl  text-gray-600 font-medium'>Best Ceremonies</h2>
              <ImageSlider2 {...{ sliceCount }} />
            </div>
          </div>
        </section>

        {/* Wedding Category Section  */}
        <section className='w-4/5 mx-auto'>
          <div>
            <h2 className='text-2xl text-gray-600 font-medium py-6'>Wedding Categories</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-7'>
            {img.map((i) => (
              <div key={i.title} className={`flex justify-between items-center ${i.bg} shadow-2xl group`}>
                <div className='flex flex-col  justify-center pl-2 lg:pl-5 text-gray-700'>
                  <h3 className='text-base lg:text-xl  font-medium'>{i.title}</h3>
                  <p className='text-xs lg:text-base'>{i.details}</p>
                </div>
                <div className='rounded-s-full h-full overflow-hidden'>
                  <img className='h-full group-hover:scale-110 transition-transform duration-300 ease-in-out w-full' src={i.img} alt={i.title} />
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

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-5 text-center'>

            <div className='flex flex-col p-2 justify-between h-96 border-[0.5px] border-gray-300 rounded-xl group shadow-xl'>
              <div className='h-auto w-full overflow-hidden rounded-xl relative flex items-center'>
                <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black/75 group-hover:flex h-80 transition-colors duration-300 ease-in-out z-10"></div>
                <img className='group-hover:scale-110 transition-transform ease-in-out duration-300' src={vmgImg1} alt="" />
              </div>
              <div className='flex flex-col items-center justify-center gap-2 pb-4 lg:pb-8 pt-2'>
                <h3 className='text-xl lg:text-2xl font-medium text-[#e72e77] '>Wedsta</h3>
                <p className='text-base'>WMG At Home, Family Makeup Services</p>
                <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>KNOW MORE</button>
              </div>
            </div>


            <div className='flex flex-col p-2 justify-between h-96 border-[0.5px] border-gray-300 rounded-xl group shadow-xl'>
              <div className='h-auto w-full overflow-hidden rounded-xl relative flex items-center'>
                <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black/75 group-hover:flex h-80 transition-colors duration-300 ease-in-out z-10"></div>
                <img className='group-hover:scale-110 transition-transform ease-in-out duration-300' src={vmgImg2} alt="" />
              </div>
              <div className='flex flex-col items-center justify-center gap-2 pt-2 pb-4 lg:pb-8'>
                <h3 className='text-xl lg:text-2xl font-medium text-[#e72e77] '>Genie Services</h3>
                <p>Plan your dream wedding in your budget</p>
                <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>KNOW MORE</button>
              </div>
            </div>


            <div className='flex flex-col p-2 justify-between h-96 border-[0.5px] border-gray-300 rounded-xl group shadow-xl'>
              <div className='h-auto w-full overflow-hidden rounded-xl relative flex items-center'>
                <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black/75 group-hover:flex h-80 transition-colors duration-300 ease-in-out z-10"></div>
                <img className='group-hover:scale-110 transition-transform ease-in-out duration-300' src={vmgImg3} alt="" />
              </div>
              <div className='flex flex-col items-center justify-center gap-2 pt-2 pb-4 lg:pb-8'>
                <h3 className='text-xl lg:text-2xl font-medium text-[#e72e77] '>Venue Booking Service</h3>
                <p>Best Price Guaranteed</p>
                <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>KNOW MORE</button>
              </div>
            </div>


            <div className='flex flex-col p-2 justify-between h-96 border-[0.5px] border-gray-300 rounded-xl group shadow-xl'>
              <div className='h-auto w-full overflow-hidden rounded-xl relative flex items-center'>
                <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black/75 group-hover:flex h-80 transition-colors duration-300 ease-in-out z-10"></div>
                <img className='group-hover:scale-110 transition-transform ease-in-out duration-300' src={vmgImg4} alt="" />
              </div>
              <div className='flex flex-col items-center justify-center gap-2 pt-2 pb-8'>
                <h3 className='text-xl lg:text-2xl font-medium text-[#e72e77] '>Destination Wedding</h3>
                <p>Tours and Trips for Destination Wedding</p>
                <button className='p-2 font-medium border border-[#e72e77] text-[#e72e77] hover:bg-[#e72e77] hover:text-white'>KNOW MORE</button>
              </div>
            </div>

          </div>
        </section>

            <Download/>
       

        {/* Fake Wedding Stories Section  */}
        <section className='w-4/5 mx-auto'>
          <div className='py-2'>
            <h2 className='text-2xl text-gray-600 font-medium py-2'>Fake Wedding Stories</h2>
          </div>
          <ImageSlider3 {...{ sliceCount }} />
        </section>
      </div>
    </>
  )
}
