export default function AboutSection() {
    return <section id="about" className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="About me" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-6">
                I'm a passionate web developer with a strong foundation in modern
                frontend technologies. With over 5 years of experience, I
                specialize in creating responsive, accessible, and performant web
                applications that provide exceptional user experiences.
              </p>
              <p className="text-gray-600 mb-8">
                My journey in web development started when I built my first
                website in college. Since then, I've worked with various clients
                and companies to bring their visions to life. I'm constantly
                learning new technologies and techniques to stay at the forefront
                of web development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Name:</h4>
                  <p className="text-gray-600">Your Name</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Email:</h4>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Location:</h4>
                  <p className="text-gray-600">City, Country</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Availability:</h4>
                  <p className="text-gray-600">Available for freelance</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>;
  };