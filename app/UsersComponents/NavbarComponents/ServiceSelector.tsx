"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  ChevronDown,
  Search,
  Wrench,
  Zap,
  Droplets,
  Paintbrush,
  ShieldCheck,
  Hammer,
  Wind,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | null;
}

export const POPULAR_SERVICES: ServiceItem[] = [
  { id: "all", name: "All Services", category: "General", icon: Sparkles, badge: "Popular" },
  { id: "cleaning", name: "Home Deep Cleaning", category: "Cleaning", icon: Sparkles, badge: "Fast" },
  { id: "ac-repair", name: "AC & Appliance Repair", category: "Appliances", icon: Wind, badge: "Warranty" },
  { id: "electrician", name: "Electrician Services", category: "Repairs", icon: Zap, badge: "Verified" },
  { id: "plumbing", name: "Plumbing Services", category: "Repairs", icon: Droplets, badge: "Top Rated" },
  { id: "painting", name: "Painting & Waterproofing", category: "Home Improvement", icon: Paintbrush, badge: "Best Value" },
  { id: "carpentry", name: "Carpentry & Furniture", category: "Repairs", icon: Hammer, badge: null },
  { id: "pest-control", name: "Pest Control", category: "Cleaning", icon: ShieldCheck, badge: "Safe" },
];

interface ServiceSelectorProps {
  selectedService?: string;
  onSelectService?: (serviceName: string) => void;
  variant?: "desktop" | "mobile";
}

export default function ServiceSelector({
  selectedService: externalService,
  onSelectService,
  variant = "desktop",
}: ServiceSelectorProps) {
  const [internalService, setInternalService] = useState("Select Service");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentService = externalService !== undefined ? externalService : internalService;

  const selectService = (serviceName: string) => {
    setInternalService(serviceName);
    onSelectService?.(serviceName);
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredServices = POPULAR_SERVICES.filter((svc) =>
    svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    svc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (variant === "mobile") {
    return (
      <div className="w-full space-y-2">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
          Select Service
        </label>
        <div className="grid grid-cols-2 gap-2">
          {POPULAR_SERVICES.map((svc) => {
            const Icon = svc.icon;
            const isSelected = currentService === svc.name;
            return (
              <button
                key={svc.id}
                type="button"
                onClick={() => selectService(svc.name)}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold shadow-xs"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{svc.name}</span>
              </button>
            );
          })}
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
        <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider leading-none">
            Services
          </p>
          <span
            className={`block text-sm font-medium truncate ${
              currentService === "Select Service"
                ? "text-gray-500"
                : "text-gray-900 font-semibold"
            }`}
          >
            {currentService}
          </span>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-emerald-600" : ""
          }`}
        />
      </button>

      {/* Popover */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2.5 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3.5 pb-2.5 border-b border-gray-100">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any service..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="px-2 py-1 max-h-64 overflow-y-auto space-y-1">
            {filteredServices.length > 0 ? (
              filteredServices.map((svc) => {
                const Icon = svc.icon;
                const isSelected = currentService === svc.name;
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => selectService(svc.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-emerald-50 text-emerald-900 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-emerald-600 text-white"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-medium block truncate">{svc.name}</span>
                        <span className="text-[10px] text-gray-400 block">{svc.category}</span>
                      </div>
                    </div>
                    {svc.badge && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0 ml-1">
                        {svc.badge}
                      </span>
                    )}
                  </button>
                );
              })
            ) : (
              <p className="text-xs text-gray-400 text-center py-4">No services found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
