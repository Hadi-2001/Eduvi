import React from 'react'

function Subscribe() {
  return (
    <div className='mt-28 px-8 py-10 sm:px-12 sm:py-16 flex gap-x-5 rounded-xl bg-blackRock'>
        <div className='hidden max-w-[14.75rem] md:flex flex-col justify-between gap-y-11'>
            <div className='w-10 h-10 lg:w-[3.125rem] lg:h-[3.125rem] xl:w-[3.75rem] xl:h-[3.75rem] rounded-full'>
                <img className='w-full' src="/images/subscribe/Ellipse 168.png" alt="" />
            </div>
            <div className='w-10 h-10 lg:w-[3.125rem] lg:h-[3.125rem] xl:w-[3.75rem] xl:h-[3.75rem] ml-14 lg:ml-24 xl:ml-44 rounded-full'>
                <img className='w-full' src="/images/subscribe/Ellipse 167.png" alt="" />
            </div>
            <div className='w-10 h-10 lg:w-[3.125rem] lg:h-[3.125rem] xl:w-[3.75rem] xl:h-[3.75rem] ml-5 lg:ml-11 xl:ml-16 rounded-full'>
                <img className='w-full' src="/images/subscribe/Ellipse 165.png" alt="" />
            </div>
        </div>
        <div className='max-w-xl mx-auto'>
            <h3 className='font-Metropolis-Bold text-center text-white text-3xl sm:text-4xl lg:text-[2.8125rem] lg:leading-[3.4375rem]'>Subscribe For Get Update Every New Courses</h3>
            <p className='mt-4 mb-8 lg:mt-5 lg:mb-10 text-center sm:text-sm lg:text-base text-white/70'>20k+ students daily learn with Eduvi. Subscribe for new courses.</p>
            <form action=''>
                <div className='max-w-md flex flex-col xs:flex-row gap-y-5 xs:mx-auto text-sm'>
                    <input className='w-full h-[3.125rem] px-4 py-2.5 rounded-[0.3125rem] xs:rounded-r-none text-white bg-white/20 outline-none' type="email" name="" id="" placeholder='Enter your email' />
                    <button className='w-full xs:w-36 h-[3.125rem] rounded-[0.3125rem] xs:rounded-l-none text-white bg-secondary'>Subscribe</button>
                </div>
            </form>
        </div>
        <div className='hidden max-w-[14.75rem] md:flex flex-col justify-between items-end gap-y-11'>
            <div className='w-10 h-10 lg:w-[3.125rem] lg:h-[3.125rem] xl:w-[3.75rem] xl:h-[3.75rem] rounded-full'>
                <img className='w-full' src="/images/subscribe/Ellipse 166.png" alt="" />
            </div>
            <div className='w-10 h-10 lg:w-[3.125rem] lg:h-[3.125rem] xl:w-[3.75rem] xl:h-[3.75rem] mr-14 lg:mr-24 xl:mr-44 rounded-full'>
                <img className='w-full' src="/images/subscribe/Ellipse 164.png" alt="" />
            </div>
            <div className='w-10 h-10 lg:w-[3.125rem] lg:h-[3.125rem] xl:w-[3.75rem] xl:h-[3.75rem] mr-5 lg:mr-11 xl:mr-16 rounded-full'>
                <img className='w-full' src="/images/subscribe/Ellipse 169.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Subscribe