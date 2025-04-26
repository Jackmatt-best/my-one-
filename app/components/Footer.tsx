import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-gray-300 py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Portfolio</h2>
            <p className="mt-2 max-w-xs">
              Creating beautiful web experiences with modern technologies.
            </p>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-400 transition-colors">
                    {item}
                  </a>)}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FaGithub size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>;
};