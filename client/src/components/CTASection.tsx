const CTASection = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Electronics Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our experts today and discover how our products and services can enhance your technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Request a Quote
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-blue-700 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Contact Sales Team
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTASection;