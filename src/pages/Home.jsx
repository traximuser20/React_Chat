import React from "react";
import "../styles/homeStyle.css";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-[30%] h-full">
        {/* className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen" */}
        <Sidebar />
      </div>
      <div className="w-[70%] h-full">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
