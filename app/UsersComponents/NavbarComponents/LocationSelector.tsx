"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, Compass, Check } from "lucide-react";

export const POPULAR_LOCATIONS = [
  "Mumbai, Maharashtra",
  "Delhi NCR, New Delhi",
  "Bengaluru, Karnataka",
  "Pune, Maharashtra",
  "Hyderabad, Telangana",
  "Ahmedabad, Gujarat",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
];

interface LocationSelectorProps {
  location?: string;
  onLocationChange?: (location: string) => void;
  variant?: "desktop" | "mobile";
}

export default function LocationSelector({
  location: externalLocation,
  onLocationChange,
  variant = "desktop",
}: LocationSelectorProps) {
  const [internalLocation, setInternalLocation] = useState("Mumbai, Maharashtra");
  const [isOpen, setIsOpen] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocation = externalLocation !== undefined ? externalLocation : internalLocation;

  const updateLocation = (newLoc: string) => {
    setInternalLocation(newLoc);
    onLocationChange?.(newLoc);
    setIsOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDetectLocation = () => {
    setIsDetecting(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsDetecting(false);
          updateLocation("Current Location (GPS)");
        },
        () => {
          setIsDetecting(false);
          updateLocation("Mumbai, Maharashtra");
        },
        { timeout: 5000 }
      );
    } else {
      setIsDetecting(false);
      updateLocation("Mumbai, Maharashtra");
    }
  };

  if (variant === "mobile") {
    return (
      <div className="w-full space-y-2">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
          Your Location
        </label>
        <div className="relative">
          <MapPin className="w-4 h-4 text-emerald-600 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={currentLocation}
            onChange={(e) => updateLocation(e.target.value)}
            placeholder="Enter your location / city..."
            className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {POPULAR_LOCATIONS.slice(0, 4).map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => updateLocation(city)}
              className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                currentLocation === city
                  ? "bg-emerald-600 text-white border-emerald-600 font-semibold"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:border-emerald-300"
              }`}
            >
              {city.split(",")[0]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex-1 min-w-0" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-3 py-1.5 text-left rounded-full hover:bg-emerald-50/60 transition-colors group cursor-pointer focus:outline-hidden"
      >
        <MapPin className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider leading-none">
            Location
          </p>
          <input
            type="text"
            value={currentLocation}
            onChange={(e) => updateLocation(e.target.value)}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            placeholder="Enter location..."
            className="w-full bg-transparent text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-hidden truncate"
          />
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-emerald-600" : ""
          }`}
        />
      </button>

      {/* Popover */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2.5 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 pb-2 mb-1 border-b border-gray-100">
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={isDetecting}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50/70 hover:bg-emerald-100 rounded-xl transition-colors text-left cursor-pointer disabled:opacity-50"
            >
              <Compass className={`w-4 h-4 text-emerald-600 ${isDetecting ? "animate-spin" : ""}`} />
              <span>{isDetecting ? "Detecting location..." : "Detect My Current Location"}</span>
            </button>
          </div>
          <div className="px-3.5 py-1">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Popular Cities
            </p>
            <div className="max-h-56 overflow-y-auto space-y-0.5">
              {POPULAR_LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => updateLocation(loc)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg text-left transition-colors cursor-pointer ${
                    currentLocation === loc
                      ? "bg-emerald-50 text-emerald-800 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="truncate">{loc}</span>
                  {currentLocation === loc && (
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
