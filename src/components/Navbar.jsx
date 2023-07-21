import React, { useState } from 'react'
import { Logo, DownArrow, ShoppingBag, Profile, Bars } from './SVGs'
import { Link } from 'react-router-dom'

function Navbar() {
    const [showMenu,setShowMenu] = useState(false)
  return (
    <div className='my-4 h-14 flex items-center justify-between gap-x-5 text-blackRock'>
        {/* Logo */}
        <Link to="/" className='flex items-center gap-x-1'>
            <Logo/>
            <span className='font-Metropolis-Medium text-2xl xs:text-3xl'>Eduvi</span>
        </Link>
        {/* Menu */}
        <nav className='max-w-2xl w-full hidden lg:block h-full'>
            <ul className='w-full h-full flex items-center justify-between gap-x-4  font-Metropolis-SemiBold'>
                <li className='leading-[3.5rem]'>
                    <Link to="/shop">
                        Shop
                    </Link>
                </li>
                <li className='relative group leading-[3.5rem]'>
                    <Link to="#" className='inline-flex items-center'>
                        For Kindergarten
                        <span className='group-hover:rotate-180 transition-all duration-200 delay-100'>
                            <DownArrow/>
                        </span>
                    </Link>
                    <ul className='px-3 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 w-48 top-full z-50 transition-all duration-200 delay-100 bg-white text-midGray rounded-b-xl font-Metropolis-Medium text-base'>
                        <li className='py-2'>
                            <Link to="#">Plants & Animals</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="">Adaptations</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Maltilda Study Guide</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Accuplacer Math</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Life Science</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">The Solar System</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">English</Link>
                        </li>
                    </ul>
                </li>
                <li className='relative group leading-[3.5rem]'>
                    <Link to="#" className='inline-flex items-center'>
                        For High School
                        <span className='group-hover:rotate-180 transition-all duration-200 delay-100'>
                            <DownArrow/>
                        </span>
                    </Link>
                    <ul className='px-3 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 w-48 top-full z-50 transition-all duration-200 delay-100 bg-white text-midGray rounded-b-xl font-Metropolis-Medium text-base'>
                        <li className='py-2'>
                            <Link to="#">Business</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Computer Science</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">English</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Math</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Performing Arts</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">History</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Social Studies</Link>
                        </li>
                    </ul>
                </li>
                <li className='relative group leading-[3.5rem]'>
                    <Link to="" className='inline-flex items-center'>
                        For College
                        <span className='group-hover:rotate-180 transition-all duration-200 delay-100'>
                            <DownArrow/>
                        </span>
                    </Link>
                    <ul className='px-3 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 w-44 top-full z-50 transition-all duration-200 delay-100 bg-white text-midGray rounded-b-xl font-Metropolis-Medium text-base'>
                        <li className='py-2'>
                            <Link to="#">Art & Design</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Business</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Engineering</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Humanities</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Science & Math</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Medicine</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Computer Science</Link>
                        </li>
                    </ul>
                </li>
                <li className='relative group leading-[3.5rem]'>
                    <Link to="/courses" className='inline-flex items-center'>
                        Courses
                        <span className='group-hover:rotate-180 transition-all duration-200 delay-100'>
                            <DownArrow/>
                        </span>
                    </Link>
                    <ul className='px-4 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 w-44 top-full z-50 transition-all duration-200 delay-100 bg-white text-midGray rounded-b-xl font-Metropolis-Medium text-base'>
                        <li className='py-2'>
                            <Link to="#">Kindergarten</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">High School</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">College</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Computer</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Science</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">Engineering</Link>
                        </li>
                        <li className='py-2'>
                            <Link to="#">More Courses</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        {/* Menu Links */}
        <div className='shrink-0 flex items-center gap-x-5 sm:gap-x-8 lg:gap-x-6 xl:gap-x-8 font-Metropolis-Medium'>
            {/* Cart */}
            <Link to="#" className='relative flex items-center gap-x-2.5'>
                <p className='hidden xs:block lg:hidden xl:block'>Cart</p>
                <ShoppingBag/>
                <span className='absolute  -top-2 -right-3.5 w-5 h-5 rounded-full shadow bg-white text-primary text-xs grid place-items-center'>0</span>
            </Link>
            {/* Account */}
            <Link to="#" className='flex items-center gap-x-2.5'>
                <p className='hidden xs:block lg:hidden xl:block'>My Account</p>
                <Profile/>
            </Link>
            {/* Bars */}
            <div className='lg:hidden flex items-center gap-x-2.5' onClick={()=>setShowMenu(true)}>
                <p className='hidden xs:block font-Metropolis-SemiBold'>Menu</p>
                <Bars/>
            </div>
        </div>
        {/* Moblie Menu */}
        <div className={`w-56 px-4 fixed right-0 top-0 bottom-0 z-[100] bg-white transition-transform ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
            <div className='py-4 flex items-center justify-between'>
                {/* Logo */}
                <Link to="/" className='flex items-center gap-x-1'>
                    <div>
                        <Logo/>
                    </div>
                    <span className='text-2xl xs:text-3xl font-Metropolis-Medium'>Eduvi</span>
                </Link>
            </div>
            <ul className='mb-4 space-y-5 font-Metropolis-SemiBold'>
                <li>
                    <Link to="#">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center'>
                        For Kindergarten
                        <div className='flex justify-center items-center'>
                            <DownArrow/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center'>
                        For High School
                        <div className='flex justify-center items-center'>
                            <DownArrow/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center'>
                        For College
                        <div className='flex justify-center items-center'>
                            <DownArrow/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='flex items-center'>
                        Courses
                        <div className='flex justify-center items-center'>
                            <DownArrow/>
                        </div>
                    </Link>
                </li>
            </ul> 
        </div>
        {/* Overlay */}
        <div className={`w-full h-full fixed top-0 right-0 bottom-0 left-0 bg-black/20 z-[99] transition-transform ${showMenu ? "" : "hidden"}`} onClick={()=>setShowMenu(false)}></div>
    </div>
  )
}

export default Navbar