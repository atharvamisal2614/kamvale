import React from "react";
import HeroSection from "./UsersComponents/HeroSection";
import ServicesGrid from "./UsersComponents/ServicesGrid";
import TrustBar from "./UsersComponents/TrustBar";
import ProviderCTA from "./UsersComponents/ProviderCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section with scattered tool SVGs bg + search */}
      <HeroSection />

      {/* 2. Expert Services Grid - 12 services, 6 in a row */}
      <ServicesGrid />

      {/* 3. Trust & Quality 4-point guarantee bar */}
      <TrustBar />

      {/* 4. Are you a skilled professional? CTA Card */}
      <ProviderCTA />
    </main>
  );
}
