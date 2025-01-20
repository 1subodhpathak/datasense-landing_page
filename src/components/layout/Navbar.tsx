import { useState, useEffect } from 'react';
import type { NavbarProps } from '../../types';

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(isScrolled);

  const navItems = [
    { id: 1, title: 'Excel', path: '#excel' },
    { id: 2, title: 'Python', path: '#python' },
    { id: 3, title: 'Power BI', path: '#powerbi' },
    { id: 4, title: 'SQL', path: '#sql' },
    { id: 5, title: 'Tableau', path: '#tableau' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-cyan/90 backdrop-blur-sm' : 'bg-transparent' 
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/assets/images/DataSense.png" 
                alt="DataSense Logo" 
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="px-4 py-2 text-base font-medium text-white hover:text-primary-cyan rounded-md transition-colors duration-200 relative group"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              ))}
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center ml-6 space-x-4">
              <a href="/signin" className="px-4 py-2 text-base font-medium text-white hover:text-primary-cyan transition-colors duration-200">
                Sign in
              </a>
              <a href="/try-free" className="px-4 py-2 text-base font-medium text-dark-cyan bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Try for free
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-cyan focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-cyan/90 backdrop-blur-sm">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-primary-cyan rounded-md transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
              {/* Mobile Auth Buttons */}
              <div className="mt-4 space-y-2">
                <a href="/signin" className="block px-3 py-2 text-base font-medium text-white hover:text-primary-cyan transition-colors duration-200">
                  Sign in
                </a>
                <a href="/try-free" className="block px-3 py-2 text-base font-medium text-dark-cyan bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center">
                  Try for free
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;