// File: app/layouts/RootLayout.jsx

"use client";

import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Nav from "./components/Nav"; // Ensure correct import path and case sensitivity
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Counter />
        <Footer />
      </body>
    </html>
  );
}
