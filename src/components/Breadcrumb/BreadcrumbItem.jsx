import React from 'react'
import { Link } from 'react-router-dom'

function BreadcrumbItem({title,href,active}) {
  return (
    <li className='pl-1.5'>
        <Link to={`${href}`} className={`${active ? "text-secondary" : ""}`}>
            {title}
        </Link>
    </li>
  )
}

export default BreadcrumbItem