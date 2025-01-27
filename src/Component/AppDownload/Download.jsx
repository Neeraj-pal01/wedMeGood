import React from 'react'
import mobileImg from '../../assets/mobile.png'

export default function Download() {
    return (
        <>

            {/* App Download Section */}
            <header className='download w-4/5 mx-auto bg-[#ffebe8] rounded-xl '>
                <div className='flex justify-around py-10 '>
                    <div className='flex flex-col items-center text-center md:text-left md:px-0 gap-7 lg:gap-7 justify-center'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-medium text-[#b4245d]'>Download The WedMeGood Mobile App Today!</h2>
                        <div className='flex flex-col md:flex-row items-center gap-2  list-none  text-center lg:gap-5 font-medium text-[#e72e77]'>
                            <li className='flex items-center'>
                                <span><lord-icon src="https://cdn.lordicon.com/depeqmsz.json" trigger="loop" delay="1000" colors="primary:#e72e77"></lord-icon></span>
                                <span> Save Wedding Ideas</span>
                            </li>
                            <li className='flex items-center'>
                                <span><lord-icon className="lord-icon" src="https://cdn.lordicon.com/ulnswmkk.json" trigger="loop" delay="1000" colors="primary:#e72e77"></lord-icon></span>
                                Shortlisted Vendors</li>
                            <li className='flex items-center'>
                                <span><lord-icon className="lord-icon" src="https://cdn.lordicon.com/pbrgppbb.json" trigger="loop" delay="1000" colors="primary:#e72e77"></lord-icon></span>
                                Get Free Wedding Checklist</li>
                        </div>
                        <p className='text-[#b4245d] text-sm lg:text-lg font-semibold'>You will receive an SMS with a link to download the App</p>
                        <div className='flex items-center text-[#e72e77] text-lg lg:text-xl font-medium gap-1 md:gap-2'>
                            <lord-icon className="lord-icon" src="https://cdn.lordicon.com/srsgifqc.json" trigger="loop" delay="1000" colors="primary:#e72e77"></lord-icon>
                            <span>+91</span>
                            <input className='w-40 md:w-auto md:px-1 lg:px-2 outline-none bg-inherit border-b border-[#e72e77]' type="text" />
                        </div>
                        <button className='p-2 lg:p-3 rounded-full  font-medium border border-[#e72e77] hover:text-[#e72e77] bg-[#e72e77] text-white hover:bg-white'>Download App</button>
                        <div className="flex items-center gap-6 py-5">
                            <lord-icon classname="lord-icon" src="https://cdn.lordicon.com/becebamh.json" trigger="loop" delay="1000"></lord-icon>
                            <lord-icon classname="lord-icon" src="https://cdn.lordicon.com/hpxtnuuq.json" delay="1000" trigger="loop"></lord-icon>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img className='h-72 px-3 lg:h-96' src={mobileImg} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}
