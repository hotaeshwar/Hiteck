import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, PlusCircle, XCircle, X, ArrowRight } from 'lucide-react';

// Import images
import hydraulicImg from '../assets/images/Hydraulic.jpg';
import fluidImg from '../assets/images/fluid.jpg';
import hydraulic1Img from '../assets/images/hydraulic1.jpg';
import hydraulic2Img from '../assets/images/hydraulic2.jpg';
import hydraulic3Img from '../assets/images/hydraulic3.jpg';
import hydraulic4Img from '../assets/images/hydraulic4.jpg';
import hydraulic5Img from '../assets/images/hydraulic5.jpg';
import hydraulic6Img from '../assets/images/hydraulic6.jpg';
import flanges1Img from '../assets/images/flanges1.jpg';
import flanges2Img from '../assets/images/flanges2.jpg';
import flanges3Img from '../assets/images/flanges3.jpg';
import flanges4Img from '../assets/images/flanges4.jpg';
import flanges5Img from '../assets/images/flanges5.jpg';
import flanges6Img from '../assets/images/flanges6.jpg';
import flanges7Img from '../assets/images/flanges7.jpg';
import flanges8Img from '../assets/images/flanges8.jpg';
import sheet1Img from '../assets/images/sheet1.jpg';
import sheet2Img from '../assets/images/sheet2.jpg';
import sheet3Img from '../assets/images/sheet3.jpg';
import sheet4Img from '../assets/images/sheet4.jpg';
import sheet5Img from '../assets/images/sheet5.jpg';
import sheet6Img from '../assets/images/sheet6.jpg';
import sheet8Img from '../assets/images/sheet8.jpg';


import hose1Img from '../assets/images/hose1.jpg';
import hose2Img from '../assets/images/hose2.jpg';
import hose3Img from '../assets/images/hose3.jpg';
import hose4Img from '../assets/images/hose4.jpg';
import hose5Img from '../assets/images/hose5.jpg';
import hose6Img from '../assets/images/hose6.jpg';
import hose7Img from '../assets/images/hose7.jpg';

