import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import { Lock,StarFill } from '../../components/SVGs'
import CourseCard from '../../components/CourseCard'

function CourseInfo() {
  return (
    <>
    <div className='px-5 py-7 lg:px-8 flex flex-col md:flex-row gap-y-4 gap-x-10 rounded-[1.25rem] bg-blueChalk'>
            <div className='flex-grow'>
                <Breadcrumb>
                    <BreadcrumbItem title="Courses" href="/courses"/>
                    <BreadcrumbItem title="Course Details" href="#" active/>
                </Breadcrumb>
                <div className='mt-7 mb-5 rounded-xl overflow-hidden'>
                    <video src="" controls poster='/images/pexels-vanessa-garcia-6325959 1.png'></video>
                </div>
                <p className='font-Metropolis-SemiBold text-xl lg:text-2xl'>Maths - for Standard 3 Students | Episode 2</p>
            </div>
            <div className='md:w-1/3 shrink-0'>
                <p className='hidden md:block mb-5 font-Metropolis-SemiBold text-2xl'>Course Playlists</p>
                <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4'>
                    <div className='p-2.5 flex items-center gap-x-2.5 rounded-[0.3125rem] bg-white'>
                        <div className='w-20 rounded-[0.3125rem] overflow-hidden'>
                            <img className='w-full h-full object-cover' src="/images/pexels-vanessa-garcia-6325959 1.png" alt="" />
                        </div>
                        <div>
                            <p className='font-Metropolis-SemiBold mb-1 text-sm xs:text-base'>Maths - Introduction</p>
                            <p className='font-Metropolis-Medium text-sm text-primary'>1:57</p>
                        </div>
                    </div>
                    <div className='p-2.5 flex items-center gap-x-2.5 rounded-[0.3125rem] bg-white opacity-50'>
                        <div className='relative w-20 rounded-[0.3125rem] overflow-hidden'>
                            <img className='w-full h-full object-cover' src="/images/pexels-vanessa-garcia-6325959 1.png" alt="" />
                            <div className='w-4 h-4 absolute top-0 right-0 bottom-0 left-0 m-auto grid place-items-center rounded-full bg-white'>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M4.99984 5.41683C4.87298 5.41535 4.74872 5.45276 4.64377 5.52404C4.53882 5.59532 4.45823 5.69703 4.41284 5.8155C4.36745 5.93396 4.35945 6.06349 4.3899 6.18665C4.42035 6.3098 4.4878 6.42067 4.58317 6.50433V7.0835C4.58317 7.194 4.62707 7.29998 4.70521 7.37812C4.78335 7.45626 4.88933 7.50016 4.99984 7.50016C5.11034 7.50016 5.21632 7.45626 5.29446 7.37812C5.37261 7.29998 5.4165 7.194 5.4165 7.0835V6.50433C5.51187 6.42067 5.57932 6.3098 5.60978 6.18665C5.64023 6.06349 5.63222 5.93396 5.58683 5.8155C5.54144 5.69703 5.46085 5.59532 5.3559 5.52404C5.25096 5.45276 5.12669 5.41535 4.99984 5.41683ZM7.08317 3.75016V2.91683C7.08317 2.3643 6.86368 1.83439 6.47298 1.44369C6.08228 1.05299 5.55237 0.833496 4.99984 0.833496C4.4473 0.833496 3.9174 1.05299 3.5267 1.44369C3.136 1.83439 2.9165 2.3643 2.9165 2.91683V3.75016C2.58498 3.75016 2.26704 3.88186 2.03262 4.11628C1.7982 4.3507 1.6665 4.66864 1.6665 5.00016V7.91683C1.6665 8.24835 1.7982 8.56629 2.03262 8.80071C2.26704 9.03513 2.58498 9.16683 2.9165 9.16683H7.08317C7.41469 9.16683 7.73263 9.03513 7.96705 8.80071C8.20147 8.56629 8.33317 8.24835 8.33317 7.91683V5.00016C8.33317 4.66864 8.20147 4.3507 7.96705 4.11628C7.73263 3.88186 7.41469 3.75016 7.08317 3.75016ZM3.74984 2.91683C3.74984 2.58531 3.88153 2.26737 4.11595 2.03295C4.35037 1.79853 4.66832 1.66683 4.99984 1.66683C5.33136 1.66683 5.6493 1.79853 5.88372 2.03295C6.11814 2.26737 6.24984 2.58531 6.24984 2.91683V3.75016H3.74984V2.91683ZM7.49984 7.91683C7.49984 8.02734 7.45594 8.13332 7.3778 8.21146C7.29966 8.2896 7.19368 8.3335 7.08317 8.3335H2.9165C2.806 8.3335 2.70002 8.2896 2.62188 8.21146C2.54374 8.13332 2.49984 8.02734 2.49984 7.91683V5.00016C2.49984 4.88966 2.54374 4.78368 2.62188 4.70554C2.70002 4.6274 2.806 4.5835 2.9165 4.5835H7.08317C7.19368 4.5835 7.29966 4.6274 7.3778 4.70554C7.45594 4.78368 7.49984 4.88966 7.49984 5.00016V7.91683Z" fill="#954AE9"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className='font-Metropolis-SemiBold mb-1 text-sm xs:text-base'>Maths - Introduction</p>
                            <p className='font-Metropolis-Medium text-sm text-primary'>1:57</p>
                        </div>
                    </div>
                    <div className='p-2.5 flex items-center gap-x-2.5 rounded-[0.3125rem] bg-white opacity-50'>
                        <div className='relative w-20 rounded-[0.3125rem] overflow-hidden'>
                            <img className='w-full h-full object-cover' src="/images/pexels-vanessa-garcia-6325959 1.png" alt="" />
                            <div className='w-5 h-5 absolute top-0 right-0 bottom-0 left-0 m-auto grid place-items-center rounded-full bg-white'>
                                <Lock/>
                            </div>
                        </div>
                        <div>
                            <p className='font-Metropolis-SemiBold mb-1 text-sm xs:text-base'>Maths - Introduction</p>
                            <p className='font-Metropolis-Medium text-sm text-primary'>1:57</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-16 mb-20 flex flex-col-reverse sm:flex-row gap-4 lg:gap-x-10'>
            <div className='md:w-2/3 flex-grow'>
                <div className='mb-6'>
                    <h5 className='mb-4 font-Metropolis-SemiBold text-2xl sm:text-xl lg:text-3xl'>Course Details</h5>
                    <p className='text-midGray sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                    <p className='text-midGray sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                </div>
                <div className='mb-6'>
                    <h5 className='mb-4 font-Metropolis-SemiBold text-2xl sm:text-xl lg:text-3xl'>Certification</h5>
                    <p className='text-midGray sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h5 className='mb-4 font-Metropolis-SemiBold text-2xl sm:text-xl lg:text-3xl'>Who this course is for</h5>
                    <ul className='space-y-2.5 list-disc text-sm lg:text-base pl-3.5'>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                    </ul>
                </div>
            </div>
            <div className='md:w-1/3 shrink-0'>
                <div className='mb-8 px-5 py-6 sm:py-7 lg:py-8 space-y-5 rounded-[0.3125rem] sm:rounded-xl font-Metropolis-SemiBold bg-white'>
                    <div className='mb-6 flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Price</p>
                        <p className='text-primary text-xl lg:text-2xl'>$49.00</p>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Instructor</p>
                        <Link to="/mentors/Wade Warren" className='sm:text-lg lg:text-xl underline'>
                            Wade Warren
                        </Link>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Ratings</p>
                        <div className='flex items-center gap-x-0.5'>
                            <StarFill/>
                            <StarFill/>
                            <StarFill/>
                            <StarFill/>
                            <StarFill/>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Durations</p>
                        <span className='sm:text-lg lg:text-xl'>10 Days</span>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Lessons</p>
                        <span className='sm:text-lg lg:text-xl'>30</span>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Quizzes</p>
                        <span className='sm:text-lg lg:text-xl'>5</span>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Certificate</p>
                        <span className='sm:text-lg lg:text-xl'>Yes</span>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Language</p>
                        <span className='sm:text-lg lg:text-xl'>English</span>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Access</p>
                        <span className='sm:text-lg lg:text-xl'>Lifetime</span>
                    </div>
                </div>
                <Link to="/pricing" className='inline-block w-full py-3.5 sm:py-4 rounded-[0.3125rem] font-Inter-Medium text-center text-white sm:text-lg bg-secondary hover:bg-white border hover:border-secondary hover:text-secondary transition-all '>Purchase Course</Link>
            </div>
        </div>
        <div className=''>
            <h5 className='mb-5 font-Metropolis-SemiBold text-2xl sm:text-3xl'>Similar Courses</h5>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-x-5 sm:gap-y-4 lg:gap-x-10 lg:gap-y-8'>
                <CourseCard courseName="The Three Musketeers" price={40} img="Image (1).png"/>
                <CourseCard courseName="The Three Musketeers" price={40} img="Image (1).png"/>
                <CourseCard courseName="The Three Musketeers" price={40} img="Image (1).png"/>
                <CourseCard courseName="The Three Musketeers" price={40} img="Image (1).png"/>
            </div>
        </div>
    </>
  )
}

export default CourseInfo