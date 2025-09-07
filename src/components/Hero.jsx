const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-primary-600/10 to-primary-400/20 animate-gradient-xy"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/20 rounded-full blur-xl animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-primary-600/20 rounded-full blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-primary-400/30 rounded-full blur-xl animate-blob animation-delay-4000"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-primary-500/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-primary-600/20 rotate-12 animate-float animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-float">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
            <span className="block text-gradient">Dakota Davis</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Software Engineer crafting beautiful, functional experiences with
            modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 ease-out bg-primary-600 hover:bg-primary-700 text-white rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 ease-out border-2 border-primary-600 hover:border-primary-700 text-primary-600 hover:text-white hover:bg-primary-600 rounded-full"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