import eng2Img from '../assets/images/eng2.png';
import mech1Img from '../assets/images/mech1.jpg';
import mech2Img from '../assets/images/mech2.jpg';
import auto1Img from '../assets/images/auto1.jpg';
import auto2Img from '../assets/images/auto2.jpg';
import petro1Img from '../assets/images/petro1.jpg';
import petro2Img from '../assets/images/petro2.jpg';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Ref for intersection observer
  const observerRefs = useRef({});
  const modalRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: "Hydraulic Fittings",
      products: [
        {
          id: "hydroconnect",
          name: "TTS HydroConnect",
          description: "Precision hydraulic fittings for industrial applications with advanced sealing technology designed for maximum durability in harsh environments.",
          images: [fluidImg, hydraulicImg],
          specs: [
            { name: "Material", value: "316L Stainless Steel" },
            { name: "Max Pressure", value: "6,000 PSI" },
            { name: "Temperature Range", value: "-40°F to 250°F" },
            { name: "Connection Types", value: "NPT, JIC, SAE" }
          ]
        },
        {
          id: "flowmax",
          name: "TTS FlowMax",
          description: "High-performance fluid connectors that ensure optimal flow rates and minimal pressure drop. Engineered for continuous industrial use with extended service life.",
          images: [hydraulic1Img, hydraulic2Img],
          specs: [
            { name: "Material", value: "Carbon Steel, Brass" },
            { name: "Max Pressure", value: "5,000 PSI" },
            { name: "Flow Rate", value: "Up to 120 GPM" },
            { name: "Application", value: "Heavy-duty industrial" }
          ]
        },
        {
          id: "powerseal",
          name: "TTS PowerSeal",
          description: "Leak-proof hydraulic couplings with proprietary double O-ring design. Zero leakage guaranteed under rated pressure conditions.",
          images: [hydraulic3Img, hydraulic4Img],
          specs: [
            { name: "Seal Type", value: "Double O-ring" },
            { name: "Leak Rate", value: "Zero at rated pressure" },
            { name: "Sizes", value: "1/4\" to 2\"" },
            { name: "Certification", value: "ISO 9001" }
          ]
        },
        {
          id: "flexifit",
          name: "TTS FlexiFit",
          description: "Versatile hydraulic adaptors with over 90 possible configurations. Universal compatibility ensures seamless integration across different hydraulic systems.",
          images: [hydraulic5Img, hydraulic6Img],
          specs: [
            { name: "Configurations", value: "90+ combinations" },
            { name: "Compatibility", value: "Universal standards" },
            { name: "Material", value: "Zinc-plated steel" },
            { name: "Applications", value: "Cross-system integration" }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Flanges",
      products: [
        {
          id: "torqueflange",
          name: "TTS TorqueFlange",
          description: "Heavy-duty industrial flanges designed for high-torque applications. Engineered with precision for perfect alignment and reliable sealing in critical systems.",
          images: [flanges1Img, flanges2Img],
          specs: [
            { name: "Material", value: "Carbon Steel, Stainless" },
            { name: "Standard", value: "ANSI/ASME B16.5" },
            { name: "Pressure Class", value: "150# to 2500#" },
            { name: "Size Range", value: "1/2\" to 24\"" }
          ]
        },
        {
          id: "sealtech",
          name: "TTS SealTech",
          description: "Precision sealing flanges with advanced gasket technology. Ideal for chemical processing applications with superior corrosion resistance.",
          images: [flanges3Img, flanges4Img],
          specs: [
            { name: "Sealing Technology", value: "RTJ / Spiral Wound" },
            { name: "Material", value: "Stainless, Alloy Steel" },
            { name: "Corrosion Resistance", value: "High" },
            { name: "Application", value: "Chemical processing" }
          ]
        },
        {
          id: "ultrabolt",
          name: "TTS UltraBolt",
          description: "High-strength bolted flanges with premium fastening systems. Designed for applications requiring exceptional tensile strength and reliability.",
          images: [flanges5Img, flanges6Img],
          specs: [
            { name: "Bolt Grade", value: "A193-B7, B8M" },
            { name: "Tensile Strength", value: "Up to 150,000 PSI" },
            { name: "Coating", value: "Zinc, PTFE, Hot-dip galv." },
            { name: "Standards", value: "ASTM, ISO" }
          ]
        },
        {
          id: "weldmate",
          name: "TTS WeldMate",
          description: "Versatile weld neck and slip-on flanges for various welding applications. Multiple face types available for different gasket requirements.",
          images: [flanges7Img, flanges8Img],
          specs: [
            { name: "Weld Types", value: "Socket, Slip-on, Weld neck" },
            { name: "Material", value: "Carbon Steel, SS304/316" },
            { name: "Pressure Rating", value: "150# to 1500#" },
            { name: "Face Type", value: "RF, FF, RTJ" }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Sheet Metal Components",
      products: [
        {
          id: "metalform",
          name: "TTS MetalForm",
          description: "Custom-engineered sheet metal parts with precision tolerances. Available in multiple materials with various finishing options for any industrial application.",
          images: [sheet1Img, sheet2Img],
          specs: [
            { name: "Thickness Range", value: "0.5mm to 12mm" },
            { name: "Materials", value: "Steel, Aluminum, SS" },
            { name: "Tolerances", value: "±0.1mm" },
            { name: "Finishing", value: "Powder coating, Anodizing" }
          ]
        },
        {
          id: "precisionshield",
          name: "TTS PrecisionShield",
          description: "High-durability metal enclosures with superior environmental protection. Customizable for various sizing and mounting requirements.",
          images: [sheet3Img, sheet4Img],
          specs: [
            { name: "IP Rating", value: "IP66, IP67" },
            { name: "Material", value: "Cold-rolled steel, SS316" },
            { name: "Protection", value: "Dust, water, impact" },
            { name: "Customization", value: "Size, mounting, cutouts" }
          ]
        },
        {
          id: "autostamp",
          name: "TTS AutoStamp",
          description: "Automotive-grade sheet metal components manufactured to precise OEM specifications. IATF certified with rigorous quality control standards.",
          images: [sheet5Img, sheet6Img],
          specs: [
            { name: "Certification", value: "IATF 16949" },
            { name: "Process", value: "Progressive die stamping" },
            { name: "Materials", value: "HSLA, AHSS steels" },
            { name: "Applications", value: "Structural, chassis parts" }
          ]
        },
        {
          id: "aerosheet",
          name: "TTS AeroSheet",
          description: "Lightweight, high-strength metal solutions ideal for aerospace and defense applications. Superior strength-to-weight ratio compared to conventional materials.",
          images: [sheet8Img, sheet1Img],
          specs: [
            { name: "Weight Reduction", value: "Up to 40%" },
            { name: "Materials", value: "Aluminum alloys, titanium" },
            { name: "Strength-to-Weight", value: "Superior ratio" },
            { name: "Applications", value: "Aerospace, defense" }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Rubber Hoses",
      products: [
        {
          id: "flexitube",
          name: "TTS FlexiTube",
          description: "High-pressure rubber hoses designed for extreme operating conditions. Multiple reinforcement options available for various pressure requirements.",
          images: [hose1Img, hose2Img],
          specs: [
            { name: "Pressure Rating", value: "Up to 10,000 PSI" },
            { name: "Temperature", value: "-40°C to 125°C" },
            { name: "Reinforcement", value: "Wire braid, spiral" },
            { name: "Inner Diameter", value: "4mm to 50mm" }
          ]
        },
        {
          id: "chemshield",
          name: "TTS ChemShield",
          description: "Chemical-resistant industrial hoses with specialized inner linings. FDA and USP Class VI certified for pharmaceutical and food applications.",
          images: [hose3Img, hose4Img],
          specs: [
            { name: "Chemical Resistance", value: "Acids, solvents" },
            { name: "Lining", value: "PTFE, FEP, UHMWPE" },
            { name: "Cover", value: "EPDM, CSM" },
            { name: "Certification", value: "FDA, USP Class VI" }
          ]
        },
        {
          id: "autoflow",
          name: "TTS AutoFlow",
          description: "Automotive-grade rubber tubing that meets or exceeds all SAE standards. Low permeation design for environmental compliance.",
          images: [hose5Img, hose6Img],
          specs: [
            { name: "Standards", value: "SAE J30R9T, J20R3" },
            { name: "Working Temp", value: "-40°C to 150°C" },
            { name: "Media", value: "Fuel, oil, coolant" },
            { name: "Permeation", value: "Low emission compliant" }
          ]
        },
        {
          id: "oilguard",
          name: "TTS OilGuard",
          description: "Heavy-duty oil and fuel hoses for demanding environments. Superior abrasion resistance for extended service life in harsh conditions.",
          images: [hose7Img, hose1Img],
          specs: [
            { name: "Oil Resistance", value: "Superior" },
            { name: "Working Pressure", value: "3000 PSI" },
            { name: "Abrasion Resistance", value: "High" },
            { name: "Applications", value: "Mining, construction" }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Engineering Components",
      products: [
        {
          id: "engicore",
          name: "TTS EngiCore",
          description: "Precision-engineered components with tight tolerances. 100% inspection ensures reliability in critical load-bearing applications.",
          images: [eng2Img, eng2Img],
          specs: [
            { name: "Precision", value: "±0.01mm" },
            { name: "Materials", value: "Steel, titanium, alloys" },
            { name: "QA Process", value: "100% inspection" },
            { name: "Applications", value: "Critical load-bearing" }
          ]
        },
        {
          id: "machipro",
          name: "TTS MachiPro",
          description: "Machined parts for industrial applications ranging from simple to complex geometries. Available in prototype to full production quantities.",
          images: [mech1Img, mech2Img],
          specs: [
            { name: "Machining Type", value: "CNC, multi-axis" },
            { name: "Processes", value: "Turning, milling, grinding" },
            { name: "Lot Size", value: "Prototype to production" },
            { name: "Complexity", value: "Simple to complex" }
          ]
        },
        {
          id: "autotech",
          name: "TTS AutoTech",
          description: "Automotive engineering components designed to OEM specifications. Production capacity scaled for high-volume requirements with comprehensive quality monitoring.",
          images: [auto1Img, auto2Img],
          specs: [
            { name: "Standards", value: "OEM specifications" },
            { name: "Production", value: "High-volume capability" },
            { name: "Quality System", value: "PPAP, SPC monitoring" },
            { name: "Applications", value: "Powertrain, chassis" }
          ]
        },
        {
          id: "petroseal",
          name: "TTS PetroSeal",
          description: "Sealing solutions for oil and gas industries designed for extreme pressure and temperature conditions. Compliant with API and NACE standards.",
          images: [petro1Img, petro2Img],
          specs: [
            { name: "Pressure Rating", value: "Up to 15,000 PSI" },
            { name: "Temperature", value: "-60°C to 200°C" },
            { name: "Standards", value: "API 6A, NACE MR0175" },
            { name: "Materials", value: "Inconel, Duplex SS" }
          ]
        }
      ]
    }
  ];

  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          setVisibleSections(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all category elements
    categories.forEach(category => {
      const element = document.getElementById(`category-${category.id}`);
      if (element) {
        observer.observe(element);
        observerRefs.current[`category-${category.id}`] = element;
      }
    });

    return () => {
      // Clean up the observer
      Object.values(observerRefs.current).forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [categories]);

  // Check URL hash for direct navigation to products
  useEffect(() => {
    const checkUrlHash = () => {
      const hash = window.location.hash.substring(1);
      
      if (hash && hash !== 'products') {
        for (const category of categories) {
          const foundProduct = category.products.find(product => product.id === hash);
          if (foundProduct) {
            setActiveCategory(category.id);
            setTimeout(() => {
              const element = document.getElementById(hash);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.classList.add('ring-4', 'ring-teal-500');
                setTimeout(() => {
                  element.classList.remove('ring-4', 'ring-teal-500');
                }, 1500);
              }
            }, 300);
            break;
          }
        }
      }
    };
    
    checkUrlHash();
    window.addEventListener('hashchange', checkUrlHash);
    
    return () => {
      window.removeEventListener('hashchange', checkUrlHash);
    };
  }, [categories]);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const nextImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((currentImageIndex + 1) % selectedProduct.images.length);
  };

  const prevImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length);
  };

  const getAnimationClass = (id) => {
    return visibleSections[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  };

  // Function to get product animation delay based on index
  const getProductAnimationDelay = (index) => {
    return `${index * 0.1}s`;
  };

  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen antialiased">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            Product Catalog
          </span>
        </h1>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          <span className="block">
            Browse our extensive range of industrial products designed for performance and reliability
          </span>
        </p>
        
        {/* Categories Accordion */}
        <div className="space-y-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              id={`category-${category.id}`}
              data-id={`category-${category.id}`}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-700 ease-in-out ${getAnimationClass(`category-${category.id}`)}`}
            >
              {/* Category Header */}
              <button 
                onClick={() => toggleCategory(category.id)}
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-slate-50 transition-all duration-300"
              >
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">{category.name}</h2>
                <div className="flex items-center">
                  {activeCategory === category.id ? 
                    <XCircle className="text-teal-600 w-6 h-6" /> : 
                    <PlusCircle className="text-teal-600 w-6 h-6" />
                  }
                </div>
              </button>
              
              {/* Products Grid */}
              {activeCategory === category.id && (
                <div className="p-4 bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {category.products.map((product, index) => (
                      <div 
                        key={product.id} 
                        id={product.id}
                        style={{ animationDelay: getProductAnimationDelay(index) }}
                        className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in-up"
                      >
                        {/* Product Image with Overlay */}
                        <div className="relative h-48 overflow-hidden group">
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <h3 className="text-white font-bold text-lg">{product.name}</h3>
                            <p className="text-white/90 text-sm line-clamp-2">{product.description}</p>
                          </div>
                        </div>
                        
                        {/* Product Info */}
                        <div className="p-4 bg-white">
                          <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
                          <p className="text-slate-600 mt-1 text-sm line-clamp-2">{product.description}</p>
                          
                          {/* Read More Button */}
                          <button 
                            onClick={() => openProductModal(product)}
                            className="mt-4 flex items-center justify-center w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm hover:shadow"
                          >
                            <span>Read More</span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div 
            ref={modalRef}
            className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-slate-800">{selectedProduct.name}</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden bg-slate-100 h-64 md:h-80">
                    <img 
                      src={selectedProduct.images[currentImageIndex]} 
                      alt={`${selectedProduct.name} image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                    {selectedProduct.images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                        >
                          <ChevronDown className="w-5 h-5 rotate-90" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                        >
                          <ChevronDown className="w-5 h-5 -rotate-90" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnails */}
                  {selectedProduct.images.length > 1 && (
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {selectedProduct.images.map((img, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 h-16 w-16 rounded border-2 ${
                            currentImageIndex === idx ? 'border-teal-500' : 'border-transparent'
                          }`}
                        >
                          <img 
                            src={img} 
                            alt={`${selectedProduct.name} thumbnail ${idx + 1}`}
                            className="h-full w-full object-cover rounded"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Description</h4>
                  <p className="text-slate-600 mb-6">{selectedProduct.description}</p>
                  
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Technical Specifications</h4>
                  <div className="rounded-lg overflow-hidden border border-slate-200">
                    {selectedProduct.specs.map((spec, index) => (
                      <div key={index} className="flex border-b border-slate-200 last:border-0">
                        <div className="w-1/2 p-3 text-sm font-medium text-slate-700 bg-slate-50">{spec.name}</div>
                        <div className="w-1/2 p-3 text-sm text-slate-600">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t bg-slate-50 flex space-x-3">
              <button className="flex-1 text-white bg-teal-600 hover:bg-teal-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 shadow-sm">
                Request Quote
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 text-slate-700 border border-slate-300 hover:bg-slate-100 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Global CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* For Sans Serif Font */
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
      `}</style>
    </div>
  );
};

export default ProductShowcase;