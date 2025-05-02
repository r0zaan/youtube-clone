import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineHome } from 'react-icons/md';
import { LiaFireAltSolid } from 'react-icons/lia';
import { TbBell } from 'react-icons/tb';

interface SidebarProps {
  fixed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ fixed }) => {
  // State for managing sidebar toggle
  const [isOpen, setIsOpen] = useState(fixed ? false : true);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`${fixed ? 'fixed ' : ''}  top-0 left-0 z-50 bg-white h-screen p-[12px] space-y-4 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : ''
        } ${!isOpen && fixed ? 'w-0' : ''} ${!isOpen && !fixed ? 'w-20' : ''}`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-2 left-3 text-black text-xl rounded-full hover:bg-gray-100 px-4 py-3 transition-all cursor-pointer"
      >
        {isOpen ? <i className="fas fa-bars"></i> : <i className="fas fa-bars"></i>}
      </button>

      <ul className={`${fixed ? 'opacity-0 relative top-[80px]' : ''} ${isOpen ? 'opacity-100 ' : 'opacity-100 '} space-y-4 text-black transition-all duration-300`}>
        <li>
          <Link href="/" className="text-md hover:text-black flex items-center space-x-3 px-[12px] h-[40px] hover:bg-[#0000000d] rounded-lg transition-all">
            {/* <i className="fas fa-home text-xl mr-[24px] w-[20px]"></i> */}
            <MdOutlineHome className={`text-xl ${isOpen ? "mr-[20px]" : ""} transition-all`} size={24} />
            {isOpen && <span>Home</span>}
          </Link>
        </li>
        <li>
          <Link href="/trending" className="text-md hover:text-black flex items-center space-x-3 px-[12px]  h-[40px] hover:bg-[#0000000d] rounded-lg transition-all">
            <LiaFireAltSolid className={`text-xl ${isOpen ? "mr-[20px]" : ""} transition-all`} size={24} />
            {isOpen && <span>Trending</span>}
          </Link>
        </li>
        <li>
          <Link href="/subscriptions" className="text-md hover:text-black flex items-center space-x-3 px-[12px]  h-[40px] hover:bg-[#0000000d] rounded-lg transition-all">
            <TbBell className={`text-xl ${isOpen ? "mr-[20px]" : ""} transition-all`} size={24} />
            {isOpen && <span>Subscriptions</span>}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
