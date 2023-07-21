import React from 'react'
import BreadcrumbItem from './BreadcrumbItem'

function Breadcrumb({children}) {
  return (
    <ul className='flex items-center gap-x-1.5 capitalize font-Metropolis-Medium tracking-wider divide-x-2 leading-none divide-[rgba(10,3,60,0.40)] text-[rgba(10,3,60,0.40)]'>
        <BreadcrumbItem title="Home" href="/"/>
        {children}
    </ul>
  )
}

export default Breadcrumb