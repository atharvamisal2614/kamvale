"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8faf9] border-t border-gray-200/80 text-gray-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-200/80">
          
          {/* Brand Column (Col Span 2 on large) */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-hidden inline-flex">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">
                  Kamvale
                </span>
                <span className="text-[10px] text-gray-400 font-normal tracking-wide mt-0.5">
                  Verified Home Services
                </span>
              </div>
            </Link>

            {/* Punchline */}
            <p className="text-gray-500 max-w-sm text-xs leading-relaxed font-normal">
              Kamvale — Connecting homeowners with verified professionals and trusted home experts right at your doorstep.
            </p>

            {/* Contact details */}
            <div className="space-y-2 pt-2 text-gray-500 font-normal">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>support@kamvale.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>+91 (0) 800-KAMVALE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2 font-normal">
              <li>
                <Link href="/services/ac-repair" className="hover:text-emerald-700 transition-colors">
                  AC Repair & Service
                </Link>
              </li>
              <li>
                <Link href="/services/electrician" className="hover:text-emerald-700 transition-colors">
                  Electrician Services
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="hover:text-emerald-700 transition-colors">
                  Plumbing Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning" className="hover:text-emerald-700 transition-colors">
                  Home Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="hover:text-emerald-700 transition-colors">
                  Painting & Waterproofing
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry" className="hover:text-emerald-700 transition-colors">
                  Carpentry Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 font-normal">
              <li>
                <Link href="/about" className="hover:text-emerald-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-emerald-700 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-emerald-700 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-emerald-700 transition-colors">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-700 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: For Professionals */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              For Experts
            </h4>
            <ul className="space-y-2 font-normal">
              <li>
                <Link href="/become-a-provider" className="hover:text-emerald-700 transition-colors text-emerald-800 font-medium">
                  Join as a Service Pro
                </Link>
              </li>
              <li>
                <Link href="/partner-portal" className="hover:text-emerald-700 transition-colors">
                  Partner Portal
                </Link>
              </li>
              <li>
                <Link href="/partner-guidelines" className="hover:text-emerald-700 transition-colors">
                  Quality Guidelines
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-emerald-700 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-emerald-700 transition-colors">
                  Safety & Verification
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 font-normal">
          <p>
            &copy; 2026 Kamvale. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-gray-900 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
