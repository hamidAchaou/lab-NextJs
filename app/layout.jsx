// File: app/layout.jsx

"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion"; // Import motion from framer-motion

function RootLayoutContent({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        {children}
        {/* <Counter /> */}
        <Footer />
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </ThemeProvider>
  );
}
