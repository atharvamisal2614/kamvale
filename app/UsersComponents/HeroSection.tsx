"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  ChevronDown,
  LayoutGrid,
  Search,
  Check,
} from "lucide-react";

const INITIAL_LOCATION_OPTIONS = [
  "Pune, Maharashtra",
  "Mumbai, Maharashtra",
  "Delhi NCR, New Delhi",
  "Bengaluru, Karnataka",
  "Hyderabad, Telangana",
];

const INITIAL_SERVICE_OPTIONS = [
  "AC Repair & Service",
  "Electrician Services",
  "Plumbing Solutions",
  "Home Deep Cleaning",
  "Painting & Waterproofing",
];

/* ============================================================
   Black Pencil Sketch / Hand-Drawn Line Art Background Tools (10 Total)
   ============================================================ */
function PencilSketchBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
      
      {/* 1. Pipe Wrench (Top-Left) */}
      <svg viewBox="0 0 64 64" className="absolute top-7 left-[4%] w-16 h-16 opacity-30 rotate-[-18deg]" fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M46 14 C42 8 32 8 28 14 L14 28 L28 42 L42 28 C48 24 48 18 46 14 Z" />
        <path d="M38 18 L34 22 M42 22 L38 26 M30 14 L26 18" />
        <path d="M14 28 L6 48 C5 52 8 55 12 54 L32 46 L28 42" />
        <line x1="12" y1="36" x2="20" y2="44" strokeWidth="0.9" />
        <line x1="15" y1="33" x2="23" y2="41" strokeWidth="0.9" />
        <line x1="18" y1="30" x2="26" y2="38" strokeWidth="0.9" />
      </svg>

      {/* 2. Paint Roller (Top-Right) */}
      <svg viewBox="0 0 64 64" className="absolute top-6 right-[5%] w-18 h-18 opacity-30 rotate-[14deg]" fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="10" width="34" height="15" rx="3" />
        <line x1="18" y1="13" x2="18" y2="22" strokeWidth="0.9" strokeDasharray="2 2" />
        <line x1="26" y1="13" x2="26" y2="22" strokeWidth="0.9" strokeDasharray="2 2" />
        <line x1="34" y1="13" x2="34" y2="22" strokeWidth="0.9" strokeDasharray="2 2" />
        <line x1="40" y1="13" x2="40" y2="22" strokeWidth="0.9" strokeDasharray="2 2" />
        <path d="M46 17 H52 V34 H32 V48" />
        <rect x="29" y="44" width="6" height="14" rx="2" />
        <line x1="30" y1="48" x2="34" y2="48" strokeWidth="1" />
        <line x1="30" y1="52" x2="34" y2="52" strokeWidth="1" />
      </svg>

      {/* 3. Claw Hammer (Mid-Left) */}
      <svg viewBox="0 0 64 64" className="absolute top-[44%] left-[2%] w-16 h-16 opacity-30 rotate-[30deg]" fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 14 H46 V24 H22 Z" />
        <path d="M46 17 C54 17 56 22 56 22" />
        <path d="M31 24 L31 56 C31 58 35 58 35 56 L35 24" />
        <line x1="31" y1="42" x2="35" y2="42" strokeWidth="1.2" />
        <line x1="31" y1="46" x2="35" y2="46" strokeWidth="1.2" />
        <line x1="31" y1="50" x2="35" y2="50" strokeWidth="1.2" />
      </svg>

      {/* 4. Hand Saw & Timber Block (Mid-Right) */}
      <svg viewBox="0 0 64 64" className="absolute top-[42%] right-[3%] w-16 h-16 opacity-30 rotate-[-16deg]" fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 36 L52 20 L52 26 L18 42 Z" />
        <path d="M20 42 L23 44 L26 42 L29 44 L32 42 L35 44 L38 42 L41 44 L44 42 L47 44 L50 42" strokeWidth="1.2" />
        <path d="M10 28 C10 24 16 22 20 28 L20 44 C16 48 10 46 10 42 Z" />
        <circle cx="15" cy="35" r="2.5" />
      </svg>

      {/* 5. Traditional Broom (Bottom-Left) */}
      <svg viewBox="0 0 64 64" className="absolute bottom-5 left-[6%] w-16 h-16 opacity-30 rotate-[18deg]" fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M29 6 L33 6 L33 34 L29 34 Z" />
        <path d="M22 34 H40 L46 56 H16 Z" />
        <rect x="22" y="34" width="18" height="4" rx="1" />
        <line x1="22" y1="40" x2="20" y2="54" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="27" y1="40" x2="27" y2="55" strokeWidth="1" />
        <line x1="32" y1="40" x2="33" y2="55" strokeWidth="1" />
        <line x1="37" y1="40" x2="39" y2="54" strokeWidth="1" strokeDasharray="4 2" />
      </svg>

      {/* 6. Cleaner Spray Bottle (Bottom-Right) */}
      <svg viewBox="0 0 64 64" className="absolute bottom-5 right-[7%] w-16 h-16 opacity-30 rotate-[-12deg]" fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 28 H38 C40 28 42 30 42 33 L40 54 C40 56 38 58 36 58 H24 C22 58 20 56 20 54 L18 33 C18 30 20 28 22 28 Z" />
        <rect x="26" y="20" width="8" height="8" />
        <path d="M24 20 H38 L44 12 H28 Z" />
        <path d="M38 18 L46 25" strokeWidth="2" />
        <line x1="22" y1="44" x2="38" y2="44" strokeWidth="1" strokeDasharray="3 2" />
      </svg>

      {/* 7. Plumber Pipe Elbow (Top-Center Right) */}
      <svg viewBox="0 0 64 64" className="absolute top-6 right-[25%] w-14 h-14 opacity-25 rotate-[10deg]" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 26 H26 V48 H14 Z" />
        <path d="M26 14 H48 V26 H26 Z" />
        <path d="M26 26 H48 V48 H26 Z" strokeDasharray="3 3" />
        <circle cx="37" cy="37" r="5" />
      </svg>

      {/* 8. Paint Brush with Bristles (Bottom-Center Left) */}
      <svg viewBox="0 0 64 64" className="absolute bottom-4 left-[24%] w-14 h-14 opacity-25 rotate-[-20deg]" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="27" y="6" width="10" height="24" rx="2" />
        <rect x="24" y="30" width="16" height="8" rx="1" />
        <path d="M24 38 L22 52 C22 55 42 55 42 52 L40 38 Z" />
        <line x1="28" y1="42" x2="28" y2="50" strokeWidth="0.8" />
        <line x1="32" y1="42" x2="32" y2="50" strokeWidth="0.8" />
        <line x1="36" y1="42" x2="36" y2="50" strokeWidth="0.8" />
      </svg>

      {/* 9. Pliers / Wire Cutters (Top-Center Left) */}
      <svg viewBox="0 0 64 64" className="absolute top-6 left-[22%] w-14 h-14 opacity-25 rotate-[32deg]" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 12 L30 26 M38 12 L34 26" />
        <circle cx="32" cy="28" r="3.5" />
        <path d="M30 31 L22 52 M34 31 L42 52" strokeWidth="2" />
        <line x1="24" y1="44" x2="28" y2="44" strokeWidth="1" />
        <line x1="36" y1="44" x2="40" y2="44" strokeWidth="1" />
      </svg>

      {/* 10. Electrician Multimeter & Screwdriver (Bottom-Center Right) */}
      <svg viewBox="0 0 64 64" className="absolute bottom-4 right-[26%] w-14 h-14 opacity-25 rotate-[15deg]" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Multimeter box */}
        <rect x="18" y="16" width="28" height="38" rx="4" />
        <rect x="22" y="22" width="20" height="12" rx="2" />
        <circle cx="32" cy="42" r="4" />
        {/* Test Probe line */}
        <path d="M46 36 L54 28 L52 26 L44 34" />
        <line x1="53" y1="27" x2="58" y2="22" strokeWidth="1" />
      </svg>

    </div>
  );
}

