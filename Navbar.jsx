// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar
// navbar
import React from "react";
// react avatar
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
// import logo from "../public/logo.png";
import logo from "/logo.png";
import profile from "/profile.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoDownloadLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

// import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="flex justify-between  px-6 py-2">
      <div className=" flex  items-center space-x-4 ">
      <AiOutlineMenu  className="text-xl  cursor-pointer"/>
        <img src={logo} alt=""  className="w-28 cursor-pointer" />
        </div>
      <div className=" flex  w-[35%]  items-center">
       <div className="w-[100%] px-3 py-2 border rounded-l-full"> 
        <input type="text" placeholder="search" className="outline-none" /></div> 
     <button className="px-4 py-2 border  bg-gray-100 rounded-r-full"> 
     <CiSearch size={"24px"} />
     </button>  
        <IoMdMic size={"42px"} className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200" />
      </div>
      <div className="flex space-x-5 items-center">
      <RiVideoDownloadLine className="text-2xl" />
      <FaRegBell className="text-2xl"/>
 < Avatar src={profile} size="32" round={true} />  </div>
      </div>
  );
}

export default App;


