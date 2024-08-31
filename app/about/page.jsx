import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-blue-700 dark:text-white">
        {skill}
      </span>
      <span className="text-sm font-medium text-blue-700 dark:text-white">
        {level}%
      </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/assets/images/4-removebg-preview-2.png" // Corrected path for the image
                alt="Profile"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                About Me
              </div>
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hamid ACHaou
              </h1>
              <p className="mt-2 text-xl text-gray-500">
                Full Stack Developer & UI/UX Enthusiast
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500">
                A passionate and dedicated Full Stack Developer with a strong
                background in both frontend and backend development. I
                specialize in creating dynamic, high-performance web
                applications that provide an excellent user experience. With a
                keen eye for detail and a commitment to writing clean, efficient
                code, I aim to bring innovative ideas to life through technology.
              </p>
            </div>
          </div>

          <div className="px-8 py-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillBar skill="JavaScript" level={90} />
              <SkillBar skill="React" level={85} />
              <SkillBar skill="Node.js" level={80} />
              <SkillBar skill="CSS/Sass" level={75} />
              <SkillBar skill="PHP" level={80} />
              <SkillBar skill="Laravel" level={85} />
            </div>
          </div>

          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Senior Developer at TechCorp
                </h3>
                <p className="text-gray-600">2020 - Present</p>
                <p className="mt-2 text-gray-600">
                  Led a team of developers in creating scalable web applications
                  using React and Node.js.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Frontend Developer at WebSolutions
                </h3>
                <p className="text-gray-600">2018 - 2020</p>
                <p className="mt-2 text-gray-600">
                  Developed responsive websites and implemented UI/UX
                  improvements for various clients.
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 py-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Let's Connect
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hamidAchaou"
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hamid-achaou-093682253/"
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:hamidachaou379@gmail.com"
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
