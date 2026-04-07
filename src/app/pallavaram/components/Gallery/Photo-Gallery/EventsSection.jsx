"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const EVENTS_DATA = {
  years: ['2025-2026', '2024-2025'],
  eventsByYear: {
    '2025-2026': [
      // Row 1: Large (spans 2 cols) + Medium (1 col)
      {
        title: "Graduation day",
        id: 1,
        size: 'small',
        images: [
          "/pallavaram/events/graduation-1.jpg",
          "/pallavaram/events/graduation-2.jpg",
          "/pallavaram/events/graduation-3.jpg",
          "/pallavaram/events/graduation-4.jpg",
         
        ],
       
      },
      {
        title: "Vels Run 2026",
        id: 2,
        size: 'medium',
        images: [
          "/pallavaram/events/Vels - 1.jpeg",
          "/pallavaram/events/Vels - 2.jpeg",
          "/pallavaram/events/Vels - 3.jpeg",
          "/pallavaram/events/Vels - 4.jpeg",
          "/pallavaram/events/Vels - 5.jpeg",
          
        ]
      },
      // Row 2: Three equal small cards
      {
        title: "World Mental Health",
        id: 3,
        size: 'small',
        images: [
          "/pallavaram/events/Observance - 1.jpeg",
          "/pallavaram/events/Observance - 2.jpeg",
          "/pallavaram/events/Observance - 3.jpeg",
          "/pallavaram/events/Observance - 4.jpeg",
          "/pallavaram/events/Observance - 5.jpeg",
        ]
        
      },
      {
        title: "EVS culmination event",
        id: 4,
        size: 'small',
        images: [
          "/pallavaram/events/Evs -1.jpeg",
          "/pallavaram/events/Evs -2.jpg",
          "/pallavaram/events/Evs -3.jpg",
          "/pallavaram/events/Evs -4.jpg",
          "/pallavaram/events/Evs -5.jpg",
          "/pallavaram/events/Evs -6.jpg",
          "/pallavaram/events/Evs -7.jpg",
         
        ]
      },
      {
        title: "Proficiency Prize winners",
        id: 5,
        size: 'medium',
        images: [
          "/pallavaram/events/Prize winners -1.jpeg",
          "/pallavaram/events/Prize winners -2.jpeg",
          "/pallavaram/events/Prize winners -3.jpeg",
          "/pallavaram/events/Prize winners - 4.jpeg",
          "/pallavaram/events/Prize winners -5.jpeg",
          "/pallavaram/events/Prize winners -6.jpeg",
          "/pallavaram/events/Prize winners - 7.jpeg",
      
        ]
      },
      // Row 3: Medium + Large (spans 2 cols)
      {
        title: "Diwali Celebration",
        id: 6,
        size: 'medium',
        images: [
          "/pallavaram/events/Diwali celebrations - 1.jpeg",
          "/pallavaram/events/Diwali celebrations - 2.jpeg",
          "/pallavaram/events/Diwali celebrations - 3.jpeg",
          "/pallavaram/events/Diwali celebrations -4.jpeg",
        
        ]
      },
      {
        title: "NavDurga Puja",
        id: 7,
        size: 'medium',
        images: [
          "/pallavaram/events/NavDurga Puja -1.jpeg",
          "/pallavaram/events/NavDurga Puja -2.jpeg",
          "/pallavaram/events/NavDurga Puja -3.jpeg"
        ]
      },
      // Row 4: Three equal small cards
      {
       
        title: "Phonics Day",
        id: 8,
        size: 'small',
        images: [
          "/pallavaram/events/Phonics Day -1.jpeg",
          "/pallavaram/events/Phonics Day -2.jpeg",
          "/pallavaram/events/Phonics Day -3.jpeg",
          "/pallavaram/events/Phonics Day -4.jpeg",
          "/pallavaram/events/Phonics Day -5.jpeg",
          "/pallavaram/events/Phonics Day -6.jpeg",
          
        ]
      },
      {
        title: "Central Board Of School Education",
        id: 9,
        size: 'small',
        images: [
          "/pallavaram/events/central.jpeg",
         
        ]
      },
      {
        title: "Sports Day",
        id: 10,
        size: 'small',
        images: [
          "/pallavaram/events/Sports Day -1.jpg",
          "/pallavaram/events/Sports Day -2.jpg",
          "/pallavaram/events/Sports Day -3.jpg",
          "/pallavaram/events/Sports Day -4.jpg",
          
        ]
      },
      // Row 1: Large (spans 2 cols) + Medium (1 col)
      {
        title: "No Bag Day, Robotics Day, and the grand Annual Scout Launch!",
        id: 1,
        size: 'large',
        images: [
          "/pallavaram/events/Celebrated -1.jpg",
          "/pallavaram/events/Celebrated-2.jpg",
          "/pallavaram/events/Celebrated-3.jpg",
          "/pallavaram/events/Celebrated-4.jpg",
          "/pallavaram/events/Celebrated-5.jpg",
          "/pallavaram/events/Celebrated-6.jpg",
          "/pallavaram/events/Celebrated-7.jpg",
          "/pallavaram/events/Celebrated-8.jpg",
          "/pallavaram/events/Celebrated-9.jpg",
          "/pallavaram/events/Celebrated-10.jpg",
         
        ],
       
      },
      {
        title: "Investiture Ceremony ",
        id: 2,
        size: 'medium',
        images: [
          "/pallavaram/events/ProudMoment-1.jpg",
          "/pallavaram/events/ProudMoment-2.jpg",
          "/pallavaram/events/ProudMoment-3.jpg",
          "/pallavaram/events/ProudMoment-4.jpg",
          "/pallavaram/events/ProudMoment-5.jpg",
        ]
      },
      // Row 2: Three equal small cards
      {
        title: "Field Trip",
        id: 3,
        size: 'small',
        images: [
          "/pallavaram/events/Field Trip-1.jpeg",
          "/pallavaram/events/Field Trip-2.jpeg",
          "/pallavaram/events/Field Trip-3.jpeg",
          "/pallavaram/events/Field Trip-4.jpeg",
          "/pallavaram/events/Field Trip-5.jpeg",
          "/pallavaram/events/Field Trip-6.jpeg",

        ]
      },
      {
        title: "LEAD a symposium for Teachers",
       
        id: 4,
        size: 'small',
        images: [
          "/pallavaram/events/LEAD-1.jpeg",
          "/pallavaram/events/LEAD-2.jpeg",
          "/pallavaram/events/LEAD-3.jpeg",
      
       
        
        ]
      },
      {
        title: "World Ocean day",
        id: 5,
        size: 'medium',
        images: [
          "/pallavaram/events/activityWorld Ocean day -1.jpeg",
          "/pallavaram/events/activityWorld Ocean day -2.jpeg",
          "/pallavaram/events/activityWorld Ocean day -3.jpeg",
          "/pallavaram/events/activityWorld Ocean day -4.jpeg",
          "/pallavaram/events/activityWorld Ocean day -5.jpeg",
      
        ]
      },
      // Row 3: Medium + Large (spans 2 cols)
      {
       
        title: "Vels Exotic 25-26",
        id: 6,
        size: 'medium',
        images: [
          "/pallavaram/events/exotic1.jpeg",
          "/pallavaram/events/exotic2.jpeg",
          "/pallavaram/events/exotic3.jpeg",
          "/pallavaram/events/exotic4.jpeg",
          "/pallavaram/events/exotic5.jpeg",
          "/pallavaram/events/exotic6.jpeg",
        
        ]
      },
      {
        title: "Onam Celebration",
        id: 7,
        size: 'small',
        images: [
          "/pallavaram/events/onam1.jpeg",
          "/pallavaram/events/onam2.jpeg",
          "/pallavaram/events/onam3.jpeg",
          "/pallavaram/events/onam4.jpeg",
        ]
      },
     

    ],
    '2024-2025': [
      {
        title: "Parent Orientation ",
        id: 1,
        size: 'large',
        images: [
          "/thalambur/parent-1.jpg",
          "/thalambur/parent-2.jpg",
       
        ]
      },
      {
        title: "TAMIL NEW YEAR CELEBRATION",
        id: 2,
        size: 'medium',
        images: [
          "/thalambur/tamil-1.png",
          "/thalambur/tamil-2.png",
          "/thalambur/tamil-3.png",
          "/thalambur/tamil-4.png",
          "/thalambur/tamil-5.png",
          "/thalambur/tamil-6.png",
          "/thalambur/tamil-7.png",
          "/thalambur/tamil-8.png",
        ]
      },
      {
        title: "World Scholar's Cup",
        id: 3,
        size: 'small',
        images: [
          "/thalambur/world-1.png",
          "/thalambur/world-2.png",
          "/thalambur/world-3.png",
          "/thalambur/world-4.png",

        ]
      },
      {
        title: "EVS CULMINATION II GRADE I ",
        id: 4,
        size: 'small',
        images: [
          "/thalambur/evs-1.jpg",
          "/thalambur/evs-2.jpg",
          "/thalambur/evs-3.jpg",
          "/thalambur/evs-4.jpg",
          "/thalambur/evs-5.jpg",
          "/thalambur/evs-6.jpg",

        ]
      },
      {
        title: "EVS CULMINATION II GRADE II",
        id: 5,
        size: 'small',
        images: [
          "/thalambur/g-1.jpg",
          "/thalambur/g-2.jpg",
          "/thalambur/g-3.jpg",
          "/thalambur/g-4.jpg",
        ]
      }
    ],
 
  }
};

export default function EventsGallery() {
  const [selectedYear, setSelectedYear] = useState("2025-2026");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [carouselStates, setCarouselStates] = useState({});
  const [activeEventImages, setActiveEventImages] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const states = {};
    Object.values(EVENTS_DATA.eventsByYear).forEach((yearEvents) => {
      yearEvents.forEach((event) => {
        if (event.images && event.images.length > 1) {
          states[event.id] = 0;
        }
      });
    });
    setCarouselStates(states);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselStates((prev) => {
        const newStates = { ...prev };
        Object.keys(newStates).forEach((key) => {
          const id = parseInt(key);
          let event = null;
          Object.values(EVENTS_DATA.eventsByYear).forEach((yearEvents) => {
            const found = yearEvents.find((e) => e.id === id);
            if (found) event = found;
          });
          if (event && event.images && event.images.length > 1) {
            newStates[key] = (newStates[key] + 1) % event.images.length;
          }
        });
        return newStates;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openLightbox = (event) => {
    if (!event.images || event.images.length === 0) return;
    setActiveEventImages(event.images);
    setSelectedIndex(0);
  };

  const handleCarouselClick = (eventId, direction, e) => {
    e.stopPropagation();
    const event = EVENTS_DATA.eventsByYear[selectedYear].find(e => e.id === eventId);
    if (!event || !event.images || event.images.length <= 1) return;
    setCarouselStates(prev => ({
      ...prev,
      [eventId]: direction === "next" 
        ? (prev[eventId] + 1) % event.images.length 
        : (prev[eventId] - 1 + event.images.length) % event.images.length
    }));
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 md:p-8 max-w-[1400px] mx-auto min-h-screen">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Event Gallery</h2>
        
        <div className="relative w-full sm:w-48" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full px-5 py-3 bg-white border border-slate-200 rounded-xl font-bold shadow-sm hover:border-primary transition-colors"
          >
            {selectedYear}
            <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-full mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-xl z-20 overflow-hidden"
              >
                {EVENTS_DATA.years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-5 py-3 text-left font-bold transition-colors ${
                      selectedYear === year ? "bg-primary text-white" : "hover:bg-blue-50 text-slate-600"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {EVENTS_DATA.eventsByYear[selectedYear].map((event) => {
          const images = event.images || [];
          const hasMultiple = images.length > 1;
          const currentIndex = carouselStates[event.id] || 0;
          const currentImage = images[currentIndex] || images[0];

          return (
            <motion.div
              layout
              key={event.id}
              onClick={() => openLightbox(event)}
              className={`relative overflow-hidden rounded-2xl bg-white group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 
                ${event.size === "large" ? "sm:col-span-2 aspect-[16/10] md:aspect-[16/7]" : "col-span-1 aspect-[4/3]"}
              `}
            >
              <div className="relative h-full w-full">
                <motion.img
                  key={`${event.id}-${currentIndex}`}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  src={currentImage}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={event.title}
                />

                {/* Navigation Arrows (Visible on Hover/Touch) */}
                {hasMultiple && (
                  <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => handleCarouselClick(event.id, "prev", e)}
                      className="bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => handleCarouselClick(event.id, "next", e)}
                      className="bg-black/40 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                   {event.categoryTitle && (
                     <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                       {event.categoryTitle}
                     </span>
                   )}
                   <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2">
                    {event.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors">
              <X size={32} />
            </button>

            <div 
              className="relative w-full max-w-6xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop Nav Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => (prev - 1 + activeEventImages.length) % activeEventImages.length)}}
                className="hidden md:flex absolute left-[-60px] text-white/50 hover:text-white"
              >
                <ChevronLeft size={48} />
              </button>

              <motion.img
                key={selectedIndex}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                src={activeEventImages[selectedIndex]}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                alt="Selected Event"
              />

              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => (prev + 1) % activeEventImages.length)}}
                className="hidden md:flex absolute right-[-60px] text-white/50 hover:text-white"
              >
                <ChevronRight size={48} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div
              className="flex gap-2 mt-8 overflow-x-auto pb-4 max-w-full no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {activeEventImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex-shrink-0 w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden border-2 transition-all ${
                    selectedIndex === idx ? "border-primary scale-105" : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}