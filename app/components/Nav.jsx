// File: app/components/Nav.jsx

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="" // Placeholder logo URL
            alt="Logo"
            className="h-10 w-10 mr-3"
          />
          <span className="text-white text-lg font-semibold">My Blog</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-400">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
