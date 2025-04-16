import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(menuItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-[#284a95] z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <img 
            src="images/logo.png" 
            alt="Alvin Graphics" 
            className="h-10"
          />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ 
                scale: 1.1,
                color: '#f95006',
                textShadow: '0 0 8px rgba(249, 80, 6, 0.3)'
              }}
              className={`cursor-pointer transition-colors relative text-white ${
                activeSection === item.id ? 'text-[#f95006]' : ''
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#f95006]"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
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
                      whileHover={{ x: 10, color: '#f95006' }}
                      className={`cursor-pointer transition-colors text-white py-2 px-4 ${
                        activeSection === item.id ? 'text-[#f95006]' : ''
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
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