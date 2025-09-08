import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: '/', label: 'Home' },
    { id: '/projects', label: 'Projects' },
    { id: '/about', label: 'About' },
    { id: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed w-full bg-[#284a95] z-50">
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
          {menuItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{}}
              className="cursor-pointer relative text-white"
            >
              <Link
                to={item.id}
                className="block px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#f95006] hover:text-white"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Search Icon */}
        <div className="flex items-center">
          <Search className="text-white cursor-pointer hover:text-[#f95006] transition-colors" size={24} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-4"
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
              className="fixed top-0 right-0 h-auto bg-[#284a95] md:hidden rounded-bl-lg shadow-lg"
            >
              <div className="p-4">
                <div className="flex justify-end">
                  <button
                    className="text-white mb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
                <ul className="space-y-3">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.id}
                      whileHover={{ backgroundColor: 'white', color: '#284a95' }}
                      className="cursor-pointer transition-colors text-white py-2 px-4 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={item.id}>
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
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