import React, { useEffect, useState, useRef } from "react";
import Message from "./Message";
import { LockOpenIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import MessageBox from "./MessageBox";
import { useParams } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import app from "../../firebase";
import { getFirestore, doc, onSnapshot, updateDoc } from "firebase/firestore";

const layoutStyle = {
  gridArea: "chat",
};

export default function Chat() {
  const { id } = useParams();
  const { user } = useAuth();
  const [currentChannel, setCurrentChannel] = useState({});
  const [loading, setLoading] = useState(true);
  const db = getFirestore(app);
  const docRef = doc(db, "channels", id);
  const boxRef = useRef();
  //realtime listener

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      setCurrentChannel({ ...snapshot.data() });
      setLoading(false);
    });
    return unsubscribe;
  }, [id]);

  boxRef.current.scrollTop = boxRef.current.scrollHeight + 150;

  // add message
  function addMessage(e) {
    e.preventDefault();

    if (e.target.message.value) {
      const message = {
        username: user.displayName,
        userImage: user.photoURL,
        messageBody: e.target.message.value,
        created: "" + Date.now(),
      };
      e.target.message.value = "";
      e.target.message.blur();

      // send data to firestore

      function setMessage() {
        setLoading(true);
        updateDoc(docRef, { messages: [...currentChannel.messages, message] });
      }

      setMessage();
    }
  }

  // scroll to bottom

  return (
    <div
      className="p-[30] relative overflow-y-scroll pb-[150px]"
      style={layoutStyle}
      ref={boxRef}
    >
      <div className="absolute top-0 left-0 righ-0 w-full py-2 pl-3 pr-5 border-b-[1px] border-gray-300 flex justify-between items-center">
        <h3 className="text-xl font-semibold flex gap-2">
          <LockOpenIcon className="w-5" />
          {currentChannel?.name}
        </h3>
        <div>
          <QuestionMarkCircleIcon className="w-5" />
        </div>
      </div>
      <div className="mt-[70px] px-[10px]">
        {currentChannel?.messages?.length > 0
          ? currentChannel.messages.map((message, index) => {
              return (
                <Message
                  key={Math.random() + index}
                  username={message.username}
                  userImg={message.userImage}
                  timestamp={message.created}
                  messageBody={message.messageBody}
                />
              );
            })
          : "add first message to this channel"}
      </div>
      <div>
        <MessageBox
          addMessage={addMessage}
          channelName={currentChannel?.name}
        />
      </div>
    </div>
  );
}
