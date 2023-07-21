import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, FacebookLogo, InstagramLogo, TwitterLogo, LinkedinLogo } from './SVGs'

function Footer() {
  return (
    <footer className='my-12 sm:mt-24 sm:mb-12 lg:mt-20 grid gap-6 gap-x-10 lg:gap-10 grid-cols-[repeat(auto-fill,200px)] xs:justify-center xl:justify-between'>
            <div className=''>
                <Link to="/" className='flex items-center sm:text-lg gap-x-1'>
                    <div>
                        <Logo/>
                    </div>
                    <span className='text-2xl xs:text-3xl font-Metropolis-Medium'>Eduvi</span>
                </Link>
                <div className='flex items-center gap-x-4 mt-6 mb-10'>
                    <Link to="#" className='w-9 h-9 inline-grid place-items-center'>
                        <FacebookLogo/>
                    </Link>
                    <Link to="#" className='w-9 h-9 inline-grid place-items-center rounded-full text-white bg-primary'>
                        <InstagramLogo/>
                    </Link>
                    <Link to="#" className='w-9 h-9 inline-grid place-items-center'>
                        <TwitterLogo/>
                    </Link>
                    <Link to="#" className='w-9 h-9 inline-grid place-items-center'>
                        <LinkedinLogo/>
                    </Link>
                </div>
                <p className='text-midGray font-Inter mb-4 sm:text-sm lg:text-base'>©2021 Eduvi.co</p>
                <p className='text-midGray leading-6  sm:text-sm lg:text-base'>Eduvi is a registered<br/>trademark of Eduvi.co</p>
            </div>
            <div className=''>
                <h6 className=' mb-5 font-Inter-SemiBold text-2xl sm:text-lg lg:text-2xl'>Community</h6>
                <ul className='space-y-5 text-midGray sm:text-sm lg:text-base'>
                    <li>
                        <Link to="#">Learners</Link>
                    </li>
                    <li>
                        <Link to="#">Parteners</Link>
                    </li>
                    <li>
                        <Link to="#">Developers</Link>
                    </li>
                    <li>
                        <Link to="#">Transactions</Link>
                    </li>
                    <li>
                        <Link to="#">Blog</Link>
                    </li>
                    <li>
                        <Link to="#">Teaching Center</Link>
                    </li>
                </ul>
            </div>
            <div className=''>
                <h6 className='mb-5 font-Inter-SemiBold text-2xl sm:text-lg lg:text-2xl'>Courses</h6>
                <ul className='space-y-5 text-midGray sm:text-sm lg:text-base'>
                    <li>
                        <Link to="#">Classroom courses</Link>
                    </li>
                    <li>
                        <Link to="#">Virtual classroom courses</Link>
                    </li>
                    <li>
                        <Link to="#">E-learning courses</Link>
                    </li>
                    <li>
                        <Link to="#">Video Courses</Link>
                    </li>
                    <li>
                        <Link to="#">Offline Courses</Link>
                    </li>
                </ul>
            </div>
            <div className=''>
                <h6 className='mb-5 font-Inter-SemiBold text-2xl sm:text-lg lg:text-2xl'>Quick links</h6>
                <ul className='space-y-5 text-midGray sm:text-sm lg:text-base'>
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Professional Education</Link>
                    </li>
                    <li>
                        <Link to="#">Courses</Link>
                    </li>
                    <li>
                        <Link to="#">Admissions</Link>
                    </li>
                    <li>
                        <Link to="#">Testimonial</Link>
                    </li>
                    <li>
                        <Link to="#">Programs</Link>
                    </li>
                </ul>
            </div>
            <div className=''>
                <h6 className='mb-5 font-Inter-SemiBold text-2xl sm:text-lg lg:text-2xl'>More</h6>
                <ul className='space-y-5 text-midGray sm:text-sm lg:text-base'>
                    <li>
                        <Link to="#">Press</Link>
                    </li>
                    <li>
                        <Link to="#">Investors</Link>
                    </li>
                    <li>
                        <Link to="#">Terms</Link>
                    </li>
                    <li>
                        <Link to="#">Privacy</Link>
                    </li>
                    <li>
                        <Link to="#">Help</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </div>
    </footer>
  )
}

export default Footer