import React, { useState } from 'react'
import { DownArrow, StarFill } from './SVGs'
import { Link } from 'react-router-dom'

function MentorCard({fullName,job,rating,ratesCount,profile}) {
    const [showMentorDetails,setShowMentorDetails] = useState(false)
  return (
    <div>
        <div className={`overflow-hidden ${showMentorDetails ? "rounded-xl " : "rounded-t-xl"}`}>
            <Link to={`/mentors/mentor-information/${fullName}`}>
                <img className='w-full' src={`/images/${profile}`} alt="" />
            </Link>
        </div>
        <div className={`relative h-[6.5rem] px-4 py-3 rounded-b-xl transition-all ${showMentorDetails ? "bg-white" : ""}`}>
            <div className='mb-2 flex items-center justify-between'>
                <p className={`transition-colors ${showMentorDetails ? "text-primary" : ""}`}>{fullName}</p>
                <div className={`w-6 h-6 cursor-pointer grid place-items-center transition-all ${showMentorDetails ? "rotate-180" : ""}`} onClick={()=>setShowMentorDetails(!showMentorDetails)}>
                    <DownArrow/>
                </div>
            </div>
            <p className='text-sm text-midGray'>{job}</p>
            {
                showMentorDetails ? (
                <div className=' mt-2 font-Inter-Medium text-sm text-midGray flex items-center transition-all'>
                    <StarFill/>
                    <span className='mx-1'>{rating}</span>
                    <span>(<span className='text-primary underline'>{ratesCount}</span>)</span>
                </div>) : ""
            }
        </div>
    </div>
  )
}

export default MentorCard