import React from 'react';
import SidebarOption from './SidebarOption';
import {PencilAltIcon, ChatAlt2Icon, AtSymbolIcon, SaveIcon, BookmarkIcon, UserGroupIcon, DotsCircleHorizontalIcon, DocumentSearchIcon, ChevronDownIcon} from '@heroicons/react/outline';
import DropdownOptions from './DropdownOptions';

const layoutStyle = {
    gridArea: 'sidebar'
}

export default function Sidebar() {
  return (
      <aside className="bg-primary h-full py-5 border-t border-[#fdfff560] scroll" style={layoutStyle}>
          <div>
            <div className="workspace flex items-center justify-between px-5">
                <span className='workspace-name text-[20px] font-semibold text-white hover:opacity-70'>Quomodosoft</span>
                <span className='w-10 h-10 inline-flex justify-center items-center bg-white rounded-full hover:opacity-70'>
                    <PencilAltIcon className='w-7 h-auto'/>
                </span>
            </div>
            <div className='mt-5'>
                <SidebarOption icon={<ChatAlt2Icon className='w-5 mr-3'/>} text={'All DMs'}/>
                <SidebarOption icon={<AtSymbolIcon className='w-5 mr-3'/>} text={'Mentions & reactions'}/>
                <SidebarOption icon={<SaveIcon className='w-5 mr-3'/>} text={'Saved Items'}/>
                <SidebarOption icon={<BookmarkIcon className='w-5 mr-3'/>} text={'Channel Browser'}/>
                <SidebarOption icon={<UserGroupIcon className='w-5 mr-3'/>} text={'People & groups'}/>
                <SidebarOption icon={<DotsCircleHorizontalIcon className='w-5 mr-3'/>} text={'Apps'}/>
                <SidebarOption icon={<DocumentSearchIcon className='w-5 mr-3'/>} text={'File Browser'}/>
            </div>
            <div className="mt-5">
                <DropdownOptions icon={<ChevronDownIcon className='w-5 mr-3 hover:text-white'/>} text={'Channels'} addChannelOnly={true}/>
                <DropdownOptions icon={<ChevronDownIcon className='w-5 mr-3 hover:text-white'/>} text={'Direct messages'}/>
                <DropdownOptions icon={<ChevronDownIcon className='w-5 mr-3 hover:text-white'/>} text={'Apps'}/>
            </div>
          </div>
      </aside>
  )
}
