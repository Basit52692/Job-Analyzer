import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LineChart, 
  BarChart3, 
  Map, 
  FileText, 
  Settings, 
  HelpCircle, 
  X 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, onClick }) => {
  return (
    <NavLink 
      to={to} 
      onClick={onClick}
      className={({ isActive }) => `
        flex items-center px-4 py-3 text-sm font-medium rounded-lg
        ${isActive 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
        }
        transition-colors duration-200
      `}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:z-10
        `}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">JT</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">JobTrend</span>
            </NavLink>
            
            <button 
              onClick={toggleSidebar}
              className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={toggleSidebar} />
            <NavItem to="/skills" icon={<LineChart size={20} />} label="Skills Analysis" onClick={toggleSidebar} />
            <NavItem to="/industries" icon={<BarChart3 size={20} />} label="Industry Trends" onClick={toggleSidebar} />
            <NavItem to="/locations" icon={<Map size={20} />} label="Location Insights" onClick={toggleSidebar} />
            <NavItem to="/about" icon={<FileText size={20} />} label="About" onClick={toggleSidebar} />
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" onClick={toggleSidebar} />
              <NavItem to="/help" icon={<HelpCircle size={20} />} label="Help & Support" onClick={toggleSidebar} />
            </div>
          </nav>
          
          {/* User info */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-medium">
                U
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">User Demo</p>
                <p className="text-xs text-gray-500">user@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;