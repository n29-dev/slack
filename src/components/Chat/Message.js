import React from "react";

export default function Message({ username, timestamp, messageBody, userImg }) {
  const date = new Date(Number(timestamp));
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();

  return (
    <div className="flex gap-2 items-start mb-4">
      <figure className="mt-[5px]">
        <img
          className="w-[40px] h-auto object-cover rounded-[4px]"
          src={userImg}
          alt=""
        />
      </figure>
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold text-[17px]">{username}</h3>
          <span className="font-medium text-[10px]">
            {`${minutes} : ${hours} : ${date.toDateString()}`}
          </span>
        </div>
        <p className="text-[14px] text-gray-600">{messageBody}</p>
      </div>
    </div>
  );
}
