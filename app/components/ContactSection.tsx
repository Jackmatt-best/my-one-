import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ContactSection() {
    return <section id="contact" className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-blue-800 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to discussing new opportunities.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <EnvelopeIcon className="text-blue-800 h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-gray-700">
                        Email
                      </h4>
                      <Link
                        href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-800">
                        jackmattog@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <PhoneIcon className="text-blue-800 h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-gray-700">
                        Phone
                      </h4>
                      <Link href="tel:+1234567890" className="text-gray-600 hover:text-blue-800">
                        +255 (658) 349-473
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <MapPinIcon className="text-blue-800 h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-gray-700">
                        Location
                      </h4>
                      <p className="text-gray-600 hover:text-blue-800">Arusha & Dar es Salaam, Tanzania</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <form className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800" placeholder="Project Inquiry" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800" placeholder="Your message here..." required></textarea>
                </div>
                <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center">
                  Send Message
                  <PaperAirplaneIcon className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>;
  };