export default function HeroSection() {
  const [selectedLocation, setSelectedLocation] = useState(INITIAL_LOCATION_OPTIONS[0]);
  const [selectedService, setSelectedService] = useState(INITIAL_SERVICE_OPTIONS[0]);
  
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const [locationSearchQuery, setLocationSearchQuery] = useState("");
  const [serviceSearchQuery, setServiceSearchQuery] = useState("");

  const locationRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const serviceInputRef = useRef<HTMLInputElement>(null);

  // Filter lists based on search query
  const filteredLocations = INITIAL_LOCATION_OPTIONS.filter((loc) =>
    loc.toLowerCase().includes(locationSearchQuery.toLowerCase())
  );

  const filteredServices = INITIAL_SERVICE_OPTIONS.filter((svc) =>
    svc.toLowerCase().includes(serviceSearchQuery.toLowerCase())
  );

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setIsLocationOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setIsServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto focus search input when dropdown opens
  useEffect(() => {
    if (isLocationOpen) {
      setTimeout(() => locationInputRef.current?.focus(), 50);
    } else {
      setLocationSearchQuery("");
    }
  }, [isLocationOpen]);

  useEffect(() => {
    if (isServiceOpen) {
      setTimeout(() => serviceInputRef.current?.focus(), 50);
    } else {
      setServiceSearchQuery("");
    }
  }, [isServiceOpen]);

  return (
    <section className="relative w-full bg-white z-30 pt-8 pb-4 sm:py-16 md:py-20">
      {/* Background sketch tools contained in its own overflow container */}
      <PencilSketchBackground />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Plain, simple headline (responsive on mobile, single line on tablet/desktop) */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-gray-800 tracking-normal leading-snug sm:leading-normal sm:whitespace-nowrap max-w-full">
          Trusted experts, right at your doorstep.
        </h1>

        {/* Dual Searchable Dropdowns Container */}
        <div className="mt-6 sm:mt-10 w-full max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl sm:rounded-full shadow-md border border-gray-200 p-2 sm:p-2.5 gap-2 sm:gap-0 relative">
            
            {/* ================= 1. LOCATION DROPDOWN ================= */}
            <div className="relative flex-1" ref={locationRef}>
              <button
                type="button"
                onClick={() => {
                  setIsLocationOpen(!isLocationOpen);
                  setIsServiceOpen(false);
                }}
                className="w-full flex items-center justify-between gap-2.5 px-4 py-2.5 sm:py-3 text-left rounded-xl sm:rounded-full hover:bg-gray-50 transition-colors cursor-pointer group focus:outline-hidden"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase font-medium text-gray-400 tracking-wider leading-none">
                      Location
                    </span>
                    <span className="block text-sm font-medium text-gray-700 truncate mt-0.5">
                      {selectedLocation}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                    isLocationOpen ? "rotate-180 text-emerald-700" : ""
                  }`}
                />
              </button>

              {/* Location Popover with Searchbar */}
              {isLocationOpen && (
                <div
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left overscroll-contain"
                >
                  {/* Location Search Bar */}
                  <div className="relative mb-2.5">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      ref={locationInputRef}
                      type="text"
                      value={locationSearchQuery}
                      onChange={(e) => setLocationSearchQuery(e.target.value)}
                      placeholder="Search city or area..."
                      className="w-full pl-8 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-emerald-500 focus:bg-white transition-all font-normal"
                    />
                  </div>

                  {/* 5 Location Options (Scrollable with overscroll-contain) */}
                  <div className="max-h-56 overflow-y-auto space-y-1 overscroll-contain pr-1">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => {
                            setSelectedLocation(loc);
                            setIsLocationOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl text-left transition-colors cursor-pointer ${
                            selectedLocation === loc
                              ? "bg-emerald-50 text-emerald-800 font-semibold"
                              : "text-gray-600 hover:bg-gray-50 font-normal"
                          }`}
                        >
                          <span className="truncate">{loc}</span>
                          {selectedLocation === loc && (
                            <Check className="w-4 h-4 text-emerald-700 shrink-0 ml-1" />
                          )}
                        </button>
                      ))
                    ) : (
                      <p className="text-xs text-gray-400 text-center py-3">No location found</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden sm:block w-px h-8 bg-gray-200 self-center mx-1 shrink-0" />

            {/* ================= 2. SERVICE DROPDOWN ================= */}
            <div className="relative flex-1" ref={serviceRef}>
              <button
                type="button"
                onClick={() => {
                  setIsServiceOpen(!isServiceOpen);
                  setIsLocationOpen(false);
                }}
                className="w-full flex items-center justify-between gap-2.5 px-4 py-2.5 sm:py-3 text-left rounded-xl sm:rounded-full hover:bg-gray-50 transition-colors cursor-pointer group focus:outline-hidden"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <LayoutGrid className="w-4 h-4 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase font-medium text-gray-400 tracking-wider leading-none">
                      Service
                    </span>
                    <span className="block text-sm font-medium text-gray-700 truncate mt-0.5">
                      {selectedService}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                    isServiceOpen ? "rotate-180 text-emerald-700" : ""
                  }`}
                />
              </button>

              {/* Service Popover with Searchbar */}
              {isServiceOpen && (
                <div
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left overscroll-contain"
                >
                  {/* Service Search Bar */}
                  <div className="relative mb-2.5">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      ref={serviceInputRef}
                      type="text"
                      value={serviceSearchQuery}
                      onChange={(e) => setServiceSearchQuery(e.target.value)}
                      placeholder="Search any service..."
                      className="w-full pl-8 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-emerald-500 focus:bg-white transition-all font-normal"
                    />
                  </div>

                  {/* 5 Service Options (Scrollable with overscroll-contain) */}
                  <div className="max-h-56 overflow-y-auto space-y-1 overscroll-contain pr-1">
                    {filteredServices.length > 0 ? (
                      filteredServices.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => {
                            setSelectedService(svc);
                            setIsServiceOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl text-left transition-colors cursor-pointer ${
                            selectedService === svc
                              ? "bg-emerald-50 text-emerald-800 font-semibold"
                              : "text-gray-600 hover:bg-gray-50 font-normal"
                          }`}
                        >
                          <span className="truncate">{svc}</span>
                          {selectedService === svc && (
                            <Check className="w-4 h-4 text-emerald-700 shrink-0 ml-1" />
                          )}
                        </button>
                      ))
                    ) : (
                      <p className="text-xs text-gray-400 text-center py-3">No service found</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ================= SEARCH ACTION BUTTON ================= */}
            <button
              type="button"
              aria-label="Search"
              className="w-full sm:w-11 h-11 rounded-xl sm:rounded-full bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white flex items-center justify-center shadow-xs transition-all cursor-pointer shrink-0 self-center"
            >
              <Search className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
