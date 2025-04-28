import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import type { NavbarProps } from "../../types";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLaptop,
  FaVideo,
  FaCode,
  FaTrophy,
  FaDiscord,
} from "react-icons/fa";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(isScrolled);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Check if current page should have consistent nav background
  const shouldHaveFixedBackground = location.pathname === "/courses/sql" || 
                                  location.pathname === "/courses/python" ||  
                                  location.pathname === "/courses/aiml" ||
                                  location.pathname.startsWith("/events") || 
                                  location.pathname === "/about";

  const navItems = [
    { id: 1, title: "Home", path: "/" },
    // { id: 2, title: "About Us", path: "/about-us" },
    { id: 3, title: "Pricing", path: "/pricing" },
    {
      id: 4,
      title: "Upcoming Events",
      items: [
        { title: "Live Workshops", path: "/events/workshops" },
        { title: "Webinars", path: "/events/webinars" },
        { title: "Bootcamps", path: "/events/bootcamps" },
        { title: "Hackathons", path: "/events/hackathons" },
      ],
    },
    {
      id: 5,
      title: "Our Community",
      items: [
        { title: "LinkedIn", path: "https://linkedin.com" },
        { title: "YouTube", path: "https://youtube.com" },
        { title: "Instagram", path: "https://instagram.com" },
        { title: "Twitter", path: "https://twitter.com" },
      ],
    },
    // { id: 6, title: "Testimonials", path: "/testimonials" },
    { id: 7, title: "Contact Us", path: "#contact" },
  ];

  const whatsappCommunities = [
    {
      title: "DataSense Community ",
      desc: "Join our primary learning group",
      path: "https://chat.whatsapp.com/DYgDxOA8nBvJp4tPz5J6ox"
    },
    {
      title: "Connect with Our CEO ",
      desc: "Join our CEO's group",
      path: "https://chat.whatsapp.com/IxZq4qkM1lE4IwIYWJWYHr"
    },
    {
      title: "Google Job Placement Drive",
      desc: "Google Job Updates",
      path: "https://chat.whatsapp.com/KIObYuXxwcO3vhIaGmalVe"
    },
    {
      title: "India Job Postings",
      desc: "Get Job Updates",
      path: "https://chat.whatsapp.com/GGdit7X3p2DBRT6bGPARW"
    },
    {
      title: "SQL Practice Group",
      desc: "SQL-focused discussions",
      path: "https://chat.whatsapp.com/KDdVaX4gvWACik8pFBLe0W"
    },
    {
      title: "Python Practice Group",
      desc: "Python programming group",
      path: "https://chat.whatsapp.com/EtYoG2yZuNsA9yhJkK4XbV"
    },
    {
      title: "AI/ML Discussion Group",
      desc: "AI & Machine Learning",
      path: "https://chat.whatsapp.com/IzQ2S5DP4TkIh3lXwG9sE4"
    },
    {
      title: "Git and GitHub Group",
      desc: "Git & GitHub discussions",
      path: "https://chat.whatsapp.com/IDpnOqT9rZe9I6yqbvh2z6"
    }
  ];

  useEffect(() => {
    // If we're on pages that need fixed background, always set scrolled to true
    if (shouldHaveFixedBackground) {
      setScrolled(true);
      return; // Exit early, don't add scroll listener
    }

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    // Only add scroll listener if not on fixed background pages
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldHaveFixedBackground]);

  const handleDropdownClick = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const NavLink = ({ item }: { item: (typeof navItems)[number] }) => {
    if (item.items) {
      return (
        <div className="relative group">
          <button
            onClick={() => handleDropdownClick(item.title)}
            className="px-3 py-2 text-bold font-medium text-light-cyan hover:text-primary-cyan rounded-md transition-colors duration-200 flex items-center gap-1 group"
          >
            {item.title}
            <BsChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </button>

          {/* Enhanced Desktop Dropdown */}
          <div className="absolute left-0 mt-2 w-64 bg-dark-cyan/95 backdrop-blur-sm rounded-xl shadow-2xl transform opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 border border-primary-cyan/20">
            <div className="p-2">
              {item.title === "Upcoming Events" ? (
                <>
                  {[
                    {
                      icon: FaLaptop,
                      title: "Live Workshops",
                      path: "/events/workshops",
                      desc: "Interactive hands-on sessions",
                    },
                    {
                      icon: FaVideo,
                      title: "Webinars",
                      path: "/events/webinars",
                      desc: "Online learning events",
                    },
                    {
                      icon: FaCode,
                      title: "Bootcamps",
                      path: "/events/bootcamps",
                      desc: "Intensive training programs",
                    },
                    {
                      icon: FaTrophy,
                      title: "Hackathons",
                      path: "/events/hackathons",
                      desc: "Competitive coding events",
                    },
                  ].map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.path}
                      className="flex items-start gap-3 p-3 hover:bg-primary-cyan/20 rounded-lg transition-colors duration-200 group/item"
                    >
                      <subItem.icon className="w-5 h-5 mt-1 text-primary-cyan" />
                      <div>
                        <div className="font-medium text-white group-hover/item:text-primary-cyan transition-colors duration-200">
                          {subItem.title}
                        </div>
                        <div className="text-xs text-gray-400 group-hover/item:text-gray-300">
                          {subItem.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  {[
                    {
                      icon: FaLinkedin,
                      title: "LinkedIn",
                      path: "https://www.linkedin.com/company/data-sense-lms/",
                      desc: "Professional network",
                    },
                    {
                      icon: FaYoutube,
                      title: "YouTube",
                      path: "https://www.youtube.com/@Senseofdata",
                      desc: "Video content",
                    },
                    {
                      icon: FaInstagram,
                      title: "Instagram",
                      path: "https://www.instagram.com/senseofdata/",
                      desc: "Visual updates",
                    },
                    {
                      icon: FaFacebook,
                      title: "Facebook",
                      path: "https://www.facebook.com/people/Data-Sense/61550202884240/?mibextid=LQQJ4d",
                      desc: "Social updates",
                    },
                    {
                      icon: FaWhatsapp,
                      title: "WhatsApp",
                      path: "#",
                      desc: "Join Communities",
                      template: (
                        <div className="relative group/whatsapp">
                          <div className="flex items-start gap-3 p-3 hover:bg-primary-cyan/20 rounded-lg transition-colors duration-200 group/item cursor-pointer">
                            <FaWhatsapp className="w-5 h-5 mt-1 text-primary-cyan" />
                            <div>
                              <div className="font-medium text-light-cyan group-hover/item:text-primary-cyan transition-colors duration-200 flex items-center gap-2">
                                WhatsApp Communities
                                <BsChevronRight className="transition-transform duration-300 group-hover/whatsapp:rotate-180" />
                              </div>
                              <div className="text-xs text-gray-400 group-hover/item:text-gray-300">
                                Join our learning groups
                              </div>
                            </div>
                          </div>

                          {/* WhatsApp Communities Dropdown */}
                          <div className="absolute left-full top-[-200px] ml-2 w-64 bg-dark-cyan/95 backdrop-blur-sm rounded-xl shadow-2xl transform opacity-0 scale-95 invisible group-hover/whatsapp:opacity-100 group-hover/whatsapp:scale-100 group-hover/whatsapp:visible transition-all duration-300 border border-primary-cyan/20">
                            <div className="p-2 grid grid-cols-1 gap-1">
                              {whatsappCommunities.map((community) => (
                                <a
                                  key={community.title}
                                  href={community.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-start gap-3 p-2 hover:bg-primary-cyan/20 rounded-lg transition-colors duration-200 group/item"
                                >
                                  <FaWhatsapp className="w-4 h-4 mt-1 text-primary-cyan" />
                                  <div>
                                    <div className="font-medium text-sm text-light-cyan group-hover/item:text-primary-cyan transition-colors duration-200">
                                      {community.title}
                                    </div>
                                    <div className="text-xs text-gray-400 group-hover/item:text-gray-300">
                                      {community.desc}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      icon: FaDiscord,
                      title: "Discord",
                      path: "https://discord.gg/your-invite-link", // Replace with your Discord invite link
                      desc: "Community chat",
                    },
                    {
                      icon: FaLaptop,
                      title: "Topmate",
                      path: "https://topmate.io/datasense",
                      desc: "1:1 Mentorship Sessions",
                    },
                  ].map((subItem) =>
                    subItem.template ? (
                      subItem.template
                    ) : (
                      <a
                        key={subItem.title}
                        href={subItem.path}
                        className="flex items-start gap-3 p-3 hover:bg-primary-cyan/20 rounded-lg transition-colors duration-200 group/item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <subItem.icon className="w-5 h-5 mt-1 text-primary-cyan" />
                        <div>
                          <div className="font-medium text-light-cyan group-hover/item:text-primary-cyan transition-colors duration-200">
                            {subItem.title}
                          </div>
                          <div className="text-xs text-gray-400 group-hover/item:text-gray-300">
                            {subItem.desc}
                          </div>
                        </div>
                      </a>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <a
        href={item.path}
        className="px-3 py-2 text-bold font-medium text-white hover:text-primary-cyan rounded-md transition-colors duration-200 relative group whitespace-nowrap"
      >
        {item.title}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
      </a>
    );
  };

  const AuthSection = () => {
    if (isSignedIn && user) {
      return (
        <div className="flex items-center space-x-4">
          <span className="text-white">
            Welcome, {user.firstName || 'User'}
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-4">
        <SignInButton mode="modal">
          <button className="whitespace-nowrap border-2 border-primary-cyan hover:bg-primary-cyan/20 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300">
            Login
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="bg-caribbean hover:bg-teal text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105">
            Register
          </button>
        </SignUpButton>
      </div>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldHaveFixedBackground ? "bg-dark-cyan/90 backdrop-blur-sm" : scrolled ? "bg-dark-cyan/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Simplified */}
          <div className="relative">
            <a href="/" className="flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="DataSense Logo"
                className="h-8 sm:h-12 w-full object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-between flex-1">
            {/* Centered Nav Items */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <NavLink key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Auth Buttons - Right Aligned */}
            <AuthSection />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
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
                <div key={item.id}>
                  {item.items ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(item.title)}
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-white hover:text-primary-cyan"
                      >
                        {item.title}
                        <BsChevronDown
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="pl-4 space-y-1">
                          {item.items.map((subItem: any) => (
                            <a
                              key={subItem.title}
                              href={subItem.path}
                              className="block px-3 py-2 text-sm text-white hover:text-primary-cyan"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className="block px-3 py-2 text-base font-medium text-white hover:text-primary-cyan"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
              {/* Mobile Auth Button */}
              <div className="mt-4 px-3">
                <SignInButton mode="modal">
                  <button className="block w-full text-center py-2 text-base font-medium text-white border-2 border-primary-cyan hover:bg-primary-cyan/20 rounded-lg transition-colors duration-200">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="block w-full text-center py-2 mt-2 text-base font-medium text-white border-2 border-primary-cyan hover:bg-primary-cyan/20 rounded-lg transition-colors duration-200">
                    Register
                  </button>
                </SignUpButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
