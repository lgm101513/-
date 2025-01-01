import React from 'react';
import { Menu, MapPin, Home, Utensils, Hotel, Camera } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">张家界旅游</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink icon={<Home className="h-4 w-4" />} text="首页" href="#home" />
            <NavLink icon={<Camera className="h-4 w-4" />} text="景点" href="#attractions" />
            <NavLink icon={<Utensils className="h-4 w-4" />} text="美食" href="#food" />
            <NavLink icon={<Hotel className="h-4 w-4" />} text="住宿" href="#hotels" />
          </div>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) => (
  <a
    href={href}
    className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Navbar;