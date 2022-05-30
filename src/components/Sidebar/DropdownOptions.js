import React, { useRef, useState } from "react";
import { DotsVerticalIcon, PlusIcon } from "@heroicons/react/outline";
import classes from "../../styles/Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import { HashtagIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import ChannelModal from "./ChannelModal";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../firebase";
import { useAuth } from "../Contexts/AuthContext";

export default function DropdownOptions({ text, addChannelOnly }) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const iconRef = useRef(null);
  const dropDownIconRef = useRef(null);

  const { channels, setChannels } = useAuth();

  //toggle icons between hovers
  function toggleIcon() {
    const icons = iconRef?.current;

    if (icons.classList.contains(`${classes.hidden}`)) {
      icons.classList.remove(`${classes.hidden}`);
      icons.classList.add(`${classes.visible}`);
    } else {
      icons.classList.remove(`${classes.visible}`);
      icons.classList.add(`${classes.hidden}`);
    }
  }

  //toggle dropdown elements
  function toggleDropDown() {
    if (channels.length < 1) {
      getChannels();
    }

    const dropdownIcon = dropDownIconRef.current;

    if (!open) {
      dropdownIcon.classList.add("rotate-180");
      dropdownIcon.classList.remove("rotate-0");
      setOpen(!open);
    } else {
      dropdownIcon.classList.add("rotate-0");
      dropdownIcon.classList.remove("rotate-180");
      setOpen(!open);
    }
  }

  //get all channels from database

  async function getChannels() {
    const db = getFirestore(app);
    const colRef = collection(db, "channels");

    try {
      const docSnap = await getDocs(colRef);
      const channles = docSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setChannels(channles);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <button
        className="inline-flex items-center justify-between text-[17px] w-full text-[#fdfff5a0] px-5 py-2"
        onMouseOver={toggleIcon}
        onMouseOut={toggleIcon}
        onClick={toggleDropDown}
      >
        <span className="inline-flex items-center">
          {
            <ChevronLeftIcon
              className={`w-5 mr-3 hover:text-white transition-all duration-100`}
              ref={dropDownIconRef}
            />
          }{" "}
          {text}
        </span>

        <span
          className={`inline-flex items-center transition-all duration-100 ${classes.hidden}`}
          ref={iconRef}
        >
          <DotsVerticalIcon className="w-5 mr-3 hover:text-white" />
          <PlusIcon
            className="w-5 mr-3 hover:text-white"
            onClick={() => {
              addChannelOnly && setModal(!modal);
            }}
          />
        </span>
      </button>

      {modal && (
        <ChannelModal
          close={() => {
            setModal(!modal);
          }}
          updateChannels={getChannels}
        />
      )}

      {open && (
        <ul className="flex flex-col pt-[px] pl-[35px] pr-[20px] pb-[10px]">
          {!addChannelOnly && (
            <>
              <DropdownItem
                icon={<HashtagIcon className="w-5 mr-3 hover:text-white" />}
                text={"funny"}
              />
              <DropdownItem
                icon={<HashtagIcon className="w-5 mr-3 hover:text-white" />}
                text={"serious"}
              />
              <DropdownItem
                icon={<HashtagIcon className="w-5 mr-3 hover:text-white" />}
                text={"oifolio theme"}
              />
            </>
          )}
          {addChannelOnly &&
            channels.length > 0 &&
            channels.map((channel) => {
              return (
                <DropdownItem
                  icon={<HashtagIcon className="w-5 mr-3 hover:text-white" />}
                  text={channel.name}
                  key={channel.id}
                  id={channel.id}
                />
              );
            })}
        </ul>
      )}
    </>
  );
}
