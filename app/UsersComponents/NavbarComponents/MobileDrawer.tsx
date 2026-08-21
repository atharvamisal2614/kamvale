"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  MapPin,
  Search,
  Sparkles,
  Briefcase,
  User,
  Calendar,
  HelpCircle,
  LogIn,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { POPULAR_LOCATIONS } from "./LocationSelector";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  location: string;
  onLocationChange: (loc: string) => void;
  selectedService: string;
  onSelectService: (svc: string) => void;
}

const SERVICE_QUICK_LINKS = [
  { name: "AC & Appliances", tag: "Fast", href: "#services" },
  { name: "Electrician", tag: "Verified", href: "#services" },
  { name: "Plumbing", tag: "Top Rated", href: "#services" },
  { name: "Deep Cleaning", tag: "Popular", href: "#services" },
  { name: "Painting", tag: "Best Value", href: "#services" },
  { name: "Carpentry", tag: null, href: "#services" },
];

export default function MobileDrawer({
  isOpen,
  onClose,
  location,
  onLocationChange,
  selectedService,
  onSelectService,
}: MobileDrawerProps) {
  const [isChangingLocation, setIsChangingLocation] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-[85%] bg-white shadow-2xl flex flex-col justify-between z-50 animate-in slide-in-from-right duration-200">
        
        {/* Top Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-emerald-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-medium shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-gray-900">Kamvale</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 text-sm">
          
          {/* Current Location Pill */}
          <div className="bg-gray-50 p-3 rounded-2xl border border-gray-200/80">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Current City
              </span>
              <button
                type="button"
                onClick={() => setIsChangingLocation(!isChangingLocation)}
                className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
              >
                {isChangingLocation ? "Done" : "Change"}
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{location}</span>
            </div>

            {/* Quick City Dropdown when changing */}
            {isChangingLocation && (
              <div className="mt-3 pt-2 border-t border-gray-200 grid grid-cols-2 gap-1.5">
                {POPULAR_LOCATIONS.slice(0, 6).map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      onLocationChange(city);
                      setIsChangingLocation(false);
                    }}
                    className={`px-2 py-1.5 rounded-lg text-xs text-left truncate transition-colors cursor-pointer ${
                      location === city
                        ? "bg-emerald-600 text-white font-medium"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    {city.split(",")[0]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Popular Services Quick Menu */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Popular Services
            </p>
            <div className="space-y-1">
              {SERVICE_QUICK_LINKS.map((svc) => (
                <a
                  key={svc.name}
                  href={svc.href}
                  onClick={() => {
                    onSelectService(svc.name);
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 text-gray-800 font-medium transition-colors"
                >
                  <span>{svc.name}</span>
                  {svc.tag ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {svc.tag}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Account Quick Links */}
          <div className="pt-2 border-t border-gray-100 space-y-1">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Account & Help
            </p>
            <Link
              href="/auth/login"
              onClick={onClose}
              className="flex items-center gap-3 p-2.5 rounded-xl text-gray-800 hover:bg-gray-50 font-medium"
            >
              <LogIn className="w-4 h-4 text-emerald-600" />
              <span>Login / Sign Up</span>
            </Link>
            <Link
              href="/bookings"
              onClick={onClose}
              className="flex items-center gap-3 p-2.5 rounded-xl text-gray-800 hover:bg-gray-50 font-medium"
            >
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>My Bookings</span>
            </Link>
            <Link
              href="/help"
              onClick={onClose}
              className="flex items-center gap-3 p-2.5 rounded-xl text-gray-800 hover:bg-gray-50 font-medium"
            >
              <HelpCircle className="w-4 h-4 text-gray-500" />
              <span>Help & Support</span>
            </Link>
          </div>
        </div>

        {/* Bottom Partner Card */}
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <Link
            href="/become-a-provider"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
          >
            <Briefcase className="w-4 h-4" />
            <span>Become a Service Provider</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
