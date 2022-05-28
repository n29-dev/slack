import React from "react";

export default function Message() {
  return (
    <div className="flex gap-2 items-start mb-4">
      <figure className="mt-[5px]">
        <img
          className="w-[40px] h-auto object-cover rounded-[4px]"
          src="https://lh3.googleusercontent.com/a/AATXAJxk59lIBO9hl1M3ZWZ2PsTHLsowRImCSqB3K3pf=s96-c"
          alt=""
        />
      </figure>
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold text-[17px]">Username</h3>
          <span className="font-light text-[14px]">timestamp</span>
        </div>
        <p className="text-[14px] text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id
          totam, enim adipisci
        </p>
      </div>
    </div>
  );
}
