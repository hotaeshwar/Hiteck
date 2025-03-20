import React, { useState, useEffect, useRef } from 'react';
// Import all images correctly
import pharmaImage from '../assets/images/pharma.jpg';
import automobileImage from '../assets/images/automobile.jpg';
import chemicalImage from '../assets/images/chemical.jpg';
import oilImage from '../assets/images/oil.jpg';
import engineeringImage from '../assets/images/engineering.jpg';

const IndustriesServed = () => {
  const industries = [
    {
      id: 1,
      name: 'Pharmaceutical Industries',
      image: pharmaImage, // Using the pharma image
      color: 'from-blue-600 to-purple-600',
      bgColor: 'bg-blue-600',
      description: 'We provide high-purity valves and fittings for pharmaceutical manufacturing, ensuring sterility and compliance with regulatory standards.',
      fullDescription: 'Our pharmaceutical industry solutions include sanitary valves and fittings designed specifically for pharmaceutical manufacturing processes. All components meet FDA, cGMP, and ASME BPE standards, featuring electropolished surfaces and CIP/SIP capabilities for validation and sterilization. Our high-purity stainless steel construction ensures product integrity while preventing contamination, with designs that minimize dead legs and product entrapment areas. We offer comprehensive documentation packages to support validation requirements and regulatory compliance, ensuring your processes maintain the highest standards of product quality and patient safety.'
    },
    {
      id: 2,
      name: 'Automotive Industries',
      image: automobileImage, // Using the automobile image
      color: 'from-teal-600 to-emerald-600',
      bgColor: 'bg-teal-600',
      description: 'We supply high-quality valves and fittings tailored for the automotive manufacturing industry, ensuring reliability and precision in production processes.',
      fullDescription: 'Our specialized valve solutions for the automotive industry are designed to meet strict quality standards and withstand demanding manufacturing environments. From assembly line hydraulic systems to paint shop applications, our products ensure optimal performance and reduced maintenance costs. We partner with leading automotive manufacturers to provide custom solutions that improve efficiency and safety across all production stages, including fluid handling systems, pneumatic controls, and specialized testing equipment.'
    },
    {
      id: 3,
      name: 'Chemical Industries',
      image: chemicalImage, // Using the chemical image
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-500',
      description: 'We provide corrosion-resistant valves and fittings specifically engineered for handling aggressive chemicals and maintaining process integrity.',
      fullDescription: 'Our chemical industry solutions feature specially designed valves and fittings that resist corrosion from aggressive substances and ensure containment integrity. Made from high-grade alloys and specialized materials like Hastelloy, titanium, and lined steel, our products excel in challenging chemical processing environments. We provide comprehensive chemical compatibility information and offer custom solutions for specific applications, ensuring safety and compliance with industry standards while maximizing equipment lifespan in harsh operating conditions.'
    },
    {
      id: 4,
      name: 'Oil & Gas Industries',
      image: oilImage, // Using the oil image
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-500',
      description: 'Our specialized valves for oil and gas applications ensure safety and efficiency in extraction, transport, and processing operations.',
      fullDescription: 'Our oil and gas industry valve solutions are designed to meet the stringent safety and performance requirements of upstream, midstream, and downstream operations. We offer a comprehensive range of products certified for hazardous environments, featuring fire-safe designs and fugitive emissions control to meet environmental regulations. Our valves are built to withstand extreme pressures, temperatures, and corrosive substances encountered in wellheads, pipelines, refineries, and processing facilities, with options for remote actuation and monitoring to enhance operational safety and efficiency.'
    },
    {
      id: 5,
      name: 'Engineering Industries',
      image: engineeringImage, // Using the engineering image
      color: 'from-indigo-600 to-blue-500',
      bgColor: 'bg-indigo-600',
      description: 'We deliver engineered valve solutions for various industrial applications, providing reliable performance and custom designs for specific needs.',
      fullDescription: 'Our engineering industry solutions encompass a wide range of specialized valves and fittings designed for diverse industrial applications. We work closely with engineering firms, OEMs, and system integrators to provide both standard and custom-engineered products that meet exact specifications. Our technical team offers comprehensive support throughout project lifecycles, from initial design and material selection to installation guidance and maintenance recommendations. We specialize in solving complex flow control challenges with innovative solutions that optimize system performance while ensuring safety, reliability, and regulatory compliance.'
    }
  ];

  const [popupContent, setPopupContent] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});
  const cardRefs = useRef([]);

  const openPopup = (industry) => {
    setPopupContent(industry);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  // Close popup when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Set up intersection observer for scroll animations
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, industries.length);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id'));
            setVisibleItems(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="my-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full">
          <span className="text-white font-semibold text-sm font-sans">INDUSTRY SOLUTIONS</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="font-sans">Industries We Serve</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          <span className="font-sans">Providing specialized valve solutions tailored to the unique requirements of various industrial sectors.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div 
            key={industry.id}
            ref={el => cardRefs.current[index] = el}
            data-id={industry.id}
            className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 bg-white hover:shadow-2xl ${
              visibleItems[industry.id] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
            onMouseEnter={() => setHoveredId(industry.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Card with image only */}
            <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-50 transition-opacity duration-300 ${hoveredId === industry.id ? 'opacity-70' : 'opacity-50'} z-10`}></div>
              
              {/* Industry image as background */}
              <img 
                src={industry.image} 
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              
              <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
                <h3 className="text-3xl font-bold text-white text-center transform transition-all duration-500 translate-y-0 text-shadow">
                  <span className="font-sans">{industry.name}</span>
                </h3>
              </div>
            </div>
            
            {/* Text and button below card */}
            <div className="p-6 bg-white">
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-sans">{industry.description}</span>
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => openPopup(industry)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center justify-center font-semibold text-sm bg-gradient-to-r ${industry.color} text-white hover:shadow-lg`}
                >
                  <span className="font-sans">Read More</span>
                  <span className="ml-2">↓</span>
                </button>
              </div>
            </div>

            {/* Corner effect */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rotate-45 transform translate-x-8 -translate-y-8"></div>
          </div>
        ))}
      </div>

      {/* Popup for expanded content */}
      {popupContent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div 
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-auto relative" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup header with industry image as background */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={popupContent.image} 
                alt={popupContent.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${popupContent.color} opacity-70`}></div>
              <div className="absolute inset-0 flex items-center p-6">
                <h3 className="text-2xl font-bold text-white">{popupContent.name}</h3>
              </div>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none"
              >
                <span className="text-2xl font-bold">×</span>
              </button>
            </div>
            
            {/* Popup content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                {popupContent.fullDescription}
              </p>
            </div>
            
            {/* Popup footer */}
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button 
                onClick={closePopup}
                className={`px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm transition-colors`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
};

export default IndustriesServed;