// File: app/components/Nav.jsx

import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext"; // Ensure this path is correct
import { FaSearch, FaMoon, FaSun } from "react-icons/fa"; // Import FaSearch, FaMoon, FaSun icons

const Nav = () => {
  const { darkMode, setDarkMode } = useTheme();

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-800 dark:bg-gray-900 text-white p-4 flex justify-between items-center shadow-md z-50 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-800'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/path/to/logo.png" // Replace with your logo URL
            alt="Logo"
            className="h-10 w-10 mr-3"
          />
          <span className="text-white text-lg font-semibold">My Blog</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link
            href="/"
            className="text-white hover:bg-gray-700 dark:hover:bg-gray-800 px-3 py-2 rounded transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:bg-gray-700 dark:hover:bg-gray-800 px-3 py-2 rounded transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-white hover:bg-gray-700 dark:hover:bg-gray-800 px-3 py-2 rounded transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Search Input and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 pr-10 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-200" />
          </div>
          <button
            onClick={handleToggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
