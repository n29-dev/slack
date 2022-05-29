import React from "react";
import Banner from "./slack-banner.png";

export default function Greetings() {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className=" mx-auto mb-[5px]">
        <img src={Banner} alt="" />
      </div>
      <div className="mb-[100px] w-[70%]">
        <div>
          <h1 className="text-4xl font-semibold ml-[-5px] mb-[10px]">
            This is a stupid CLONE of this app
          </h1>
          <p className="font-medium text-gray-500 mb-[20px]">
            By: <i>Nazib</i>
          </p>
          <p className="text-gray-700 italic font-medium">
            There are not too many featues in this app. You can only create
            channels and have group discussions in them. So please don't keep
            any high expectations. But please try out the Channels Feature..
          </p>
        </div>
      </div>
    </div>
  );
}
