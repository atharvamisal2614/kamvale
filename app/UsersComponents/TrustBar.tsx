"use client";

import React from "react";
import { ShieldCheck, IndianRupee, Clock, Headphones, Sparkles, CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  const points = [
    {
      title: "Background Verified",
      badge: "100% Safe",
      desc: "All professionals are police & background checked",
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Upfront Pricing",
      badge: "Zero Surprises",
      desc: "Fixed quotes with no hidden platform fees",
      accentBg: "bg-amber-50 text-amber-700 border-amber-200",
      icon: <IndianRupee className="w-5 h-5" />,
    },
    {
      title: "On-Time Guarantee",
      badge: "Guaranteed Slot",
      desc: "We value your schedule and stick to exact timings",
      accentBg: "bg-sky-50 text-sky-700 border-sky-200",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      title: "24/7 Support",
      badge: "Always Here",
      desc: "Post-service warranty & instant query resolution",
      accentBg: "bg-purple-50 text-purple-700 border-purple-200",
      icon: <Headphones className="w-5 h-5" />,
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with modern 4 cards layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {points.map((pt) => (
            <div
              key={pt.title}
              className="relative p-5 rounded-2xl bg-gray-50/70 hover:bg-white border border-gray-200/80 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between mb-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform ${pt.accentBg}`}
                  >
                    {pt.icon}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600 shadow-2xs">
                    {pt.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-800 transition-colors">
                  {pt.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-gray-500 font-normal mt-1 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
