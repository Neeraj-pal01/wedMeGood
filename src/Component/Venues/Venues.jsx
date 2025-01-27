import React from 'react'
import img from '../../assets/Venus/banner.jpg'
import logo from '../../assets/Venus/logo1.png'
import logo2 from '../../assets/Venus/logo2.png'
import img1 from '../../assets/Venus/1.jpg'
import img2 from '../../assets/Venus/2.jpg'
import img3 from '../../assets/Venus/3.jpg'
import img4 from '../../assets/Venus/4.jpg'
import img5 from '../../assets/Venus/5.jpg'
import img6 from '../../assets/Venus/6.jpg'
import img7 from '../../assets/Venus/relax.jpg'
import img8 from '../../assets/Venus/naturally.jpg'
export default function Venues() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        width: '100%',
      }} >
        <div className='bg-[#000000a9] flex items-center justify-center h-full w-full'>

          <div className='flex  items-center '>
            <img className='w-32' src={logo} alt="logo" />
            <div>
              <img className='w-48' src={logo2} alt="logo" />
              <h3 className='text-white text-xl font-semibold'>We Connect The Multiverse</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 items-center justify-center w-4/5 mx-auto py-10'>
        <h1 className='text-pink-600 text-center text-4xl font-semibold pb-3 border-b border-b-[#e72e77]'>Our Services</h1>
        <p className='w-2/3 hidden md:block text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quidem? Explicabo reiciendis illum inventore in ipsum dolor sit amet. numquam amet dicta tempore, pariatur eveniet ?</p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-5 ">
          {/* 1st */}
          <div className='border md:h-80 h-72 lg:h-96 w-full border-[#e72e77]' style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
            <div className='w-full h-full flex flex-col items-center justify-center bg-black/50 hover:bg-[#e72e77] transition-colors duration-300'>
              <lord-icon style={{ height: "7rem", width: '7rem' }} classname="lord-icon" src="https://cdn.lordicon.com/szqqxgqw.json" trigger="loop" delay="1000" colors="primary:#ffffff,secondary:#ffffff"></lord-icon>
              <h4 className='text-white text-2xl font-semibold'>Resort</h4>
              <p className='px-2 text-center text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aperiam.</p>
            </div>
          </div>

          {/* 2nd */}
          <div className='border border-[#e72e77]  md:h-80 h-72 lg:h-96 w-full' style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
            <div className='w-full h-full flex flex-col items-center justify-center bg-black/50 hover:bg-[#e72e77] transition-colors duration-300'>
              <lord-icon style={{ height: "7rem", width: '7rem' }} classname="lord-icon" src="https://cdn.lordicon.com/sncsryxo.json" trigger="loop" delay="1000" colors="primary:#ffffff,secondary:#ffffff"></lord-icon>
              <h4 className='text-white text-2xl font-semibold'>Bankuet Hall</h4>
              <p className='px-2 text-center text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aperiam.</p>
            </div>
          </div>


          {/* 3rd */}
          <div className='border border-[#e72e77]  md:h-80 h-72 lg:h-96 w-full' style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
            <div className='w-full h-full flex flex-col items-center justify-center bg-black/50 hover:bg-[#e72e77] transition-colors duration-300'>
              <lord-icon style={{ height: "7rem", width: '7rem' }} classname="lord-icon" src="https://cdn.lordicon.com/hicajugo.json" trigger="loop" delay="1000" colors="primary:#ffffff,secondary:#ffffff"></lord-icon>
              <h4 className='text-white text-2xl font-semibold'>Farm House</h4>
              <p className='px-2 text-center text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aperiam.</p>
            </div>
          </div>


          {/* 4th */}
          <div className='border border-[#e72e77] md:h-80 h-72 lg:h-96 w-full' style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',

          }} >
            <div className='w-full h-full flex flex-col items-center justify-center bg-black/50 hover:bg-[#e72e77] transition-colors duration-300'>
              <lord-icon style={{ height: "7rem", width: '7rem' }} classname="lord-icon" src="https://cdn.lordicon.com/wkufapmi.json" trigger="loop" delay="1000" colors="primary:#ffffff,secondary:#ffffff"></lord-icon>
              <h4 className='text-white text-2xl font-semibold'>Marrige Hall</h4>
              <p className='px-2 text-center text-white text-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aperiam.</p>
            </div>
          </div>


          {/* 5th */}
          <div className='border md:h-80 h-72 lg:h-96 w-full border-[#e72e77]' style={{
            backgroundImage: `url(${img5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
            <div className='w-full h-full flex flex-col items-center justify-center bg-black/50 hover:bg-[#e72e77] transition-colors duration-300'>
              <lord-icon style={{ height: "7rem", width: '7rem' }} classname="lord-icon" src="https://cdn.lordicon.com/ziynmnyj.json" trigger="loop" delay="1000" colors="primary:#ffffff,secondary:#ffffff"></lord-icon>
              <h4 className='text-white text-2xl font-semibold'>Mansion</h4>
              <p className='px-2 text-center text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aperiam.</p>
            </div>
          </div>


          {/* 6th */}
          <div className='border md:h-80 h-72 lg:h-96 w-full border-[#e72e77]' style={{
            backgroundImage: `url(${img6})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
            <div className='w-full h-full flex flex-col items-center justify-center bg-black/50 hover:bg-[#e72e77] transition-colors duration-300'>
              <lord-icon style={{ height: "7rem", width: '7rem' }} classname="lord-icon" src="https://cdn.lordicon.com/laqlvddb.json" trigger="loop" delay="1000" colors="primary:#ffffff,secondary:#ffffff"></lord-icon>
              <h4 className='text-white text-2xl font-semibold'>Hotel</h4>
              <p className='px-2 text-center text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aperiam.</p>
            </div>
          </div>
        </div>
      </div>


      <div className='bg-[#d3ebeb]'>
        <div className='w-3/5 mx-auto py-10'>
          <div className=' flex flex-col items-center justify-center gap-5'>
            <h2 className='text-[#e72e77] text-xl md:text-lg lg:text-3xl font-semibold'>
              Versatile. Relaxed. Naturally Beautiful.
            </h2>
            <p className='text-center text-sm hidden md:block'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iusto perferendis temporibus minima deleniti. A asperiores beatae quos dolore quo?</p>
          </div>
          <div className=' w-full grid grid-cols-1 md:grid-cols-2 md:gap-y-7 py-7'>

            {/* 1st */}
            <div>
              <img src={img1} />
            </div>
            <div className=' h-full flex flex-col bg-white items-center justify-center px-5 '>
              <h2 className='text-[#e72e77] text-2xl'>
                Versatile
              </h2>
              <p className='text-center text-xs hidden md:block lg:text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non quisquam voluptatibus repellat temporibus quis corrupti ea, explicabo earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perspiciatis amet totam perferendis distinctio atque nisi sapiente laudantium, magni voluptatem? unde aliquam odit fugit? Ipsa, fuga.</p>
            </div>

            {/* 2nd */}

            <div className='block md:hidden'>
              <img src={img7} alt="" />
            </div>
            <div className=' h-full flex flex-col bg-white items-center justify-center px-5 '>
              <h2 className='text-[#e72e77] text-2xl'>
                Relaxed
              </h2>
              <p className='text-center text-xs hidden md:block lg:text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non quisquam voluptatibus repellat temporibus quis corrupti ea, explicabo earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perspiciatis amet totam perferendis distinctio atque nisi sapiente laudantium, magni voluptatem? unde aliquam odit fugit? Ipsa, fuga.</p>
            </div>
            <div className='hidden md:block'>
              <img src={img7} alt="" />
            </div>

            {/* 3rd */}
            <div>
              <img src={img8} alt="" />
            </div>
            <div className=' h-full flex flex-col bg-white items-center justify-center px-5 '>
              <h2 className='text-[#e72e77] text-2xl'>
                Naturally
              </h2>
              <p className='text-center text-xs hidden md:block lg:text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non quisquam voluptatibus repellat temporibus quis corrupti ea, explicabo earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perspiciatis amet totam perferendis distinctio atque nisi sapiente laudantium, magni voluptatem? unde aliquam odit fugit? Ipsa, fuga.</p>
            </div>
          </div>
        </div>
      </div>


      <div className='w-4/5 mx-auto bg-[#ffebe8] h-1/4 mt-10'>
        <div className='flex flex-col gap-5 justify-center items-center p-3 md:p-5 lg:p-8'>
          <h2 className='text-[#e72e77] font-bold text-xl text-center md:text-2xl'>
            Plan A Wedding Ceremony
          </h2>
          <p className='w-3/5 mx-auto text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam fugiat odit, labore consequuntur sapiente perferendis eum ut dolorum obcaecati dolorem distinctio dolores consequatur dicta nam unde doloremque magni, corporis nostrum porro quod eius. Nulla similique voluptas quas </p>
          <button className='p-2 font-medium border border-[#e72e77] hover:text-[#e72e77] bg-[#e72e77] hover:bg-white text-white'>Lets Start</button>
        </div>
      </div>
    </>
  )
}
