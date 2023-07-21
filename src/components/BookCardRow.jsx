import React from 'react'
import { StarFill } from './SVGs'
import { Link } from 'react-router-dom'

function BookCardRow({bookName,price,rating,img,href}) {
  return (
    <Link to="#">
      <div className='max-w-xs'>
          <div className='p-5 rounded-xl bg-white'>
              <img className='w-full' src={`/images/${img}`} alt="" />
          </div>
          <p className='mt-4 mb-2.5 line-clamp-1'>{bookName}</p>
          <div className='flex items-center justify-between'>
              <span className='text-primary'>${price}</span>
              <div className='flex items-center gap-x-0.5'>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
                  <StarFill/>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default BookCardRow