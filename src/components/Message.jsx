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

  return (
    // <div
    //   ref={ref}
    //   className={`message ${message.senderId === currentUser.uid && "owner"}`}
    // >
    //   <div className="messageInfo">
    //     <img
    //       src={
    //         message.senderId === currentUser.uid
    //           ? currentUser.photoURL
    //           : data.user.photoURL
    //       }
    //       alt=""
    //     />
    //     <span>just now</span>
    //   </div>
    //   <div className="messageContent">
    //     <p>{message.text}</p>
    //     {message.img && <img src={message.img} alt="" />}
    //   </div>
    // </div>
    <div
      ref={ref}
      id="messages"
      className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                {message.text}
              </span>
            </div>
          </div>
          <img
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt="My profile"
            className="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Your error message says permission denied, npm global installs
                must be given root privileges.
              </span>
            </div>
          </div>
          <img
            src={message.img}
            alt="My profile"
            className="w-6 h-6 rounded-full order-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
