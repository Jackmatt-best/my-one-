import Link from "next/link";

export default function AboutSection() {
    return <section id="about" className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-blue-800 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="About me" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-6">
                A passionate UI/UX designer and Frontend Developer aiming on
                solving complex problems and creating beautiful and functional
                UI/UX designs and websites with modern tools and technologies
                with the user first psychology and usability in mind.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Day I Choose Two Dreams</h3>
              <p className="text-gray-600 mb-8">
                In the middle of flourescent lights, sterile labs,
                and the endless scent of ethanol at university,
                where I was studying for my diploma in 
                Pharmaceutical Science, a second dream quitely
                ignited.

                It started late one evening, after a long day of
                pharmacology lectures.I sat by my desk,
                overwhelmed but restless.Somewhere deep
                inside, I craved to build- not just understand
                molecules, but to create entire worlds. I opened
                my old laptop, typed "How to build a website,"
                and unknowingly stepped into a new dimension.

                Every spare minute I had, between drug
                calculations and experiments, I spent learning
                HTML, CSS,and Python.I would code late into the
                night, sacrificing comfort,sometimes even sleep,
                just to see something come alive on my screen.
                The thrill of creating - from nothing but an idea
                and keystrokes - consumed me.

                Over time, as my confidence grew, I discovered
                that code was only part of my magic. <strong>Design</strong>
                - beautiful,intuitive,human-centered design-
                was the bridge between ideas and experiences.
                That is when I met UI/UX Design:the art of making
                technology feel effortless and alive.

                While my classmates mastered clinical trials, I
                was running my own silent experiments- testing
                wireframes,studying color psychology ,crafting
                interfaces that could one day touch millions. I was 
                no longer just studying science; I was studying
                how humans and technology dance together.

                That decision - to pursue two dreams instead of
                one - changed my life forever.

                Now, I do not just build websites or apps.
                <strong>I Design experiences, I write dreams into
                  existence and I create technologies that serve,
                  inspire and connect people around the world
                </strong>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Name:</h4>
                  <p className="text-blue-800">Jackmatt</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Email:</h4>
                  <p className="text-blue-800">jackmattog@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Location:</h4>
                  <p className="text-blue-800">Arusha & Dar es salaam, Tanzania</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Availability:</h4>
                  <p className="text-blue-800">Available for freelance & Remote full time jobs</p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="#contact" className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-yellow-500 transition-colors">
                  Contact Me
                </Link>
              </div>
              <div className="mt-8">
                <Link href="#contact" className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-yellow-500 transition-colors">
                  View full story About me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>;
  };