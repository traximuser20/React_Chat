import React, { useContext } from "react";
import { signOutUser } from "../utils/firebaseAuth";
import { AuthContext } from "../context/AuthContext";
import { FaPowerOff } from "react-icons/fa";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 shadow-xl">
      <div className="relative flex items-center">
        <div className="relative px-2">
          {/* <span className="absolute text-green-500 right-0 bottom-0">
            <svg width="20" height="20">
              <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
            </svg>
          </span> */}
          <img
            src={currentUser.photoURL}
            alt=""
            className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="text-2xl flex items-center">
            <span className="text-black font-semibold px-2">
              {currentUser.displayName}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 px-2">
        <button
          onClick={handleSignOut}
          title="Logout"
          type="button"
          className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <FaPowerOff className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
