import React from 'react';

export default function SidebarOption({icon, text}) {
  return (
    <button className='sidebar-option'>
        {icon} {text}
    </button>
  )
}
