import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import Topbar from "./Topbar";

const Chat = () => {

  return (
    <div>
      <Topbar />
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
