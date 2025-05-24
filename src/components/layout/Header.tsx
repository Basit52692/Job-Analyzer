import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="mr-4 md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          
          <Link to="/" className="flex items-center space-x-2 md:hidden">
            <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">JT</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">JobTrend</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center flex-1 max-w-lg mx-4 lg:mx-8 relative">
          <Search size={18} className="absolute left-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for skills, industries, roles..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none" aria-label="Search">
            <Search size={20} className="md:hidden" />
          </button>
          
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none relative" aria-label="Notifications">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;