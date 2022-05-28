import React from "react";
import classes from "../../styles/ChannelModal.module.css";
import { XIcon } from "@heroicons/react/outline";
import app from "../../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useAuth } from "../Contexts/AuthContext";

export default function ChannelModal({ close }) {
  //////////////////////
  const { setCurrentChannel } = useAuth();

  function addChannel(event) {

    if (event.target.channelName) {
      event.preventDefault();

      const db = getFirestore(app);
      const colRef = collection(db, "channels");

      async function addChannel() {
        const docRef = await addDoc(colRef, {
          name: event.target.channelName.value,
          description: event.target.channelDescription.value,
          messages: [],
        });

        setCurrentChannel(docRef.id);
      }

      addChannel();
    }
  }

  /////////////////////////

  return (
    <div
      className={`${classes.modalOuter} absolute top-0 bottom-0 left-0 right-0 grid place-items-center`}
    >
      <div className="modal-form bg-white rounded-2xl p-[25px] relative max-w-[500px]">
        <h3 className="text-3xl mb-[20px] font-semibold">Create a Channel</h3>
        <button className="absolute right-[30px] top-[30px]">
          <XIcon className="w-5" onClick={close} />
        </button>
        <p className="text-gray-700 font-normal mb-[20px]">
          Channels are where teams discuss on a topic. You are best when you are
          organized.
        </p>
        <form onSubmit={addChannel}>
          <label className="inline-block font-medium mb-2">Name</label>
          <input
            className="inline-block border-gray-400 pl-4 h-[40px] focus:outline-none rounded-md w-full border-[1px] mb-[20px]"
            type="text"
            name="channelName"
            placeholder="eg. tour-2022"
            required
          />
          <label className="inline-block font-medium mb-2">
            Description{" "}
            <span className="font-normal text-[13px]">{`(optional)`}</span>
          </label>
          <input
            className="inline-block border-gray-400 pl-4 h-[40px] focus:outline-none rounded-md w-full border-[1px] mb-[30px]"
            type="text"
            name="channelDescription"
            placeholder="What this channel is about"
          />
          <div className="ml-[3px] flex justify-between">
            <label className="inline-flex gap-2 items-center font-medium">
              <input type="checkbox" />
              Make this private <span className="text-[13px]">(Premium)</span>
            </label>
            <button
              type="submit"
              className="bg-gray-200 text-gray-900 font-medium px-[45px] py-[6px] rounded-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
