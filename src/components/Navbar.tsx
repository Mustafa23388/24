import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg shadow-blue-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 animate-fade-in">
            <Globe className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Magmar Enterprises
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 font-medium ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors duration-200 font-medium ${
                isActive('/services') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`transition-colors duration-200 font-medium ${
                isActive('/testimonials') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-200 font-medium ${
                isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30">
                Get Started
              </button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 bg-gray-900/95 backdrop-blur-lg shadow-lg space-y-3 border-t border-gray-800">
          <Link
            to="/"
            className={`block py-2 transition-colors ${
              isActive('/') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block py-2 transition-colors ${
              isActive('/services') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`block py-2 transition-colors ${
              isActive('/about') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            About
          </Link>
          <Link
            to="/testimonials"
            className={`block py-2 transition-colors ${
              isActive('/testimonials') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className={`block py-2 transition-colors ${
              isActive('/contact') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Contact
          </Link>
          <Link to="/contact">
            <button className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
