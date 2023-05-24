import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="w-full h-full flex-wrap">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-2 mb-2">
        <Search />
      </div>
      <div className="">
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
