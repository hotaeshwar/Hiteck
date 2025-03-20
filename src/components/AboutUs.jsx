import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    // Enhanced Intersection Observer with improved thresholds
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-active');
          }, parseInt(entry.target.dataset.delay) || 0);
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 ease-out" data-delay="100">
          <div className="inline-block px-6 py-2 border-b-2 border-cyan-500 mb-6">
            <p className="text-cyan-400 text-lg uppercase tracking-widest font-medium">About Us</p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-white animate-on-scroll opacity-0 transition-all duration-700 ease-out transform translate-y-3" data-delay="300">
              TRIZENT TECH SERVE
            </span>
            <span className="block mt-2 text-cyan-400 animate-on-scroll opacity-0 transition-all duration-700 ease-out transform translate-y-3" data-delay="500">
              Hydraulic Excellence Engineered
            </span>
          </h1>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image Section in wide format on left */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0 transition-all duration-1000 ease-out" data-delay="300">
            <div className="relative overflow-hidden rounded-lg border border-slate-700 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
              <img 
                src="https://petrotechseals.com/wp-content/uploads/2024/01/slider4.png" 
                alt="TRIZENT TECH SERVE Hydraulic Fittings"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <div className="h-1 w-16 bg-cyan-500 mb-3"></div>
                <p className="text-lg font-medium">Hydraulic Excellence</p>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed animate-on-scroll opacity-0 transition-all duration-600 ease-out transform translate-x-4" data-delay="200">
              Welcome to <strong className="text-cyan-400 font-semibold">TRIZENT TECH SERVE</strong>, 
              the powerhouse behind precision-crafted hydraulic fittings that keep industrial systems flowing 
              with uncompromised efficiency. We are not just manufacturers—we are pioneers, reimagining the 
              future of hydraulic engineering with every connection we create.
            </p>

            <div className="border-l-4 border-cyan-500 pl-6 py-2 my-8 animate-on-scroll opacity-0 transition-all duration-600 ease-out transform translate-x-4" data-delay="400">
              <p className="text-xl font-light italic text-slate-200">
                With a legacy of unmatched craftsmanship and cutting-edge technology, we 
                design and deliver hydraulic solutions that redefine performance, durability, and leak-free reliability.
              </p>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed animate-on-scroll opacity-0 transition-all duration-600 ease-out transform translate-x-4" data-delay="600">
              Our expertise powers some of the most trusted names in manufacturing, construction, agriculture, 
              and heavy machinery, ensuring seamless fluid integration and exceptional pressure management. 
              At the core of TRIZENT TECH SERVE lies a relentless pursuit of hydraulic innovation. Our state-of-the-art facilities, 
              combined with a passionate team of fluid dynamics experts, push boundaries to produce revolutionary 
              connection solutions tailored to your specific pressure requirements and operating environments.
            </p>
            
            <div className="pt-8 animate-on-scroll opacity-0 transition-all duration-600 ease-out transform translate-y-4" data-delay="700">
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-slate-800 rounded-lg border border-slate-700">
                  <p className="text-cyan-400 font-medium">High-Pressure Applications</p>
                </div>
                <div className="px-6 py-3 bg-slate-800 rounded-lg border border-slate-700">
                  <p className="text-cyan-400 font-medium">Corrosive Fluid Management</p>
                </div>
                <div className="px-6 py-3 bg-slate-800 rounded-lg border border-slate-700">
                  <p className="text-cyan-400 font-medium">Flow Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="animate-on-scroll opacity-0 transition-all duration-800 ease-out transform translate-y-3" data-delay="800">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Hydraulic Brilliance.</span>
              <span className="text-cyan-400 ml-2">Powering Industry.</span>
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-active {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        
        .animate-on-scroll {
          will-change: opacity, transform;
          backface-visibility: hidden;
        }
        
        @keyframes pageLoad {
          from { opacity: 0.8; }
          to { opacity: 1; }
        }
        
        body {
          animation: pageLoad 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;