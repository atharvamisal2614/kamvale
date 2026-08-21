"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserPlus, Menu } from "lucide-react";
import CartButton from "./NavbarComponents/CartButton";
import UserMenu from "./NavbarComponents/UserMenu";
import MobileDrawer from "./NavbarComponents/MobileDrawer";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/60"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">

            {/* LEFT: Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-hidden shrink-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">
                  Kamvale
                </span>
                <span className="text-[10px] text-gray-400 font-normal tracking-wide">
                  Verified Home Services
                </span>
              </div>
            </Link>

            {/* RIGHT: CTA + Cart + Account */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Become a Service Provider CTA */}
              <Link
                href="/become-a-provider"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white text-xs font-medium transition-all duration-200 cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Become a Service Provider</span>
              </Link>

              {/* Cart */}
              <CartButton />

              {/* Account (Desktop) */}
              <div className="hidden sm:block">
                <UserMenu />
              </div>

              {/* Mobile Menu */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        location="Mumbai, Maharashtra"
        onLocationChange={() => {}}
        selectedService="Select Service"
        onSelectService={() => {}}
      />
    </>
  );
}
