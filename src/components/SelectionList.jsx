import React,{ useState } from 'react'

function SelectionList() {
    const [showSelectionList,setShowSelectionList] = useState(false)
    const [selectedItem,setSelectedItem] = useState("Kindergarten")
  return (
    <div className='relative md:cursor-pointer xs:shrink-0 xs:flex-grow h-[3.125rem] xs:h-full px-5 xs:px-3 sm:px-5 md:px-2.5 lg:px-5 rounded-md xs:rounded-none bg-white' onClick={()=>setShowSelectionList(!showSelectionList)}>
        <span className='h-full flex items-center justify-between text-[rgba(93,90,111,0.60)]'>
            {selectedItem}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`${showSelectionList ? "rotate-180" : ""} transition-all`}>
                <path d="M17.0002 9.1697C16.8128 8.98345 16.5594 8.87891 16.2952 8.87891C16.031 8.87891 15.7776 8.98345 15.5902 9.1697L12.0002 12.7097L8.46019 9.1697C8.27283 8.98345 8.01938 8.87891 7.75519 8.87891C7.49101 8.87891 7.23756 8.98345 7.05019 9.1697C6.95646 9.26266 6.88207 9.37326 6.8313 9.49512C6.78053 9.61698 6.75439 9.74769 6.75439 9.8797C6.75439 10.0117 6.78053 10.1424 6.8313 10.2643C6.88207 10.3861 6.95646 10.4967 7.05019 10.5897L11.2902 14.8297C11.3832 14.9234 11.4938 14.9978 11.6156 15.0486C11.7375 15.0994 11.8682 15.1255 12.0002 15.1255C12.1322 15.1255 12.2629 15.0994 12.3848 15.0486C12.5066 14.9978 12.6172 14.9234 12.7102 14.8297L17.0002 10.5897C17.0939 10.4967 17.1683 10.3861 17.2191 10.2643C17.2699 10.1424 17.296 10.0117 17.296 9.8797C17.296 9.74769 17.2699 9.61698 17.2191 9.49512C17.1683 9.37326 17.0939 9.26266 17.0002 9.1697Z" fill="#9C4DF4"/>
            </svg>
        </span>
        <ul className={`${showSelectionList ? "opacity-100 visible" : "opacity-0 invisible"} top-full left-0 right-0 py-2 absolute z-20 transition-all rounded-b-xl bg-white text-[rgba(93,90,111,0.60)]`}>
            <li className='px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-200' onClick={(event)=>setSelectedItem(event.target.innerText)} >All</li>
            <li className='px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-200' onClick={(event)=>setSelectedItem(event.target.innerText)} >Kindergarten</li>
            <li className='px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-200' onClick={(event)=>setSelectedItem(event.target.innerText)} >High School</li>
            <li className='px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-200' onClick={(event)=>setSelectedItem(event.target.innerText)} >College</li>
            <li className='px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-200' onClick={(event)=>setSelectedItem(event.target.innerText)} >Computer</li>
            <li className='px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-200' onClick={(event)=>setSelectedItem(event.target.innerText)} >Standard One</li>
            <li className='px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-200' onClick={(event)=>setSelectedItem(event.target.innerText)} >Standard Two</li>
            <li className='px-3 py-2 hover:bg-secondary hover:text-white transition-all duration-200' onClick={(event)=>setSelectedItem(event.target.innerText)} >Standard Three</li>
        </ul>
    </div>
  )
}

export default SelectionList