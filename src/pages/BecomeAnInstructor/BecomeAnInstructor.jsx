import React from 'react'
import CustomButton from '../../components/CustomButton'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import { BecomeAnInstructorHeaderSVG } from '../../components/SVGs'


function BecomeAnInstructor() {
  return (
    <div>
        <div className='px-4 py-5 pb-9 lg:px-8 rounded-[1.25rem] bg-blueChalk'>
            <Breadcrumb>
                <BreadcrumbItem title="Become An Instructor" href="#" active/>
            </Breadcrumb>
            <div className='max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-5'>
                <h4 className='shrink-0 mr-auto xs:mr-0 font-Metropolis-SemiBold text-3xl sm:text-4xl lg:text-[2.8125rem] lg:leading-[3.125rem]'>Join Eduvi as<br/>a Mentor</h4>
                <div className='max-w-xs'>
                  <BecomeAnInstructorHeaderSVG/>
                </div>
            </div>
        </div>
        <div className='max-w-6xl mx-auto mt-16 flex flex-col md:flex-row sm:items-center gap-x-[3.75rem] gap-y-5'>
          <div className='md:w-2/5 shrink-0 rounded-2xl bg-[#FFDEDA]   pt-9 pl-10 pr-6'>
            <img className='' src="/images/front-view-male-student-red-checkered-shirt-with-backpack-holding-felt-pens-copybook-light-blue-wall 3.png" alt="" />
          </div>
          <div>
            <h5 className='mb-4 text-2xl sm:text-xl lg:text-3xl font-Metropolis-SemiBold'>Apply As Instructor</h5>
            <p className='mb-5 text-midGray sm:text-sm lg:text-base'>Teaching is a vital and admirable career. As such, it comes with quite a bit of responsibility, both in practice and in preparation with many skills required to be a teacher. The following steps provide a general breakdown of the requirements for teachers:</p>
            <div className='mb-5 sm:mb-8'>
              <div className='flex font-Inter-Medium text-sm sm:text-base'>
                <p className='pb-1.5 sm:pb-2.5 border-b border-b-primary text-primary'>Intstructor Requirements</p>
                <div className='border-b border-b-midGray'>
                  <p className='pb-1.5 sm:pb-2.5 pl-8  text-midGray'>Instructor Rules</p>
                </div>
              </div>
              <ul className='mt-2.5 sm:mt-5 space-y-1 text-sm sm:text-base list-disc pl-3.5'>
                <li>An undergraduate degree</li>
                <li>Participate in supervised teaching</li>
                <li>State teaching license</li>
                <li>Purse graduate studies</li>
              </ul>
            </div>
            <CustomButton text="Apply Now"/>
          </div>
        </div>
        <div className='mt-12 lg:mt-28'>
          <h5 className='font-Metropolis-Bold text-center text-3xl sm:text-4xl lg:text-[2.8125rem]'>How to apply to join as instructor</h5>
          <div className='max-w-5xl mx-auto mt-5 lg:mt-14 p-2.5 rounded-xl bg-white'>
            <div className='w-full flex justify-center pt-2.5 lg:pt-8 px-7 rounded-xl bg-[#EBEAF4]'>
              <img className='max-h-[33.5rem]' src="/images/young-blackhaired-man-demonstrating-something-bright-laptop 1.png" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default BecomeAnInstructor