// components/Header.tsx
import Image from 'next/image';
import React from 'react';
import YoutubeLogo from "../src/image/youtube-logo.svg"
import User from "../src/image/user.svg"
import Link from 'next/link';
import { TbBell } from 'react-icons/tb';
const Header: React.FC = () => {
  return (
    <header className="bg-white flex items-center justify-between p-2  pl-16">
      <div className="flex items-center space-x-4 justify-between w-[100%]">
        <Link className="w-[140px]" href={"/"}>
          <div style={{ position: 'relative', width: '100%' }} className="h-12">
            <Image src={YoutubeLogo} alt="YouTube Logo" fill />
          </div>
        </Link>


        <div className="relative w-[50%] ">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-black"></i>
        </div>
        <div></div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <i className="fas fa-video text-xl"></i>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <TbBell size={24} />
        </button>
        <div style={{ position: 'relative', width: "40px", height: "40px" }} className="h-10 w-10 rounded-full border-2 border-gray-300">
          <Image src={User} alt="User Avatar" fill className="h-10 w-10" />
        </div>
      </div>
    </header>
  );
};

export default Header;
