import React from 'react'
import logo from '../../assets/footer-Logo.jpg'
import { Link } from 'react-router-dom'
import '../../index.css'

export default function Footer() {
    return (
        <>
            <footer className='my-14 overflow-hidden'>
                <div className='my-8 w-4/5 mx-auto border-t border-gray-400'>
                    <div className='flex list-none justify-around  pt-10'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-3 text-[#e72e77] font-medium'>
                                <img className=' w-56' src={logo} alt="" />
                                <h4>We Connect The Multiverse !</h4>
                            </div>
                            <h4>Connect With Us</h4>
                            {/* ig fb tw lin  */}
                            <div className='flex gap-4  text-gray-500 '>
                                <Link>
                                    <li className='p-3 shadow-lg rounded-full border-2 hover:-translate-y-3 delay-100 duration-300'>
                                        <svg className="h-5 w-5 " viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </li>
                                </Link>
                                <Link>
                                    <li className='p-3 shadow-lg rounded-full border-2 hover:-translate-y-3 delay-100 duration-300'>
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                    </li>
                                </Link>
                                <Link>
                                    <li className='p-3 shadow-lg rounded-full border-2 hover:-translate-y-3 delay-100 duration-300'>
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                    </li>
                                </Link>
                                <Link>
                                    <li className='p-3 shadow-lg rounded-full border-2 hover:-translate-y-3 delay-100 duration-300'>
                                        <svg className="h-5 w-5 stroke-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                                    </li>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4>Wedding Ideas</h4>
                            <Link to="/wedding-blog"><li>Wedding Blog</li></Link>
                            <Link to="/wedding-inspiration-gallery"><li>Wedding Inspiration Gallery</li></Link>
                            <Link to="/real-wedding"><li>Real Wedding</li></Link>
                            <Link to="/submit-wedding"><li>Submit Wedding</li></Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4>Photo Gallery</h4>
                            <Link to="/bridal-wear"><li>Bridal Wear</li></Link>
                            <Link to="/wedding-jewellery"><li>Wedding Jewellery</li></Link>
                            <Link to="/bridal-makeup-hair"><li>Bridal Makeup & Hair</li></Link>
                            <Link to="/wedding-decor"><li>Wedding Decor</li></Link>
                            <Link to="/wedding-photography"><li>Wedding Photography</li></Link>
                            <Link to="/groom-wear"><li>Groom Wear</li></Link>
                            <Link to="/invitations-favors"><li>Invitations & Favors</li></Link>
                            <Link to="/wedding-accessories"><li>Wedding Accessories</li></Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4>Wedding Invitation Maker</h4>
                            <Link to="#"><li>Wedding Card Designs</li></Link>
                            <Link to="/save-the-date-templates"><li>Save the Date Templates</li></Link>
                            <Link to="/invitation-video-templates"><li>Invitation Video Templates</li></Link>
                            <Link to="/cancellation-policy"><li>Cancellation Policy</li></Link>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}
