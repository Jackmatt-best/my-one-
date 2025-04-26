'use client';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
      <>
          return <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold text-gray-800">Portfolio</div>
             {/* Mobile menu button */}
            <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item}
              </a>)}
          </nav>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden bg-white py-2 px-4 shadow-md">
            <nav className="flex flex-col space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 py-2 transition-colors" onClick={toggleMenu}>
                  {item}
                </a>)}
            </nav>
          </div>}
      </header>;
      </>
    )
  };
