import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import Pagination from '../../components/Pagination'
import { Magnifier } from '../../components/SVGs'
import ClassCard from '../../components/ClassCard'
import CourseCard from '../../components/CourseCard'

function Courses() {
  return (
    <>
        <div className='px-4 py-5 lg:px-8 rounded-[1.25rem] bg-blueChalk'>
            <Breadcrumb>
                <BreadcrumbItem title="Courses" href="/courses" active/>
            </Breadcrumb>
            <div className='max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-5'>
                <h4 className='shrink-0 mr-auto xs:mr-0 font-Metropolis-SemiBold text-3xl sm:text-4xl lg:text-[2.8125rem] lg:leading-[3.125rem]'>Eduvi Courses<br/>For All Standards</h4>
                <div className='relative max-w-[23.375rem]'>
                    <img className='w-full z-10' src="/images/courses.png" alt="" />
                </div>
            </div>
        </div>
        <ul className='my-10 flex items-center gap-x-5 font-Inter-Medium text-sm lg:text-base overflow-x-auto'>
            <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-primary text-white'>
                All Courses
            </li>
            <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                Kindergarten
            </li>
            <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                High school
            </li>
            <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                College
            </li>
            <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white text-secondary'>
                More Courses
            </li>
        </ul>
        <div>
            <h5 className='mb-4 font-Metropolis-SemiBold text-2xl sm:text-3xl'>Standard Classes</h5>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] place-items-center gap-5 sm:gap-10'>
                <ClassCard title="Standard One" desc="Standard 1 is a foundation Standard that reflects 7 important concepts..." icon="1.svg"/>
                <ClassCard title="Standard Two" desc="Standard 2 builds on the foundations of Standard 1 and includes requirements..." icon="2.svg"/>
                <ClassCard title="Standard Three" desc="Standard 3 of the Aged Care Quality Standards applies to all services delivering personal..." icon="3.svg"/>
                <ClassCard title="Standard Four" desc="Standard 4 of the Aged Care Quality Standards focuses on services and supports..." icon="4.svg"/>
                <ClassCard title="Standard Five" desc="Standard 5 Learning Resources. Learning Resources ensure that the school has the..." icon="5.svg"/>
                <ClassCard title="Standard Six" desc="Standard 6 requires an organisation to have a system to resolve complaints..." icon="6.svg"/>
                <ClassCard title="Standard Seven" desc="Standard 7 Blood Management mandates that leaders of health service organisations..." icon="7.svg"/>
                <ClassCard title="Standard Eight" desc="Standard 8 Course from NCERT Solutions help students to understand..." icon="8.svg"/>
                <ClassCard title="Standard Nine" desc="Standard 5 Learning Resources. Learning Resources ensure that the school has the..." icon="9.svg"/>
                <ClassCard title="O- Level" desc="Standard 6 requires an organisation to have a system to resolve complaints..." icon="O.svg"/>
                <ClassCard title="A- Level" desc="Standard 6 requires an organisation to have a system to resolve complaints..." icon="A.svg"/>
            </div>
        </div>
        <div className='mt-20'>
            <h5 className='font-Metropolis-SemiBold text-2xl sm:text-3xl'>Other Courses For High School</h5>
            <div className='mt-5 mb-10 flex flex-col xs:flex-row xs:flex-wrap gap-x-5 lg:gap-x-10 gap-y-5 font-Metropolis-Medium'>
                <div className='flex-grow xs:h-[3.125rem] lg:h-[3.75rem] p-[0.3125rem] flex flex-wrap xs:flex-nowrap items-center justify-between gap-y-2.5 rounded-[0.3125rem] lg:rounded-xl xs:bg-white'>
                    <input className='w-full h-[3.125rem] md:h-full px-4 py-3.5 rounded-[0.3125rem] outline-none' type="text" placeholder='Serach Class, Course' />
                    <button className='shrink-0 w-full xs:w-auto xs:h-full h-[3.125rem] px-8 py-3.5 flex items-center justify-center gap-x-1 rounded-[0.3125rem] lg:rounded-xl text-white bg-secondary font-Inter-Medium'>
                        <Magnifier/>
                        Search
                    </button>
                </div>
                <div className='flex-grow lg:max-w-[25rem] shrink-0 h-[3.125rem] lg:h-[3.75rem] p-[0.3125rem] flex items-center justify-between rounded-[0.3125rem] lg:rounded-xl bg-white'>
                    <select className='w-full h-full mx-4' name="" id="">
                        <option value="">Sort by: Latest</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-x-5 sm:gap-y-4 lg:gap-x-10 lg:gap-y-8'>
                <CourseCard courseName="The Three Musketeers" price={40} img="Image (1).png"/>
                <CourseCard courseName="The Three Musketeers" price={40} img="Image (1).png"/>
                <CourseCard courseName="The Three Musketeers" price={40} img="Image (1).png"/>
                <CourseCard courseName="The Three Musketeers" price={40} img="Image (1).png"/>
            </div>
        </div>
        <Pagination/>
    </>
  )
}

export default Courses