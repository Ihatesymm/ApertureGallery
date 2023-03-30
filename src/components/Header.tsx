import React from "react";
import "../styles/DongleFont.css";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky w-screen z-1000 justify-between items-center from-tabletop to-tablebottom drop-shadow bg-gradient bg-gradient-to-bl h-16">
      <div className="flex justify-between items-center h-full w-full px-60">
        <div className="flex w-[16%]">
          {/* Кнопка-логотип */}
          <button className="flex text-white tracking-widest text-lg transition-all transform hover:scale-[105%] hover:border-b">
            Home
          </button>
        </div>
        <div className="flex items-center gap-16">
          {/* Кнопка faq */}
          <button className="flex text-white tracking-widest text-lg transition-all transform hover:scale-[105%] hover:border-b">
            FAQ
          </button>
          {/* Кнопка с иконкой профиля */}
          <button className="flex items-center gap-2 text-white font-light tracking-widest text-lg">
            <FaUserCircle size={24} className="transition-all transform hover:scale-[105%]"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
