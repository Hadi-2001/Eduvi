import React from 'react'
import { LeftArrow, RightArrow } from './SVGs'

function Pagination() {
  return (
    <div className='mt-14 flex justify-center items-center gap-x-2.5 xs:gap-x-5 font-Metropolis-Medium'>
        <button className='shrink-0 w-11 h-11 grid place-items-center rounded-md bg-[#F2E5FF]'>
            <LeftArrow/>
        </button>
        <div className='flex items-center gap-x-2.5 xs:gap-x-4'>
            <span>Page</span>
            <p className='w-11 h-11 grid place-items-center rounded-md text-lg bg-white'>1</p>
            <p>of<span className='ml-1'>10</span></p>
        </div>
        <button className='shrink-0 w-11 h-11 grid place-items-center rounded-md bg-secondary'>
            <RightArrow/>
        </button>
    </div>
  )
}

export default Pagination