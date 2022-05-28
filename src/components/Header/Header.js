import React from 'react';
import {MenuIcon, ArrowRightIcon, ArrowLeftIcon, ClockIcon, QuestionMarkCircleIcon, UserCircleIcon, SearchIcon} from '@heroicons/react/outline';

const layoutStyle = {
    gridArea: 'header'
}
export default function Header() {
  return (
    <header className='flex bg-primary py-[10px] px-[20px] text-white' style={layoutStyle}>
        <div className="header-left flex justify-between items-center basis-1/5 ">
            <MenuIcon width={20} className="hover:opacity-70"/>
            <div className='flex justify-between items-center mr-4'>
                <ArrowLeftIcon width={20} className="hover:opacity-70"/>
                <ArrowRightIcon width={20} className='ml-3 mr-3'/>
            </div>
        </div>
        <div className="header-center basis-3/5 flex items-center">
            <ClockIcon width={20} className="hover:opacity-70 mr-5"/>
            <div className="flex min-w-[40vw] bg-[#fdfff560] backdrop-blur-xl px-3 py-1 justify-between rounded-md">
                <input type="text" placeholder='Search' className='text-gray-100 w-5/6 bg-transparent outline-none placeholder:text-gray-100'/>
                <SearchIcon width={20} className="hover:opacity-70"/>
            </div>
        </div>
        <div className="header-right flex justify-end basis-1/5">
        <QuestionMarkCircleIcon width={20}  className="hover:opacity-70 mr-5"/>
        <UserCircleIcon width={20} className="hover:opacity-70"/>
        </div>
    </header>
  )
}
