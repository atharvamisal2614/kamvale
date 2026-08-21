"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  href: string;
  circleBg: string;
  svg: React.ReactNode;
}

const SERVICES_12: ServiceItem[] = [
  {
    id: "ac-repair",
    name: "AC Repair &\nService",
    href: "/services/ac-repair",
    circleBg: "bg-[#e8f4fc]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* AC Split Unit */}
        <rect x="6" y="14" width="36" height="18" rx="3" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
        <rect x="10" y="18" width="28" height="6" rx="1.5" fill="#e0f2fe" />
        <line x1="8" y1="28" x2="40" y2="28" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Cool Airflow */}
        <path d="M12 36 Q18 40 24 36 T36 36" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 1.5" />
        <path d="M14 41 Q20 45 26 41 T38 41" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 1.5" />
        {/* Frost flake */}
        <path d="M38 10 V14 M36 12 H40" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "electrician",
    name: "Electrician",
    href: "/services/electrician",
    circleBg: "bg-[#fef7da]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Plug head */}
        <path d="M16 18 H32 V28 C32 32.4 28.4 36 24 36 C19.6 36 16 32.4 16 28 V18 Z" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" />
        {/* Prongs */}
        <rect x="19" y="8" width="3" height="10" rx="1.5" fill="#ca8a04" />
        <rect x="26" y="8" width="3" height="10" rx="1.5" fill="#ca8a04" />
        {/* Cord */}
        <path d="M24 36 V42" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
        {/* Lightning Energy */}
        <path d="M25 17 L20 26 H26 L22 34 L30 24 H24 L27 17 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    id: "plumbing",
    name: "Plumbing",
    href: "/services/plumbing",
    circleBg: "bg-[#e3f4fc]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Water Tap / Faucet */}
        <path d="M12 28 H20 V18 C20 12.5 24.5 8 30 8 C35.5 8 40 12.5 40 18 V22 H34 V18 C34 15.8 32.2 14 30 14 C27.8 14 26 15.8 26 18 V28 H34" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Valve Knob */}
        <rect x="14" y="10" width="10" height="5" rx="1.5" fill="#0284c7" />
        {/* Water Droplet */}
        <path d="M37 28 C37 24 33 19 33 19 C33 19 29 24 29 28 C29 30.2 30.8 32 33 32 C35.2 32 37 30.2 37 28 Z" fill="#0284c7" />
        <circle cx="32" cy="27" r="0.8" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: "cleaning",
    name: "Deep Cleaning",
    href: "/services/cleaning",
    circleBg: "bg-[#e7f7ed]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Spray Bottle */}
        <rect x="18" y="20" width="14" height="20" rx="3" fill="#ffffff" stroke="#059669" strokeWidth="2" />
        <path d="M21 20 V15 H29 V20" fill="#a7f3d0" />
        <path d="M19 15 H31 L34 10 H22 Z" fill="#059669" />
        <path d="M31 13 L36 18" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        {/* Bubbles & Sparkle */}
        <circle cx="36" cy="26" r="3" fill="#6ee7b7" />
        <circle cx="34" cy="35" r="2" fill="#a7f3d0" />
        <path d="M38 12 L39 15 L42 16 L39 17 L38 20 L37 17 L34 16 L37 15 Z" fill="#facc15" />
      </svg>
    ),
  },
  {
    id: "painting",
    name: "Painting",
    href: "/services/painting",
    circleBg: "bg-[#f3e8ff]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Paint Roller Frame */}
        <rect x="12" y="10" width="22" height="10" rx="3" fill="#7c3aed" stroke="#6d28d9" strokeWidth="1.5" />
        <path d="M34 15 H38 V26 H26 V36" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="23.5" y="32" width="5" height="9" rx="1.5" fill="#d97706" />
        {/* Paint drips & Paint Can */}
        <path d="M15 20 V26" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
        <rect x="30" y="27" width="10" height="12" rx="2" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.5" />
        <path d="M32 30 H38" stroke="#a855f7" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "carpentry",
    name: "Carpentry",
    href: "/services/carpentry",
    circleBg: "bg-[#fef0dd]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Hand Plane & Wood Block */}
        <rect x="10" y="32" width="28" height="8" rx="2" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
        <path d="M14 24 L34 12 V24 H14 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        <rect x="10" y="22" width="6" height="10" rx="1" fill="#92400e" />
        {/* Wood shavings curl */}
        <path d="M26 24 C28 20 32 20 33 23" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "pest-control",
    name: "Pest Control",
    href: "/services/pest-control",
    circleBg: "bg-[#fde9eb]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield outline */}
        <path d="M24 8 L38 14 V26 C38 35 24 41 24 41 C24 41 10 35 10 26 V14 L24 8 Z" fill="#ffffff" stroke="#e11d48" strokeWidth="2" />
        {/* Red Bug / Pest Silhouette */}
        <ellipse cx="24" cy="25" rx="5" ry="7" fill="#e11d48" />
        <circle cx="24" cy="17" r="3" fill="#be123c" />
        <path d="M16 23 L20 24 M16 27 L20 26 M32 23 L28 24 M32 27 L28 26" stroke="#be123c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "chimney-kitchen",
    name: "Kitchen &\nChimney",
    href: "/services/chimney-kitchen",
    circleBg: "bg-[#eef2f6]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chimney Hood */}
        <rect x="20" y="8" width="8" height="10" fill="#64748b" />
        <path d="M12 18 L36 18 L40 29 H8 Z" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
        <rect x="10" y="29" width="28" height="3" rx="1" fill="#0f172a" />
        {/* Suction waves */}
        <path d="M18 36 C18 34 20 33 21 35 C22 37 24 37 24 35" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 36 C24 34 26 33 27 35 C28 37 30 37 30 35" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "appliance-repair",
    name: "Appliance Repair",
    href: "/services/appliance-repair",
    circleBg: "bg-[#eaf0fc]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Washing Machine */}
        <rect x="12" y="10" width="24" height="30" rx="3.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
        <rect x="16" y="13" width="8" height="3" rx="1" fill="#93c5fd" />
        <circle cx="31" cy="15" r="1.5" fill="#2563eb" />
        {/* Drum Door */}
        <circle cx="24" cy="27" r="8" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" />
        <circle cx="24" cy="27" r="5" fill="#3b82f6" />
        <path d="M20 28 Q22 25 24 28 T28 28" stroke="#dbeafe" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "water-purifier",
    name: "Water Purifier\n(RO)",
    href: "/services/water-purifier",
    circleBg: "bg-[#e5f4fb]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* RO Purifier Box */}
        <rect x="15" y="10" width="18" height="28" rx="4" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
        <rect x="18" y="16" width="12" height="14" rx="2" fill="#e0f2fe" />
        <path d="M19 25 C21 23 27 25 29 24 V29 H19 Z" fill="#0284c7" />
        {/* Dispenser tap & drop */}
        <path d="M24 31 V35" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="38" r="1.2" fill="#0284c7" />
      </svg>
    ),
  },
  {
    id: "salon-spa",
    name: "Salon & Spa",
    href: "/services/salon-spa",
    circleBg: "bg-[#fce7f3]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Comb */}
        <rect x="14" y="14" width="20" height="4" rx="1" fill="#db2777" />
        <line x1="16" y1="18" x2="16" y2="24" stroke="#db2777" strokeWidth="1.5" />
        <line x1="20" y1="18" x2="20" y2="24" stroke="#db2777" strokeWidth="1.5" />
        <line x1="24" y1="18" x2="24" y2="24" stroke="#db2777" strokeWidth="1.5" />
        <line x1="28" y1="18" x2="28" y2="24" stroke="#db2777" strokeWidth="1.5" />
        <line x1="32" y1="18" x2="32" y2="24" stroke="#db2777" strokeWidth="1.5" />
        {/* Scissors */}
        <path d="M22 38 L32 26 M32 38 L22 26" stroke="#be185d" strokeWidth="2" strokeLinecap="round" />
        <circle cx="21" cy="39" r="2" stroke="#be185d" strokeWidth="1.5" />
        <circle cx="33" cy="39" r="2" stroke="#be185d" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "cctv-security",
    name: "CCTV & Security",
    href: "/services/cctv-security",
    circleBg: "bg-[#f1f5f9]",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mount Stand */}
        <path d="M12 18 H22 V24" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        {/* Camera Body */}
        <rect x="18" y="18" width="20" height="12" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
        {/* Lens */}
        <circle cx="34" cy="24" r="4.5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.2" />
        <circle cx="34" cy="24" r="2" fill="#0369a1" />
        <circle cx="22" cy="22" r="1" fill="#ef4444" />
        {/* WiFi Signal */}
        <path d="M30 12 Q34 10 38 12" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 8 Q34 5 40 8" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full pt-2 pb-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER (CENTERED ON MOBILE) ================= */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between text-center sm:text-left gap-3 pb-4 mb-6 sm:mb-8">
          <div>
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                Expert Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 font-normal">
              Choose from our wide range of home services
            </p>
          </div>

          {/* View All Services Link */}
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-800 hover:text-emerald-900 transition-colors"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ================= 12 SERVICE CARDS (6 IN A ROW) ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-5">
          {SERVICES_12.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-2xl border border-gray-100/90 shadow-2xs hover:shadow-md p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200"
            >
              {/* Circular Pastel Backdrop for Illustration */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200 ${service.circleBg}`}
              >
                {service.svg}
              </div>

              {/* Service Label */}
              <span className="text-xs sm:text-[13px] font-medium text-gray-700 group-hover:text-emerald-800 transition-colors leading-snug whitespace-pre-line">
                {service.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
