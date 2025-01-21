import { useState, useEffect } from "react";
import type { NavbarProps } from "../../types";

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(isScrolled);

  const navItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About Us", path: "/about-us" },
    { id: 3, title: "Pricing", path: "/pricing" },
    { id: 4, title: "Upcoming Events", path: "/upcoming-events" },
    { id: 5, title: "Our Community", path: "/community" },
    { id: 6, title: "Testimonials", path: "/testimonials" },
    { id: 7, title: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-cyan/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/assets/images/DataSense.png"
                alt="DataSense Logo"
                className="h-8 sm:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-between flex-1 pl-10">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="px-3 py-2 text-sm font-medium text-white hover:text-primary-cyan rounded-md transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              ))}
            </div>

            {/* Auth Button */}
            <div className="flex items-center ml-6 space-x-4">
              <a
                href="/login"
                className="whitespace-nowrap border-2 border-primary-cyan hover:bg-primary-cyan/20 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300"
              >
                Login
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-cyan focus:outline-none"
              aria-label="Toggle menu"
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
          <div className="lg:hidden bg-dark-cyan/90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-primary-cyan rounded-md transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
              {/* Mobile Auth Button */}
              <div className="mt-4 px-3">
                <a
                  href="/login"
                  className="block w-full text-center py-2 text-base font-medium text-white border-2 border-primary-cyan hover:bg-primary-cyan/20 rounded-lg transition-colors duration-200"
                >
                  Login
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