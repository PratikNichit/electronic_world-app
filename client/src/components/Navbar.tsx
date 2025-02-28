import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-2xl font-bold">
              Electronics_World
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Products
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;