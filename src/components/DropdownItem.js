import React from 'react';

export default function DropdownItem({icon, text}) {
  return (
    <li className='sidebar-option text-[16px] hover:bg-transparent hover:text-white'>
        {icon} {text}
    </li>
  )
}