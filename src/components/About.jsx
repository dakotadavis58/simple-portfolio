const About = () => {
  const skills = [
    "ASP.NET Core",
    "SQL",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "HTML/CSS",
    "RESTful APIs",
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Hello! I'm Dakota Davis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate Software Engineer currently working at Tyler
                Technologies Inc. I love creating beautiful, functional web
                applications that solve real-world problems. My journey in tech
                has led me to work with various technologies and frameworks,
                always striving to write clean, efficient code.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                or brainstorming the next big idea. I believe in continuous
                learning and pushing the boundaries of what's possible with
                code.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Technologies & Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-lg px-3 py-2 text-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    2+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    Years of Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    30+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    GitHub Repositories
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
