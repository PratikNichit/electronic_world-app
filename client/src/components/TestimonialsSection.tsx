import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Electronics_World provided us with top-notch semiconductor components that exceeded our expectations. Their technical expertise and customer service are unmatched in the industry.",
    author: "John Smith",
    position: "CTO",
    company: "TechInnovate Solutions"
  },
  {
    id: 2,
    content:
      "We've been working with Electronics_World for over 5 years, and they have consistently delivered high-quality products on time. Their team's knowledge and support have been instrumental in our success.",
    author: "Sarah Johnson",
    position: "Director of Engineering",
    company: "NextGen Electronics"
  },
  {
    id: 3,
    content:
      "Electronics_World's custom IC design services helped us optimize our product performance while reducing costs. I highly recommend their services to anyone looking for reliable semiconductor solutions.",
    author: "Michael Chen",
    position: "Head of R&D",
    company: "Quantum Devices"
  },
  {
    id: 4,
    content:
      "The technical consultation provided by Electronics_World was invaluable. They helped us navigate complex semiconductor requirements and delivered a solution that perfectly met our needs.",
    author: "Lisa Rodriguez",
    position: "Product Manager",
    company: "Global Technologies"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our satisfied customers about their experience working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-slate-700 rounded-xl p-8 md:p-10 shadow-xl">
            {/* Quote icon */}
            <div className="absolute top-0 left-0 -mt-8 -ml-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="text-blue-500 fill-current"
              >
                <path d="M0 24.5a9.73 9.73 0 003.88 8.06A12.5 12.5 0 0011.85 36h2.05v-4.5H11.4a7.59 7.59 0 01-4.9-1.44 5.86 5.86 0 01-2-4.94v-.62h9V10H0v14.5zm23 0a9.73 9.73 0 003.88 8.06A12.5 12.5 0 0034.85 36h2.05v-4.5H34.4a7.59 7.59 0 01-4.9-1.44 5.86 5.86 0 01-2-4.94v-.62h9V10h-13.5v14.5z"></path>
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-8">
                <p className="text-lg md:text-xl text-white italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-white">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-400">
                  {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;