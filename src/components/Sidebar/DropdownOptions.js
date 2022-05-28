import React, { useRef, useState } from 'react';
import {DotsVerticalIcon, PlusIcon} from '@heroicons/react/outline';
import classes from '../../styles/Dropdown.module.css'
import DropdownItem from './DropdownItem';
import { HashtagIcon, ChevronLeftIcon } from '@heroicons/react/outline';

export default function DropdownOptions({text}) {

  const [open, setOpen] = useState(false);
  const iconRef = useRef(null);
  const dropDownIconRef = useRef(null);

  function toggleIcon() {
    const icons = iconRef?.current;

    if(icons.classList.contains(`${classes.hidden}`)){
      icons.classList.remove(`${classes.hidden}`);
      icons.classList.add(`${classes.visible}`);
      
    }else{
      icons.classList.remove(`${classes.visible}`)
      icons.classList.add(`${classes.hidden}`)

    }
  }


  function toggleDropDown(){

    const dropdownIcon = dropDownIconRef.current;

    if(!open){
      dropdownIcon.classList.add('rotate-180')
      dropdownIcon.classList.remove('rotate-0')
      setOpen(!open)
      
    }else{

      dropdownIcon.classList.add('rotate-0')
      dropdownIcon.classList.remove('rotate-180')
      setOpen(!open)
    }
  }


  return (
    <>
      <button 
      className='inline-flex items-center justify-between text-[17px] w-full text-[#fdfff5a0] px-5 py-2'
      onMouseOver={toggleIcon}
      onMouseOut={toggleIcon}
      onClick={toggleDropDown}
      >
          <span className='inline-flex items-center'>
            {<ChevronLeftIcon className={`w-5 mr-3 hover:text-white transition-all duration-100`} ref={dropDownIconRef}/>} {text}
          </span>
          
          <span className={` inline-flex items-center transition-all duration-100 ${classes.hidden}`} ref={iconRef}>
            <DotsVerticalIcon className='w-5 mr-3 hover:text-white'/>
            <PlusIcon className='w-5 mr-3 hover:text-white'/>
          </span>
      </button>

      {open && (
        <ul className='flex flex-col pt-[px] pl-[35px] pr-[20px] pb-[10px]'>
          <DropdownItem icon={<HashtagIcon className='w-5 mr-3 hover:text-white'/>} text={'funny'}/>
          <DropdownItem icon={<HashtagIcon className='w-5 mr-3 hover:text-white'/>} text={'serious'}/>
          <DropdownItem icon={<HashtagIcon className='w-5 mr-3 hover:text-white'/>} text={'oifolio theme'}/>
        </ul>
      )}

      </>
  )
}
