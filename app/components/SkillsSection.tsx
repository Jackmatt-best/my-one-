import { CodeIcon, LayoutIcon, DatabaseIcon, BrushIcon } from 'lucide-react';

export default function SkillsSection (){
  const skills = [{
    category: 'Frontend',
    icon: <LayoutIcon size={24} className="text-indigo-600" />,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS']
  }, {
    category: 'Backend',
    icon: <ServerIcon size={24} className="text-indigo-600" />,
    items: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Authentication', 'Cloud Functions']
  }, {
    category: 'Database',
    icon: <DatabaseIcon size={24} className="text-indigo-600" />,
    items: ['MongoDB', 'Firebase', 'SQL', 'PostgreSQL', 'Redis', 'Data Modeling']
  }, {
    category: 'Tools & Others',
    icon: <CodeIcon size={24} className="text-indigo-600" />,
    items: ['Git', 'GitHub', 'VS Code', 'Docker', 'CI/CD', 'Agile/Scrum']
  }];
  return <section id="skills" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development
            world, from backend to design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-3">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, idx) => <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {skill}
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};
// Custom ServerIcon since it's not in lucide-react standard set
const ServerIcon = ({
  size = 24,
  className = ''
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>;
};