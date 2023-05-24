import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // console.log("Messages ID: ", message.date);

  return (
    <div
      ref={ref}
      id="messages"
      // className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      {message.senderId === currentUser.uid ? (
        <>
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start m-4">
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-black shadow-xl">
                {message.text}
              </span>
            </div>
            <img
              src={currentUser.photoURL}
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end m-4">
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white shadow-xl ">
                {message.text}
              </span>
            </div>
            <img
              src={data.user.photoURL}
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
