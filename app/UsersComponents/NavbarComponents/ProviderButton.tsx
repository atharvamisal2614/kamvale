"use client";

import React from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";

interface ProviderButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function ProviderButton({ className = "", onClick }: ProviderButtonProps) {
  return (
    <>
      {/* Desktop Version */}
      <Link
        href="/become-a-provider"
        onClick={onClick}
        className={`hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-emerald-700 bg-emerald-50/80 hover:bg-emerald-600 hover:text-white border border-emerald-300/80 hover:border-emerald-600 rounded-full shadow-xs hover:shadow-md hover:shadow-emerald-600/20 active:scale-95 transition-all duration-200 cursor-pointer ${className}`}
      >
        <Briefcase className="w-4 h-4 shrink-0" />
        <span>Join as a Service Provider</span>
      </Link>

      {/* Tablet Version */}
      <Link
        href="/become-a-provider"
        onClick={onClick}
        title="Join as a Service Provider"
        className={`hidden md:inline-flex lg:hidden items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-300 rounded-full hover:bg-emerald-600 hover:text-white transition-all cursor-pointer ${className}`}
      >
        <Briefcase className="w-3.5 h-3.5 shrink-0" />
        <span>Partner</span>
      </Link>
    </>
  );
}
