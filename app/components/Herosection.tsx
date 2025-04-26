import Link from 'next/link';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
export default function HeroSection() {
  return <section id="home" className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Your Name</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-lg">
            A passionate web developer creating beautiful and functional
            websites with modern technologies.
          </p>
          <div className="flex space-x-4 mb-8">
            <Link href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Get in Touch
            </Link>
            <Link href="#projects" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              View My Work
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-indigo-600 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <Link href="#about" className="flex flex-col items-center text-gray-500 hover:text-gray-700">
          <span className="text-sm mb-2">Scroll Down</span>
          <FaArrowDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>;
};