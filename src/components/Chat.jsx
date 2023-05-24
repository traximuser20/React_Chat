import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import Topbar from "./Topbar";

const Chat = () => {

  return (
    <div className="mb-3">
      <Topbar />
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
