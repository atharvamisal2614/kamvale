"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function ProviderCTA() {
  return (
    <section className="w-full py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-lg">
          
          {/* Subtle Background Radial Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-green-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Copy & Value Proposition */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs font-medium backdrop-blur-xs">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Partner with Kamvale</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Are you a skilled professional?
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed font-normal mx-auto lg:mx-0">
                Elevate your business by joining Kamvale as a Service Expert. Highlight your expertise, engage with homeowners, and expand your reach. Become a member now!
              </p>

              {/* Micro Benefits Row */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-emerald-200/90 font-normal">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-300" />
                  Regular Job Leads
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  Zero Platform Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-300" />
                  Direct Customer Connect
                </span>
              </div>
            </div>

            {/* Right Column: CTA Button */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Link
                href="/become-a-provider"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-emerald-50 text-emerald-900 font-semibold text-sm shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Join as a Partner</span>
                <ArrowRight className="w-4 h-4 text-emerald-800 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
