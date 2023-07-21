import React from 'react'
import { StarFill } from './SVGs'
import { Link } from 'react-router-dom'

function BookCardColumn({bookName,price,rating,img,href}) {
  return (
    <Link to="#">
      <div className='p-4 flex gap-x-4 rounded-[0.3125rem] bg-white'>
          <div className='max-w-[4.75rem]'>
              <img className='w-full h-full  rounded-[0.3125rem]' src={`/images/${img}`} alt="" />
          </div>
          <div>
              <div className='flex items-center gap-x-0.5'>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
              </div>
              <p className='mt-2 mb-1.5 line-clamp-2'>{bookName}</p>
              <span className='text-primary'>${price}</span>
          </div>
      </div>
    </Link>
  )
}

export default BookCardColumn