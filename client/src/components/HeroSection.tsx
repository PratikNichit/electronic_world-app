const HeroSection = () => {
    return (
      <div id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Electronics Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Delivering high-quality electronic products and services for your technology needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Explore Products
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;