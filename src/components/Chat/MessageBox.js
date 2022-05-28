import React from "react";
import {
  PaperAirplaneIcon,
  AtSymbolIcon,
  ClipboardListIcon,
  StarIcon,
  AdjustmentsIcon,
  CodeIcon,
  GlobeAltIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

export default function MessageBox() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full p-5">
      <div className="border-[1px] border-gray-300 rounded-[10px] px-[10px] relative">
        <div className="flex gap-3 bg-gray-100 p-2 absolute top-0 left-0 w-full rounded-[10px] text-gray-300">
          <AtSymbolIcon className="w-5 h-auto text-gray-500" /> |
          <ClipboardListIcon className="w-5 h-auto text-gray-500" /> |
          <StarIcon className="w-5 h-auto text-gray-500" /> |
          <AdjustmentsIcon className="w-5 h-auto text-gray-500" /> |
          <CodeIcon className="w-5 h-auto text-gray-500" /> |
          <GlobeAltIcon className="w-5 h-auto text-gray-500" /> |
          <PlusIcon className="w-5 h-auto text-gray-500" />
        </div>
        <form className="mt-[60px] pb-[30px]">
          <div>
            <input
              className="outline-0 w-[80%]"
              type="text"
              placeholder={`send a message to ${"channel name"}`}
            />
          </div>
          <button
            type="sumbit"
            className="text-gray-200 absolute bottom-[5px] right-[5px] flex gap-[5px] items-center"
          >
            <PaperAirplaneIcon className="w-4 rotate-[90deg] text-gray-400" /> |
            <ChevronDownIcon className="w-4 text-gray-400" />
          </button>
        </form>
      </div>
    </div>
  );
}
