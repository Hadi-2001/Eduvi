import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import { StarFill } from '../../components/SVGs'
import CustomButton from '../../components/CustomButton'

function MentorInformation() {
  return (
    <div>
        <div className='h-28 lg:h-44 px-4 py-5 pb-9 lg:px-8 rounded-[1.25rem] bg-mentor bg-no-repeat bg-blueChalk'>
            <div className='hidden sm:block'>
                <Breadcrumb>
                    <BreadcrumbItem title="Mentor" href="/mentors"/>
                    <BreadcrumbItem title="Wade Warren" href="#" active/>
                </Breadcrumb>
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-x-8 lg:gap-x-10 gap-y-5'>
            <div className='sm:pl-4 lg:pl-8'>
                <div className='flex flex-col sm:flex-row  items-center md:items-end sm:justify-between gap-5'>
                    <div className='w-32 h-32 lg:w-[10.625rem] lg:h-[10.625rem] rounded-xl -mt-14 lg:-mt-20'>
                        <img src="/images/teacher.png" alt="" />
                    </div>
                    <div className='flex-grow mb-5 xs:mb-0 flex flex-col items-center xs:flex-row xs:justify-between xs:items-end gap-x-5 gap-y-4 '>
                        <div className='font-Metropolis-Medium text-center xs:text-left'>
                            <p className='mb-2.5 lg:mb-2 text-2xl'>Wade Warren</p>
                            <p className='text-midGray'>Founder & Mentor</p>
                        </div>
                        <CustomButton text="Contact Now"/>
                    </div>
                </div>
                <ul className='my-8 flex items-center gap-x-5 font-Inter-Medium text-sm lg:text-base overflow-x-auto'>
                    <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-primary text-white'>
                        About
                    </li>
                    <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                        Courses
                    </li>
                    <li className='shrink-0 px-5 py-2.5 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-[0.3125rem] lg:rounded-xl bg-white'>
                        Reviews
                    </li>
                </ul>
                <div>
                    <h5 className='mb-4 font-Metropolis-SemiBold text-2xl sm:text-xl lg:text-3xl'>About Wade</h5>
                    <p className='mb-6 text-midGray sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                    <h5 className='mb-4 font-Metropolis-SemiBold text-2xl sm:text-xl lg:text-3xl'>Certification</h5>
                    <p className='mb-6 text-midGray sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                    
                </div>
            </div>
            <div className='md:w-1/3  shrink-0'>
                <div className='md:mt-[2.125rem] mb-8 px-5 py-6 sm:py-7 lg:py-8 space-y-5 rounded-[0.3125rem] sm:rounded-xl font-Metropolis-SemiBold bg-white'>
                    <div className='mb-6 flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Total Course</p>
                        <p className='text-primary text-xl lg:text-2xl'>30</p>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Ratings</p>
                        <div className='mt-2 font-Inter-Medium sm:text-lg lg:text-xl flex items-center'>
                            <StarFill/>
                            <span className='mx-1'>4.9</span>
                            <span>(<span className='text-primary'>135</span>)</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Experiences</p>
                        <span className='sm:text-lg lg:text-xl'>10 Years</span>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Grauduated</p>
                        <span className='sm:text-lg lg:text-xl'>Yes</span>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Language</p>
                        <span className='sm:text-lg lg:text-xl'>English, French</span>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <p className='text-midGray sm:text-lg lg:text-xl'>Social</p>
                        <div className='flex items-center gap-x-2'>
                            <Link to="#" className='w-9 h-9 inline-grid place-items-center'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.499 0.00457742L13.6462 0C10.441 0 8.36976 2.12507 8.36976 5.41417V7.91047H5.50132C5.25345 7.91047 5.05273 8.11142 5.05273 8.35929V11.9761C5.05273 12.224 5.25368 12.4247 5.50132 12.4247H8.36976V21.5512C8.36976 21.7991 8.57048 21.9998 8.81835 21.9998H12.5609C12.8087 21.9998 13.0094 21.7988 13.0094 21.5512V12.4247H16.3633C16.6112 12.4247 16.8119 12.224 16.8119 11.9761L16.8133 8.35929C16.8133 8.24027 16.7659 8.1263 16.6819 8.04207C16.5979 7.95785 16.4835 7.91047 16.3645 7.91047H13.0094V5.79433C13.0094 4.77723 13.2518 4.26089 14.5767 4.26089L16.4986 4.26021C16.7462 4.26021 16.9469 4.05926 16.9469 3.81162V0.453165C16.9469 0.205755 16.7464 0.00503516 16.499 0.00457742Z" fill="#0A033C"/>
                                </svg>
                            </Link>
                            <Link to="#" className='w-9 h-9 inline-grid place-items-center rounded-full text-white bg-primary'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00039 2.45459C7.22281 2.45459 6.99972 2.46236 6.30156 2.49414C5.60477 2.52604 5.12915 2.63636 4.71298 2.79823C4.28249 2.96541 3.91732 3.18904 3.55351 3.553C3.18943 3.91682 2.9658 4.282 2.79808 4.71236C2.63581 5.12868 2.52536 5.60445 2.494 6.301C2.46277 6.99918 2.45459 7.22241 2.45459 9.00004C2.45459 10.7777 2.4625 11.0001 2.49413 11.6983C2.52618 12.3951 2.63649 12.8707 2.79822 13.2869C2.96553 13.7174 3.18916 14.0826 3.5531 14.4464C3.91677 14.8105 4.28194 15.0347 4.71216 15.2019C5.1286 15.3637 5.60436 15.474 6.30102 15.5059C6.99918 15.5377 7.22213 15.5455 8.99957 15.5455C10.7773 15.5455 10.9997 15.5377 11.6979 15.5059C12.3947 15.474 12.8708 15.3637 13.2873 15.2019C13.7176 15.0347 14.0822 14.8105 14.4459 14.4464C14.81 14.0826 15.0336 13.7174 15.2013 13.287C15.3622 12.8707 15.4727 12.3949 15.5054 11.6984C15.5368 11.0002 15.545 10.7777 15.545 9.00004C15.545 7.22241 15.5368 6.99931 15.5054 6.30113C15.4727 5.60432 15.3622 5.12868 15.2013 4.7125C15.0336 4.282 14.81 3.91682 14.4459 3.553C14.0818 3.18891 13.7177 2.96527 13.2869 2.79823C12.8696 2.63636 12.3937 2.52604 11.6969 2.49414C10.9987 2.46236 10.7765 2.45459 8.99835 2.45459H9.00039ZM8.41323 3.63413C8.58749 3.63386 8.78194 3.63413 9.00039 3.63413C10.748 3.63413 10.9551 3.64041 11.6452 3.67177C12.2834 3.70095 12.6297 3.80759 12.8605 3.89718C13.1659 4.01582 13.3837 4.15763 13.6126 4.38673C13.8417 4.61582 13.9835 4.834 14.1024 5.13945C14.192 5.36991 14.2988 5.71627 14.3278 6.35445C14.3592 7.04445 14.366 7.25172 14.366 8.99854C14.366 10.7454 14.3592 10.9526 14.3278 11.6426C14.2986 12.2808 14.192 12.6272 14.1024 12.8576C13.9838 13.1631 13.8417 13.3806 13.6126 13.6095C13.3835 13.8386 13.166 13.9804 12.8605 14.0991C12.63 14.1891 12.2834 14.2954 11.6452 14.3246C10.9552 14.356 10.748 14.3628 9.00039 14.3628C7.25267 14.3628 7.04554 14.356 6.35556 14.3246C5.7174 14.2952 5.37105 14.1885 5.14019 14.0989C4.83474 13.9803 4.61657 13.8385 4.38749 13.6094C4.1584 13.3803 4.01659 13.1627 3.89768 12.8571C3.80809 12.6266 3.70132 12.2803 3.67228 11.6421C3.64092 10.9521 3.63464 10.7448 3.63464 8.9969C3.63464 7.249 3.64092 7.04282 3.67228 6.35282C3.70146 5.71463 3.80809 5.36827 3.89768 5.13754C4.01632 4.83209 4.1584 4.61391 4.38749 4.38482C4.61657 4.15573 4.83474 4.01391 5.14019 3.895C5.37091 3.805 5.7174 3.69863 6.35556 3.66932C6.95936 3.64204 7.19336 3.63386 8.41323 3.6325V3.63413ZM12.4942 4.72095C12.0606 4.72095 11.7088 5.07236 11.7088 5.50613C11.7088 5.93977 12.0606 6.29159 12.4942 6.29159C12.9278 6.29159 13.2796 5.93977 13.2796 5.50613C13.2796 5.0725 12.9278 4.72068 12.4942 4.72068V4.72095ZM9.00039 5.63868C7.14413 5.63868 5.63913 7.14372 5.63913 9.00004C5.63913 10.8564 7.14413 12.3607 9.00039 12.3607C10.8567 12.3607 12.3611 10.8564 12.3611 9.00004C12.3611 7.14372 10.8565 5.63868 9.00025 5.63868H9.00039ZM9.00039 6.81822C10.2053 6.81822 11.1821 7.795 11.1821 9.00004C11.1821 10.2049 10.2053 11.1819 9.00039 11.1819C7.79538 11.1819 6.81864 10.2049 6.81864 9.00004C6.81864 7.795 7.79538 6.81822 9.00039 6.81822Z" fill="white"/>
                                </svg>
                            </Link>
                            <Link to="#" className='w-9 h-9 inline-grid place-items-center'>
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_28_1682)">
                                    <path d="M6.94644 17.5272C15.1935 17.5272 19.7035 10.8121 19.7035 4.98901C19.7035 4.79827 19.6996 4.60841 19.6908 4.4194C20.5663 3.79737 21.3272 3.02114 21.9274 2.1375C21.124 2.48846 20.2595 2.72473 19.3526 2.83126C20.2782 2.2857 20.9889 1.4227 21.3242 0.393898C20.4579 0.898646 19.4986 1.2655 18.4771 1.46356C17.6589 0.607024 16.4941 0.0712891 15.2043 0.0712891C12.7283 0.0712891 10.7204 2.04478 10.7204 4.47738C10.7204 4.82318 10.7598 5.15954 10.8367 5.48218C7.11025 5.29789 3.80592 3.54437 1.59448 0.878024C1.20943 1.52925 0.987394 2.28572 0.987394 3.09289C0.987394 4.62175 1.77895 5.97143 2.98265 6.76101C2.24704 6.73867 1.55602 6.5402 0.952048 6.20986C0.951388 6.22835 0.951385 6.24638 0.951385 6.26614C0.951385 8.40028 2.49689 10.1821 4.54846 10.5859C4.1717 10.6868 3.77531 10.741 3.36618 10.741C3.07772 10.741 2.79667 10.7131 2.5235 10.6615C3.09432 12.4124 4.74954 13.6866 6.71194 13.7222C5.17736 14.9043 3.24423 15.6084 1.14323 15.6084C0.781767 15.6084 0.424682 15.5882 0.0737305 15.5474C2.05806 16.7975 4.41426 17.5269 6.94668 17.5269" fill="#0A033C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_28_1682">
                                    <rect width="22" height="17.6" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link to="#" className='w-9 h-9 inline-grid place-items-center'>
                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_28_1678)">
                                    <path d="M20.9205 17.3732C20.9677 17.3736 21.0145 17.3645 21.058 17.3463C21.1015 17.3281 21.1408 17.3013 21.1733 17.2674C21.2059 17.2336 21.2311 17.1935 21.2474 17.1496C21.2637 17.1058 21.2706 17.059 21.2679 17.0124C21.2679 16.7565 21.112 16.6343 20.7922 16.6343H20.2754V17.9738H20.4698V17.3899H20.7086L20.7141 17.397L21.0848 17.9738H21.2926L20.8938 17.3768L20.9205 17.3732ZM20.6957 17.239H20.4703V16.7861H20.756C20.9036 16.7861 21.0718 16.81 21.0718 17.0013C21.0718 17.2213 20.9016 17.239 20.6946 17.239" fill="#0A033C"/>
                                    <path d="M15.8502 15.694H13.0939V11.42C13.0939 10.4008 13.0756 9.08882 11.6604 9.08882C10.2248 9.08882 10.0051 10.1993 10.0051 11.3458V15.6937H7.24881V6.90463H9.89488V8.10575H9.93192C10.1967 7.65744 10.5794 7.28864 11.0391 7.03863C11.4989 6.78861 12.0185 6.66675 12.5427 6.68602C15.3363 6.68602 15.8514 8.50546 15.8514 10.8724L15.8502 15.694ZM4.13878 5.70323C3.82242 5.70329 3.51314 5.61046 3.25007 5.43647C2.987 5.26249 2.78195 5.01518 2.66084 4.7258C2.53972 4.43643 2.50798 4.11799 2.56964 3.81076C2.6313 3.50353 2.7836 3.2213 3.00726 2.99976C3.23091 2.77823 3.5159 2.62734 3.82616 2.56617C4.13643 2.50501 4.45804 2.53632 4.75033 2.65614C5.04263 2.77596 5.29248 2.97891 5.46828 3.23933C5.64409 3.49974 5.73796 3.80593 5.73802 4.11917C5.73805 4.32716 5.69671 4.53311 5.61636 4.72528C5.53601 4.91744 5.41824 5.09206 5.26973 5.23915C5.12123 5.38625 4.94491 5.50294 4.75086 5.58256C4.55681 5.66219 4.34883 5.70319 4.13878 5.70323ZM5.51693 15.694H2.75775V6.90463H5.51693V15.694ZM17.2244 0.0012549H1.3727C1.01292 -0.00276533 0.666217 0.134812 0.408822 0.383756C0.151426 0.632699 0.00439102 0.972641 0 1.32888V17.0896C0.00424073 17.446 0.15119 17.7861 0.408576 18.0353C0.665963 18.2845 1.01274 18.4224 1.3727 18.4186H17.2244C17.5851 18.4231 17.9328 18.2856 18.1912 18.0364C18.4496 17.7872 18.5975 17.4467 18.6025 17.0896V1.32775C18.5974 0.970797 18.4494 0.630469 18.191 0.381531C17.9325 0.132594 17.5849 -0.00459043 17.2244 0.000117282" fill="#0A033C"/>
                                    <path d="M20.7197 16.0371C20.3843 16.0403 20.0639 16.1749 19.8285 16.4113C19.593 16.6478 19.4618 16.967 19.4634 17.2991C19.465 17.6311 19.5994 17.949 19.8371 18.1833C20.0748 18.4175 20.3965 18.549 20.7319 18.549C21.0672 18.549 21.3889 18.4175 21.6267 18.1833C21.8644 17.949 21.9987 17.6311 22.0003 17.2991C22.0019 16.967 21.8707 16.6478 21.6353 16.4113C21.3999 16.1749 21.0794 16.0403 20.7441 16.0371H20.7197ZM20.7197 18.4052C20.4997 18.4088 20.2836 18.3478 20.0987 18.2298C19.9138 18.1118 19.7683 17.9422 19.6808 17.7424C19.5932 17.5426 19.5675 17.3215 19.6068 17.1072C19.6461 16.8929 19.7487 16.6949 19.9017 16.5384C20.0546 16.3818 20.251 16.2736 20.466 16.2276C20.681 16.1816 20.905 16.1997 21.1097 16.2797C21.3143 16.3597 21.4903 16.4979 21.6156 16.677C21.7408 16.8561 21.8096 17.0679 21.8133 17.2857C21.8133 17.292 21.8133 17.2979 21.8133 17.3042C21.8194 17.5899 21.7107 17.8663 21.5111 18.0727C21.3114 18.2791 21.0372 18.3985 20.7487 18.4047H20.7199" fill="#0A033C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_28_1678">
                                    <rect width="22" height="18.5714" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MentorInformation