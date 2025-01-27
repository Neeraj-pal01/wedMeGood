import React from 'react'
import Download from '../AppDownload/Download'
import logo from '../../assets/footer-Logo.jpg'

export default function About() {
  return (
    <>
    <div className='flex flex-col h-[60vh] w-2/3 gap-5 mx-auto items-center text-lg md:text-xl font-medium text-gray-700  justify-center'>
      <img className='w-64 self-start'  src={logo} alt="image" />
      <p>India's favourite wedding planning website & app with over 1.5 millon monthly dedicated users. wedMeGood is a swanky alternative to the outdated wedding planning process. A one-stop-shop for all things weddings, you can find inspiration, ideas and vendors within your budget. <span className='hidden md:inline'>
        WedMeGood has been trusted by over 2 million brides & grooms all over the world to plan their big day.So sit back, log on to WedMeGood, and plan the wedding of your dreams </span></p>
      <div>
        
      </div>
    </div>
    <Download/>
    </>
  )
}
