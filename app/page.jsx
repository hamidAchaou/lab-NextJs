// File: app/page.jsx

"use client";

import { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaClock,
  FaTags,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";
import { useSpring, animated } from "react-spring";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// BlogPost Component
const BlogPost = ({ title, excerpt, author, date, tags, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    scale: isHovered ? 1.03 : 1,
    boxShadow: isHovered
      ? "0 10px 20px rgba(0,0,0,0.2)"
      : "0 5px 10px rgba(0,0,0,0.1)",
  });

  return (
    <animated.div
      style={springProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 transition-colors duration-300"
    >
      <LazyLoadImage
        src={image}
        alt={title}
        effect="blur"
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
        {title}
      </h2>
      <ReactMarkdown className="text-gray-600 dark:text-gray-300 mb-4">
        {excerpt}
      </ReactMarkdown>
      <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
        <FaUser className="mr-2" />
        <span className="mr-4">{author}</span>
        <FaClock className="mr-2" />
        <span className="mr-4">{date}</span>
        <FaTags className="mr-2" />
        <span>{tags.join(", ")}</span>
      </div>
    </animated.div>
  );
};

// Featured Project Component
const FeaturedProject = ({ title, description, image }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
  >
    <LazyLoadImage
      src={image}
      alt={title}
      effect="blur"
      className="w-full h-48 object-cover mb-4 rounded"
    />
    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

// Home Page Component
export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const recentPosts = [
    {
      title: "The Future of React in 2024",
      excerpt:
        "Explore the latest features and best practices in React development for 2024.",
      author: "Jane Doe",
      date: "January 15, 2024",
      tags: ["React", "JavaScript", "Web Development"],
      image: "/api/placeholder/800/600",
    },
    {
      title: "AI-Driven Design with Tailwind CSS",
      excerpt:
        "Learn how to integrate AI tools with Tailwind CSS for cutting-edge web designs.",
      author: "John Smith",
      date: "February 2, 2024",
      tags: ["CSS", "Tailwind", "AI", "Web Design"],
      image: "/api/placeholder/800/600",
    },
    // Add more blog posts as needed
  ];

  const featuredProjects = [
    {
      title: "AI Content Generator",
      description:
        "A React-based tool that uses GPT-4 to generate blog content.",
      image: "/api/placeholder/800/600",
    },
    {
      title: "Virtual Reality Portfolio",
      description:
        "An immersive VR experience showcasing web development projects.",
      image: "/api/placeholder/800/600",
    },
    {
      title: "Blockchain-Powered Blog",
      description: "A decentralized blogging platform built on Ethereum.",
      image: "/api/placeholder/800/600",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <main className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Recent Posts
            </h2>
            <Slider {...sliderSettings}>
              {recentPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </Slider>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <FeaturedProject key={index} {...project} />
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6 transition-colors duration-300">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 My Portfolio Blog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
