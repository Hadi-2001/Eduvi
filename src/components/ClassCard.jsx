import React from 'react'
import { Link } from 'react-router-dom'

function ClassCard({title,desc,icon,href}) {
  return (
    <div className='max-w-sm px-5 py-8 flex flex-col items-center text-center bg-white rounded-2xl'>
        <div className='flex justify-center items-center'>
            <img src={`/images/${icon}`} alt="" />
        </div>
        <h5 className='mt-5 mb-4 font-Metropolis-SemiBold text-2xl'>{title}</h5>
        <p className='mb-6 text-midGray line-clamp-2 xl:line-clamp-3'>{desc}</p>
        <Link to={`${href ? href : "#"}`} className='py-3 px-8 border border-secondary rounded-md text-secondary font-Inter-Medium transition-all hover:bg-secondary hover:text-white'>Class Details</Link>
    </div>
  )
}

export default ClassCard