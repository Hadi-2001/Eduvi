import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import Pagination from '../../components/Pagination'
import { MentorsHeaderSVG } from '../../components/SVGs'
import { Link } from 'react-router-dom'
import MentorCard from '../../components/MentorCard'

function Mentors() {
  return (
    <>
        <div className='px-4 py-5 pb-9 lg:px-8 rounded-[1.25rem] bg-blueChalk'>
            <Breadcrumb>
                <BreadcrumbItem title="Our Mentors" href="/mentors" active/>
            </Breadcrumb>
            <div className='max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-5'>
                <h4 className='shrink-0 mr-auto xs:mr-0 font-Metropolis-SemiBold text-3xl sm:text-4xl lg:text-[2.8125rem] lg:leading-[3.125rem]'>Eduvi has the<br/>qualified mentor</h4>
                <div className='max-w-md'>
                    <MentorsHeaderSVG/>
                </div>
            </div>
        </div>
        <div>
            <ul className='my-10 flex items-center gap-x-5 font-Inter-Medium text-sm lg:text-base overflow-x-auto'>
                <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-primary text-white'>
                    All Mentors
                </li>
                <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                    For Kindergarten
                </li>
                <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                    For high school
                </li>
                <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                    For college
                </li>
                <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                    For Technology
                </li>
                
            </ul>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] lg:grid-cols-4 gap-x-6 gap-y-2 sm:gap-x-8  lg:gap-x-10 font-Inter-Medium'>
                <MentorCard fullName="Wade Warren" job="Founder & Mentor" rating={4.5} ratesCount={150} profile="teacher.png"/>
                <MentorCard fullName="Wade Warren" job="Founder & Mentor" rating={4.5} ratesCount={150} profile="teacher.png"/>
                <MentorCard fullName="Wade Warren" job="Founder & Mentor" rating={4.5} ratesCount={150} profile="teacher.png"/>
                <MentorCard fullName="Wade Warren" job="Founder & Mentor" rating={4.5} ratesCount={150} profile="teacher.png"/>
                <MentorCard fullName="Wade Warren" job="Founder & Mentor" rating={4.5} ratesCount={150} profile="teacher.png"/>
                <MentorCard fullName="Wade Warren" job="Founder & Mentor" rating={4.5} ratesCount={150} profile="teacher.png"/>
                <MentorCard fullName="Wade Warren" job="Founder & Mentor" rating={4.5} ratesCount={150} profile="teacher.png"/>
                <MentorCard fullName="Wade Warren" job="Founder & Mentor" rating={4.5} ratesCount={150} profile="teacher.png"/>
            </div>
            <Pagination/>
        </div>
    </>
  )
}

export default Mentors