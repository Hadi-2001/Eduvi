import React from 'react'
import CustomButton from '../../components/CustomButton'
import {Magnifier, 
    Phone, 
    UpperArrow, 
    SpeakerFilledAudioTool,
    LiveStreaming,
    PlayButton,
    PurplePattern,
    HtmlLogo,
    JavaLogo,
    PhpLogo 
} from '../../components/SVGs'
import SelectionList from '../../components/SelectionList'
import ClassCard from '../../components/ClassCard'

function Home() {
  return (
    <>
      {/* Header */}
      <header className='flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-5 lg:gap-x-8'>
        <div className='shrink-0 md:w-7/12 lg:w-1/2 '>
          <p className='w-fit px-5 py-3 rounded-xl bg-white font-Metropolis-Medium text-primary text-sm sm:text-base lg:text-xl'>Never Stop Learning</p>
          <h1 className='mt-4 mb-5 sm:mb-6 lg:mb-8 font-Metropolis-Bold text-[2rem] leading-10 sm:text-[2.8125rem] sm:leading-[3.125rem] lg:text-[4rem] lg:leading-[4.5rem]'>Grow up your skills<br/> by online courses<br/> with Eduvi</h1>
          <p className='mb-8 lg:mb-10 text-midGray text-base leading-8 sm:text-sm sm:leading-7 lg:text-base lg:leading-8'>Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.</p>
          <div className='max-w-xl xs:h-[3.125rem] lg:h-[3.75rem] xs:p-[0.3125rem] flex flex-col gap-y-3 xs:flex-row xs:items-center xs:justify-between xs:rounded-md xs:bg-white font-Metropolis-Medium'>
            <SelectionList/>
            <span className='w-0.5 h-5 lg:h-8 hidden xs:block bg-[#DADADA]'></span>
            <div className='xs:flex-grow h-[3.125rem] xs:h-full px-5 xs:px-3 sm:px-5 md:px-2.5 lg:px-5 rounded-md xs:rounded-none bg-white'>
              <input className='w-full h-full outline-none' type="text" placeholder='Class/Course'/>
            </div>
            <button className='h-[3.125rem] xs:h-full xs:px-6 flex items-center justify-center gap-x-1 rounded-md bg-secondary text-white'>
              <Magnifier/>
              Search
            </button>
          </div>
        </div>
        <div className=''>
          <img className='w-full sm:w-3/4 mx-auto md:w-full' src="/images/school-boy-holding-copy-space-nootebook .png" alt="" />
        </div>
      </header>
      {/* Classes */}
      <section className='mt-24'>
        <div className='flex flex-col items-center'>
          <h3 className='font-Metropolis-Bold text-center text-3xl sm:text-4xl lg:text-[2.8125rem] lg:leading-[3.4375rem]'>High quality video, audio<br/>& live classes</h3>
          <p className='max-w-4xl mx-auto mt-5 mb-8 lg:mb-10 md:px-10 text-center sm:text-sm lg:text-base line-clamp-3'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than 480 vertical scan lines or 576 vertical lines is considered high-definition.</p>
          <CustomButton text="Visit Courses" href="/courses" />
        </div>
        <div className='mt-14 lg:mx-20'>
          <div className='relative mb-10 p-2.5 sm:p-6 lg:p-8 rounded-[1.25rem] bg-white'>
            <img className='w-full rounded-[1.25rem]' src="/images/pexels-vanessa-garcia-6325959 1.png" alt="" />
            <div className='flex justify-between items-end absolute left-5 right-5 bottom-5 sm:left-11 sm:right-11 sm:bottom-11 lg:left-14 lg:bottom-14 lg:right-14'>
              <div className='w-14 h-16 sm:w-[6.5rem] sm:h-32 p-1 sm:p-1.5 lg:w-44 lg:h-52 lg:p-2.5 rounded-xl bg-white overflow-hidden'>
                <img className='w-full rounded-xl' src="/images/portrait-little-girl-coloring.png" alt="" />
              </div>
              <div className='w-7 h-7 sm:w-[3.125rem] sm:h-[3.125rem] lg:w-[3.75rem] lg:h-[3.75rem] flex items-center justify-center rounded-full bg-primary'>
                <Phone/>
              </div>
              <div className='w-7 h-7 sm:w-[3.125rem] sm:h-[3.125rem] lg:w-[3.75rem] lg:h-[3.75rem] lg:ml-28 flex items-center justify-center rounded-full bg-secondary'>
                <UpperArrow/>
              </div>
            </div>
          </div>
          <div className='flex justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 font-Metropolis-SemiBold text-base sm:text-xl lg:text-2xl'>
            <div className='w-full xs:w-44 sm:w-60 lg:w-[21rem] p-2.5 sm:p-5 lg:p-4 flex items-center gap-x-5 bg-white rounded-[0.3125rem] sm:rounded-[0.625rem]'>
              <div className='w-11 h-11 lg:w-[4.5rem] lg:h-[4.5rem] flex items-center justify-center rounded lg:rounded-[0.625rem] bg-[#FFF4F2]'>
                <SpeakerFilledAudioTool/>
              </div>
              <p>Audio Classes</p>
            </div>
            <div className='w-full xs:w-44 sm:w-60 lg:w-[21rem] p-2.5 sm:p-5 lg:p-4 flex items-center gap-x-5 rounded-[0.3125rem] sm:rounded-[0.625rem] bg-white '>
              <div className='w-11 h-11 lg:w-[4.5rem] lg:h-[4.5rem] flex items-center justify-center rounded lg:rounded-[0.625rem] bg-[#F8F2FF]'>
                <LiveStreaming/>
              </div>
              <p>Live Classes</p>
            </div>
            <div className='w-full xs:w-44 sm:w-60 lg:w-[21rem] p-2.5 sm:p-5 lg:p-4 flex items-center gap-x-5 bg-white rounded-[0.3125rem] sm:rounded-[0.625rem]'>
              <div className='w-11 h-11 lg:w-[4.5rem] lg:h-[4.5rem] flex items-center justify-center rounded lg:rounded-[0.625rem] bg-[#E5FFF3]'>
                <PlayButton/>
              </div>
              <p>Recorded Class</p>
            </div>
          </div>
        </div>
      </section>
      {/* Lessons */}
      <section className='mt-24'>
        <h3 className='font-Metropolis-Bold text-center text-3xl sm:text-4xl lg:text-[2.8125rem] lg:leading-[3.4375rem]'>Qualified lessons for students</h3>
        <p className='max-w-4xl mx-auto mt-5 mb-8 lg:mb-10 md:px-10 text-center sm:text-sm lg:text-base'>A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.</p>
        <ul className='mb-8 sm:mb-10 lg:mb-11 flex items-center flex-wrap gap-5 justify-center font-Inter-Medium text-center text-sm lg:text-base'>
          <li className='w-[7.5rem] py-5 rounded-xl'>Kindergarten</li>
          <li className='w-[7.5rem] py-5 rounded-xl text-white bg-primary'>High School</li>
          <li className='w-[7.5rem] py-5 rounded-xl'>College</li>
        </ul>
        <div className='mb-8 sm:mb-14 lg:mb-16 grid gap-5 sm:gap-10 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] place-items-center'>
          <ClassCard title="Standard One" desc="Standard 1 is a foundation Standard that reflects 7 important concepts..." icon="1.svg"/>
          <ClassCard title="Standard Two" desc="Standard 2 builds on the foundations of Standard 1 and includes requirements..." icon="2.svg"/>
          <ClassCard title="Standard Three" desc="Standard 3 of the Aged Care Quality Standards applies to all services delivering personal..." icon="3.svg"/>
          <ClassCard title="Standard Four" desc="Standard 4 of the Aged Care Quality Standards focuses on services and supports..." icon="4.svg"/>
          <ClassCard title="Standard Five" desc="Standard 5 Learning Resources. Learning Resources ensure that the school has the..." icon="5.svg"/>
          <ClassCard title="Standard Six" desc="Standard 6 requires an organisation to have a system to resolve complaints..." icon="6.svg"/>
          <ClassCard title="Standard Seven" desc="Standard 7 Blood Management mandates that leaders of health service organisations..." icon="7.svg"/>
          <ClassCard title="Standard Eight" desc="Standard 8 Course from NCERT Solutions help students to understand..." icon="8.svg"/>
        </div>
        <CustomButton text="Visit More Classes" center />
      </section>
      {/* Join courses */}
      <section className='my-24 md:px-0 flex flex-col md:flex-row md:items-center gap-x-4 gap-y-5 rounded-2xl bg-[#EDE9F2]'>
        <div className='shrink-0 md:w-1/2 xl:w-5/12 px-5 py-8 xs:pb-0 sm:px-8 md:py-16 md:pr-0 lg:py-24 lg:pl-12'>
            <p className='w-fit p-4 sm:py-2.5 lg:py-4 lg:px-5 rounded-xl bg-[#E4E2F4] font-Metropolis-Medium text-secondary text-sm sm:text-xl'>College Level</p>
            <h3 className='mt-4 sm:mt-5 lg:mt-4 mb-5 font-Metropolis-Bold text-2xl leading-8 sm:text-[2rem] sm:leading-10 lg:text-[2.875rem] lg:leading-[3.5rem]'>Don’t waste time in<br/> COVID-19 pandemic.<br/> Develop your skills.</h3>
            <p className='mb-6 sm:mb-8 lg:mb-10 text-midGray sm:text-sm lg:text-base'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
            <CustomButton text="Registation Now" />
        </div>
        <div className='pt-16 xs:pl-20 sm:pl-0 lg:pt-20 md:self-end lg:flex-grow'>
          <div className='sm:w-3/4 md:w-full sm:ml-auto relative z-20'>
            <img className='w-full pl-5' src="/images/join courses.png" alt="" />
            <div className='absolute left-7 right-7 -top-20 lg:right-auto lg:left-40 lg:-top-6 -z-10'>
              <PurplePattern/>
            </div>
            <div className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 absolute top-11 left-3 sm:-top-14 sm:left-12 lg:left-16 lg:top-[5.5rem] rounded-md grid place-items-center bg-white'>
              <HtmlLogo/>
            </div>
            <div className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 absolute -top-20 right-2 sm:-top-12 sm:right-24 lg:right-24 lg:-top-8 rounded-md grid place-items-center bg-white'>
              <JavaLogo/>
            </div>
            <div className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 absolute top-6 right-3 sm:top-14 sm:right-20 lg:right-40 lg:top-28 rounded-md grid place-items-center bg-white'>
              <PhpLogo/>
            </div>
          </div>
        </div>
      </section>
      {/* Join as a mentor */}
      <section className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-6 sm:gap-x-7 lg:gap-x-14'>
        <div>
          <img className='w-full xs:w-4/5 sm:w-full mx-auto' src="/images/join as a teacher.png" alt="" />
        </div>
        <div className='sm:w-1/2 shrink-0'>
          <h3 className='font-Metropolis-Bold text-3xl sm:text-4xl lg:text-[2.8125rem] lg:leading-[3.4375rem]'>Want to share your<br/> knowledge? Join us<br/> a Mentor</h3>
          <p className='max-w-4xl mx-auto mt-5 mb-6 lg:mb-10 sm:text-sm lg:text-base'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
          <CustomButton text="Career Information" href="/become" />
        </div>
      </section>
    </>
  )
}

export default Home