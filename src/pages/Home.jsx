import React from "react";
import "../styles/homeStyle.css";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-[30%] h-full">
        <Sidebar />
      </div>
      <hr className="bg-gray-200 w-0.5 h-screen"/>
      <div className="w-[70%] h-full">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
