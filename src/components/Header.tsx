import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: '/', label: 'Home' },
    { id: '/projects', label: 'Projects' },
    { id: '/about', label: 'About' },
    { id: '/contact', label: 'Contact' }
  ];

  return (
    <header className="w-full bg-[#284a95] z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Alvin Graphics"
              className="h-10"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 flex-1 justify-center">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.id;
            return (
              <motion.li
                key={item.id}
                whileHover={{}}
                className="cursor-pointer relative text-white"
              >
                <Link
                  to={item.id}
                  className={`block px-4 py-2 rounded-xl transition-colors duration-300 
                    ${isActive ? 'bg-[#f95006] text-white shadow-lg' : 'hover:bg-[#f95006] hover:text-white'}`}
                >
                  {item.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Search Bar for Desktop */}
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 w-64">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-gray-700 bg-transparent"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 w-72 h-screen bg-[#284a95] md:hidden rounded-bl-3xl shadow-lg z-50"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center bg-white/20 rounded-full px-3 py-2 w-full">
                    <Search className="text-white mr-2" size={20} />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full outline-none bg-transparent text-white placeholder-white/70"
                    />
                  </div>
                  <button
                    className="text-white ml-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
                <ul className="space-y-6 overflow-auto flex-1">
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.id;
                    return (
                      <motion.li
                        key={item.id}
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.3)', color: '#284a95' }}
                        className={`cursor-pointer transition-colors text-white py-4 px-6 rounded-xl text-lg
                          ${isActive ? 'bg-[#f95006] text-white shadow-lg' : 'hover:bg-white/30 hover:text-[#284a95]'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link to={item.id}>
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
