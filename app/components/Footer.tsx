import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-800 text-gray-300 py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-800">Jackmatt</h2>
            <p className="mt-2 max-w-xs">
              Solving Complex problems &
              Creating beautifull UI/UX designs and Websites
              with the user first psychology and accessibility 
              in mind using modern technology and tools.
            </p>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-800 transition-colors">
                    {item}
                  </Link>)}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/Jackmatt-best" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                <FaGithub size={20} />
              </Link>
              <Link href="https://linkedin.com/Jackson Mathew" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://twitter.com/officialjackmatt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://instagram.com/officialjackmatt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} <span className='text-blue-800'>Jackmatt</span>. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>;
};