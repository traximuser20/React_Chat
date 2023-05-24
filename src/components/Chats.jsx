import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../utils/firebaseAuth";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="w-full h-20 px-2 flex-wrap">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="h-full w-full flex items-center rounded-md bg-slate-200 shadow-xl px-2"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div className="px-1">
              <span className="font-bold font-mono px-2 text-xl">
                {chat[1].userInfo.displayName}
              </span>
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-black shadow-xl">
                  {chat[1].lastMessage?.text}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
