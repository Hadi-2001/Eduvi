import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import Pagination from '../../components/Pagination'
import { Magnifier } from '../../components/SVGs'
import BookCardRow from '../../components/BookCardRow'
import BookCardColumn from '../../components/BookCardColumn'

function Shop() {
  return (
    <>
        <div className='px-4 py-5 lg:px-8 rounded-[1.25rem] bg-blueChalk'>
            <Breadcrumb>
                <BreadcrumbItem title="Shop" href="/shop" active/>
            </Breadcrumb>
            <div className='max-w-4xl mx-auto flex flex-col xs:flex-row items-center justify-center lg:justify-between gap-5'>
                <h4 className='shrink-0 mr-auto xs:mr-0 font-Metropolis-SemiBold text-3xl sm:text-4xl lg:text-[2.8125rem] lg:leading-[3.125rem]'>Eduvi Online<br/>Book Shop</h4>
                <div className='max-w-[23.375rem]'>
                    <img className='w-full' src="/images/kisspng-bookcase-shelf-furniture-books-on-the-shelves-5a9ef7c1975396.png" alt="" />
                </div>
            </div>
        </div>
        <div className='mt-5 sm:mt-10 flex flex-col-reverse md:flex-row gap-x-5 lg:gap-x-10 gap-y-12'>
            <div className='md:w-[30%] shrink-0 flex flex-col gap-5'>
                <div>
                    <h5 className='mb-4 font-Metropolis-SemiBold text-2xl sm:text-3xl'>Popular Books</h5>
                    <div className='mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 lg:gap-4 font-Metropolis-SemiBold'>
                        <BookCardColumn bookName="The Three Musketeers, by Alexandre Dumas" price={39.00} img="book-1.png" />
                        <BookCardColumn bookName="The Three Musketeers, by Alexandre Dumas" price={39.00} img="book-2.png" />
                        <BookCardColumn bookName="The Three Musketeers, by Alexandre Dumas" price={39.00} img="book-3.png" />
                    </div>
                    <Link className='font-Metropolis-Medium text-lg text-secondary' to="#">See More</Link>
                </div>
                <div>
                    <h5 className='mb-4 font-Metropolis-SemiBold text-2xl sm:text-3xl'>New Arrivals</h5>
                    <div className='mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 lg:gap-4 font-Metropolis-SemiBold'>
                        <BookCardColumn bookName="The Three Musketeers, by Alexandre Dumas" price={39.00} img="book-1.png" />
                        <BookCardColumn bookName="The Three Musketeers, by Alexandre Dumas" price={39.00} img="book-2.png" />
                        <BookCardColumn bookName="The Three Musketeers, by Alexandre Dumas" price={39.00} img="book-3.png" />
                    </div>
                    <Link className='font-Metropolis-Medium text-lg text-secondary' to="#">See More</Link>
                </div>
            </div>
            <div className='md:w-[70%] flex-grow'>
                <ul className='flex items-center gap-x-5 font-Inter-Medium text-sm lg:text-base overflow-x-auto'>
                    <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-primary text-white'>
                        All Books
                    </li>
                    <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                        Kindergarten
                    </li>
                    <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                        High school
                    </li>
                    <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                        College
                    </li>
                </ul>
                <div className='mt-5 sm:mt-10 flex flex-col xs:flex-row gap-x-4 gap-y-5 font-Metropolis-Medium'>
                    <div className='flex-grow h-[3.125rem] lg:h-[3.75rem] p-[0.3125rem] flex items-center justify-between rounded-[0.3125rem] lg:rounded-xl bg-white'>
                        <input className='w-full h-full px-4 outline-none' type="text" placeholder='Serach Class, Course' />
                        <button className='shrink-0 w-10 h-10 lg:w-11 lg:h-11 rounded-[0.3125rem] lg:rounded-lg grid place-items-center bg-secondary'>
                            <Magnifier/>
                        </button>
                    </div>
                    <div className='flex-grow xs:max-w-[13rem] shrink-0 h-[3.125rem] lg:h-[3.75rem] p-[0.3125rem] flex items-center justify-between rounded-[0.3125rem] lg:rounded-xl bg-white'>
                        <select className='w-full h-full mx-4 outline-none' name="" id="">
                            <option value="">Sort by: Latest</option>
                        </select>
                    </div>
                </div>
                <div className='mt-6 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-5 lg:gap-x-5 lg:gap-y-7 font-Metropolis-SemiBold text-lg'>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-1.png"/>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-2.png"/>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-3.png"/>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-4.png"/>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-5.png"/>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-6.png"/>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-1.png"/>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-2.png"/>
                    <BookCardRow bookName="The Three Musketeers" price={40} img="book-3.png"/>
                </div>
                <Pagination/>
            </div>
        </div>
    </>
  )
}

export default Shop