import { ExternalLinkIcon, } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function  ProjectsSection(){
  const projects = [{
    title: 'SaaS Dashboard (Admin Panel for a Saas Product)',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'TailwindCSS', 'Redux', 'Chart.js'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Full E-commerce Store (with Payment Integration)',
    description: 'A productivity app that helps users organize tasks with features like drag-and-drop, tags, and priority levels.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1739&q=80',
    tags: [ 'Next.js', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Social Media Mini App (Posts, Likes, Comments, Profiles)',
    description: 'A personal portfolio website showcasing my projects and skills (this website).',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
    liveLink: '#',
    githubLink: '#'
  },{
    title: 'AI chat assistant',
    description: 'A weather application that provides current conditions and forecasts for locations worldwide.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'TailwindCSS', 'OpenAI API'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Gamified Learning App UI/UX',
    description: 'A personal portfolio website showcasing my projects and skills (this website).',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
    liveLink: '#',
    githubLink: '#'
  },{
    title: 'Multi-language Global Website UI/UX',
    description: 'A personal portfolio website showcasing my projects and skills (this website).',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
    liveLink: '#',
    githubLink: '#'
  },{
    title: 'An app for Gamers to purchase Gaming equipments UI/UX ',
    description: 'A personal portfolio website showcasing my projects and skills (this website).',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
    liveLink: '#',
    githubLink: '#'
  },{
    title: 'Healthcare App UI/UX',
    description: 'A personal portfolio website showcasing my projects and skills (this website).',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Tailwind CSS', 'Redux', 'Firebase'],
    liveLink: '#',
    githubLink: '#'
  }];
  return <section id="projects" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-blue-800 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => <span key={idx} className="bg-indigo-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>)}
                </div>
                <div className="flex space-x-3">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-800 hover:text-yellow-500">
                    <ExternalLinkIcon size={16} className="mr-1" /> Live Demo
                  </Link>
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
                    <FaGithub size={16} className="mr-1" /> Code
                  </Link>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <Link href="#" className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-yellow-500 hover:text-black transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    </section>;
};