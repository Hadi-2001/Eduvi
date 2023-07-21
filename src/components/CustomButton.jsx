import React from 'react'
import { Link } from 'react-router-dom'

function CustomButton({text,href,center}) {
  return (
    <Link to={`${href ? href : "#"}`} className={`block cursor-pointer w-fit py-4 px-8 font-Inter-Medium text-white text-center rounded-xl bg-secondary transition-all hover:bg-white border hover:border-secondary hover:text-secondary ${center ? "mx-auto" : ""}`}>{text}</Link>
  )
}

export default CustomButton