import React from "react";
import Message from "./Message";
import { LockOpenIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import MessageBox from "./MessageBox";

const layoutStyle = {
  gridArea: "chat",
};

export default function Chat() {
  return (
    <div className="p-[30] relative" style={layoutStyle}>
      <div className="absolute top-0 left-0 righ-0 w-full py-2 pl-3 pr-5 border-b-[1px] border-gray-300 flex justify-between items-center">
        <h3 className="text-xl font-semibold flex gap-2">
          <LockOpenIcon className="w-5" />
          Channel Name
        </h3>
        <div>
          <QuestionMarkCircleIcon className="w-5" />
        </div>
      </div>
      <div className="mt-[70px] px-[10px]">
        <Message />
      </div>
      <div>
        <MessageBox />
      </div>
    </div>
  );
}
