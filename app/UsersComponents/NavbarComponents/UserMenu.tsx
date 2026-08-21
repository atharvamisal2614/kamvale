"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User, ChevronDown, Calendar, HelpCircle, Briefcase, LogIn, Settings } from "lucide-react";

interface UserMenuProps {
  user?: {
    name: string;
    phoneOrEmail?: string;
    isLoggedIn: boolean;
  } | null;
}

export default function UserMenu({ user = null }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/70 border border-gray-200 hover:border-emerald-300 rounded-full transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 cursor-pointer"
        aria-label="User account menu"
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
          <User className="w-4 h-4" />
        </div>
        <span className="hidden sm:inline text-xs font-medium text-gray-700">
          {user?.isLoggedIn ? user.name : "Account"}
        </span>
        <ChevronDown
          className={`hidden sm:inline w-3 h-3 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-emerald-600" : ""
          }`}
        />
      </button>

      {/* User Account Popover */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-4 py-2.5 border-b border-gray-100">
            {user?.isLoggedIn ? (
              <div>
                <p className="text-xs font-semibold text-gray-900">{user.name}</p>
                <p className="text-[11px] text-gray-500 truncate">{user.phoneOrEmail}</p>
              </div>
            ) : (
              <div>
                <p className="text-xs font-semibold text-gray-900">Welcome to Kamvale</p>
                <p className="text-[11px] text-gray-500 truncate">Book verified home services</p>
              </div>
            )}
          </div>

          <div className="py-1">
            {!user?.isLoggedIn ? (
              <Link
                href="/auth/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login / Sign Up</span>
              </Link>
            ) : (
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Settings className="w-3.5 h-3.5 text-gray-400" />
                <span>My Profile</span>
              </Link>
            )}

            <Link
              href="/bookings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>My Bookings</span>
            </Link>
            
            <Link
              href="/help"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
              <span>Help & Support</span>
            </Link>
          </div>

          <div className="pt-1 mt-1 border-t border-gray-100">
            <Link
              href="/become-a-provider"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Register as Partner</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
